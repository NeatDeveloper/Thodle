import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadWhereUniqueInputSchema } from './GroupHeadWhereUniqueInputSchema';
import { GroupHeadCreateWithoutAmpluaInputSchema } from './GroupHeadCreateWithoutAmpluaInputSchema';
import { GroupHeadUncheckedCreateWithoutAmpluaInputSchema } from './GroupHeadUncheckedCreateWithoutAmpluaInputSchema';

export const GroupHeadCreateOrConnectWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadCreateOrConnectWithoutAmpluaInput> = z.object({
  where: z.lazy(() => GroupHeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutAmpluaInputSchema) ]),
}).strict();

export default GroupHeadCreateOrConnectWithoutAmpluaInputSchema;
