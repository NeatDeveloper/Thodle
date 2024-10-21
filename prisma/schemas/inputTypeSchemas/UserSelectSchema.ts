import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  lastName: z.boolean().optional(),
  firstName: z.boolean().optional(),
  username: z.boolean().optional(),
  role: z.boolean().optional(),
  lang: z.boolean().optional(),
  isBot: z.boolean().optional(),
  isPremium: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export default UserSelectSchema;
