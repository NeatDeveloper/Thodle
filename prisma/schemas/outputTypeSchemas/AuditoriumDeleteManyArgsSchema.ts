import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditoriumWhereInputSchema } from '../inputTypeSchemas/AuditoriumWhereInputSchema'

export const AuditoriumDeleteManyArgsSchema: z.ZodType<Prisma.AuditoriumDeleteManyArgs> = z.object({
  where: AuditoriumWhereInputSchema.optional(),
}).strict() ;

export default AuditoriumDeleteManyArgsSchema;
