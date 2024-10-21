import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorScalarWhereInputSchema } from './LectorScalarWhereInputSchema';
import { LectorUpdateManyMutationInputSchema } from './LectorUpdateManyMutationInputSchema';
import { LectorUncheckedUpdateManyWithoutFaculityInputSchema } from './LectorUncheckedUpdateManyWithoutFaculityInputSchema';

export const LectorUpdateManyWithWhereWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUpdateManyWithWhereWithoutFaculityInput> = z.object({
  where: z.lazy(() => LectorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LectorUpdateManyMutationInputSchema),z.lazy(() => LectorUncheckedUpdateManyWithoutFaculityInputSchema) ]),
}).strict();

export default LectorUpdateManyWithWhereWithoutFaculityInputSchema;
