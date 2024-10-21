import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankCreateNestedManyWithoutLectorInputSchema } from './LectorRankCreateNestedManyWithoutLectorInputSchema';
import { FaculityCreateNestedOneWithoutLectorsInputSchema } from './FaculityCreateNestedOneWithoutLectorsInputSchema';

export const LectorCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorCreateWithoutAmpluaInput> = z.object({
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ranks: z.lazy(() => LectorRankCreateNestedManyWithoutLectorInputSchema).optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutLectorsInputSchema).optional()
}).strict();

export default LectorCreateWithoutAmpluaInputSchema;
