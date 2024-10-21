import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankWhereInputSchema } from './LectorRankWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { LectorRelationFilterSchema } from './LectorRelationFilterSchema';
import { LectorWhereInputSchema } from './LectorWhereInputSchema';

export const LectorRankWhereUniqueInputSchema: z.ZodType<Prisma.LectorRankWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    title: z.string(),
    shortVariant: z.string()
  }),
  z.object({
    id: z.number().int(),
    title: z.string(),
  }),
  z.object({
    id: z.number().int(),
    shortVariant: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    title: z.string(),
    shortVariant: z.string(),
  }),
  z.object({
    title: z.string(),
  }),
  z.object({
    shortVariant: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  title: z.string().optional(),
  shortVariant: z.string().optional(),
  AND: z.union([ z.lazy(() => LectorRankWhereInputSchema),z.lazy(() => LectorRankWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorRankWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorRankWhereInputSchema),z.lazy(() => LectorRankWhereInputSchema).array() ]).optional(),
  lectorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Lector: z.union([ z.lazy(() => LectorRelationFilterSchema),z.lazy(() => LectorWhereInputSchema) ]).optional(),
}).strict());

export default LectorRankWhereUniqueInputSchema;
