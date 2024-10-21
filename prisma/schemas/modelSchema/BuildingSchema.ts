import { z } from 'zod';
import type { AuditoriumWithRelations } from './AuditoriumSchema'
import type { UniversityWithRelations } from './UniversitySchema'
import { AuditoriumWithRelationsSchema } from './AuditoriumSchema'
import { UniversityWithRelationsSchema } from './UniversitySchema'

/////////////////////////////////////////
// BUILDING SCHEMA
/////////////////////////////////////////

/**
 * Модель **Корпуса**
 * 
 * Описание корпусов университета, для упрощения навигации студентов в основном приложение
 * @namespace СтруктураУниверситета
 */
export const BuildingSchema = z.object({
  /**
   * ID университета в базе данных
   */
  id: z.number().int(),
  /**
   * Название корпуса
   */
  title: z.string(),
  /**
   * Внегласное название корпуса
   */
  nonVerbalName: z.string().nullable(),
  /**
   * Адрес(улица) на котором находится корпус
   */
  address: z.string(),
  /**
   * ID университета, к которому корпус привязан
   */
  university: z.number().int(),
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type Building = z.infer<typeof BuildingSchema>

/////////////////////////////////////////
// BUILDING RELATION SCHEMA
/////////////////////////////////////////

export type BuildingRelations = {
  auditoriums: AuditoriumWithRelations[];
  University: UniversityWithRelations;
};

export type BuildingWithRelations = z.infer<typeof BuildingSchema> & BuildingRelations

export const BuildingWithRelationsSchema: z.ZodType<BuildingWithRelations> = BuildingSchema.merge(z.object({
  auditoriums: z.lazy(() => AuditoriumWithRelationsSchema).array(),
  University: z.lazy(() => UniversityWithRelationsSchema),
}))

export default BuildingSchema;
