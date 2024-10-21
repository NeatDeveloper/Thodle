import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupHeadUpdateManyMutationInputSchema } from '../inputTypeSchemas/GroupHeadUpdateManyMutationInputSchema'
import { GroupHeadUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/GroupHeadUncheckedUpdateManyInputSchema'
import { GroupHeadWhereInputSchema } from '../inputTypeSchemas/GroupHeadWhereInputSchema'

export const GroupHeadUpdateManyArgsSchema: z.ZodType<Prisma.GroupHeadUpdateManyArgs> = z.object({
  data: z.union([ GroupHeadUpdateManyMutationInputSchema,GroupHeadUncheckedUpdateManyInputSchema ]),
  where: GroupHeadWhereInputSchema.optional(),
}).strict() ;

export default GroupHeadUpdateManyArgsSchema;
