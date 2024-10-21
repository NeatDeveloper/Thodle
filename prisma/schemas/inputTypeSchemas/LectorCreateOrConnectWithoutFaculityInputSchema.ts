import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorWhereUniqueInputSchema } from './LectorWhereUniqueInputSchema';
import { LectorCreateWithoutFaculityInputSchema } from './LectorCreateWithoutFaculityInputSchema';
import { LectorUncheckedCreateWithoutFaculityInputSchema } from './LectorUncheckedCreateWithoutFaculityInputSchema';

export const LectorCreateOrConnectWithoutFaculityInputSchema: z.ZodType<Prisma.LectorCreateOrConnectWithoutFaculityInput> = z.object({
  where: z.lazy(() => LectorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LectorCreateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema) ]),
}).strict();

export default LectorCreateOrConnectWithoutFaculityInputSchema;
