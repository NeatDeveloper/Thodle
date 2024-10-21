import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorCreateNestedOneWithoutRanksInputSchema } from './LectorCreateNestedOneWithoutRanksInputSchema';

export const LectorRankCreateInputSchema: z.ZodType<Prisma.LectorRankCreateInput> = z.object({
  title: z.string(),
  shortVariant: z.string(),
  Lector: z.lazy(() => LectorCreateNestedOneWithoutRanksInputSchema)
}).strict();

export default LectorRankCreateInputSchema;
