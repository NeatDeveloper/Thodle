import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversityArgsSchema } from "../outputTypeSchemas/UniversityArgsSchema"

export const WeekIncludeSchema: z.ZodType<Prisma.WeekInclude> = z.object({
  University: z.union([z.boolean(),z.lazy(() => UniversityArgsSchema)]).optional(),
}).strict()

export default WeekIncludeSchema;
