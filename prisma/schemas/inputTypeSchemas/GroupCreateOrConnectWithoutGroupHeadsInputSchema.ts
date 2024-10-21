import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';
import { GroupCreateWithoutGroupHeadsInputSchema } from './GroupCreateWithoutGroupHeadsInputSchema';
import { GroupUncheckedCreateWithoutGroupHeadsInputSchema } from './GroupUncheckedCreateWithoutGroupHeadsInputSchema';

export const GroupCreateOrConnectWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutGroupHeadsInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupHeadsInputSchema) ]),
}).strict();

export default GroupCreateOrConnectWithoutGroupHeadsInputSchema;
