import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CuratorWhereInputSchema } from '../inputTypeSchemas/CuratorWhereInputSchema'

export const CuratorDeleteManyArgsSchema: z.ZodType<Prisma.CuratorDeleteManyArgs> = z.object({
  where: CuratorWhereInputSchema.optional(),
}).strict() ;

export default CuratorDeleteManyArgsSchema;
