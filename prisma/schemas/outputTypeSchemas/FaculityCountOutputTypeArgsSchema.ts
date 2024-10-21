import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaculityCountOutputTypeSelectSchema } from './FaculityCountOutputTypeSelectSchema';

export const FaculityCountOutputTypeArgsSchema: z.ZodType<Prisma.FaculityCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => FaculityCountOutputTypeSelectSchema).nullish(),
}).strict();

export default FaculityCountOutputTypeSelectSchema;
