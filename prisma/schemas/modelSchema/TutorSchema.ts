import { z } from 'zod';
import type { GroupWithRelations } from './GroupSchema'
import type { AmpluaWithRelations } from './AmpluaSchema'
import { GroupWithRelationsSchema } from './GroupSchema'
import { AmpluaWithRelationsSchema } from './AmpluaSchema'

/////////////////////////////////////////
// TUTOR SCHEMA
/////////////////////////////////////////

export const TutorSchema = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Tutor = z.infer<typeof TutorSchema>

/////////////////////////////////////////
// TUTOR RELATION SCHEMA
/////////////////////////////////////////

export type TutorRelations = {
  Group: GroupWithRelations;
  Amplua: AmpluaWithRelations;
};

export type TutorWithRelations = z.infer<typeof TutorSchema> & TutorRelations

export const TutorWithRelationsSchema: z.ZodType<TutorWithRelations> = TutorSchema.merge(z.object({
  Group: z.lazy(() => GroupWithRelationsSchema),
  Amplua: z.lazy(() => AmpluaWithRelationsSchema),
}))

export default TutorSchema;
