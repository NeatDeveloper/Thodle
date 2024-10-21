import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupHeadWhereInputSchema } from '../inputTypeSchemas/GroupHeadWhereInputSchema'

export const GroupHeadDeleteManyArgsSchema: z.ZodType<Prisma.GroupHeadDeleteManyArgs> = z.object({
  where: GroupHeadWhereInputSchema.optional(),
}).strict() ;

export default GroupHeadDeleteManyArgsSchema;
