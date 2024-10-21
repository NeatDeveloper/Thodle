import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaIdTgIDCompoundUniqueInputSchema } from './AmpluaIdTgIDCompoundUniqueInputSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';
import { EnumAmpluaEnumNullableListFilterSchema } from './EnumAmpluaEnumNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StudentNullableRelationFilterSchema } from './StudentNullableRelationFilterSchema';
import { StudentWhereInputSchema } from './StudentWhereInputSchema';
import { GroupHeadNullableRelationFilterSchema } from './GroupHeadNullableRelationFilterSchema';
import { GroupHeadWhereInputSchema } from './GroupHeadWhereInputSchema';
import { CuratorNullableRelationFilterSchema } from './CuratorNullableRelationFilterSchema';
import { CuratorWhereInputSchema } from './CuratorWhereInputSchema';
import { TutorNullableRelationFilterSchema } from './TutorNullableRelationFilterSchema';
import { TutorWhereInputSchema } from './TutorWhereInputSchema';
import { LectorNullableRelationFilterSchema } from './LectorNullableRelationFilterSchema';
import { LectorWhereInputSchema } from './LectorWhereInputSchema';

export const AmpluaWhereUniqueInputSchema: z.ZodType<Prisma.AmpluaWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => AmpluaIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string(),
    id_tgID: z.lazy(() => AmpluaIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => AmpluaIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    id_tgID: z.lazy(() => AmpluaIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  tgID: z.bigint().optional(),
  id_tgID: z.lazy(() => AmpluaIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AmpluaWhereInputSchema),z.lazy(() => AmpluaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AmpluaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AmpluaWhereInputSchema),z.lazy(() => AmpluaWhereInputSchema).array() ]).optional(),
  amplua: z.lazy(() => EnumAmpluaEnumNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  student: z.union([ z.lazy(() => StudentNullableRelationFilterSchema),z.lazy(() => StudentWhereInputSchema) ]).optional().nullable(),
  groupHead: z.union([ z.lazy(() => GroupHeadNullableRelationFilterSchema),z.lazy(() => GroupHeadWhereInputSchema) ]).optional().nullable(),
  curator: z.union([ z.lazy(() => CuratorNullableRelationFilterSchema),z.lazy(() => CuratorWhereInputSchema) ]).optional().nullable(),
  tutor: z.union([ z.lazy(() => TutorNullableRelationFilterSchema),z.lazy(() => TutorWhereInputSchema) ]).optional().nullable(),
  lector: z.union([ z.lazy(() => LectorNullableRelationFilterSchema),z.lazy(() => LectorWhereInputSchema) ]).optional().nullable(),
}).strict());

export default AmpluaWhereUniqueInputSchema;
