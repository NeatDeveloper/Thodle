import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CuratorIncludeSchema } from '../inputTypeSchemas/CuratorIncludeSchema'
import { CuratorWhereInputSchema } from '../inputTypeSchemas/CuratorWhereInputSchema'
import { CuratorOrderByWithRelationInputSchema } from '../inputTypeSchemas/CuratorOrderByWithRelationInputSchema'
import { CuratorWhereUniqueInputSchema } from '../inputTypeSchemas/CuratorWhereUniqueInputSchema'
import { CuratorScalarFieldEnumSchema } from '../inputTypeSchemas/CuratorScalarFieldEnumSchema'
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

export const CuratorFindManyArgsSchema: z.ZodType<Prisma.CuratorFindManyArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  where: CuratorWhereInputSchema.optional(),
  orderBy: z.union([ CuratorOrderByWithRelationInputSchema.array(),CuratorOrderByWithRelationInputSchema ]).optional(),
  cursor: CuratorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CuratorScalarFieldEnumSchema,CuratorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CuratorFindManyArgsSchema;
