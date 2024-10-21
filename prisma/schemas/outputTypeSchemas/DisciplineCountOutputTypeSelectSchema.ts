import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DisciplineCountOutputTypeSelectSchema: z.ZodType<Prisma.DisciplineCountOutputTypeSelect> = z.object({
  schedules: z.boolean().optional(),
}).strict();

export default DisciplineCountOutputTypeSelectSchema;
