import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateWithoutStudentInputSchema } from './AmpluaCreateWithoutStudentInputSchema';
import { AmpluaUncheckedCreateWithoutStudentInputSchema } from './AmpluaUncheckedCreateWithoutStudentInputSchema';
import { AmpluaCreateOrConnectWithoutStudentInputSchema } from './AmpluaCreateOrConnectWithoutStudentInputSchema';
import { AmpluaUpsertWithoutStudentInputSchema } from './AmpluaUpsertWithoutStudentInputSchema';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';
import { AmpluaUpdateToOneWithWhereWithoutStudentInputSchema } from './AmpluaUpdateToOneWithWhereWithoutStudentInputSchema';
import { AmpluaUpdateWithoutStudentInputSchema } from './AmpluaUpdateWithoutStudentInputSchema';
import { AmpluaUncheckedUpdateWithoutStudentInputSchema } from './AmpluaUncheckedUpdateWithoutStudentInputSchema';

export const AmpluaUpdateOneRequiredWithoutStudentNestedInputSchema: z.ZodType<Prisma.AmpluaUpdateOneRequiredWithoutStudentNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutStudentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutStudentInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutStudentInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutStudentInputSchema),z.lazy(() => AmpluaUpdateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutStudentInputSchema) ]).optional(),
}).strict();

export default AmpluaUpdateOneRequiredWithoutStudentNestedInputSchema;
