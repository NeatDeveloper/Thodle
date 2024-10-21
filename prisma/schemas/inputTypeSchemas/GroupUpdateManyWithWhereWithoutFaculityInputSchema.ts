import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupScalarWhereInputSchema } from './GroupScalarWhereInputSchema';
import { GroupUpdateManyMutationInputSchema } from './GroupUpdateManyMutationInputSchema';
import { GroupUncheckedUpdateManyWithoutFaculityInputSchema } from './GroupUncheckedUpdateManyWithoutFaculityInputSchema';

export const GroupUpdateManyWithWhereWithoutFaculityInputSchema: z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutFaculityInput> = z.object({
  where: z.lazy(() => GroupScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GroupUpdateManyMutationInputSchema),z.lazy(() => GroupUncheckedUpdateManyWithoutFaculityInputSchema) ]),
}).strict();

export default GroupUpdateManyWithWhereWithoutFaculityInputSchema;
