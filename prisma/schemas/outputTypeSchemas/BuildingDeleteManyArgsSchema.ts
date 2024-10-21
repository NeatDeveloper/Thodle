import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingWhereInputSchema } from '../inputTypeSchemas/BuildingWhereInputSchema'

export const BuildingDeleteManyArgsSchema: z.ZodType<Prisma.BuildingDeleteManyArgs> = z.object({
  where: BuildingWhereInputSchema.optional(),
}).strict() ;

export default BuildingDeleteManyArgsSchema;
