import type { KyInstance } from "ky";
import type { Page } from "@sveltejs/kit";
import { getContext as getSvelteContext, setContext as setSvelteContext } from "svelte";
import type { SettingsSchema, SettingsObject } from '@repo/schemas';

class User {
    api = $state() as KyInstance;
    #_ = $state() as DB.User.DTO;
    page = $state() as Page;
    user = $derived(this.#_);
    isReady = $state.raw(false);

    constructor() {
        $effect.root(() => {
            $inspect(this.#_);
        });
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

    updateSettings = async <T extends SettingsSchema>(update: T): Promise<T | null> => {
        const response = await this.api.patch<Partial<SettingsObject>>('student/settings', {
            json: update
        });

        if(response.status === 200) {
            const data = await response.json<T>();

            this.#_.settings = {
                ...this.#_.settings,
                ...data
            };

            this.onUpdateSettings()

            return data;
        }

        return null;
    }

    #setProperties = (omit: (keyof DB.User.DTO)[]) => {
        for (const key in this.#_) {
            if (!omit.includes(key as keyof DB.User.DTO)) {
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
    setContext = () => setSvelteContext(USER_KEY, new User() as User & DB.User.DTO),
    getContext = (): ReturnType<typeof setContext> => getSvelteContext(USER_KEY);
