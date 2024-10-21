import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';
import { GroupCreateNestedOneWithoutGroupHeadsInputSchema } from './GroupCreateNestedOneWithoutGroupHeadsInputSchema';
import { AmpluaCreateNestedOneWithoutGroupHeadInputSchema } from './AmpluaCreateNestedOneWithoutGroupHeadInputSchema';

export const GroupHeadCreateInputSchema: z.ZodType<Prisma.GroupHeadCreateInput> = z.object({
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutGroupHeadsInputSchema),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutGroupHeadInputSchema)
}).strict();

export default GroupHeadCreateInputSchema;
