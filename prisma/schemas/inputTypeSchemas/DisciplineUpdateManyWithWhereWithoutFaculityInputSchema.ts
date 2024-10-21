import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineScalarWhereInputSchema } from './DisciplineScalarWhereInputSchema';
import { DisciplineUpdateManyMutationInputSchema } from './DisciplineUpdateManyMutationInputSchema';
import { DisciplineUncheckedUpdateManyWithoutFaculityInputSchema } from './DisciplineUncheckedUpdateManyWithoutFaculityInputSchema';

export const DisciplineUpdateManyWithWhereWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUpdateManyWithWhereWithoutFaculityInput> = z.object({
  where: z.lazy(() => DisciplineScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DisciplineUpdateManyMutationInputSchema),z.lazy(() => DisciplineUncheckedUpdateManyWithoutFaculityInputSchema) ]),
}).strict();

export default DisciplineUpdateManyWithWhereWithoutFaculityInputSchema;
