import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';
import { AmpluaCreateNestedOneWithoutGroupHeadInputSchema } from './AmpluaCreateNestedOneWithoutGroupHeadInputSchema';

export const GroupHeadCreateWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadCreateWithoutGroupInput> = z.object({
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutGroupHeadInputSchema)
}).strict();

export default GroupHeadCreateWithoutGroupInputSchema;
