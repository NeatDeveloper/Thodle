import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineWhereUniqueInputSchema } from './DisciplineWhereUniqueInputSchema';
import { DisciplineUpdateWithoutFaculityInputSchema } from './DisciplineUpdateWithoutFaculityInputSchema';
import { DisciplineUncheckedUpdateWithoutFaculityInputSchema } from './DisciplineUncheckedUpdateWithoutFaculityInputSchema';
import { DisciplineCreateWithoutFaculityInputSchema } from './DisciplineCreateWithoutFaculityInputSchema';
import { DisciplineUncheckedCreateWithoutFaculityInputSchema } from './DisciplineUncheckedCreateWithoutFaculityInputSchema';

export const DisciplineUpsertWithWhereUniqueWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUpsertWithWhereUniqueWithoutFaculityInput> = z.object({
  where: z.lazy(() => DisciplineWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DisciplineUpdateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedUpdateWithoutFaculityInputSchema) ]),
  create: z.union([ z.lazy(() => DisciplineCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema) ]),
}).strict();

export default DisciplineUpsertWithWhereUniqueWithoutFaculityInputSchema;
