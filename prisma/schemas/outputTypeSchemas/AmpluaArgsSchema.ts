import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AmpluaSelectSchema } from '../inputTypeSchemas/AmpluaSelectSchema';
import { AmpluaIncludeSchema } from '../inputTypeSchemas/AmpluaIncludeSchema';

export const AmpluaArgsSchema: z.ZodType<Prisma.AmpluaDefaultArgs> = z.object({
  select: z.lazy(() => AmpluaSelectSchema).optional(),
  include: z.lazy(() => AmpluaIncludeSchema).optional(),
}).strict();

export default AmpluaArgsSchema;
