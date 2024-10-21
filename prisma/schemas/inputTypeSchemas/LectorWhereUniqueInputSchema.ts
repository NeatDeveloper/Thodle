import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorIdTgIDCompoundUniqueInputSchema } from './LectorIdTgIDCompoundUniqueInputSchema';
import { LectorWhereInputSchema } from './LectorWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LectorRankListRelationFilterSchema } from './LectorRankListRelationFilterSchema';
import { FaculityNullableRelationFilterSchema } from './FaculityNullableRelationFilterSchema';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';
import { AmpluaRelationFilterSchema } from './AmpluaRelationFilterSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const LectorWhereUniqueInputSchema: z.ZodType<Prisma.LectorWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    group: z.number().int(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    group: z.number().int(),
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string(),
    group: z.number().int(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
    group: z.number().int(),
  }),
  z.object({
    id: z.string(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    group: z.number().int(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
    group: z.number().int(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    group: z.number().int(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    group: z.number().int(),
  }),
  z.object({
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  tgID: z.bigint().optional(),
  group: z.number().int().optional(),
  id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => LectorWhereInputSchema),z.lazy(() => LectorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorWhereInputSchema),z.lazy(() => LectorWhereInputSchema).array() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  surname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  initials: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ranks: z.lazy(() => LectorRankListRelationFilterSchema).optional(),
  Faculity: z.union([ z.lazy(() => FaculityNullableRelationFilterSchema),z.lazy(() => FaculityWhereInputSchema) ]).optional().nullable(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict());

export default LectorWhereUniqueInputSchema;
