import { z } from 'zod';
import { UserRoleSchema } from '../inputTypeSchemas/UserRoleSchema'
import { LangSchema } from '../inputTypeSchemas/LangSchema'
import type { AmpluaWithRelations } from './AmpluaSchema'
import { AmpluaWithRelationsSchema } from './AmpluaSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

/**
 * Модель **пользователя**
 * 
 * Является основной моделью в базе данных, от которого мы наследуемся при работе с расписаниями
 * @namespace Пользователь
 */
export const UserSchema = z.object({
  /**
   * Роль пользователя в системе
   */
  role: UserRoleSchema,
  /**
   * Выбраный им язык
   */
  lang: LangSchema,
  /**
   * ID пользователя в базе данных
   */
  id: z.string().uuid(),
  /**
   * ID пользователя в телеграм
   */
  tgID: z.bigint(),
  /**
   * Фамилия пользователя в телеграм
   */
  lastName: z.string().nullable(),
  /**
   * Имя пользователя в телеграм
   */
  firstName: z.string().nullable(),
  /**
   * Имя пользователя пользователя в телеграм
   */
  username: z.string().nullable(),
  /**
   * Является ли пользователь ботом
   */
  isBot: z.boolean(),
  /**
   * Является ли пользователь премиум пользователем
   */
  isPremium: z.boolean(),
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER RELATION SCHEMA
/////////////////////////////////////////

export type UserRelations = {
  amplua?: AmpluaWithRelations | null;
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  amplua: z.lazy(() => AmpluaWithRelationsSchema).nullable(),
}))

export default UserSchema;
