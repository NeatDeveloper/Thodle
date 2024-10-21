import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadCreateWithoutAmpluaInputSchema } from './GroupHeadCreateWithoutAmpluaInputSchema';
import { GroupHeadUncheckedCreateWithoutAmpluaInputSchema } from './GroupHeadUncheckedCreateWithoutAmpluaInputSchema';
import { GroupHeadCreateOrConnectWithoutAmpluaInputSchema } from './GroupHeadCreateOrConnectWithoutAmpluaInputSchema';
import { GroupHeadUpsertWithoutAmpluaInputSchema } from './GroupHeadUpsertWithoutAmpluaInputSchema';
import { GroupHeadWhereInputSchema } from './GroupHeadWhereInputSchema';
import { GroupHeadWhereUniqueInputSchema } from './GroupHeadWhereUniqueInputSchema';
import { GroupHeadUpdateToOneWithWhereWithoutAmpluaInputSchema } from './GroupHeadUpdateToOneWithWhereWithoutAmpluaInputSchema';
import { GroupHeadUpdateWithoutAmpluaInputSchema } from './GroupHeadUpdateWithoutAmpluaInputSchema';
import { GroupHeadUncheckedUpdateWithoutAmpluaInputSchema } from './GroupHeadUncheckedUpdateWithoutAmpluaInputSchema';

export const GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupHeadCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => GroupHeadUpsertWithoutAmpluaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GroupHeadWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GroupHeadWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GroupHeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupHeadUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUpdateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export default GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema;
