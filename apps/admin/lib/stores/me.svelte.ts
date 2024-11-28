import { getContext, setContext } from "svelte";

class Me {}

export const
    ME_KEY = Symbol('ME_KEY'),
    setMeContext = () => setContext(ME_KEY, new Me()),
    getMeContext = (): ReturnType<typeof setMeContext> => getContext(ME_KEY);
