import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorIdTgIDCompoundUniqueInputSchema } from './TutorIdTgIDCompoundUniqueInputSchema';
import { TutorWhereInputSchema } from './TutorWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { GroupRelationFilterSchema } from './GroupRelationFilterSchema';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';
import { AmpluaRelationFilterSchema } from './AmpluaRelationFilterSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const TutorWhereUniqueInputSchema: z.ZodType<Prisma.TutorWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    group: z.number().int(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    group: z.number().int(),
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string(),
    group: z.number().int(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
    group: z.number().int(),
  }),
  z.object({
    id: z.string(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    group: z.number().int(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
    group: z.number().int(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    group: z.number().int(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    group: z.number().int(),
  }),
  z.object({
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  tgID: z.bigint().optional(),
  group: z.number().int().optional(),
  id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TutorWhereInputSchema),z.lazy(() => TutorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TutorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TutorWhereInputSchema),z.lazy(() => TutorWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict());

export default TutorWhereUniqueInputSchema;
