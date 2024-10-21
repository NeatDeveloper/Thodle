import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.UserIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export default UserIdTgIDCompoundUniqueInputSchema;
