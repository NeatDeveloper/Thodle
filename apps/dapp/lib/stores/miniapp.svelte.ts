import { getContext, setContext } from "svelte";
import { SvelteMap } from "svelte/reactivity";

type QueueCallback = () => any;

class MiniApp {
    #_ = $state() as Telegram;

    isLoad = $state.raw(false);

    mobPlatforms = ['android', 'ios']

    constructor() {
        if(window.Telegram.WebApp) {
            this.#_ = window.Telegram;
            this.#_.WebApp.disableVerticalSwipes();
            this.#_.WebApp.ready();
            this.#_.WebApp.expand();

            this.isLoad = true;

            this.#setProperties([]);

            if(this.mobPlatforms.includes(this.#_.WebApp.platform)) {
                this.#_.WebApp.Gyroscope.start({ refresh_rate: 20 })
            }

        }


        $effect.root(() => {
            $effect(() => {
                this.#queue;

                if(this.isLoad) {
                    this.#lounchingPendings()
                }
            })
        })
    }

    #queue = new SvelteMap<string, QueueCallback>();

    onmount = (callback: QueueCallback) => {
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
