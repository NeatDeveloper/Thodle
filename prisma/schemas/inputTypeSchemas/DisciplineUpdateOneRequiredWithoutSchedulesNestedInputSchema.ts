import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineCreateWithoutSchedulesInputSchema } from './DisciplineCreateWithoutSchedulesInputSchema';
import { DisciplineUncheckedCreateWithoutSchedulesInputSchema } from './DisciplineUncheckedCreateWithoutSchedulesInputSchema';
import { DisciplineCreateOrConnectWithoutSchedulesInputSchema } from './DisciplineCreateOrConnectWithoutSchedulesInputSchema';
import { DisciplineUpsertWithoutSchedulesInputSchema } from './DisciplineUpsertWithoutSchedulesInputSchema';
import { DisciplineWhereUniqueInputSchema } from './DisciplineWhereUniqueInputSchema';
import { DisciplineUpdateToOneWithWhereWithoutSchedulesInputSchema } from './DisciplineUpdateToOneWithWhereWithoutSchedulesInputSchema';
import { DisciplineUpdateWithoutSchedulesInputSchema } from './DisciplineUpdateWithoutSchedulesInputSchema';
import { DisciplineUncheckedUpdateWithoutSchedulesInputSchema } from './DisciplineUncheckedUpdateWithoutSchedulesInputSchema';

export const DisciplineUpdateOneRequiredWithoutSchedulesNestedInputSchema: z.ZodType<Prisma.DisciplineUpdateOneRequiredWithoutSchedulesNestedInput> = z.object({
  create: z.union([ z.lazy(() => DisciplineCreateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutSchedulesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DisciplineCreateOrConnectWithoutSchedulesInputSchema).optional(),
  upsert: z.lazy(() => DisciplineUpsertWithoutSchedulesInputSchema).optional(),
  connect: z.lazy(() => DisciplineWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DisciplineUpdateToOneWithWhereWithoutSchedulesInputSchema),z.lazy(() => DisciplineUpdateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedUpdateWithoutSchedulesInputSchema) ]).optional(),
}).strict();

export default DisciplineUpdateOneRequiredWithoutSchedulesNestedInputSchema;
