import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateWithoutTutorInputSchema } from './GroupCreateWithoutTutorInputSchema';
import { GroupUncheckedCreateWithoutTutorInputSchema } from './GroupUncheckedCreateWithoutTutorInputSchema';
import { GroupCreateOrConnectWithoutTutorInputSchema } from './GroupCreateOrConnectWithoutTutorInputSchema';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';

export const GroupCreateNestedOneWithoutTutorInputSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutTutorInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutTutorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutTutorInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional()
}).strict();

export default GroupCreateNestedOneWithoutTutorInputSchema;
