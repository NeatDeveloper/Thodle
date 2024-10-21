import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CuratorIncludeSchema } from '../inputTypeSchemas/CuratorIncludeSchema'
import { CuratorCreateInputSchema } from '../inputTypeSchemas/CuratorCreateInputSchema'
import { CuratorUncheckedCreateInputSchema } from '../inputTypeSchemas/CuratorUncheckedCreateInputSchema'
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

export const CuratorCreateArgsSchema: z.ZodType<Prisma.CuratorCreateArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  data: z.union([ CuratorCreateInputSchema,CuratorUncheckedCreateInputSchema ]),
}).strict() ;

export default CuratorCreateArgsSchema;
