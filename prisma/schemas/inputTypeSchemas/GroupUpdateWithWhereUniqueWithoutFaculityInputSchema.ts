import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';
import { GroupUpdateWithoutFaculityInputSchema } from './GroupUpdateWithoutFaculityInputSchema';
import { GroupUncheckedUpdateWithoutFaculityInputSchema } from './GroupUncheckedUpdateWithoutFaculityInputSchema';

export const GroupUpdateWithWhereUniqueWithoutFaculityInputSchema: z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutFaculityInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GroupUpdateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutFaculityInputSchema) ]),
}).strict();

export default GroupUpdateWithWhereUniqueWithoutFaculityInputSchema;
