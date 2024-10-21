import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingCreateManyUniversityInputSchema } from './BuildingCreateManyUniversityInputSchema';

export const BuildingCreateManyUniversityInputEnvelopeSchema: z.ZodType<Prisma.BuildingCreateManyUniversityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BuildingCreateManyUniversityInputSchema),z.lazy(() => BuildingCreateManyUniversityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BuildingCreateManyUniversityInputEnvelopeSchema;
