import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorCountOutputTypeSelectSchema } from './LectorCountOutputTypeSelectSchema';

export const LectorCountOutputTypeArgsSchema: z.ZodType<Prisma.LectorCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LectorCountOutputTypeSelectSchema).nullish(),
}).strict();

export default LectorCountOutputTypeSelectSchema;
