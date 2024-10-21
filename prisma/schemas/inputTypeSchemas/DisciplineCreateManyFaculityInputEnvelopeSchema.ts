import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineCreateManyFaculityInputSchema } from './DisciplineCreateManyFaculityInputSchema';

export const DisciplineCreateManyFaculityInputEnvelopeSchema: z.ZodType<Prisma.DisciplineCreateManyFaculityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DisciplineCreateManyFaculityInputSchema),z.lazy(() => DisciplineCreateManyFaculityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DisciplineCreateManyFaculityInputEnvelopeSchema;
