import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversityCountOutputTypeSelectSchema } from './UniversityCountOutputTypeSelectSchema';

export const UniversityCountOutputTypeArgsSchema: z.ZodType<Prisma.UniversityCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UniversityCountOutputTypeSelectSchema).nullish(),
}).strict();

export default UniversityCountOutputTypeSelectSchema;
