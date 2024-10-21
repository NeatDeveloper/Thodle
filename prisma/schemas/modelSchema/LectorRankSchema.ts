import { z } from 'zod';
import type { LectorWithRelations } from './LectorSchema'
import { LectorWithRelationsSchema } from './LectorSchema'

/////////////////////////////////////////
// LECTOR RANK SCHEMA
/////////////////////////////////////////

export const LectorRankSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  shortVariant: z.string(),
  lectorId: z.string(),
})

export type LectorRank = z.infer<typeof LectorRankSchema>

/////////////////////////////////////////
// LECTOR RANK RELATION SCHEMA
/////////////////////////////////////////

export type LectorRankRelations = {
  Lector: LectorWithRelations;
};

export type LectorRankWithRelations = z.infer<typeof LectorRankSchema> & LectorRankRelations

export const LectorRankWithRelationsSchema: z.ZodType<LectorRankWithRelations> = LectorRankSchema.merge(z.object({
  Lector: z.lazy(() => LectorWithRelationsSchema),
}))

export default LectorRankSchema;
