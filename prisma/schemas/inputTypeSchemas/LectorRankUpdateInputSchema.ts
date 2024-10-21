import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { LectorUpdateOneRequiredWithoutRanksNestedInputSchema } from './LectorUpdateOneRequiredWithoutRanksNestedInputSchema';

export const LectorRankUpdateInputSchema: z.ZodType<Prisma.LectorRankUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortVariant: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Lector: z.lazy(() => LectorUpdateOneRequiredWithoutRanksNestedInputSchema).optional()
}).strict();

export default LectorRankUpdateInputSchema;
