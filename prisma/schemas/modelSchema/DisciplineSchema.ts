import { z } from 'zod';
import type { ScheduleWithRelations } from './ScheduleSchema'
import type { FaculityWithRelations } from './FaculitySchema'
import { ScheduleWithRelationsSchema } from './ScheduleSchema'
import { FaculityWithRelationsSchema } from './FaculitySchema'

/////////////////////////////////////////
// DISCIPLINE SCHEMA
/////////////////////////////////////////

/**
 * Модель **Дисциплина**
 * 
 * Описание, всех дисциплин университета. Конкретно в данном случае, дисциплины прикреплены к факультетам
 * @namespace СтруктураУниверситета
 */
export const DisciplineSchema = z.object({
  /**
   * ID дисциплины в базе данных
   */
  id: z.number().int(),
  /**
   * Название дисциплины
   */
  title: z.string(),
  /**
   * ID факультета
   */
  faculity: z.number().int().nullable(),
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type Discipline = z.infer<typeof DisciplineSchema>

/////////////////////////////////////////
// DISCIPLINE RELATION SCHEMA
/////////////////////////////////////////

export type DisciplineRelations = {
  schedules: ScheduleWithRelations[];
  Faculity?: FaculityWithRelations | null;
};

export type DisciplineWithRelations = z.infer<typeof DisciplineSchema> & DisciplineRelations

export const DisciplineWithRelationsSchema: z.ZodType<DisciplineWithRelations> = DisciplineSchema.merge(z.object({
  schedules: z.lazy(() => ScheduleWithRelationsSchema).array(),
  Faculity: z.lazy(() => FaculityWithRelationsSchema).nullable(),
}))

export default DisciplineSchema;
