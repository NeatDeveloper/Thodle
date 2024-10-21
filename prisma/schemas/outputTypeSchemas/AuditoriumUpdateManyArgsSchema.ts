import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditoriumUpdateManyMutationInputSchema } from '../inputTypeSchemas/AuditoriumUpdateManyMutationInputSchema'
import { AuditoriumUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AuditoriumUncheckedUpdateManyInputSchema'
import { AuditoriumWhereInputSchema } from '../inputTypeSchemas/AuditoriumWhereInputSchema'

export const AuditoriumUpdateManyArgsSchema: z.ZodType<Prisma.AuditoriumUpdateManyArgs> = z.object({
  data: z.union([ AuditoriumUpdateManyMutationInputSchema,AuditoriumUncheckedUpdateManyInputSchema ]),
  where: AuditoriumWhereInputSchema.optional(),
}).strict() ;

export default AuditoriumUpdateManyArgsSchema;
