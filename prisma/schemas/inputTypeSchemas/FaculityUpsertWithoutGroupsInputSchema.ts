import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityUpdateWithoutGroupsInputSchema } from './FaculityUpdateWithoutGroupsInputSchema';
import { FaculityUncheckedUpdateWithoutGroupsInputSchema } from './FaculityUncheckedUpdateWithoutGroupsInputSchema';
import { FaculityCreateWithoutGroupsInputSchema } from './FaculityCreateWithoutGroupsInputSchema';
import { FaculityUncheckedCreateWithoutGroupsInputSchema } from './FaculityUncheckedCreateWithoutGroupsInputSchema';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';

export const FaculityUpsertWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityUpsertWithoutGroupsInput> = z.object({
  update: z.union([ z.lazy(() => FaculityUpdateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutGroupsInputSchema) ]),
  create: z.union([ z.lazy(() => FaculityCreateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutGroupsInputSchema) ]),
  where: z.lazy(() => FaculityWhereInputSchema).optional()
}).strict();

export default FaculityUpsertWithoutGroupsInputSchema;
