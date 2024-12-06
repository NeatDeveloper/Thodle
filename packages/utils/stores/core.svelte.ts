import { getContext as getSvelteContext, setContext as setSvelteContext } from "svelte";
import { api } from '../other';
import type { Options } from "ky";


class Core<T> {
    app = $state() as T;
    meta = $state<Meta>();

    apiOptions = $state<Options>({})

    api = $derived(api({
        prefixUrl: this.meta?.apiURL
    }).extend(this.apiOptions))

    constructor(initAppData?: T) {
        if(initAppData) this.app = initAppData;
    }
}

export const
    CORE_KEY = Symbol('CORE_KEY'),
    setContext = <T>(initAppData?: T) => setSvelteContext(CORE_KEY, new Core<T>(initAppData)),
    getContext = <T>(): ReturnType<typeof setContext<T>> => getSvelteContext(CORE_KEY);


export interface Meta {
    name: string;
    apiURL: string;
}
