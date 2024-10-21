import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CuratorIncludeSchema } from '../inputTypeSchemas/CuratorIncludeSchema'
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

export const CuratorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CuratorFindUniqueOrThrowArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  where: CuratorWhereUniqueInputSchema,
}).strict() ;

export default CuratorFindUniqueOrThrowArgsSchema;
