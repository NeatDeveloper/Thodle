import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadWhereUniqueInputSchema } from './GroupHeadWhereUniqueInputSchema';
import { GroupHeadUpdateWithoutGroupInputSchema } from './GroupHeadUpdateWithoutGroupInputSchema';
import { GroupHeadUncheckedUpdateWithoutGroupInputSchema } from './GroupHeadUncheckedUpdateWithoutGroupInputSchema';

export const GroupHeadUpdateWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUpdateWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => GroupHeadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GroupHeadUpdateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedUpdateWithoutGroupInputSchema) ]),
}).strict();

export default GroupHeadUpdateWithWhereUniqueWithoutGroupInputSchema;
