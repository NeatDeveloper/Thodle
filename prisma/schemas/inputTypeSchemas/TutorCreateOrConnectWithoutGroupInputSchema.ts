import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorWhereUniqueInputSchema } from './TutorWhereUniqueInputSchema';
import { TutorCreateWithoutGroupInputSchema } from './TutorCreateWithoutGroupInputSchema';
import { TutorUncheckedCreateWithoutGroupInputSchema } from './TutorUncheckedCreateWithoutGroupInputSchema';

export const TutorCreateOrConnectWithoutGroupInputSchema: z.ZodType<Prisma.TutorCreateOrConnectWithoutGroupInput> = z.object({
  where: z.lazy(() => TutorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TutorCreateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export default TutorCreateOrConnectWithoutGroupInputSchema;
