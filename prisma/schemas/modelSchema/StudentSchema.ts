import { z } from 'zod';
import type { AmpluaWithRelations } from './AmpluaSchema'
import type { GroupWithRelations } from './GroupSchema'
import { AmpluaWithRelationsSchema } from './AmpluaSchema'
import { GroupWithRelationsSchema } from './GroupSchema'

/////////////////////////////////////////
// STUDENT SCHEMA
/////////////////////////////////////////

export const StudentSchema = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Student = z.infer<typeof StudentSchema>

/////////////////////////////////////////
// STUDENT RELATION SCHEMA
/////////////////////////////////////////

export type StudentRelations = {
  user: AmpluaWithRelations;
  Group?: GroupWithRelations | null;
};

export type StudentWithRelations = z.infer<typeof StudentSchema> & StudentRelations

export const StudentWithRelationsSchema: z.ZodType<StudentWithRelations> = StudentSchema.merge(z.object({
  user: z.lazy(() => AmpluaWithRelationsSchema),
  Group: z.lazy(() => GroupWithRelationsSchema).nullable(),
}))

export default StudentSchema;
