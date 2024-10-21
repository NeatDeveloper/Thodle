import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupCreateManyInputSchema } from '../inputTypeSchemas/GroupCreateManyInputSchema'

export const GroupCreateManyArgsSchema: z.ZodType<Prisma.GroupCreateManyArgs> = z.object({
  data: z.union([ GroupCreateManyInputSchema,GroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default GroupCreateManyArgsSchema;
