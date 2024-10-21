import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';
import { GroupUpdateWithoutTutorInputSchema } from './GroupUpdateWithoutTutorInputSchema';
import { GroupUncheckedUpdateWithoutTutorInputSchema } from './GroupUncheckedUpdateWithoutTutorInputSchema';

export const GroupUpdateToOneWithWhereWithoutTutorInputSchema: z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutTutorInput> = z.object({
  where: z.lazy(() => GroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GroupUpdateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutTutorInputSchema) ]),
}).strict();

export default GroupUpdateToOneWithWhereWithoutTutorInputSchema;
