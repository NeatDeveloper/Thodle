import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditoriumSelectSchema } from '../inputTypeSchemas/AuditoriumSelectSchema';
import { AuditoriumIncludeSchema } from '../inputTypeSchemas/AuditoriumIncludeSchema';

export const AuditoriumArgsSchema: z.ZodType<Prisma.AuditoriumDefaultArgs> = z.object({
  select: z.lazy(() => AuditoriumSelectSchema).optional(),
  include: z.lazy(() => AuditoriumIncludeSchema).optional(),
}).strict();

export default AuditoriumArgsSchema;
