import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { LectorRelationFilterSchema } from './LectorRelationFilterSchema';
import { LectorWhereInputSchema } from './LectorWhereInputSchema';

export const LectorRankWhereInputSchema: z.ZodType<Prisma.LectorRankWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LectorRankWhereInputSchema),z.lazy(() => LectorRankWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorRankWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorRankWhereInputSchema),z.lazy(() => LectorRankWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  shortVariant: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lectorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Lector: z.union([ z.lazy(() => LectorRelationFilterSchema),z.lazy(() => LectorWhereInputSchema) ]).optional(),
}).strict();

export default LectorRankWhereInputSchema;
