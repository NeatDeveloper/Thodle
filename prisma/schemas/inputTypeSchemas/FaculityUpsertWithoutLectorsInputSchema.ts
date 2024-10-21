import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityUpdateWithoutLectorsInputSchema } from './FaculityUpdateWithoutLectorsInputSchema';
import { FaculityUncheckedUpdateWithoutLectorsInputSchema } from './FaculityUncheckedUpdateWithoutLectorsInputSchema';
import { FaculityCreateWithoutLectorsInputSchema } from './FaculityCreateWithoutLectorsInputSchema';
import { FaculityUncheckedCreateWithoutLectorsInputSchema } from './FaculityUncheckedCreateWithoutLectorsInputSchema';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';

export const FaculityUpsertWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityUpsertWithoutLectorsInput> = z.object({
  update: z.union([ z.lazy(() => FaculityUpdateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutLectorsInputSchema) ]),
  create: z.union([ z.lazy(() => FaculityCreateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutLectorsInputSchema) ]),
  where: z.lazy(() => FaculityWhereInputSchema).optional()
}).strict();

export default FaculityUpsertWithoutLectorsInputSchema;
