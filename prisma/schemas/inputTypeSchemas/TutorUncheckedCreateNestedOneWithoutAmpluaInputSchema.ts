import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorCreateWithoutAmpluaInputSchema } from './TutorCreateWithoutAmpluaInputSchema';
import { TutorUncheckedCreateWithoutAmpluaInputSchema } from './TutorUncheckedCreateWithoutAmpluaInputSchema';
import { TutorCreateOrConnectWithoutAmpluaInputSchema } from './TutorCreateOrConnectWithoutAmpluaInputSchema';
import { TutorWhereUniqueInputSchema } from './TutorWhereUniqueInputSchema';

export const TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorUncheckedCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => TutorCreateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TutorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => TutorWhereUniqueInputSchema).optional()
}).strict();

export default TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema;
