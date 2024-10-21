import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BigIntFilterSchema } from './BigIntFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LectorRankListRelationFilterSchema } from './LectorRankListRelationFilterSchema';
import { FaculityNullableRelationFilterSchema } from './FaculityNullableRelationFilterSchema';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';
import { AmpluaRelationFilterSchema } from './AmpluaRelationFilterSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const LectorWhereInputSchema: z.ZodType<Prisma.LectorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LectorWhereInputSchema),z.lazy(() => LectorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorWhereInputSchema),z.lazy(() => LectorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  surname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  initials: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  group: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ranks: z.lazy(() => LectorRankListRelationFilterSchema).optional(),
  Faculity: z.union([ z.lazy(() => FaculityNullableRelationFilterSchema),z.lazy(() => FaculityWhereInputSchema) ]).optional().nullable(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict();

export default LectorWhereInputSchema;
