import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekIncludeSchema } from '../inputTypeSchemas/WeekIncludeSchema'
import { WeekUpdateInputSchema } from '../inputTypeSchemas/WeekUpdateInputSchema'
import { WeekUncheckedUpdateInputSchema } from '../inputTypeSchemas/WeekUncheckedUpdateInputSchema'
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

export const WeekUpdateArgsSchema: z.ZodType<Prisma.WeekUpdateArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  data: z.union([ WeekUpdateInputSchema,WeekUncheckedUpdateInputSchema ]),
  where: WeekWhereUniqueInputSchema,
}).strict() ;

export default WeekUpdateArgsSchema;
