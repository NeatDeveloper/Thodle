import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineCountOutputTypeSelectSchema } from './DisciplineCountOutputTypeSelectSchema';

export const DisciplineCountOutputTypeArgsSchema: z.ZodType<Prisma.DisciplineCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DisciplineCountOutputTypeSelectSchema).nullish(),
}).strict();

export default DisciplineCountOutputTypeSelectSchema;
