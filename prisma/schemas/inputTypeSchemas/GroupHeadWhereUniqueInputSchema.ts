import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadIdTgIDCompoundUniqueInputSchema } from './GroupHeadIdTgIDCompoundUniqueInputSchema';
import { GroupHeadWhereInputSchema } from './GroupHeadWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumGroupHeadLevelFilterSchema } from './EnumGroupHeadLevelFilterSchema';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { GroupRelationFilterSchema } from './GroupRelationFilterSchema';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';
import { AmpluaRelationFilterSchema } from './AmpluaRelationFilterSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const GroupHeadWhereUniqueInputSchema: z.ZodType<Prisma.GroupHeadWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => GroupHeadIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string(),
    id_tgID: z.lazy(() => GroupHeadIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => GroupHeadIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    id_tgID: z.lazy(() => GroupHeadIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  tgID: z.bigint().optional(),
  id_tgID: z.lazy(() => GroupHeadIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => GroupHeadWhereInputSchema),z.lazy(() => GroupHeadWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupHeadWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupHeadWhereInputSchema),z.lazy(() => GroupHeadWhereInputSchema).array() ]).optional(),
  group: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  level: z.union([ z.lazy(() => EnumGroupHeadLevelFilterSchema),z.lazy(() => GroupHeadLevelSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict());

export default GroupHeadWhereUniqueInputSchema;
