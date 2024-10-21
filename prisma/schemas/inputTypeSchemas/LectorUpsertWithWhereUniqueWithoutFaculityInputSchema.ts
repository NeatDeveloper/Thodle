import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorWhereUniqueInputSchema } from './LectorWhereUniqueInputSchema';
import { LectorUpdateWithoutFaculityInputSchema } from './LectorUpdateWithoutFaculityInputSchema';
import { LectorUncheckedUpdateWithoutFaculityInputSchema } from './LectorUncheckedUpdateWithoutFaculityInputSchema';
import { LectorCreateWithoutFaculityInputSchema } from './LectorCreateWithoutFaculityInputSchema';
import { LectorUncheckedCreateWithoutFaculityInputSchema } from './LectorUncheckedCreateWithoutFaculityInputSchema';

export const LectorUpsertWithWhereUniqueWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUpsertWithWhereUniqueWithoutFaculityInput> = z.object({
  where: z.lazy(() => LectorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LectorUpdateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutFaculityInputSchema) ]),
  create: z.union([ z.lazy(() => LectorCreateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema) ]),
}).strict();

export default LectorUpsertWithWhereUniqueWithoutFaculityInputSchema;
