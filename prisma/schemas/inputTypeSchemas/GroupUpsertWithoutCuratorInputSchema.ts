import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupUpdateWithoutCuratorInputSchema } from './GroupUpdateWithoutCuratorInputSchema';
import { GroupUncheckedUpdateWithoutCuratorInputSchema } from './GroupUncheckedUpdateWithoutCuratorInputSchema';
import { GroupCreateWithoutCuratorInputSchema } from './GroupCreateWithoutCuratorInputSchema';
import { GroupUncheckedCreateWithoutCuratorInputSchema } from './GroupUncheckedCreateWithoutCuratorInputSchema';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';

export const GroupUpsertWithoutCuratorInputSchema: z.ZodType<Prisma.GroupUpsertWithoutCuratorInput> = z.object({
  update: z.union([ z.lazy(() => GroupUpdateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutCuratorInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutCuratorInputSchema) ]),
  where: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export default GroupUpsertWithoutCuratorInputSchema;
