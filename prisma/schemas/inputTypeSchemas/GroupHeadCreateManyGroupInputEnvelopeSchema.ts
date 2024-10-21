import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadCreateManyGroupInputSchema } from './GroupHeadCreateManyGroupInputSchema';

export const GroupHeadCreateManyGroupInputEnvelopeSchema: z.ZodType<Prisma.GroupHeadCreateManyGroupInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GroupHeadCreateManyGroupInputSchema),z.lazy(() => GroupHeadCreateManyGroupInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default GroupHeadCreateManyGroupInputEnvelopeSchema;
