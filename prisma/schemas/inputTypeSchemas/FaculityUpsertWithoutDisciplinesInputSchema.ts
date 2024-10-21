import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityUpdateWithoutDisciplinesInputSchema } from './FaculityUpdateWithoutDisciplinesInputSchema';
import { FaculityUncheckedUpdateWithoutDisciplinesInputSchema } from './FaculityUncheckedUpdateWithoutDisciplinesInputSchema';
import { FaculityCreateWithoutDisciplinesInputSchema } from './FaculityCreateWithoutDisciplinesInputSchema';
import { FaculityUncheckedCreateWithoutDisciplinesInputSchema } from './FaculityUncheckedCreateWithoutDisciplinesInputSchema';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';

export const FaculityUpsertWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityUpsertWithoutDisciplinesInput> = z.object({
  update: z.union([ z.lazy(() => FaculityUpdateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutDisciplinesInputSchema) ]),
  create: z.union([ z.lazy(() => FaculityCreateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutDisciplinesInputSchema) ]),
  where: z.lazy(() => FaculityWhereInputSchema).optional()
}).strict();

export default FaculityUpsertWithoutDisciplinesInputSchema;
