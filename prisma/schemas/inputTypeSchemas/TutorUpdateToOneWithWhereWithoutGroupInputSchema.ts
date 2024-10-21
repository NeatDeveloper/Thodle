import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorWhereInputSchema } from './TutorWhereInputSchema';
import { TutorUpdateWithoutGroupInputSchema } from './TutorUpdateWithoutGroupInputSchema';
import { TutorUncheckedUpdateWithoutGroupInputSchema } from './TutorUncheckedUpdateWithoutGroupInputSchema';

export const TutorUpdateToOneWithWhereWithoutGroupInputSchema: z.ZodType<Prisma.TutorUpdateToOneWithWhereWithoutGroupInput> = z.object({
  where: z.lazy(() => TutorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TutorUpdateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutGroupInputSchema) ]),
}).strict();

export default TutorUpdateToOneWithWhereWithoutGroupInputSchema;
