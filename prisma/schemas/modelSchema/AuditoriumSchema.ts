import { z } from 'zod';
import type { BuildingWithRelations } from './BuildingSchema'
import { BuildingWithRelationsSchema } from './BuildingSchema'

/////////////////////////////////////////
// AUDITORIUM SCHEMA
/////////////////////////////////////////

/**
 * Модель **Аудитории**
 * 
 * Описание, всех аудиторий университета. Конкретно в данном случае, аудитории прикреплены к корпусам
 * @namespace СтруктураУниверситета
 */
export const AuditoriumSchema = z.object({
  /**
   * ID университета в базе данных
   */
  id: z.number().int(),
  /**
   * ID корпуса
   */
  building: z.number().int(),
  /**
   * Номер аудитории в строковом формате(302, 302a)
   */
  number: z.string(),
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type Auditorium = z.infer<typeof AuditoriumSchema>

/////////////////////////////////////////
// AUDITORIUM RELATION SCHEMA
/////////////////////////////////////////

export type AuditoriumRelations = {
  Building: BuildingWithRelations;
};

export type AuditoriumWithRelations = z.infer<typeof AuditoriumSchema> & AuditoriumRelations

export const AuditoriumWithRelationsSchema: z.ZodType<AuditoriumWithRelations> = AuditoriumSchema.merge(z.object({
  Building: z.lazy(() => BuildingWithRelationsSchema),
}))

export default AuditoriumSchema;
