import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekIncludeSchema } from '../inputTypeSchemas/WeekIncludeSchema'
import { WeekWhereInputSchema } from '../inputTypeSchemas/WeekWhereInputSchema'
import { WeekOrderByWithRelationInputSchema } from '../inputTypeSchemas/WeekOrderByWithRelationInputSchema'
import { WeekWhereUniqueInputSchema } from '../inputTypeSchemas/WeekWhereUniqueInputSchema'
import { WeekScalarFieldEnumSchema } from '../inputTypeSchemas/WeekScalarFieldEnumSchema'
import { UniversityArgsSchema } from "../outputTypeSchemas/UniversityArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WeekSelectSchema: z.ZodType<Prisma.WeekSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  count: z.boolean().optional(),
  university: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  University: z.union([z.boolean(),z.lazy(() => UniversityArgsSchema)]).optional(),
}).strict()

export const WeekFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WeekFindFirstOrThrowArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  where: WeekWhereInputSchema.optional(),
  orderBy: z.union([ WeekOrderByWithRelationInputSchema.array(),WeekOrderByWithRelationInputSchema ]).optional(),
  cursor: WeekWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WeekScalarFieldEnumSchema,WeekScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default WeekFindFirstOrThrowArgsSchema;
