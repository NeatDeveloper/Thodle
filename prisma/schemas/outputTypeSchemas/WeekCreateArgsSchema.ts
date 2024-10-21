import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekIncludeSchema } from '../inputTypeSchemas/WeekIncludeSchema'
import { WeekCreateInputSchema } from '../inputTypeSchemas/WeekCreateInputSchema'
import { WeekUncheckedCreateInputSchema } from '../inputTypeSchemas/WeekUncheckedCreateInputSchema'
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

export const WeekCreateArgsSchema: z.ZodType<Prisma.WeekCreateArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  data: z.union([ WeekCreateInputSchema,WeekUncheckedCreateInputSchema ]),
}).strict() ;

export default WeekCreateArgsSchema;
