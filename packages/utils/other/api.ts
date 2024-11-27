import ky from 'ky';
import type { Options } from 'ky';


export default (extend: Options) => ky.extend({
    throwHttpErrors: false,
    ...extend
});
