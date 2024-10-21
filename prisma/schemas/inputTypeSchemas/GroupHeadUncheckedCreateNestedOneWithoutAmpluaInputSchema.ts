import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadCreateWithoutAmpluaInputSchema } from './GroupHeadCreateWithoutAmpluaInputSchema';
import { GroupHeadUncheckedCreateWithoutAmpluaInputSchema } from './GroupHeadUncheckedCreateWithoutAmpluaInputSchema';
import { GroupHeadCreateOrConnectWithoutAmpluaInputSchema } from './GroupHeadCreateOrConnectWithoutAmpluaInputSchema';
import { GroupHeadWhereUniqueInputSchema } from './GroupHeadWhereUniqueInputSchema';

export const GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadUncheckedCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupHeadCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => GroupHeadWhereUniqueInputSchema).optional()
}).strict();

export default GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema;
