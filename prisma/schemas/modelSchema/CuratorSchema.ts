import { z } from 'zod';
import type { GroupWithRelations } from './GroupSchema'
import type { AmpluaWithRelations } from './AmpluaSchema'
import { GroupWithRelationsSchema } from './GroupSchema'
import { AmpluaWithRelationsSchema } from './AmpluaSchema'

/////////////////////////////////////////
// CURATOR SCHEMA
/////////////////////////////////////////

export const CuratorSchema = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Curator = z.infer<typeof CuratorSchema>

/////////////////////////////////////////
// CURATOR RELATION SCHEMA
/////////////////////////////////////////

export type CuratorRelations = {
  Group: GroupWithRelations;
  Amplua: AmpluaWithRelations;
};

export type CuratorWithRelations = z.infer<typeof CuratorSchema> & CuratorRelations

export const CuratorWithRelationsSchema: z.ZodType<CuratorWithRelations> = CuratorSchema.merge(z.object({
  Group: z.lazy(() => GroupWithRelationsSchema),
  Amplua: z.lazy(() => AmpluaWithRelationsSchema),
}))

export default CuratorSchema;
