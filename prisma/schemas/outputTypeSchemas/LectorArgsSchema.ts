import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorSelectSchema } from '../inputTypeSchemas/LectorSelectSchema';
import { LectorIncludeSchema } from '../inputTypeSchemas/LectorIncludeSchema';

export const LectorArgsSchema: z.ZodType<Prisma.LectorDefaultArgs> = z.object({
  select: z.lazy(() => LectorSelectSchema).optional(),
  include: z.lazy(() => LectorIncludeSchema).optional(),
}).strict();

export default LectorArgsSchema;
