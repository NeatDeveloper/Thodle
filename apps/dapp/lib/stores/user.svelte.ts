import type { KyInstance } from "ky";
import type { Page } from "@sveltejs/kit";
import { getContext as getSvelteContext, setContext as setSvelteContext } from "svelte";
import { beforeNavigate } from "$app/navigation";

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

    toggleFullscreen = async (status: boolean) => {
        const response = await this.api.patch('student/settings', {
            json: {
                miniapp: {
                    fullscreen: status
                }
            },
        });

        if (response.status !== 200) status = !status;

        this.#_.settings.miniapp.fullscreen = status;

        return status;
    }
    toggleRounded = async (status: boolean) => {
        const response = await this.api.patch('student/settings', {
            json: {
                miniapp: {
                    rounded: status
                }
            },
        });

        if (response.status !== 200) status = !status;

        this.#_.settings.miniapp.rounded = status;

        return status;
    }
    toggleRoundedSettings = async (status: boolean) => {
        const response = await this.api.patch('student/settings', {
            json: {
                miniapp: {
                    roundedSettings: status
                }
            },
        });

        if (response.status !== 200) status = !status;

        this.#_.settings.miniapp.roundedSettings = status;

        return status;
    }

    toggleMailingPossible = async (active: boolean) => {
        const response = await this.api.patch('student/settings', {
            json: {
                mailing: {
                    isPossible: active
                }
            },
        });

        if (response.status !== 200) active = !active;

        this.#_.settings.mailing.isPossible = active;

        return active;
    }

    updateTheme = async (theme: string, schema: string) => {
        const response = await this.api.patch('student/settings', {
            json: {
                miniapp: {
                    theme, schema
                }
            }
        })

        if (response.status === 200) {
            this.user.settings.miniapp.theme = theme;
            this.user.settings.miniapp.schema = schema;

            return true;
        }

        return false;
    }

    updateToastsPosition = async (position: string) => {
        const response = await this.api.patch('student/settings', {
            json: {
                miniapp: {
                    toastPosition: position
                }
            }
        })

        if (response.status === 200) {
            this.user.settings.miniapp.toastPosition = position as 'T';

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
