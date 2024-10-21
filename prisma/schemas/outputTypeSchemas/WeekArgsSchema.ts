import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekSelectSchema } from '../inputTypeSchemas/WeekSelectSchema';
import { WeekIncludeSchema } from '../inputTypeSchemas/WeekIncludeSchema';

export const WeekArgsSchema: z.ZodType<Prisma.WeekDefaultArgs> = z.object({
  select: z.lazy(() => WeekSelectSchema).optional(),
  include: z.lazy(() => WeekIncludeSchema).optional(),
}).strict();

export default WeekArgsSchema;
