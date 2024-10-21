import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';
import { GroupCreateWithoutCuratorInputSchema } from './GroupCreateWithoutCuratorInputSchema';
import { GroupUncheckedCreateWithoutCuratorInputSchema } from './GroupUncheckedCreateWithoutCuratorInputSchema';

export const GroupCreateOrConnectWithoutCuratorInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutCuratorInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutCuratorInputSchema) ]),
}).strict();

export default GroupCreateOrConnectWithoutCuratorInputSchema;
