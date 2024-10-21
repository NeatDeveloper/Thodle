import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaculityUpdateManyMutationInputSchema } from '../inputTypeSchemas/FaculityUpdateManyMutationInputSchema'
import { FaculityUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/FaculityUncheckedUpdateManyInputSchema'
import { FaculityWhereInputSchema } from '../inputTypeSchemas/FaculityWhereInputSchema'

export const FaculityUpdateManyArgsSchema: z.ZodType<Prisma.FaculityUpdateManyArgs> = z.object({
  data: z.union([ FaculityUpdateManyMutationInputSchema,FaculityUncheckedUpdateManyInputSchema ]),
  where: FaculityWhereInputSchema.optional(),
}).strict() ;

export default FaculityUpdateManyArgsSchema;
