import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadUpdateWithoutAmpluaInputSchema } from './GroupHeadUpdateWithoutAmpluaInputSchema';
import { GroupHeadUncheckedUpdateWithoutAmpluaInputSchema } from './GroupHeadUncheckedUpdateWithoutAmpluaInputSchema';
import { GroupHeadCreateWithoutAmpluaInputSchema } from './GroupHeadCreateWithoutAmpluaInputSchema';
import { GroupHeadUncheckedCreateWithoutAmpluaInputSchema } from './GroupHeadUncheckedCreateWithoutAmpluaInputSchema';
import { GroupHeadWhereInputSchema } from './GroupHeadWhereInputSchema';

export const GroupHeadUpsertWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadUpsertWithoutAmpluaInput> = z.object({
  update: z.union([ z.lazy(() => GroupHeadUpdateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedUpdateWithoutAmpluaInputSchema) ]),
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutAmpluaInputSchema) ]),
  where: z.lazy(() => GroupHeadWhereInputSchema).optional()
}).strict();

export default GroupHeadUpsertWithoutAmpluaInputSchema;
