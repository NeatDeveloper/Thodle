import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupUpdateManyMutationInputSchema } from '../inputTypeSchemas/GroupUpdateManyMutationInputSchema'
import { GroupUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/GroupUncheckedUpdateManyInputSchema'
import { GroupWhereInputSchema } from '../inputTypeSchemas/GroupWhereInputSchema'

export const GroupUpdateManyArgsSchema: z.ZodType<Prisma.GroupUpdateManyArgs> = z.object({
  data: z.union([ GroupUpdateManyMutationInputSchema,GroupUncheckedUpdateManyInputSchema ]),
  where: GroupWhereInputSchema.optional(),
}).strict() ;

export default GroupUpdateManyArgsSchema;
