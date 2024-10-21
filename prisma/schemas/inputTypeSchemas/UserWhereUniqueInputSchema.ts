import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdTgIDCompoundUniqueInputSchema } from './UserIdTgIDCompoundUniqueInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumUserRoleFilterSchema } from './EnumUserRoleFilterSchema';
import { UserRoleSchema } from './UserRoleSchema';
import { EnumLangFilterSchema } from './EnumLangFilterSchema';
import { LangSchema } from './LangSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AmpluaNullableRelationFilterSchema } from './AmpluaNullableRelationFilterSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    tgID: z.bigint(),
    username: z.string(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
    tgID: z.bigint(),
    username: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().uuid(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string().uuid(),
    username: z.string(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().uuid(),
    username: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    tgID: z.bigint(),
    username: z.string(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
    username: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    username: z.string(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    username: z.string(),
  }),
  z.object({
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  tgID: z.bigint().optional(),
  username: z.string().optional(),
  id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumUserRoleFilterSchema),z.lazy(() => UserRoleSchema) ]).optional(),
  lang: z.union([ z.lazy(() => EnumLangFilterSchema),z.lazy(() => LangSchema) ]).optional(),
  isBot: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isPremium: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaNullableRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional().nullable(),
}).strict());

export default UserWhereUniqueInputSchema;
