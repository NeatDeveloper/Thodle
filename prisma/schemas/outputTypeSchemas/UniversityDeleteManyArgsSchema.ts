import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversityWhereInputSchema } from '../inputTypeSchemas/UniversityWhereInputSchema'

export const UniversityDeleteManyArgsSchema: z.ZodType<Prisma.UniversityDeleteManyArgs> = z.object({
  where: UniversityWhereInputSchema.optional(),
}).strict() ;

export default UniversityDeleteManyArgsSchema;
