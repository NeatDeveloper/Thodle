import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateWithoutFaculityInputSchema } from './GroupCreateWithoutFaculityInputSchema';
import { GroupUncheckedCreateWithoutFaculityInputSchema } from './GroupUncheckedCreateWithoutFaculityInputSchema';
import { GroupCreateOrConnectWithoutFaculityInputSchema } from './GroupCreateOrConnectWithoutFaculityInputSchema';
import { GroupCreateManyFaculityInputEnvelopeSchema } from './GroupCreateManyFaculityInputEnvelopeSchema';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';

export const GroupCreateNestedManyWithoutFaculityInputSchema: z.ZodType<Prisma.GroupCreateNestedManyWithoutFaculityInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutFaculityInputSchema),z.lazy(() => GroupCreateWithoutFaculityInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => GroupCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyFaculityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default GroupCreateNestedManyWithoutFaculityInputSchema;
