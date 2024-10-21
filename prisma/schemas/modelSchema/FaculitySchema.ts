import { z } from 'zod';
import type { DisciplineWithRelations } from './DisciplineSchema'
import type { LectorWithRelations } from './LectorSchema'
import type { GroupWithRelations } from './GroupSchema'
import type { UniversityWithRelations } from './UniversitySchema'
import { DisciplineWithRelationsSchema } from './DisciplineSchema'
import { LectorWithRelationsSchema } from './LectorSchema'
import { GroupWithRelationsSchema } from './GroupSchema'
import { UniversityWithRelationsSchema } from './UniversitySchema'

/////////////////////////////////////////
// FACULITY SCHEMA
/////////////////////////////////////////

/**
 * Модель **Факультет**
 * 
 * Описание, всех факультетов университета. Конкретно в данном случае, факультеты прикреплены к университету
 * @namespace СтруктураУниверситета
 */
export const FaculitySchema = z.object({
  /**
   * ID университета в базе данных
   */
  id: z.number().int(),
  /**
   * ID университета
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

export type Faculity = z.infer<typeof FaculitySchema>

/////////////////////////////////////////
// FACULITY RELATION SCHEMA
/////////////////////////////////////////

export type FaculityRelations = {
  disciplines: DisciplineWithRelations[];
  lectors: LectorWithRelations[];
  groups: GroupWithRelations[];
  University: UniversityWithRelations;
};

export type FaculityWithRelations = z.infer<typeof FaculitySchema> & FaculityRelations

export const FaculityWithRelationsSchema: z.ZodType<FaculityWithRelations> = FaculitySchema.merge(z.object({
  disciplines: z.lazy(() => DisciplineWithRelationsSchema).array(),
  lectors: z.lazy(() => LectorWithRelationsSchema).array(),
  groups: z.lazy(() => GroupWithRelationsSchema).array(),
  University: z.lazy(() => UniversityWithRelationsSchema),
}))

export default FaculitySchema;
