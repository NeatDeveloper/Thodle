import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadWhereInputSchema } from './GroupHeadWhereInputSchema';
import { GroupHeadUpdateWithoutAmpluaInputSchema } from './GroupHeadUpdateWithoutAmpluaInputSchema';
import { GroupHeadUncheckedUpdateWithoutAmpluaInputSchema } from './GroupHeadUncheckedUpdateWithoutAmpluaInputSchema';

export const GroupHeadUpdateToOneWithWhereWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadUpdateToOneWithWhereWithoutAmpluaInput> = z.object({
  where: z.lazy(() => GroupHeadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GroupHeadUpdateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedUpdateWithoutAmpluaInputSchema) ]),
}).strict();

export default GroupHeadUpdateToOneWithWhereWithoutAmpluaInputSchema;
