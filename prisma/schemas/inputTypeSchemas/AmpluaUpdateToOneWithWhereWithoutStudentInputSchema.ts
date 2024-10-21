import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';
import { AmpluaUpdateWithoutStudentInputSchema } from './AmpluaUpdateWithoutStudentInputSchema';
import { AmpluaUncheckedUpdateWithoutStudentInputSchema } from './AmpluaUncheckedUpdateWithoutStudentInputSchema';

export const AmpluaUpdateToOneWithWhereWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaUpdateToOneWithWhereWithoutStudentInput> = z.object({
  where: z.lazy(() => AmpluaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AmpluaUpdateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutStudentInputSchema) ]),
}).strict();

export default AmpluaUpdateToOneWithWhereWithoutStudentInputSchema;
