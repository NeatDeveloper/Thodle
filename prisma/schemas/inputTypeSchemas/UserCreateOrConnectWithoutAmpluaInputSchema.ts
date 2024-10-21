import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutAmpluaInputSchema } from './UserCreateWithoutAmpluaInputSchema';
import { UserUncheckedCreateWithoutAmpluaInputSchema } from './UserUncheckedCreateWithoutAmpluaInputSchema';

export const UserCreateOrConnectWithoutAmpluaInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAmpluaInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedCreateWithoutAmpluaInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutAmpluaInputSchema;
