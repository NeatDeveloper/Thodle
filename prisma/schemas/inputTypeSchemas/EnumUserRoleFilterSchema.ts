import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleSchema } from './UserRoleSchema';
import { NestedEnumUserRoleFilterSchema } from './NestedEnumUserRoleFilterSchema';

export const EnumUserRoleFilterSchema: z.ZodType<Prisma.EnumUserRoleFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleFilterSchema) ]).optional(),
}).strict();

export default EnumUserRoleFilterSchema;
