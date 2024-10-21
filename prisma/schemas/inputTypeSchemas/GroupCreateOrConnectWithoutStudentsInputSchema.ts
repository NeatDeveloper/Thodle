import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';
import { GroupCreateWithoutStudentsInputSchema } from './GroupCreateWithoutStudentsInputSchema';
import { GroupUncheckedCreateWithoutStudentsInputSchema } from './GroupUncheckedCreateWithoutStudentsInputSchema';

export const GroupCreateOrConnectWithoutStudentsInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutStudentsInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutStudentsInputSchema) ]),
}).strict();

export default GroupCreateOrConnectWithoutStudentsInputSchema;
