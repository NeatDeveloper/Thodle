import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateWithoutStudentsInputSchema } from './GroupCreateWithoutStudentsInputSchema';
import { GroupUncheckedCreateWithoutStudentsInputSchema } from './GroupUncheckedCreateWithoutStudentsInputSchema';
import { GroupCreateOrConnectWithoutStudentsInputSchema } from './GroupCreateOrConnectWithoutStudentsInputSchema';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';

export const GroupCreateNestedOneWithoutStudentsInputSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutStudentsInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutStudentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutStudentsInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional()
}).strict();

export default GroupCreateNestedOneWithoutStudentsInputSchema;
