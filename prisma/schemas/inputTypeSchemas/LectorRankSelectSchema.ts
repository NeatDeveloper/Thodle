import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorArgsSchema } from "../outputTypeSchemas/LectorArgsSchema"

export const LectorRankSelectSchema: z.ZodType<Prisma.LectorRankSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  shortVariant: z.boolean().optional(),
  lectorId: z.boolean().optional(),
  Lector: z.union([z.boolean(),z.lazy(() => LectorArgsSchema)]).optional(),
}).strict()

export default LectorRankSelectSchema;
