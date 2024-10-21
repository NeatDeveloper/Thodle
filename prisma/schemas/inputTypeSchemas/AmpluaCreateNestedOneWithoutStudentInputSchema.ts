import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateWithoutStudentInputSchema } from './AmpluaCreateWithoutStudentInputSchema';
import { AmpluaUncheckedCreateWithoutStudentInputSchema } from './AmpluaUncheckedCreateWithoutStudentInputSchema';
import { AmpluaCreateOrConnectWithoutStudentInputSchema } from './AmpluaCreateOrConnectWithoutStudentInputSchema';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';

export const AmpluaCreateNestedOneWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaCreateNestedOneWithoutStudentInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutStudentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutStudentInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export default AmpluaCreateNestedOneWithoutStudentInputSchema;
