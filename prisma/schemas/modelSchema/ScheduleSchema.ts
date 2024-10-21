import { z } from 'zod';
import type { DisciplineWithRelations } from './DisciplineSchema'
import { DisciplineWithRelationsSchema } from './DisciplineSchema'

/////////////////////////////////////////
// SCHEDULE SCHEMA
/////////////////////////////////////////

export const ScheduleSchema = z.object({
  id: z.number().int(),
  discipline: z.number().int(),
})

export type Schedule = z.infer<typeof ScheduleSchema>

/////////////////////////////////////////
// SCHEDULE RELATION SCHEMA
/////////////////////////////////////////

export type ScheduleRelations = {
  Discipline: DisciplineWithRelations;
};

export type ScheduleWithRelations = z.infer<typeof ScheduleSchema> & ScheduleRelations

export const ScheduleWithRelationsSchema: z.ZodType<ScheduleWithRelations> = ScheduleSchema.merge(z.object({
  Discipline: z.lazy(() => DisciplineWithRelationsSchema),
}))

export default ScheduleSchema;
