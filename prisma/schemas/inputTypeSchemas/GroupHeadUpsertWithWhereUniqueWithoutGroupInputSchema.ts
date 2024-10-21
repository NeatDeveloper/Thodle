import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadWhereUniqueInputSchema } from './GroupHeadWhereUniqueInputSchema';
import { GroupHeadUpdateWithoutGroupInputSchema } from './GroupHeadUpdateWithoutGroupInputSchema';
import { GroupHeadUncheckedUpdateWithoutGroupInputSchema } from './GroupHeadUncheckedUpdateWithoutGroupInputSchema';
import { GroupHeadCreateWithoutGroupInputSchema } from './GroupHeadCreateWithoutGroupInputSchema';
import { GroupHeadUncheckedCreateWithoutGroupInputSchema } from './GroupHeadUncheckedCreateWithoutGroupInputSchema';

export const GroupHeadUpsertWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUpsertWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => GroupHeadWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GroupHeadUpdateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedUpdateWithoutGroupInputSchema) ]),
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export default GroupHeadUpsertWithWhereUniqueWithoutGroupInputSchema;
