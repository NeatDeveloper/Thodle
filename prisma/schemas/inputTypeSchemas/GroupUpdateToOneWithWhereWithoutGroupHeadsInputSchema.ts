import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';
import { GroupUpdateWithoutGroupHeadsInputSchema } from './GroupUpdateWithoutGroupHeadsInputSchema';
import { GroupUncheckedUpdateWithoutGroupHeadsInputSchema } from './GroupUncheckedUpdateWithoutGroupHeadsInputSchema';

export const GroupUpdateToOneWithWhereWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutGroupHeadsInput> = z.object({
  where: z.lazy(() => GroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GroupUpdateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutGroupHeadsInputSchema) ]),
}).strict();

export default GroupUpdateToOneWithWhereWithoutGroupHeadsInputSchema;
