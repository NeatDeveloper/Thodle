import { getContext, setContext } from "svelte";
import { api } from '@repo/utils/other';

class Core {
    #_ = $state();

    meta = $state<CORE.Meta>({
        apiURL: '',
        name: ''
    });

    api = $derived(api({
        prefixUrl: this.meta.apiURL
    }))

    constructor() {
        $inspect(this.meta)
    }
}

export const
    CORE_KEY = Symbol('CORE_KEY'),
    setCoreContext = () => setContext(CORE_KEY, new Core()),
    getCoreContext = (): ReturnType<typeof setCoreContext> => getContext(CORE_KEY);
