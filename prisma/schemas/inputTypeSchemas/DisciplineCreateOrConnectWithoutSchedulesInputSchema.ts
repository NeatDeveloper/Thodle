import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineWhereUniqueInputSchema } from './DisciplineWhereUniqueInputSchema';
import { DisciplineCreateWithoutSchedulesInputSchema } from './DisciplineCreateWithoutSchedulesInputSchema';
import { DisciplineUncheckedCreateWithoutSchedulesInputSchema } from './DisciplineUncheckedCreateWithoutSchedulesInputSchema';

export const DisciplineCreateOrConnectWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineCreateOrConnectWithoutSchedulesInput> = z.object({
  where: z.lazy(() => DisciplineWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DisciplineCreateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutSchedulesInputSchema) ]),
}).strict();

export default DisciplineCreateOrConnectWithoutSchedulesInputSchema;
