import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorWhereInputSchema } from '../inputTypeSchemas/LectorWhereInputSchema'

export const LectorDeleteManyArgsSchema: z.ZodType<Prisma.LectorDeleteManyArgs> = z.object({
  where: LectorWhereInputSchema.optional(),
}).strict() ;

export default LectorDeleteManyArgsSchema;
