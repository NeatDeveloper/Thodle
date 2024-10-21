import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorRankSelectSchema } from '../inputTypeSchemas/LectorRankSelectSchema';
import { LectorRankIncludeSchema } from '../inputTypeSchemas/LectorRankIncludeSchema';

export const LectorRankArgsSchema: z.ZodType<Prisma.LectorRankDefaultArgs> = z.object({
  select: z.lazy(() => LectorRankSelectSchema).optional(),
  include: z.lazy(() => LectorRankIncludeSchema).optional(),
}).strict();

export default LectorRankArgsSchema;
