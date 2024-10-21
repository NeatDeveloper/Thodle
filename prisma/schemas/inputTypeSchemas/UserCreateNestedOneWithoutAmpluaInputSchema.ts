import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutAmpluaInputSchema } from './UserCreateWithoutAmpluaInputSchema';
import { UserUncheckedCreateWithoutAmpluaInputSchema } from './UserUncheckedCreateWithoutAmpluaInputSchema';
import { UserCreateOrConnectWithoutAmpluaInputSchema } from './UserCreateOrConnectWithoutAmpluaInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutAmpluaInputSchema;
