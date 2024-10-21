import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineSelectSchema } from '../inputTypeSchemas/DisciplineSelectSchema';
import { DisciplineIncludeSchema } from '../inputTypeSchemas/DisciplineIncludeSchema';

export const DisciplineArgsSchema: z.ZodType<Prisma.DisciplineDefaultArgs> = z.object({
  select: z.lazy(() => DisciplineSelectSchema).optional(),
  include: z.lazy(() => DisciplineIncludeSchema).optional(),
}).strict();

export default DisciplineArgsSchema;
