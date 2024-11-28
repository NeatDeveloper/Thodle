import { getContext, setContext } from "svelte";
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
    setCoreContext = <T>(initAppData?: T) => setContext(CORE_KEY, new Core<T>(initAppData)),
    getCoreContext = <T>(): ReturnType<typeof setCoreContext<T>> => getContext(CORE_KEY);


export interface Meta {
    name: string;
    apiURL: string;
}
