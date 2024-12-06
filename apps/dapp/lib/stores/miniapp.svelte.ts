import { browser, dev } from "$app/environment";
import { beforeNavigate, goto } from "$app/navigation";
import type { Page } from "@sveltejs/kit";
import { getContext as getSvelteContext, setContext as setSvelteContext } from "svelte";
import { SvelteMap } from "svelte/reactivity";

type QueueCallback = () => any;

export class MiniApp {
    #_ = $state() as Telegram;

    isLoad = $state.raw(false);

    mobPlatforms = ['android', 'ios'];

    fullscreen = $state({
        active: false,
        available: false
    });

    page = $state() as Page;

    constructor() {
        if(browser) {
            if(window.Telegram.WebApp) {
                this.#_ = window.Telegram;

                this.#setup();

                this.isLoad = true;
            }
        }

        beforeNavigate(nav => {
            this.#_.WebApp.HapticFeedback.impactOccurred('rigid')
        })


        $effect.root(() => {

            $effect(() => {
                this.fullscreen;
                this.#updateSchema();
            });

            $effect(() => {
                if(this.fullscreen.active) document.documentElement.dataset.fullscreen = '';
                else document.documentElement.removeAttribute('data-fullscreen');
            });

            $effect(() => {
                if(this.mainButtonParams.is_visible || this.secondaryButtonParams.is_visible)
                    document.documentElement.dataset.buttonShow = '';
                else document.documentElement.removeAttribute('data-button-show');
            })

            $effect(() => {
                this.#queue;

                if(this.isLoad) this.#lounchingPendings();
            })
        })
    }

    #updateSchema = () => {
        if(this.#_.WebApp.colorScheme === 'dark') {
            document.documentElement.dataset.schemaDark = '';
            document.documentElement.removeAttribute('data-schema-light');
        } else {
            document.documentElement.dataset.schemaLight = '';
            document.documentElement.removeAttribute('data-schema-dark');
        }
    }

    #setup = () => {
        if(this.#_.WebApp.isVerticalSwipesEnabled) this.#_.WebApp.disableVerticalSwipes();

        // if(!this.#_.WebApp.isExpanded) this.#_.WebApp.expand();

        this.#_.WebApp.onEvent('themeChanged', this.#updateSchema);

        this.#_.WebApp.ready();

        this.#setProperties([]);

        this.fullscreen.active = this.#_.WebApp.isFullscreen;
        this.fullscreen.available = this.mobPlatforms.includes(this.#_.WebApp.platform) && +this.#_.WebApp.version >= 8.0;

        this.#setupMainButton(this.#_.WebApp.MainButton);
        this.#setupSettingsButton(this.#_.WebApp.SettingsButton);
        this.#setupSeondaryButton(this.#_.WebApp.SecondaryButton);
        this.#setupBackButton(this.#_.WebApp.BackButton);

        if(!dev) this.#_.WebApp.enableClosingConfirmation();
    }

    setFullscreen = (status: boolean) => {
        if(!this.fullscreen.available) return;

        if(status) this.#_.WebApp.requestFullscreen();
        else this.#_.WebApp.exitFullscreen();

        this.fullscreen.active = status;
    }

    toggleFullscreen = async (next: (status: boolean) => Promise<boolean>): Promise<boolean> => {
        if(!this.fullscreen.available) {
            return false;
        }

        if(this.fullscreen.active) {
            this.#_.WebApp.exitFullscreen();
            this.fullscreen.active = false;
        } else {
            this.#_.WebApp.requestFullscreen();
            this.fullscreen.active = true;
        }

        if(next) this.fullscreen.active = await next(this.fullscreen.active);

        this.onfullscreen();

        return true;
    }

    onfullscreen = () => {}

    mainButtonParams = $state<MainButtonParams>({});

    #setupMainButton = (button: Telegram['WebApp']['MainButton']) => {
        $effect(() => {
            this.mainButtonParams;
            button.setParams(this.mainButtonParams);
        });
    }

    #setupSettingsButton = (button: Telegram['WebApp']['SettingsButton']) => {
        button.onClick(() => goto('/settings'));
        button.show();
    }

    secondaryButtonParams = $state<MainButtonParams>({});

    #setupSeondaryButton = (button: Telegram['WebApp']['SecondaryButton']) => {
        $effect(() => {
            button.setParams(this.secondaryButtonParams);
        });
    }

    #setupBackButton = (button: Telegram['WebApp']['BackButton']) => {
        button.onClick(() => history.back());

        $effect(() => {
            if(this.page) {
                if(this.page.url.pathname != '/') button.show();
                else button.hide();
            }
        });
    }

    #queue = new SvelteMap<string, QueueCallback>();

    onready = (callback: QueueCallback) => {
        this.#queue.set(crypto.randomUUID(), callback);
    }

    #lounchingPendings = () => {
        for(const pender of this.#queue.entries()) {
            pender[1]();

            this.#queue.delete(pender[0]);
        }
    }

    get user() {
        return this.#_.WebApp.initDataUnsafe.user;
    }

    #setProperties = (omit: (keyof Telegram)[]) => {
        for(const key in this.#_) {
            if(!omit.includes(key as keyof Telegram)) {
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
    MINIAPP_KEY = Symbol('MINIAPP_KEY'),
    setContext = () => setSvelteContext(MINIAPP_KEY, new MiniApp() as MiniApp & Telegram),
    getContext = (): ReturnType<typeof setContext> => getSvelteContext(MINIAPP_KEY);
