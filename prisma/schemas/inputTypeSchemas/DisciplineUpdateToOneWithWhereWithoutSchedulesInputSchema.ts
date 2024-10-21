import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineWhereInputSchema } from './DisciplineWhereInputSchema';
import { DisciplineUpdateWithoutSchedulesInputSchema } from './DisciplineUpdateWithoutSchedulesInputSchema';
import { DisciplineUncheckedUpdateWithoutSchedulesInputSchema } from './DisciplineUncheckedUpdateWithoutSchedulesInputSchema';

export const DisciplineUpdateToOneWithWhereWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineUpdateToOneWithWhereWithoutSchedulesInput> = z.object({
  where: z.lazy(() => DisciplineWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DisciplineUpdateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedUpdateWithoutSchedulesInputSchema) ]),
}).strict();

export default DisciplineUpdateToOneWithWhereWithoutSchedulesInputSchema;
