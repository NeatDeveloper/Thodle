import type { KyInstance } from "ky";
import { getContext as getSvelteContext, setContext as setSvelteContext } from "svelte";

class User {
    api = $state() as KyInstance;
    #_ = $state() as DB.User.MiniApp;
    user = $derived(this.#_);
    isReady = $state.raw(false);

    constructor() {
        $effect.root(() => {
            $inspect(this.#_)
        })
    }

    onready = async () => {}

    init = async () => {
        const response = await this.api.get('student/me');

        if(response.status === 200) {
            this.#_ = await response.json();
            this.isReady = true;
            this.#setProperties([]);
            await this.onready();
        }
    }

    toggleFullscreen = async (status: boolean) => {
        const response = await this.api.patch('student/settings', {
            json: { fullscreen: status },
        });

        if (response.status !== 200)  status = !status;

        this.#_.settings.fullscreen = status;

        return status;
    }

    updateTheme = async (theme: string, schema: string) => {
        const response = await this.api.patch('student/settings', {
            json: {
                theme: {
                    theme, schema
                }
            }
        })

        if(response.status === 200) return true;

        return false;
    }

    #setProperties = (omit: (keyof DB.User.MiniApp)[]) => {
        for(const key in this.#_) {
            if(!omit.includes(key as keyof DB.User.MiniApp)) {
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
    getContext =  (): ReturnType<typeof setContext> => getSvelteContext(USER_KEY);
