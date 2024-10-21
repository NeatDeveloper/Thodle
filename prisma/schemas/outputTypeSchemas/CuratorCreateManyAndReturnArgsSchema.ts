import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CuratorCreateManyInputSchema } from '../inputTypeSchemas/CuratorCreateManyInputSchema'

export const CuratorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CuratorCreateManyAndReturnArgs> = z.object({
  data: z.union([ CuratorCreateManyInputSchema,CuratorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CuratorCreateManyAndReturnArgsSchema;
