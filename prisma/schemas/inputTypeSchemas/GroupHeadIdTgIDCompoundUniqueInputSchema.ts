import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const GroupHeadIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.GroupHeadIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export default GroupHeadIdTgIDCompoundUniqueInputSchema;
