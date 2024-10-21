import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorUpdateManyMutationInputSchema } from '../inputTypeSchemas/LectorUpdateManyMutationInputSchema'
import { LectorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LectorUncheckedUpdateManyInputSchema'
import { LectorWhereInputSchema } from '../inputTypeSchemas/LectorWhereInputSchema'

export const LectorUpdateManyArgsSchema: z.ZodType<Prisma.LectorUpdateManyArgs> = z.object({
  data: z.union([ LectorUpdateManyMutationInputSchema,LectorUncheckedUpdateManyInputSchema ]),
  where: LectorWhereInputSchema.optional(),
}).strict() ;

export default LectorUpdateManyArgsSchema;
