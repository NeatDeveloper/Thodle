import { getContext, setContext } from "svelte";

class User {
    #_ = $state();
}


export const
    USER_KEY = Symbol('USER_KEY'),
    setUserContext = () => setContext(USER_KEY, new User()),
    getUserContext =  (): ReturnType<typeof setUserContext> => getContext(USER_KEY);
