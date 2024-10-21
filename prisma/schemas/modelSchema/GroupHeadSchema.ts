import { z } from 'zod';
import { GroupHeadLevelSchema } from '../inputTypeSchemas/GroupHeadLevelSchema'
import type { GroupWithRelations } from './GroupSchema'
import type { AmpluaWithRelations } from './AmpluaSchema'
import { GroupWithRelationsSchema } from './GroupSchema'
import { AmpluaWithRelationsSchema } from './AmpluaSchema'

/////////////////////////////////////////
// GROUP HEAD SCHEMA
/////////////////////////////////////////

export const GroupHeadSchema = z.object({
  level: GroupHeadLevelSchema,
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type GroupHead = z.infer<typeof GroupHeadSchema>

/////////////////////////////////////////
// GROUP HEAD RELATION SCHEMA
/////////////////////////////////////////

export type GroupHeadRelations = {
  Group: GroupWithRelations;
  Amplua: AmpluaWithRelations;
};

export type GroupHeadWithRelations = z.infer<typeof GroupHeadSchema> & GroupHeadRelations

export const GroupHeadWithRelationsSchema: z.ZodType<GroupHeadWithRelations> = GroupHeadSchema.merge(z.object({
  Group: z.lazy(() => GroupWithRelationsSchema),
  Amplua: z.lazy(() => AmpluaWithRelationsSchema),
}))

export default GroupHeadSchema;
