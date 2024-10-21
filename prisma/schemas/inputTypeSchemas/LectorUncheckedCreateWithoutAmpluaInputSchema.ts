import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankUncheckedCreateNestedManyWithoutLectorInputSchema } from './LectorRankUncheckedCreateNestedManyWithoutLectorInputSchema';

export const LectorUncheckedCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorUncheckedCreateWithoutAmpluaInput> = z.object({
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  faculity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ranks: z.lazy(() => LectorRankUncheckedCreateNestedManyWithoutLectorInputSchema).optional()
}).strict();

export default LectorUncheckedCreateWithoutAmpluaInputSchema;
