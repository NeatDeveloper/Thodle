import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityScalarWhereInputSchema } from './FaculityScalarWhereInputSchema';
import { FaculityUpdateManyMutationInputSchema } from './FaculityUpdateManyMutationInputSchema';
import { FaculityUncheckedUpdateManyWithoutUniversityInputSchema } from './FaculityUncheckedUpdateManyWithoutUniversityInputSchema';

export const FaculityUpdateManyWithWhereWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityUpdateManyWithWhereWithoutUniversityInput> = z.object({
  where: z.lazy(() => FaculityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FaculityUpdateManyMutationInputSchema),z.lazy(() => FaculityUncheckedUpdateManyWithoutUniversityInputSchema) ]),
}).strict();

export default FaculityUpdateManyWithWhereWithoutUniversityInputSchema;
