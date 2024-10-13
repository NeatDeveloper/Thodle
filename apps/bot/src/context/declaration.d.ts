import type { LanguageCode } from 'grammy/types';
import BotContext from '.';

export namespace ContextDeclaration {
    type Base = BotContext;

    interface UserData {
        id: number;
        lastName?: string;
        firstName?: string;
        username?: string;
        isBot: boolean;
        lang: LanguageCode;
        isPremium: boolean;
    }

    interface Implement {
        user?: UserData;
    }
}
