import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeekWhereInputSchema } from '../inputTypeSchemas/WeekWhereInputSchema'

export const WeekDeleteManyArgsSchema: z.ZodType<Prisma.WeekDeleteManyArgs> = z.object({
  where: WeekWhereInputSchema.optional(),
}).strict() ;

export default WeekDeleteManyArgsSchema;
