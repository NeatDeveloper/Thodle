import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';
import { GroupUpdateWithoutCuratorInputSchema } from './GroupUpdateWithoutCuratorInputSchema';
import { GroupUncheckedUpdateWithoutCuratorInputSchema } from './GroupUncheckedUpdateWithoutCuratorInputSchema';

export const GroupUpdateToOneWithWhereWithoutCuratorInputSchema: z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutCuratorInput> = z.object({
  where: z.lazy(() => GroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GroupUpdateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutCuratorInputSchema) ]),
}).strict();

export default GroupUpdateToOneWithWhereWithoutCuratorInputSchema;
