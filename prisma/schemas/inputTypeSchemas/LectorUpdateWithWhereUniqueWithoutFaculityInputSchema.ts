import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorWhereUniqueInputSchema } from './LectorWhereUniqueInputSchema';
import { LectorUpdateWithoutFaculityInputSchema } from './LectorUpdateWithoutFaculityInputSchema';
import { LectorUncheckedUpdateWithoutFaculityInputSchema } from './LectorUncheckedUpdateWithoutFaculityInputSchema';

export const LectorUpdateWithWhereUniqueWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUpdateWithWhereUniqueWithoutFaculityInput> = z.object({
  where: z.lazy(() => LectorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LectorUpdateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutFaculityInputSchema) ]),
}).strict();

export default LectorUpdateWithWhereUniqueWithoutFaculityInputSchema;
