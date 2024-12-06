import { setContext as setSvelteContext, getContext as getSvelteContext } from "svelte";

export interface Select {
    current: string;
    list: {
        key: string;
        value: string;
    }[];
}

class Context {
    _ = $state<Select>({
        current: '',
        list: []
    });

    onupdate = async (key: string) => {}

    click = (key: string) => {
        this._.current = key;
        this.onupdate(key);
    }
}


export const
    KEY = Symbol('SELECT_CONTEXT'),
    setContext = () => setSvelteContext(KEY, new Context()),
    getContext = (): ReturnType<typeof setContext> => getSvelteContext(KEY);
