import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateWithoutStudentsInputSchema } from './GroupCreateWithoutStudentsInputSchema';
import { GroupUncheckedCreateWithoutStudentsInputSchema } from './GroupUncheckedCreateWithoutStudentsInputSchema';
import { GroupCreateOrConnectWithoutStudentsInputSchema } from './GroupCreateOrConnectWithoutStudentsInputSchema';
import { GroupUpsertWithoutStudentsInputSchema } from './GroupUpsertWithoutStudentsInputSchema';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';
import { GroupUpdateToOneWithWhereWithoutStudentsInputSchema } from './GroupUpdateToOneWithWhereWithoutStudentsInputSchema';
import { GroupUpdateWithoutStudentsInputSchema } from './GroupUpdateWithoutStudentsInputSchema';
import { GroupUncheckedUpdateWithoutStudentsInputSchema } from './GroupUncheckedUpdateWithoutStudentsInputSchema';

export const GroupUpdateOneWithoutStudentsNestedInputSchema: z.ZodType<Prisma.GroupUpdateOneWithoutStudentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutStudentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutStudentsInputSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutStudentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupUpdateToOneWithWhereWithoutStudentsInputSchema),z.lazy(() => GroupUpdateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutStudentsInputSchema) ]).optional(),
}).strict();

export default GroupUpdateOneWithoutStudentsNestedInputSchema;
