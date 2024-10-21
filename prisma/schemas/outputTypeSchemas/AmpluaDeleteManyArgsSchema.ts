import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AmpluaWhereInputSchema } from '../inputTypeSchemas/AmpluaWhereInputSchema'

export const AmpluaDeleteManyArgsSchema: z.ZodType<Prisma.AmpluaDeleteManyArgs> = z.object({
  where: AmpluaWhereInputSchema.optional(),
}).strict() ;

export default AmpluaDeleteManyArgsSchema;
