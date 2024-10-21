import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LectorIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.LectorIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export default LectorIdTgIDCompoundUniqueInputSchema;
