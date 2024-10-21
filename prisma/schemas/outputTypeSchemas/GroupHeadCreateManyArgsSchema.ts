import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupHeadCreateManyInputSchema } from '../inputTypeSchemas/GroupHeadCreateManyInputSchema'

export const GroupHeadCreateManyArgsSchema: z.ZodType<Prisma.GroupHeadCreateManyArgs> = z.object({
  data: z.union([ GroupHeadCreateManyInputSchema,GroupHeadCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default GroupHeadCreateManyArgsSchema;
