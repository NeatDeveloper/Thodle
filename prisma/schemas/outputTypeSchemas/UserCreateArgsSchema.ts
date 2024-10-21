import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserCreateInputSchema } from '../inputTypeSchemas/UserCreateInputSchema'
import { UserUncheckedCreateInputSchema } from '../inputTypeSchemas/UserUncheckedCreateInputSchema'
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export default UserCreateArgsSchema;
