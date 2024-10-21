import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { WeekWithRelations } from './WeekSchema'
import type { FaculityWithRelations } from './FaculitySchema'
import type { BuildingWithRelations } from './BuildingSchema'
import { WeekWithRelationsSchema } from './WeekSchema'
import { FaculityWithRelationsSchema } from './FaculitySchema'
import { BuildingWithRelationsSchema } from './BuildingSchema'

/////////////////////////////////////////
// UNIVERSITY SCHEMA
/////////////////////////////////////////

/**
 * Модель **Университета**
 * 
 * Точка входа для описания структуры университета. Тут содержатся основные его данные, для нормальной работы всего приложения
 * @namespace СтруктураУниверситета
 */
export const UniversitySchema = z.object({
  /**
   * ID университета в базе данных
   */
  id: z.number().int(),
  /**
   * Название университета в сокращенном варианте
   */
  name: z.string(),
  /**
   * Название университета
   */
  fullName: z.string(),
  /**
   * Город, где университет находится
   */
  city: z.string(),
  /**
   * Массив, где хранятся время когда проходят учебные процессы
   * @minItems 5
   */
  studyTime: JsonValueSchema,
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type University = z.infer<typeof UniversitySchema>

/////////////////////////////////////////
// UNIVERSITY RELATION SCHEMA
/////////////////////////////////////////

export type UniversityRelations = {
  weeks: WeekWithRelations[];
  faculties: FaculityWithRelations[];
  buildings: BuildingWithRelations[];
};

export type UniversityWithRelations = z.infer<typeof UniversitySchema> & UniversityRelations

export const UniversityWithRelationsSchema: z.ZodType<UniversityWithRelations> = UniversitySchema.merge(z.object({
  weeks: z.lazy(() => WeekWithRelationsSchema).array(),
  faculties: z.lazy(() => FaculityWithRelationsSchema).array(),
  buildings: z.lazy(() => BuildingWithRelationsSchema).array(),
}))

export default UniversitySchema;
