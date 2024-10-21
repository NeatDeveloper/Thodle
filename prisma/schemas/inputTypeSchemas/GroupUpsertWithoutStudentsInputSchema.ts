import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupUpdateWithoutStudentsInputSchema } from './GroupUpdateWithoutStudentsInputSchema';
import { GroupUncheckedUpdateWithoutStudentsInputSchema } from './GroupUncheckedUpdateWithoutStudentsInputSchema';
import { GroupCreateWithoutStudentsInputSchema } from './GroupCreateWithoutStudentsInputSchema';
import { GroupUncheckedCreateWithoutStudentsInputSchema } from './GroupUncheckedCreateWithoutStudentsInputSchema';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';

export const GroupUpsertWithoutStudentsInputSchema: z.ZodType<Prisma.GroupUpsertWithoutStudentsInput> = z.object({
  update: z.union([ z.lazy(() => GroupUpdateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutStudentsInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutStudentsInputSchema) ]),
  where: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export default GroupUpsertWithoutStudentsInputSchema;
