import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekCreateManyUniversityInputSchema } from './WeekCreateManyUniversityInputSchema';

export const WeekCreateManyUniversityInputEnvelopeSchema: z.ZodType<Prisma.WeekCreateManyUniversityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WeekCreateManyUniversityInputSchema),z.lazy(() => WeekCreateManyUniversityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WeekCreateManyUniversityInputEnvelopeSchema;
