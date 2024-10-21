import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';
import { FaculityUpdateWithoutDisciplinesInputSchema } from './FaculityUpdateWithoutDisciplinesInputSchema';
import { FaculityUncheckedUpdateWithoutDisciplinesInputSchema } from './FaculityUncheckedUpdateWithoutDisciplinesInputSchema';

export const FaculityUpdateToOneWithWhereWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityUpdateToOneWithWhereWithoutDisciplinesInput> = z.object({
  where: z.lazy(() => FaculityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FaculityUpdateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutDisciplinesInputSchema) ]),
}).strict();

export default FaculityUpdateToOneWithWhereWithoutDisciplinesInputSchema;
