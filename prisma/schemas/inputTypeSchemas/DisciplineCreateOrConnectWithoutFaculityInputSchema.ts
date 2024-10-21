import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineWhereUniqueInputSchema } from './DisciplineWhereUniqueInputSchema';
import { DisciplineCreateWithoutFaculityInputSchema } from './DisciplineCreateWithoutFaculityInputSchema';
import { DisciplineUncheckedCreateWithoutFaculityInputSchema } from './DisciplineUncheckedCreateWithoutFaculityInputSchema';

export const DisciplineCreateOrConnectWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineCreateOrConnectWithoutFaculityInput> = z.object({
  where: z.lazy(() => DisciplineWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DisciplineCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema) ]),
}).strict();

export default DisciplineCreateOrConnectWithoutFaculityInputSchema;
