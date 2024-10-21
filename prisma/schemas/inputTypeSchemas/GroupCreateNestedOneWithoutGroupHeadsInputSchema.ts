import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateWithoutGroupHeadsInputSchema } from './GroupCreateWithoutGroupHeadsInputSchema';
import { GroupUncheckedCreateWithoutGroupHeadsInputSchema } from './GroupUncheckedCreateWithoutGroupHeadsInputSchema';
import { GroupCreateOrConnectWithoutGroupHeadsInputSchema } from './GroupCreateOrConnectWithoutGroupHeadsInputSchema';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';

export const GroupCreateNestedOneWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutGroupHeadsInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupHeadsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutGroupHeadsInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional()
}).strict();

export default GroupCreateNestedOneWithoutGroupHeadsInputSchema;
