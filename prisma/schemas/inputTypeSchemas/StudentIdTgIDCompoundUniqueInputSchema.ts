import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StudentIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.StudentIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export default StudentIdTgIDCompoundUniqueInputSchema;
