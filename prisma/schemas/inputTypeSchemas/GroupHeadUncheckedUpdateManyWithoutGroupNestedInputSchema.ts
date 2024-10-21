import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadCreateWithoutGroupInputSchema } from './GroupHeadCreateWithoutGroupInputSchema';
import { GroupHeadUncheckedCreateWithoutGroupInputSchema } from './GroupHeadUncheckedCreateWithoutGroupInputSchema';
import { GroupHeadCreateOrConnectWithoutGroupInputSchema } from './GroupHeadCreateOrConnectWithoutGroupInputSchema';
import { GroupHeadUpsertWithWhereUniqueWithoutGroupInputSchema } from './GroupHeadUpsertWithWhereUniqueWithoutGroupInputSchema';
import { GroupHeadCreateManyGroupInputEnvelopeSchema } from './GroupHeadCreateManyGroupInputEnvelopeSchema';
import { GroupHeadWhereUniqueInputSchema } from './GroupHeadWhereUniqueInputSchema';
import { GroupHeadUpdateWithWhereUniqueWithoutGroupInputSchema } from './GroupHeadUpdateWithWhereUniqueWithoutGroupInputSchema';
import { GroupHeadUpdateManyWithWhereWithoutGroupInputSchema } from './GroupHeadUpdateManyWithWhereWithoutGroupInputSchema';
import { GroupHeadScalarWhereInputSchema } from './GroupHeadScalarWhereInputSchema';

export const GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema: z.ZodType<Prisma.GroupHeadUncheckedUpdateManyWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadCreateWithoutGroupInputSchema).array(),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupHeadCreateOrConnectWithoutGroupInputSchema),z.lazy(() => GroupHeadCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GroupHeadUpsertWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => GroupHeadUpsertWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupHeadCreateManyGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GroupHeadUpdateWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => GroupHeadUpdateWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GroupHeadUpdateManyWithWhereWithoutGroupInputSchema),z.lazy(() => GroupHeadUpdateManyWithWhereWithoutGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GroupHeadScalarWhereInputSchema),z.lazy(() => GroupHeadScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema;
