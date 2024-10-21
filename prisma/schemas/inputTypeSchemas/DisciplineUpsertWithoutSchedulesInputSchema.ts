import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineUpdateWithoutSchedulesInputSchema } from './DisciplineUpdateWithoutSchedulesInputSchema';
import { DisciplineUncheckedUpdateWithoutSchedulesInputSchema } from './DisciplineUncheckedUpdateWithoutSchedulesInputSchema';
import { DisciplineCreateWithoutSchedulesInputSchema } from './DisciplineCreateWithoutSchedulesInputSchema';
import { DisciplineUncheckedCreateWithoutSchedulesInputSchema } from './DisciplineUncheckedCreateWithoutSchedulesInputSchema';
import { DisciplineWhereInputSchema } from './DisciplineWhereInputSchema';

export const DisciplineUpsertWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineUpsertWithoutSchedulesInput> = z.object({
  update: z.union([ z.lazy(() => DisciplineUpdateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedUpdateWithoutSchedulesInputSchema) ]),
  create: z.union([ z.lazy(() => DisciplineCreateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutSchedulesInputSchema) ]),
  where: z.lazy(() => DisciplineWhereInputSchema).optional()
}).strict();

export default DisciplineUpsertWithoutSchedulesInputSchema;
