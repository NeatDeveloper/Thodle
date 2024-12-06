import omit from './omit';
import pick from './pick';
import stringify from './stringify';

export type Serialize<T> =
    T extends BigInt ? number :
    T extends Date ? string :
    T extends (infer U)[] ? Serialize<U>[] :
    T extends object ? { [K in keyof T]: Serialize<T[K]> } :
    T;

export const
    parse = <T>(str: string) => JSON.parse(str) as T,
    serialize = <T extends object>(object: T | T[]): T extends object[] ? Serialize<T[]> : Serialize<T> => parse(stringify(object))


export default {
    parse, serialize, stringify,
    omit, pick
}
