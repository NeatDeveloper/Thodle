import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';

export const AmpluaCreateampluaInputSchema: z.ZodType<Prisma.AmpluaCreateampluaInput> = z.object({
  set: z.lazy(() => AmpluaEnumSchema).array()
}).strict();

export default AmpluaCreateampluaInputSchema;
