import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadWhereUniqueInputSchema } from './GroupHeadWhereUniqueInputSchema';
import { GroupHeadCreateWithoutGroupInputSchema } from './GroupHeadCreateWithoutGroupInputSchema';
import { GroupHeadUncheckedCreateWithoutGroupInputSchema } from './GroupHeadUncheckedCreateWithoutGroupInputSchema';

export const GroupHeadCreateOrConnectWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadCreateOrConnectWithoutGroupInput> = z.object({
  where: z.lazy(() => GroupHeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export default GroupHeadCreateOrConnectWithoutGroupInputSchema;
