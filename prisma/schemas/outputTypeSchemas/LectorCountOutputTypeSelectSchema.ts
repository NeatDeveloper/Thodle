import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const LectorCountOutputTypeSelectSchema: z.ZodType<Prisma.LectorCountOutputTypeSelect> = z.object({
  ranks: z.boolean().optional(),
}).strict();

export default LectorCountOutputTypeSelectSchema;
