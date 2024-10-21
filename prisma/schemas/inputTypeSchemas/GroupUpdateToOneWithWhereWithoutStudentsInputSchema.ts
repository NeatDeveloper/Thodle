import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';
import { GroupUpdateWithoutStudentsInputSchema } from './GroupUpdateWithoutStudentsInputSchema';
import { GroupUncheckedUpdateWithoutStudentsInputSchema } from './GroupUncheckedUpdateWithoutStudentsInputSchema';

export const GroupUpdateToOneWithWhereWithoutStudentsInputSchema: z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutStudentsInput> = z.object({
  where: z.lazy(() => GroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GroupUpdateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutStudentsInputSchema) ]),
}).strict();

export default GroupUpdateToOneWithWhereWithoutStudentsInputSchema;
