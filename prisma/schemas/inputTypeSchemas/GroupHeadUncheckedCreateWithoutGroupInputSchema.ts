import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';

export const GroupHeadUncheckedCreateWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUncheckedCreateWithoutGroupInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default GroupHeadUncheckedCreateWithoutGroupInputSchema;
