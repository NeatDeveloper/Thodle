import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorCreateManyFaculityInputSchema } from './LectorCreateManyFaculityInputSchema';

export const LectorCreateManyFaculityInputEnvelopeSchema: z.ZodType<Prisma.LectorCreateManyFaculityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LectorCreateManyFaculityInputSchema),z.lazy(() => LectorCreateManyFaculityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default LectorCreateManyFaculityInputEnvelopeSchema;
