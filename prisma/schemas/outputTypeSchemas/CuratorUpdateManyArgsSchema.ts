import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CuratorUpdateManyMutationInputSchema } from '../inputTypeSchemas/CuratorUpdateManyMutationInputSchema'
import { CuratorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CuratorUncheckedUpdateManyInputSchema'
import { CuratorWhereInputSchema } from '../inputTypeSchemas/CuratorWhereInputSchema'

export const CuratorUpdateManyArgsSchema: z.ZodType<Prisma.CuratorUpdateManyArgs> = z.object({
  data: z.union([ CuratorUpdateManyMutationInputSchema,CuratorUncheckedUpdateManyInputSchema ]),
  where: CuratorWhereInputSchema.optional(),
}).strict() ;

export default CuratorUpdateManyArgsSchema;
