import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutAmpluaInputSchema } from './UserUpdateWithoutAmpluaInputSchema';
import { UserUncheckedUpdateWithoutAmpluaInputSchema } from './UserUncheckedUpdateWithoutAmpluaInputSchema';

export const UserUpdateToOneWithWhereWithoutAmpluaInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAmpluaInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAmpluaInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutAmpluaInputSchema;
