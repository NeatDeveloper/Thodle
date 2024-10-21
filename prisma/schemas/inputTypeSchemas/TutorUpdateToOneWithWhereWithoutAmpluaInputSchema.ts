import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorWhereInputSchema } from './TutorWhereInputSchema';
import { TutorUpdateWithoutAmpluaInputSchema } from './TutorUpdateWithoutAmpluaInputSchema';
import { TutorUncheckedUpdateWithoutAmpluaInputSchema } from './TutorUncheckedUpdateWithoutAmpluaInputSchema';

export const TutorUpdateToOneWithWhereWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorUpdateToOneWithWhereWithoutAmpluaInput> = z.object({
  where: z.lazy(() => TutorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TutorUpdateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutAmpluaInputSchema) ]),
}).strict();

export default TutorUpdateToOneWithWhereWithoutAmpluaInputSchema;
