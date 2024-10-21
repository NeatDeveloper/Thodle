import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorUpdateWithoutAmpluaInputSchema } from './TutorUpdateWithoutAmpluaInputSchema';
import { TutorUncheckedUpdateWithoutAmpluaInputSchema } from './TutorUncheckedUpdateWithoutAmpluaInputSchema';
import { TutorCreateWithoutAmpluaInputSchema } from './TutorCreateWithoutAmpluaInputSchema';
import { TutorUncheckedCreateWithoutAmpluaInputSchema } from './TutorUncheckedCreateWithoutAmpluaInputSchema';
import { TutorWhereInputSchema } from './TutorWhereInputSchema';

export const TutorUpsertWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorUpsertWithoutAmpluaInput> = z.object({
  update: z.union([ z.lazy(() => TutorUpdateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutAmpluaInputSchema) ]),
  create: z.union([ z.lazy(() => TutorCreateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedCreateWithoutAmpluaInputSchema) ]),
  where: z.lazy(() => TutorWhereInputSchema).optional()
}).strict();

export default TutorUpsertWithoutAmpluaInputSchema;
