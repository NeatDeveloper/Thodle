import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';
import { FaculityUpdateWithoutGroupsInputSchema } from './FaculityUpdateWithoutGroupsInputSchema';
import { FaculityUncheckedUpdateWithoutGroupsInputSchema } from './FaculityUncheckedUpdateWithoutGroupsInputSchema';

export const FaculityUpdateToOneWithWhereWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityUpdateToOneWithWhereWithoutGroupsInput> = z.object({
  where: z.lazy(() => FaculityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FaculityUpdateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutGroupsInputSchema) ]),
}).strict();

export default FaculityUpdateToOneWithWhereWithoutGroupsInputSchema;
