import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateManyFaculityInputSchema } from './GroupCreateManyFaculityInputSchema';

export const GroupCreateManyFaculityInputEnvelopeSchema: z.ZodType<Prisma.GroupCreateManyFaculityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GroupCreateManyFaculityInputSchema),z.lazy(() => GroupCreateManyFaculityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default GroupCreateManyFaculityInputEnvelopeSchema;
