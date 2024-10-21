import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupUpdateWithoutGroupHeadsInputSchema } from './GroupUpdateWithoutGroupHeadsInputSchema';
import { GroupUncheckedUpdateWithoutGroupHeadsInputSchema } from './GroupUncheckedUpdateWithoutGroupHeadsInputSchema';
import { GroupCreateWithoutGroupHeadsInputSchema } from './GroupCreateWithoutGroupHeadsInputSchema';
import { GroupUncheckedCreateWithoutGroupHeadsInputSchema } from './GroupUncheckedCreateWithoutGroupHeadsInputSchema';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';

export const GroupUpsertWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupUpsertWithoutGroupHeadsInput> = z.object({
  update: z.union([ z.lazy(() => GroupUpdateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutGroupHeadsInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupHeadsInputSchema) ]),
  where: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export default GroupUpsertWithoutGroupHeadsInputSchema;
