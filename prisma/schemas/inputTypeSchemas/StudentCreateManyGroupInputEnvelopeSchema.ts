import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentCreateManyGroupInputSchema } from './StudentCreateManyGroupInputSchema';

export const StudentCreateManyGroupInputEnvelopeSchema: z.ZodType<Prisma.StudentCreateManyGroupInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => StudentCreateManyGroupInputSchema),z.lazy(() => StudentCreateManyGroupInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default StudentCreateManyGroupInputEnvelopeSchema;
