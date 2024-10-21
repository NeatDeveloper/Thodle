import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';

export const AmpluaUpdateampluaInputSchema: z.ZodType<Prisma.AmpluaUpdateampluaInput> = z.object({
  set: z.lazy(() => AmpluaEnumSchema).array().optional(),
  push: z.union([ z.lazy(() => AmpluaEnumSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
}).strict();

export default AmpluaUpdateampluaInputSchema;
