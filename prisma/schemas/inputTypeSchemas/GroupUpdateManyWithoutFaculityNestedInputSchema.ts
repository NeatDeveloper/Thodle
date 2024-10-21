import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateWithoutFaculityInputSchema } from './GroupCreateWithoutFaculityInputSchema';
import { GroupUncheckedCreateWithoutFaculityInputSchema } from './GroupUncheckedCreateWithoutFaculityInputSchema';
import { GroupCreateOrConnectWithoutFaculityInputSchema } from './GroupCreateOrConnectWithoutFaculityInputSchema';
import { GroupUpsertWithWhereUniqueWithoutFaculityInputSchema } from './GroupUpsertWithWhereUniqueWithoutFaculityInputSchema';
import { GroupCreateManyFaculityInputEnvelopeSchema } from './GroupCreateManyFaculityInputEnvelopeSchema';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';
import { GroupUpdateWithWhereUniqueWithoutFaculityInputSchema } from './GroupUpdateWithWhereUniqueWithoutFaculityInputSchema';
import { GroupUpdateManyWithWhereWithoutFaculityInputSchema } from './GroupUpdateManyWithWhereWithoutFaculityInputSchema';
import { GroupScalarWhereInputSchema } from './GroupScalarWhereInputSchema';

export const GroupUpdateManyWithoutFaculityNestedInputSchema: z.ZodType<Prisma.GroupUpdateManyWithoutFaculityNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutFaculityInputSchema),z.lazy(() => GroupCreateWithoutFaculityInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => GroupCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GroupUpsertWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => GroupUpsertWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyFaculityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GroupUpdateWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => GroupUpdateWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GroupUpdateManyWithWhereWithoutFaculityInputSchema),z.lazy(() => GroupUpdateManyWithWhereWithoutFaculityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GroupScalarWhereInputSchema),z.lazy(() => GroupScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default GroupUpdateManyWithoutFaculityNestedInputSchema;
