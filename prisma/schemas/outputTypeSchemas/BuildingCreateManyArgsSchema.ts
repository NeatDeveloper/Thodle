import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingCreateManyInputSchema } from '../inputTypeSchemas/BuildingCreateManyInputSchema'

export const BuildingCreateManyArgsSchema: z.ZodType<Prisma.BuildingCreateManyArgs> = z.object({
  data: z.union([ BuildingCreateManyInputSchema,BuildingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BuildingCreateManyArgsSchema;
