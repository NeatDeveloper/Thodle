import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupWhereInputSchema } from '../inputTypeSchemas/GroupWhereInputSchema'

export const GroupDeleteManyArgsSchema: z.ZodType<Prisma.GroupDeleteManyArgs> = z.object({
  where: GroupWhereInputSchema.optional(),
}).strict() ;

export default GroupDeleteManyArgsSchema;
