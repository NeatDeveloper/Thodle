import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaculityWhereInputSchema } from '../inputTypeSchemas/FaculityWhereInputSchema'

export const FaculityDeleteManyArgsSchema: z.ZodType<Prisma.FaculityDeleteManyArgs> = z.object({
  where: FaculityWhereInputSchema.optional(),
}).strict() ;

export default FaculityDeleteManyArgsSchema;
