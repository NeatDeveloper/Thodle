import { setContext as setSvelteContext, getContext as getSvelteContext } from "svelte";

export interface Select {
    current: string;
    currentElem?: HTMLElement;
    selectElem?: HTMLElement;
    selectRect?: DOMRect;
    elemRect?: DOMRect;
    selectObzerver?: ResizeObserver;
    elemObzerver?: ResizeObserver;
}

class Context {
    _ = $state<Select>({
        current: '',
    });

    sizeObserver = (elem?: HTMLElement, select = false) => {
        if (!elem) return;

        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (select) this._.selectRect = entry.target.getBoundingClientRect();
                else this._.elemRect = entry.target.getBoundingClientRect();
            }
        });

        observer.observe(elem);

        if (select) this._.selectObzerver = observer;
        else this._.elemObzerver = observer;
    }

    constructor() {
        $effect(() => {
            this._.current;

            if (this._.selectElem) this.sizeObserver(this._.selectElem, true);

            if (this._.currentElem) this.sizeObserver(this._.currentElem, false);
        });
    }

    onupdate = async (key: string) => { }
}


export const
    KEY = Symbol('SELECT_CONTEXT'),
    setContext = () => setSvelteContext(KEY, new Context()),
    getContext = (): ReturnType<typeof setContext> => getSvelteContext(KEY);
