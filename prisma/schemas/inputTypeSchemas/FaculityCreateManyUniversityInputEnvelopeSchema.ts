import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityCreateManyUniversityInputSchema } from './FaculityCreateManyUniversityInputSchema';

export const FaculityCreateManyUniversityInputEnvelopeSchema: z.ZodType<Prisma.FaculityCreateManyUniversityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FaculityCreateManyUniversityInputSchema),z.lazy(() => FaculityCreateManyUniversityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default FaculityCreateManyUniversityInputEnvelopeSchema;
