import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupCreateManyInputSchema } from '../inputTypeSchemas/GroupCreateManyInputSchema'

export const GroupCreateManyAndReturnArgsSchema: z.ZodType<Prisma.GroupCreateManyAndReturnArgs> = z.object({
  data: z.union([ GroupCreateManyInputSchema,GroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default GroupCreateManyAndReturnArgsSchema;
