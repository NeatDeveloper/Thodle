import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineCreateWithoutSchedulesInputSchema } from './DisciplineCreateWithoutSchedulesInputSchema';
import { DisciplineUncheckedCreateWithoutSchedulesInputSchema } from './DisciplineUncheckedCreateWithoutSchedulesInputSchema';
import { DisciplineCreateOrConnectWithoutSchedulesInputSchema } from './DisciplineCreateOrConnectWithoutSchedulesInputSchema';
import { DisciplineWhereUniqueInputSchema } from './DisciplineWhereUniqueInputSchema';

export const DisciplineCreateNestedOneWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineCreateNestedOneWithoutSchedulesInput> = z.object({
  create: z.union([ z.lazy(() => DisciplineCreateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutSchedulesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DisciplineCreateOrConnectWithoutSchedulesInputSchema).optional(),
  connect: z.lazy(() => DisciplineWhereUniqueInputSchema).optional()
}).strict();

export default DisciplineCreateNestedOneWithoutSchedulesInputSchema;
