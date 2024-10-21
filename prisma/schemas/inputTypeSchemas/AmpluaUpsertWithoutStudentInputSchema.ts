import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaUpdateWithoutStudentInputSchema } from './AmpluaUpdateWithoutStudentInputSchema';
import { AmpluaUncheckedUpdateWithoutStudentInputSchema } from './AmpluaUncheckedUpdateWithoutStudentInputSchema';
import { AmpluaCreateWithoutStudentInputSchema } from './AmpluaCreateWithoutStudentInputSchema';
import { AmpluaUncheckedCreateWithoutStudentInputSchema } from './AmpluaUncheckedCreateWithoutStudentInputSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';

export const AmpluaUpsertWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaUpsertWithoutStudentInput> = z.object({
  update: z.union([ z.lazy(() => AmpluaUpdateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutStudentInputSchema) ]),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutStudentInputSchema) ]),
  where: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export default AmpluaUpsertWithoutStudentInputSchema;
