import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CuratorIncludeSchema } from '../inputTypeSchemas/CuratorIncludeSchema'
import { CuratorUpdateInputSchema } from '../inputTypeSchemas/CuratorUpdateInputSchema'
import { CuratorUncheckedUpdateInputSchema } from '../inputTypeSchemas/CuratorUncheckedUpdateInputSchema'
import { CuratorWhereUniqueInputSchema } from '../inputTypeSchemas/CuratorWhereUniqueInputSchema'
import { GroupArgsSchema } from "../outputTypeSchemas/GroupArgsSchema"
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CuratorSelectSchema: z.ZodType<Prisma.CuratorSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  group: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export const CuratorUpdateArgsSchema: z.ZodType<Prisma.CuratorUpdateArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  data: z.union([ CuratorUpdateInputSchema,CuratorUncheckedUpdateInputSchema ]),
  where: CuratorWhereUniqueInputSchema,
}).strict() ;

export default CuratorUpdateArgsSchema;
