import { Api, Context as GrammyContext, type RawApi } from 'grammy';
import { type Update, type UserFromGetMe } from 'grammy/types';

import type { ContextDeclaration } from './declaration';

export default class Context
    extends GrammyContext
    implements ContextDeclaration.Implement
{
    constructor(update: Update, api: Api<RawApi>, me: UserFromGetMe) {
        super(update, api, me);
    }
}
