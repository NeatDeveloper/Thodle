import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AmpluaUpdateManyMutationInputSchema } from '../inputTypeSchemas/AmpluaUpdateManyMutationInputSchema'
import { AmpluaUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AmpluaUncheckedUpdateManyInputSchema'
import { AmpluaWhereInputSchema } from '../inputTypeSchemas/AmpluaWhereInputSchema'

export const AmpluaUpdateManyArgsSchema: z.ZodType<Prisma.AmpluaUpdateManyArgs> = z.object({
  data: z.union([ AmpluaUpdateManyMutationInputSchema,AmpluaUncheckedUpdateManyInputSchema ]),
  where: AmpluaWhereInputSchema.optional(),
}).strict() ;

export default AmpluaUpdateManyArgsSchema;
