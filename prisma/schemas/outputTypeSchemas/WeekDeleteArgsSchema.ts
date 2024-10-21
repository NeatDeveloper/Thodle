import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekIncludeSchema } from '../inputTypeSchemas/WeekIncludeSchema'
import { WeekWhereUniqueInputSchema } from '../inputTypeSchemas/WeekWhereUniqueInputSchema'
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

export const WeekDeleteArgsSchema: z.ZodType<Prisma.WeekDeleteArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  where: WeekWhereUniqueInputSchema,
}).strict() ;

export default WeekDeleteArgsSchema;
