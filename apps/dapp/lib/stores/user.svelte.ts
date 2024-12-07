import type { KyInstance } from "ky";
import type { Page } from "@sveltejs/kit";
import { getContext as getSvelteContext, setContext as setSvelteContext } from "svelte";
import { beforeNavigate } from "$app/navigation";
import type { SettingsSchema, SettingsRequest } from '@repo/schemas';

class User {
    api = $state() as KyInstance;
    #_ = $state() as DB.User.MiniApp;
    page = $state() as Page;
    user = $derived(this.#_);
    isReady = $state.raw(false);

    constructor() {
        $effect.root(() => {
            $inspect(this.#_);
        });

        beforeNavigate(async nav => {
            if(nav.to?.url.pathname === '/settings') {
                await this.getSettings();
            }
        })
    }

    onready = async () => { }

    init = async () => {
        const response = await this.api.get('student/me');

        if (response.status === 200) {
            this.#_ = await response.json();
            this.isReady = true;
            this.#setProperties([]);
            await this.onready();
        }
    }

    onUpdateSettings = () => {}

    getSettings = async () => {
        const response = await this.api.get('student/settings');

        if(response.status === 200) {
            this.#_.settings = await response.json();
            this.onUpdateSettings()
        }
    }

    updateSettings = async <T extends SettingsSchema>(update: T) => {
        const response = await this.api.patch<SettingsRequest>('student/settings', {
            json: update
        });

        if(response.status === 200) {
            const data = await response.json();

            if(data.miniapp) this.#_.settings.miniapp = data.miniapp;
            if(data.mailing) this.#_.settings.mailing = data.mailing;
            if(data.schedule) this.#_.settings.schedule = data.schedule;

            return true;
        }

        return false;
    }

    #setProperties = (omit: (keyof DB.User.MiniApp)[]) => {
        for (const key in this.#_) {
            if (!omit.includes(key as keyof DB.User.MiniApp)) {
                Object.defineProperty(this, key, {
                    get() {
                        return this.#_[key];
                    }
                })
            }
        }
    }
}


export const
    USER_KEY = Symbol('USER_KEY'),
    setContext = () => setSvelteContext(USER_KEY, new User() as User & DB.User.MiniApp),
    getContext = (): ReturnType<typeof setContext> => getSvelteContext(USER_KEY);
