import type { KyInstance } from "ky";
import { getContext, setContext } from "svelte";

class User {
    #_ = $state();
    api = $state() as KyInstance;
    user = $state();

    constructor() {}

    init = async () => {
        const response = await this.api.get('student');

        if(response.status === 200) this.user = await response.json()
    }
}


export const
    USER_KEY = Symbol('USER_KEY'),
    setUserContext = () => setContext(USER_KEY, new User()),
    getUserContext =  (): ReturnType<typeof setUserContext> => getContext(USER_KEY);
