import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';

export const GroupHeadUncheckedCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadUncheckedCreateWithoutAmpluaInput> = z.object({
  group: z.number().int(),
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default GroupHeadUncheckedCreateWithoutAmpluaInputSchema;
