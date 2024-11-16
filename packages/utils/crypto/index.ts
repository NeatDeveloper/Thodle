import { random } from 'number';

const CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';


export const generate = (length = 10, chars?: string) => {
    let charset = chars || CHARS;
    const charsetLength = charset.length;
    let uid = '';

    while(length-- > 0)
        uid += charset[random(0, charsetLength - 1)];

    return uid;
};
