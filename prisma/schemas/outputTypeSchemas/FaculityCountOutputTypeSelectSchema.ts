import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const FaculityCountOutputTypeSelectSchema: z.ZodType<Prisma.FaculityCountOutputTypeSelect> = z.object({
  disciplines: z.boolean().optional(),
  lectors: z.boolean().optional(),
  groups: z.boolean().optional(),
}).strict();

export default FaculityCountOutputTypeSelectSchema;
