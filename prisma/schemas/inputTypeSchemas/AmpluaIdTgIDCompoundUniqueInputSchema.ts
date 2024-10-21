import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AmpluaIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.AmpluaIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export default AmpluaIdTgIDCompoundUniqueInputSchema;
