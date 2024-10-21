import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TutorWhereInputSchema } from '../inputTypeSchemas/TutorWhereInputSchema'

export const TutorDeleteManyArgsSchema: z.ZodType<Prisma.TutorDeleteManyArgs> = z.object({
  where: TutorWhereInputSchema.optional(),
}).strict() ;

export default TutorDeleteManyArgsSchema;
