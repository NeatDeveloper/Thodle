import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorWhereUniqueInputSchema } from './TutorWhereUniqueInputSchema';
import { TutorCreateWithoutAmpluaInputSchema } from './TutorCreateWithoutAmpluaInputSchema';
import { TutorUncheckedCreateWithoutAmpluaInputSchema } from './TutorUncheckedCreateWithoutAmpluaInputSchema';

export const TutorCreateOrConnectWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorCreateOrConnectWithoutAmpluaInput> = z.object({
  where: z.lazy(() => TutorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TutorCreateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedCreateWithoutAmpluaInputSchema) ]),
}).strict();

export default TutorCreateOrConnectWithoutAmpluaInputSchema;
