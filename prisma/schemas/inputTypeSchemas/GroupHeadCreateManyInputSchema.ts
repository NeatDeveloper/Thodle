import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';

export const GroupHeadCreateManyInputSchema: z.ZodType<Prisma.GroupHeadCreateManyInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default GroupHeadCreateManyInputSchema;
