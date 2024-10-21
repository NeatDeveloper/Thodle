import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateWithoutGroupHeadsInputSchema } from './GroupCreateWithoutGroupHeadsInputSchema';
import { GroupUncheckedCreateWithoutGroupHeadsInputSchema } from './GroupUncheckedCreateWithoutGroupHeadsInputSchema';
import { GroupCreateOrConnectWithoutGroupHeadsInputSchema } from './GroupCreateOrConnectWithoutGroupHeadsInputSchema';
import { GroupUpsertWithoutGroupHeadsInputSchema } from './GroupUpsertWithoutGroupHeadsInputSchema';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';
import { GroupUpdateToOneWithWhereWithoutGroupHeadsInputSchema } from './GroupUpdateToOneWithWhereWithoutGroupHeadsInputSchema';
import { GroupUpdateWithoutGroupHeadsInputSchema } from './GroupUpdateWithoutGroupHeadsInputSchema';
import { GroupUncheckedUpdateWithoutGroupHeadsInputSchema } from './GroupUncheckedUpdateWithoutGroupHeadsInputSchema';

export const GroupUpdateOneRequiredWithoutGroupHeadsNestedInputSchema: z.ZodType<Prisma.GroupUpdateOneRequiredWithoutGroupHeadsNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupHeadsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutGroupHeadsInputSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutGroupHeadsInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupUpdateToOneWithWhereWithoutGroupHeadsInputSchema),z.lazy(() => GroupUpdateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutGroupHeadsInputSchema) ]).optional(),
}).strict();

export default GroupUpdateOneRequiredWithoutGroupHeadsNestedInputSchema;
