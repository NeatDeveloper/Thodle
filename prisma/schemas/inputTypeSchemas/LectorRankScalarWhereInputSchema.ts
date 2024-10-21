import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const LectorRankScalarWhereInputSchema: z.ZodType<Prisma.LectorRankScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LectorRankScalarWhereInputSchema),z.lazy(() => LectorRankScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorRankScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorRankScalarWhereInputSchema),z.lazy(() => LectorRankScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  shortVariant: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lectorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default LectorRankScalarWhereInputSchema;
