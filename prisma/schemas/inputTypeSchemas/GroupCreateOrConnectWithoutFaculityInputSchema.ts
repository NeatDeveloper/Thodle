import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';
import { GroupCreateWithoutFaculityInputSchema } from './GroupCreateWithoutFaculityInputSchema';
import { GroupUncheckedCreateWithoutFaculityInputSchema } from './GroupUncheckedCreateWithoutFaculityInputSchema';

export const GroupCreateOrConnectWithoutFaculityInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutFaculityInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema) ]),
}).strict();

export default GroupCreateOrConnectWithoutFaculityInputSchema;
