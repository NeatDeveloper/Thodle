import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingUpdateManyMutationInputSchema } from '../inputTypeSchemas/BuildingUpdateManyMutationInputSchema'
import { BuildingUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BuildingUncheckedUpdateManyInputSchema'
import { BuildingWhereInputSchema } from '../inputTypeSchemas/BuildingWhereInputSchema'

export const BuildingUpdateManyArgsSchema: z.ZodType<Prisma.BuildingUpdateManyArgs> = z.object({
  data: z.union([ BuildingUpdateManyMutationInputSchema,BuildingUncheckedUpdateManyInputSchema ]),
  where: BuildingWhereInputSchema.optional(),
}).strict() ;

export default BuildingUpdateManyArgsSchema;
