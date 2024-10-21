import type { LanguageCode } from 'grammy/types';
import BotContext from '.';

export namespace ContextDeclaration {
    type Base = BotContext;

    interface Implement {}
}
