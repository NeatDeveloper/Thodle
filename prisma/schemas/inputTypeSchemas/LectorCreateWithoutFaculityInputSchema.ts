import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankCreateNestedManyWithoutLectorInputSchema } from './LectorRankCreateNestedManyWithoutLectorInputSchema';
import { AmpluaCreateNestedOneWithoutLectorInputSchema } from './AmpluaCreateNestedOneWithoutLectorInputSchema';

export const LectorCreateWithoutFaculityInputSchema: z.ZodType<Prisma.LectorCreateWithoutFaculityInput> = z.object({
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ranks: z.lazy(() => LectorRankCreateNestedManyWithoutLectorInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutLectorInputSchema)
}).strict();

export default LectorCreateWithoutFaculityInputSchema;
