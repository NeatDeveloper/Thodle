import '@repo/types/env';
import '@repo/types/schedule';
import type { Context as BotContext } from 'grammy';

declare global {
    namespace APP {
        interface Context extends BotContext { }
    }
}

export { };
