import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversityUpdateManyMutationInputSchema } from '../inputTypeSchemas/UniversityUpdateManyMutationInputSchema'
import { UniversityUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UniversityUncheckedUpdateManyInputSchema'
import { UniversityWhereInputSchema } from '../inputTypeSchemas/UniversityWhereInputSchema'

export const UniversityUpdateManyArgsSchema: z.ZodType<Prisma.UniversityUpdateManyArgs> = z.object({
  data: z.union([ UniversityUpdateManyMutationInputSchema,UniversityUncheckedUpdateManyInputSchema ]),
  where: UniversityWhereInputSchema.optional(),
}).strict() ;

export default UniversityUpdateManyArgsSchema;
