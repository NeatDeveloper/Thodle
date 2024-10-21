import { z } from 'zod';
import { WeekCountSchema } from '../inputTypeSchemas/WeekCountSchema'
import type { UniversityWithRelations } from './UniversitySchema'
import { UniversityWithRelationsSchema } from './UniversitySchema'

/////////////////////////////////////////
// WEEK SCHEMA
/////////////////////////////////////////

/**
 * Модель **Неделя**
 * 
 * Описание, названий недель университета. Конкретно в данном случае, это поможет в правильном структурировании расписаний в приложении,
 * а также, позволяет реализовать поддержку именования недель в конкретном университете.
 * 
 * Например: "Первая и Вторая", "Красная и Чёрная"
 * @namespace СтруктураУниверситета
 */
export const WeekSchema = z.object({
  /**
   * Порядок недели
   */
  count: WeekCountSchema,
  /**
   * ID недели в университете
   */
  id: z.number().int(),
  /**
   * Название недели в кокретном университете
   */
  title: z.string(),
  /**
   * ID университета
   */
  university: z.number().int().nullable(),
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type Week = z.infer<typeof WeekSchema>

/////////////////////////////////////////
// WEEK RELATION SCHEMA
/////////////////////////////////////////

export type WeekRelations = {
  University?: UniversityWithRelations | null;
};

export type WeekWithRelations = z.infer<typeof WeekSchema> & WeekRelations

export const WeekWithRelationsSchema: z.ZodType<WeekWithRelations> = WeekSchema.merge(z.object({
  University: z.lazy(() => UniversityWithRelationsSchema).nullable(),
}))

export default WeekSchema;
