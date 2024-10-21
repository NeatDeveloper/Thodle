import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const GroupCountOutputTypeSelectSchema: z.ZodType<Prisma.GroupCountOutputTypeSelect> = z.object({
  groupHeads: z.boolean().optional(),
  students: z.boolean().optional(),
}).strict();

export default GroupCountOutputTypeSelectSchema;
