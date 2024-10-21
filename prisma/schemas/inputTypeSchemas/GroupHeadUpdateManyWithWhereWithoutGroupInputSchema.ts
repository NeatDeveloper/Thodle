import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadScalarWhereInputSchema } from './GroupHeadScalarWhereInputSchema';
import { GroupHeadUpdateManyMutationInputSchema } from './GroupHeadUpdateManyMutationInputSchema';
import { GroupHeadUncheckedUpdateManyWithoutGroupInputSchema } from './GroupHeadUncheckedUpdateManyWithoutGroupInputSchema';

export const GroupHeadUpdateManyWithWhereWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUpdateManyWithWhereWithoutGroupInput> = z.object({
  where: z.lazy(() => GroupHeadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GroupHeadUpdateManyMutationInputSchema),z.lazy(() => GroupHeadUncheckedUpdateManyWithoutGroupInputSchema) ]),
}).strict();

export default GroupHeadUpdateManyWithWhereWithoutGroupInputSchema;
