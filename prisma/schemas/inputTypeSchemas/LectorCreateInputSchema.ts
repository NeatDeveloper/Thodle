import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankCreateNestedManyWithoutLectorInputSchema } from './LectorRankCreateNestedManyWithoutLectorInputSchema';
import { FaculityCreateNestedOneWithoutLectorsInputSchema } from './FaculityCreateNestedOneWithoutLectorsInputSchema';
import { AmpluaCreateNestedOneWithoutLectorInputSchema } from './AmpluaCreateNestedOneWithoutLectorInputSchema';

export const LectorCreateInputSchema: z.ZodType<Prisma.LectorCreateInput> = z.object({
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ranks: z.lazy(() => LectorRankCreateNestedManyWithoutLectorInputSchema).optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutLectorsInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutLectorInputSchema)
}).strict();

export default LectorCreateInputSchema;
