import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BigIntFilterSchema } from './BigIntFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumGroupHeadLevelFilterSchema } from './EnumGroupHeadLevelFilterSchema';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const GroupHeadScalarWhereInputSchema: z.ZodType<Prisma.GroupHeadScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GroupHeadScalarWhereInputSchema),z.lazy(() => GroupHeadScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupHeadScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupHeadScalarWhereInputSchema),z.lazy(() => GroupHeadScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  level: z.union([ z.lazy(() => EnumGroupHeadLevelFilterSchema),z.lazy(() => GroupHeadLevelSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default GroupHeadScalarWhereInputSchema;
