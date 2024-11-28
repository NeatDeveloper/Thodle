import { browser } from "$app/environment";
import { getContext, setContext } from "svelte";
import { SvelteMap } from "svelte/reactivity";

type QueueCallback = () => any;

class MiniApp {
    #_ = $state() as Telegram;

    isLoad = $state.raw(false);

    mobPlatforms = ['android', 'ios']

    constructor() {
        if(browser) {
            if(window.Telegram.WebApp) {
                this.#_ = window.Telegram;

                this.#setup();

                this.isLoad = true;
            }
        }


        $effect.root(() => {
            $effect(() => {
                document.body.dataset.colorScheme = this.#_.WebApp.colorScheme
                document.body.dataset.theme = 'default'
            });

            $effect(() => {
                this.#queue;

                if(this.isLoad) this.#lounchingPendings();
            })
        })
    }

    #setup = () => {
        if(this.#_.WebApp.isVerticalSwipesEnabled) this.#_.WebApp.disableVerticalSwipes();
        if(!this.#_.WebApp.isExpanded) this.#_.WebApp.expand();
        this.#_.WebApp.ready();

        this.#setProperties([]);

        if(this.mobPlatforms.includes(this.#_.WebApp.platform) && +this.#_.WebApp.version >= 8.0 && !this.#_.WebApp.isFullscreen) {
            this.#_.WebApp.requestFullscreen();
        }
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

    get SecondaryButton() {
        return this.#_.WebApp.SecondaryButton;
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
    setMiniAppContext = () => setContext(MINIAPP_KEY, new MiniApp() as MiniApp & Telegram),
    getMiniAppContext = (): ReturnType<typeof setMiniAppContext> => getContext(MINIAPP_KEY);
