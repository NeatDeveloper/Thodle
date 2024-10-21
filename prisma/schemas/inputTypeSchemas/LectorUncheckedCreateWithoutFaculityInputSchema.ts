import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankUncheckedCreateNestedManyWithoutLectorInputSchema } from './LectorRankUncheckedCreateNestedManyWithoutLectorInputSchema';

export const LectorUncheckedCreateWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUncheckedCreateWithoutFaculityInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ranks: z.lazy(() => LectorRankUncheckedCreateNestedManyWithoutLectorInputSchema).optional()
}).strict();

export default LectorUncheckedCreateWithoutFaculityInputSchema;
