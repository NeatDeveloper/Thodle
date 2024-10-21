import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutAmpluaInputSchema } from './UserUpdateWithoutAmpluaInputSchema';
import { UserUncheckedUpdateWithoutAmpluaInputSchema } from './UserUncheckedUpdateWithoutAmpluaInputSchema';
import { UserCreateWithoutAmpluaInputSchema } from './UserCreateWithoutAmpluaInputSchema';
import { UserUncheckedCreateWithoutAmpluaInputSchema } from './UserUncheckedCreateWithoutAmpluaInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutAmpluaInputSchema: z.ZodType<Prisma.UserUpsertWithoutAmpluaInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAmpluaInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedCreateWithoutAmpluaInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutAmpluaInputSchema;
