import { Api, Context as GrammyContext, type RawApi } from 'grammy';
import { LanguageCodes, type LanguageCode, type Update, type UserFromGetMe } from 'grammy/types';

import type { ContextDeclaration } from './declaration';


export default class Context extends GrammyContext implements ContextDeclaration.Implement {
    constructor(update: Update, api: Api<RawApi>, me: UserFromGetMe) {
        super(update, api, me);
    }

    get user(): ContextDeclaration.UserData {
        return {
            id: this.message?.from.id || (this.update?.callback_query?.from.id as number),
            username: this.message?.from.username || this.update.callback_query?.from.username,
            lastName: this.message?.from.last_name || this.update.callback_query?.from.last_name,
            firstName: this.message?.from.first_name || this.update.callback_query?.from.first_name,
            isPremium: !!this.message?.from.is_premium || !!this.update.callback_query?.from.is_premium,
            lang: (this.message?.from.language_code || this.update.callback_query?.from.language_code) as LanguageCode,
            isBot: !!(this.message?.from.is_bot || this.update.callback_query?.from.is_bot)
        }
    }
}
