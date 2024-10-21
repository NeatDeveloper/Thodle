import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineWhereUniqueInputSchema } from './DisciplineWhereUniqueInputSchema';
import { DisciplineUpdateWithoutFaculityInputSchema } from './DisciplineUpdateWithoutFaculityInputSchema';
import { DisciplineUncheckedUpdateWithoutFaculityInputSchema } from './DisciplineUncheckedUpdateWithoutFaculityInputSchema';

export const DisciplineUpdateWithWhereUniqueWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUpdateWithWhereUniqueWithoutFaculityInput> = z.object({
  where: z.lazy(() => DisciplineWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DisciplineUpdateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedUpdateWithoutFaculityInputSchema) ]),
}).strict();

export default DisciplineUpdateWithWhereUniqueWithoutFaculityInputSchema;
