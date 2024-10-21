import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UniversityCountOutputTypeSelectSchema: z.ZodType<Prisma.UniversityCountOutputTypeSelect> = z.object({
  weeks: z.boolean().optional(),
  faculties: z.boolean().optional(),
  buildings: z.boolean().optional(),
}).strict();

export default UniversityCountOutputTypeSelectSchema;
