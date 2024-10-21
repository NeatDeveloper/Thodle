import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateWithoutCuratorInputSchema } from './GroupCreateWithoutCuratorInputSchema';
import { GroupUncheckedCreateWithoutCuratorInputSchema } from './GroupUncheckedCreateWithoutCuratorInputSchema';
import { GroupCreateOrConnectWithoutCuratorInputSchema } from './GroupCreateOrConnectWithoutCuratorInputSchema';
import { GroupUpsertWithoutCuratorInputSchema } from './GroupUpsertWithoutCuratorInputSchema';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';
import { GroupUpdateToOneWithWhereWithoutCuratorInputSchema } from './GroupUpdateToOneWithWhereWithoutCuratorInputSchema';
import { GroupUpdateWithoutCuratorInputSchema } from './GroupUpdateWithoutCuratorInputSchema';
import { GroupUncheckedUpdateWithoutCuratorInputSchema } from './GroupUncheckedUpdateWithoutCuratorInputSchema';

export const GroupUpdateOneRequiredWithoutCuratorNestedInputSchema: z.ZodType<Prisma.GroupUpdateOneRequiredWithoutCuratorNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutCuratorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutCuratorInputSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutCuratorInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupUpdateToOneWithWhereWithoutCuratorInputSchema),z.lazy(() => GroupUpdateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutCuratorInputSchema) ]).optional(),
}).strict();

export default GroupUpdateOneRequiredWithoutCuratorNestedInputSchema;
