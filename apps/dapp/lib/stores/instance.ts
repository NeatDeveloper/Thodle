class Instance<T> {
    _ = $state() as T;
    constructor(omit: (keyof T)[]) {
        this.#setProperties(omit);
    }

    #setProperties = (omit: (keyof T)[]) => {
        for(const key in this._) {
            if(!omit.includes(key as keyof T)) {
                Object.defineProperty(this, key, {
                    get() {
                        return this._[key];
                    }
                })
            }
        }
    }
}


export default Instance;
