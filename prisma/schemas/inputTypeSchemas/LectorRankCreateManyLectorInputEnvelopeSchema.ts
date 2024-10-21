import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankCreateManyLectorInputSchema } from './LectorRankCreateManyLectorInputSchema';

export const LectorRankCreateManyLectorInputEnvelopeSchema: z.ZodType<Prisma.LectorRankCreateManyLectorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LectorRankCreateManyLectorInputSchema),z.lazy(() => LectorRankCreateManyLectorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LectorRankCreateManyLectorInputEnvelopeSchema;
