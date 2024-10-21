import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BigIntFilterSchema } from './BigIntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumUserRoleFilterSchema } from './EnumUserRoleFilterSchema';
import { UserRoleSchema } from './UserRoleSchema';
import { EnumLangFilterSchema } from './EnumLangFilterSchema';
import { LangSchema } from './LangSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { AmpluaNullableRelationFilterSchema } from './AmpluaNullableRelationFilterSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumUserRoleFilterSchema),z.lazy(() => UserRoleSchema) ]).optional(),
  lang: z.union([ z.lazy(() => EnumLangFilterSchema),z.lazy(() => LangSchema) ]).optional(),
  isBot: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isPremium: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaNullableRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional().nullable(),
}).strict();

export default UserWhereInputSchema;
