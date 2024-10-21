import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CuratorIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.CuratorIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export default CuratorIdTgIDCompoundUniqueInputSchema;
