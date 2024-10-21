import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingCreateManyInputSchema } from '../inputTypeSchemas/BuildingCreateManyInputSchema'

export const BuildingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BuildingCreateManyAndReturnArgs> = z.object({
  data: z.union([ BuildingCreateManyInputSchema,BuildingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BuildingCreateManyAndReturnArgsSchema;
