import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';
import { GroupCreateWithoutTutorInputSchema } from './GroupCreateWithoutTutorInputSchema';
import { GroupUncheckedCreateWithoutTutorInputSchema } from './GroupUncheckedCreateWithoutTutorInputSchema';

export const GroupCreateOrConnectWithoutTutorInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutTutorInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutTutorInputSchema) ]),
}).strict();

export default GroupCreateOrConnectWithoutTutorInputSchema;
