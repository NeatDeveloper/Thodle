import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditoriumCreateManyBuildingInputSchema } from './AuditoriumCreateManyBuildingInputSchema';

export const AuditoriumCreateManyBuildingInputEnvelopeSchema: z.ZodType<Prisma.AuditoriumCreateManyBuildingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AuditoriumCreateManyBuildingInputSchema),z.lazy(() => AuditoriumCreateManyBuildingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AuditoriumCreateManyBuildingInputEnvelopeSchema;
