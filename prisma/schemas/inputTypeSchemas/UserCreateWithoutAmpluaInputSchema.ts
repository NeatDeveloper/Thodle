import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleSchema } from './UserRoleSchema';
import { LangSchema } from './LangSchema';

export const UserCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.UserCreateWithoutAmpluaInput> = z.object({
  id: z.string().uuid().optional(),
  tgID: z.bigint(),
  lastName: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  username: z.string().optional().nullable(),
  role: z.lazy(() => UserRoleSchema).optional(),
  lang: z.lazy(() => LangSchema),
  isBot: z.boolean(),
  isPremium: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserCreateWithoutAmpluaInputSchema;
