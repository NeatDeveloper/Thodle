import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorArgsSchema } from "../outputTypeSchemas/LectorArgsSchema"

export const LectorRankIncludeSchema: z.ZodType<Prisma.LectorRankInclude> = z.object({
  Lector: z.union([z.boolean(),z.lazy(() => LectorArgsSchema)]).optional(),
}).strict()

export default LectorRankIncludeSchema;
