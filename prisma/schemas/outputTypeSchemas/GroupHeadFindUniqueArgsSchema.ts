import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupHeadIncludeSchema } from '../inputTypeSchemas/GroupHeadIncludeSchema'
import { GroupHeadWhereUniqueInputSchema } from '../inputTypeSchemas/GroupHeadWhereUniqueInputSchema'
import { GroupArgsSchema } from "../outputTypeSchemas/GroupArgsSchema"
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GroupHeadSelectSchema: z.ZodType<Prisma.GroupHeadSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  group: z.boolean().optional(),
  level: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export const GroupHeadFindUniqueArgsSchema: z.ZodType<Prisma.GroupHeadFindUniqueArgs> = z.object({
  select: GroupHeadSelectSchema.optional(),
  include: GroupHeadIncludeSchema.optional(),
  where: GroupHeadWhereUniqueInputSchema,
}).strict() ;

export default GroupHeadFindUniqueArgsSchema;
