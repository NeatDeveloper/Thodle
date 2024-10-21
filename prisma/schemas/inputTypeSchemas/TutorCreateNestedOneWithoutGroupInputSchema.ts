import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorCreateWithoutGroupInputSchema } from './TutorCreateWithoutGroupInputSchema';
import { TutorUncheckedCreateWithoutGroupInputSchema } from './TutorUncheckedCreateWithoutGroupInputSchema';
import { TutorCreateOrConnectWithoutGroupInputSchema } from './TutorCreateOrConnectWithoutGroupInputSchema';
import { TutorWhereUniqueInputSchema } from './TutorWhereUniqueInputSchema';

export const TutorCreateNestedOneWithoutGroupInputSchema: z.ZodType<Prisma.TutorCreateNestedOneWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => TutorCreateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedCreateWithoutGroupInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TutorCreateOrConnectWithoutGroupInputSchema).optional(),
  connect: z.lazy(() => TutorWhereUniqueInputSchema).optional()
}).strict();

export default TutorCreateNestedOneWithoutGroupInputSchema;
