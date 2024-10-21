import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';
import { GroupCreateNestedOneWithoutGroupHeadsInputSchema } from './GroupCreateNestedOneWithoutGroupHeadsInputSchema';

export const GroupHeadCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadCreateWithoutAmpluaInput> = z.object({
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutGroupHeadsInputSchema)
}).strict();

export default GroupHeadCreateWithoutAmpluaInputSchema;
