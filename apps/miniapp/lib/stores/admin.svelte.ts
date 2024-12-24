import type { KyInstance } from "ky";
import { getContext as getSvelteContext, setContext as setSvelteContext } from "svelte";

class Admin {
    #_ = $state();
    api = $state() as KyInstance;
    isAdmin = $state.raw(false);

    constructor() {
        $effect.root(() => {
            $effect(() => {
                if(this.isAdmin) document.body.dataset.admin = '';
                else document.body.removeAttribute('data-admin');
            })
        })
    }

    init = (miniapp: App.MiniApp) => {
        if(!this.isAdmin) return;

        // if(miniapp.fullscreen.available) this.#adminButtonLogic(miniapp);
    }

    #adminButtonLogic = (miniapp: App.MiniApp) => {
        miniapp.secondaryButtonParams = {
            text: 'Панель',
            is_active: true,
            is_visible: true,
            position: 'left',
        }
    }
}


export const
    ADMIN_KEY = Symbol('ADMIN_KEY'),
    setContext = () => setSvelteContext(ADMIN_KEY, new Admin()),
    getContext =  (): ReturnType<typeof setContext> => getSvelteContext(ADMIN_KEY);
