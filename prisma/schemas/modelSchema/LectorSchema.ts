import { z } from 'zod';
import type { LectorRankWithRelations } from './LectorRankSchema'
import type { FaculityWithRelations } from './FaculitySchema'
import type { AmpluaWithRelations } from './AmpluaSchema'
import { LectorRankWithRelationsSchema } from './LectorRankSchema'
import { FaculityWithRelationsSchema } from './FaculitySchema'
import { AmpluaWithRelationsSchema } from './AmpluaSchema'

/////////////////////////////////////////
// LECTOR SCHEMA
/////////////////////////////////////////

export const LectorSchema = z.object({
  id: z.string(),
  tgID: z.bigint(),
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  faculity: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Lector = z.infer<typeof LectorSchema>

/////////////////////////////////////////
// LECTOR RELATION SCHEMA
/////////////////////////////////////////

export type LectorRelations = {
  ranks: LectorRankWithRelations[];
  Faculity?: FaculityWithRelations | null;
  Amplua: AmpluaWithRelations;
};

export type LectorWithRelations = z.infer<typeof LectorSchema> & LectorRelations

export const LectorWithRelationsSchema: z.ZodType<LectorWithRelations> = LectorSchema.merge(z.object({
  ranks: z.lazy(() => LectorRankWithRelationsSchema).array(),
  Faculity: z.lazy(() => FaculityWithRelationsSchema).nullable(),
  Amplua: z.lazy(() => AmpluaWithRelationsSchema),
}))

export default LectorSchema;
