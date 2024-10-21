import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversityArgsSchema } from "../outputTypeSchemas/UniversityArgsSchema"

export const WeekSelectSchema: z.ZodType<Prisma.WeekSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  count: z.boolean().optional(),
  university: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  University: z.union([z.boolean(),z.lazy(() => UniversityArgsSchema)]).optional(),
}).strict()

export default WeekSelectSchema;
