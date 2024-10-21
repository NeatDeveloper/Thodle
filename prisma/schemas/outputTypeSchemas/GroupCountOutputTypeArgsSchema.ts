import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupCountOutputTypeSelectSchema } from './GroupCountOutputTypeSelectSchema';

export const GroupCountOutputTypeArgsSchema: z.ZodType<Prisma.GroupCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => GroupCountOutputTypeSelectSchema).nullish(),
}).strict();

export default GroupCountOutputTypeSelectSchema;
