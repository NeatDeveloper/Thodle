import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';
import { FaculityUpdateWithoutLectorsInputSchema } from './FaculityUpdateWithoutLectorsInputSchema';
import { FaculityUncheckedUpdateWithoutLectorsInputSchema } from './FaculityUncheckedUpdateWithoutLectorsInputSchema';

export const FaculityUpdateToOneWithWhereWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityUpdateToOneWithWhereWithoutLectorsInput> = z.object({
  where: z.lazy(() => FaculityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FaculityUpdateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutLectorsInputSchema) ]),
}).strict();

export default FaculityUpdateToOneWithWhereWithoutLectorsInputSchema;
