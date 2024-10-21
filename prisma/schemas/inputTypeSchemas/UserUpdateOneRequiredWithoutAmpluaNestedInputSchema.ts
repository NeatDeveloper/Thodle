import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutAmpluaInputSchema } from './UserCreateWithoutAmpluaInputSchema';
import { UserUncheckedCreateWithoutAmpluaInputSchema } from './UserUncheckedCreateWithoutAmpluaInputSchema';
import { UserCreateOrConnectWithoutAmpluaInputSchema } from './UserCreateOrConnectWithoutAmpluaInputSchema';
import { UserUpsertWithoutAmpluaInputSchema } from './UserUpsertWithoutAmpluaInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutAmpluaInputSchema } from './UserUpdateToOneWithWhereWithoutAmpluaInputSchema';
import { UserUpdateWithoutAmpluaInputSchema } from './UserUpdateWithoutAmpluaInputSchema';
import { UserUncheckedUpdateWithoutAmpluaInputSchema } from './UserUncheckedUpdateWithoutAmpluaInputSchema';

export const UserUpdateOneRequiredWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => UserUpdateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutAmpluaNestedInputSchema;
