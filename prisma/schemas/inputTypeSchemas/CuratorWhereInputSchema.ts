import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BigIntFilterSchema } from './BigIntFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { GroupRelationFilterSchema } from './GroupRelationFilterSchema';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';
import { AmpluaRelationFilterSchema } from './AmpluaRelationFilterSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const CuratorWhereInputSchema: z.ZodType<Prisma.CuratorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CuratorWhereInputSchema),z.lazy(() => CuratorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CuratorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CuratorWhereInputSchema),z.lazy(() => CuratorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict();

export default CuratorWhereInputSchema;
