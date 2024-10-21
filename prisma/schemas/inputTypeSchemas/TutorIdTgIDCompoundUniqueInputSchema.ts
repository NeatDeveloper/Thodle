import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TutorIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.TutorIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export default TutorIdTgIDCompoundUniqueInputSchema;
