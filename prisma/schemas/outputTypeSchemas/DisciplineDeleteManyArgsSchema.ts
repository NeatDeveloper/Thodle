import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DisciplineWhereInputSchema } from '../inputTypeSchemas/DisciplineWhereInputSchema'

export const DisciplineDeleteManyArgsSchema: z.ZodType<Prisma.DisciplineDeleteManyArgs> = z.object({
  where: DisciplineWhereInputSchema.optional(),
}).strict() ;

export default DisciplineDeleteManyArgsSchema;
