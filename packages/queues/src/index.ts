import type { Queue } from 'bull';
import mailingInit from './mailing';

export type QueuesName = 'mailing';

export default (): Record<QueuesName, Queue<any>> => {
    const mailing = mailingInit();

    return {
        mailing
    }
}
