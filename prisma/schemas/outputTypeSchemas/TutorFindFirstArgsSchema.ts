import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TutorIncludeSchema } from '../inputTypeSchemas/TutorIncludeSchema'
import { TutorWhereInputSchema } from '../inputTypeSchemas/TutorWhereInputSchema'
import { TutorOrderByWithRelationInputSchema } from '../inputTypeSchemas/TutorOrderByWithRelationInputSchema'
import { TutorWhereUniqueInputSchema } from '../inputTypeSchemas/TutorWhereUniqueInputSchema'
import { TutorScalarFieldEnumSchema } from '../inputTypeSchemas/TutorScalarFieldEnumSchema'
import { GroupArgsSchema } from "../outputTypeSchemas/GroupArgsSchema"
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TutorSelectSchema: z.ZodType<Prisma.TutorSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  group: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export const TutorFindFirstArgsSchema: z.ZodType<Prisma.TutorFindFirstArgs> = z.object({
  select: TutorSelectSchema.optional(),
  include: TutorIncludeSchema.optional(),
  where: TutorWhereInputSchema.optional(),
  orderBy: z.union([ TutorOrderByWithRelationInputSchema.array(),TutorOrderByWithRelationInputSchema ]).optional(),
  cursor: TutorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TutorScalarFieldEnumSchema,TutorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default TutorFindFirstArgsSchema;
