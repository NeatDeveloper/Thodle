import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateWithoutCuratorInputSchema } from './GroupCreateWithoutCuratorInputSchema';
import { GroupUncheckedCreateWithoutCuratorInputSchema } from './GroupUncheckedCreateWithoutCuratorInputSchema';
import { GroupCreateOrConnectWithoutCuratorInputSchema } from './GroupCreateOrConnectWithoutCuratorInputSchema';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';

export const GroupCreateNestedOneWithoutCuratorInputSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutCuratorInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutCuratorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutCuratorInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional()
}).strict();

export default GroupCreateNestedOneWithoutCuratorInputSchema;
