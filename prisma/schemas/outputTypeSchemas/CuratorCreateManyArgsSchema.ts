import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CuratorCreateManyInputSchema } from '../inputTypeSchemas/CuratorCreateManyInputSchema'

export const CuratorCreateManyArgsSchema: z.ZodType<Prisma.CuratorCreateManyArgs> = z.object({
  data: z.union([ CuratorCreateManyInputSchema,CuratorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CuratorCreateManyArgsSchema;
