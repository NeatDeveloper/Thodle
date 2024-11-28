export default <T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
    const result = {} as Pick<T, K>;

    for (const key in obj)
        if (keys.includes(key as unknown as K))
            // @ts-ignore
            result[key as Exclude<keyof T, K>] = obj[key];

    return result;
}
