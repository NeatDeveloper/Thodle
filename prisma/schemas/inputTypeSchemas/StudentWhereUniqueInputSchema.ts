import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentIdTgIDCompoundUniqueInputSchema } from './StudentIdTgIDCompoundUniqueInputSchema';
import { StudentWhereInputSchema } from './StudentWhereInputSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AmpluaRelationFilterSchema } from './AmpluaRelationFilterSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';
import { GroupNullableRelationFilterSchema } from './GroupNullableRelationFilterSchema';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';

export const StudentWhereUniqueInputSchema: z.ZodType<Prisma.StudentWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => StudentIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string(),
    id_tgID: z.lazy(() => StudentIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => StudentIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    id_tgID: z.lazy(() => StudentIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  tgID: z.bigint().optional(),
  id_tgID: z.lazy(() => StudentIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  group: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
  Group: z.union([ z.lazy(() => GroupNullableRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional().nullable(),
}).strict());

export default StudentWhereUniqueInputSchema;
