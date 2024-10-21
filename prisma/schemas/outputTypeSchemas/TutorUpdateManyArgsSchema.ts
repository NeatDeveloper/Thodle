import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TutorUpdateManyMutationInputSchema } from '../inputTypeSchemas/TutorUpdateManyMutationInputSchema'
import { TutorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TutorUncheckedUpdateManyInputSchema'
import { TutorWhereInputSchema } from '../inputTypeSchemas/TutorWhereInputSchema'

export const TutorUpdateManyArgsSchema: z.ZodType<Prisma.TutorUpdateManyArgs> = z.object({
  data: z.union([ TutorUpdateManyMutationInputSchema,TutorUncheckedUpdateManyInputSchema ]),
  where: TutorWhereInputSchema.optional(),
}).strict() ;

export default TutorUpdateManyArgsSchema;
