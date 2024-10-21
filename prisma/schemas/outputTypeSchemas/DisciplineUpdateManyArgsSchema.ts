import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineUpdateManyMutationInputSchema } from '../inputTypeSchemas/DisciplineUpdateManyMutationInputSchema'
import { DisciplineUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DisciplineUncheckedUpdateManyInputSchema'
import { DisciplineWhereInputSchema } from '../inputTypeSchemas/DisciplineWhereInputSchema'

export const DisciplineUpdateManyArgsSchema: z.ZodType<Prisma.DisciplineUpdateManyArgs> = z.object({
  data: z.union([ DisciplineUpdateManyMutationInputSchema,DisciplineUncheckedUpdateManyInputSchema ]),
  where: DisciplineWhereInputSchema.optional(),
}).strict() ;

export default DisciplineUpdateManyArgsSchema;
