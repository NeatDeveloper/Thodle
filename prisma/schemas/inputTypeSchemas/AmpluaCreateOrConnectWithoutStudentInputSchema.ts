import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';
import { AmpluaCreateWithoutStudentInputSchema } from './AmpluaCreateWithoutStudentInputSchema';
import { AmpluaUncheckedCreateWithoutStudentInputSchema } from './AmpluaUncheckedCreateWithoutStudentInputSchema';

export const AmpluaCreateOrConnectWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaCreateOrConnectWithoutStudentInput> = z.object({
  where: z.lazy(() => AmpluaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutStudentInputSchema) ]),
}).strict();

export default AmpluaCreateOrConnectWithoutStudentInputSchema;
