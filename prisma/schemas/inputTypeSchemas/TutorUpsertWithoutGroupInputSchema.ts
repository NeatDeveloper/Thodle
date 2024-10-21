import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorUpdateWithoutGroupInputSchema } from './TutorUpdateWithoutGroupInputSchema';
import { TutorUncheckedUpdateWithoutGroupInputSchema } from './TutorUncheckedUpdateWithoutGroupInputSchema';
import { TutorCreateWithoutGroupInputSchema } from './TutorCreateWithoutGroupInputSchema';
import { TutorUncheckedCreateWithoutGroupInputSchema } from './TutorUncheckedCreateWithoutGroupInputSchema';
import { TutorWhereInputSchema } from './TutorWhereInputSchema';

export const TutorUpsertWithoutGroupInputSchema: z.ZodType<Prisma.TutorUpsertWithoutGroupInput> = z.object({
  update: z.union([ z.lazy(() => TutorUpdateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutGroupInputSchema) ]),
  create: z.union([ z.lazy(() => TutorCreateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedCreateWithoutGroupInputSchema) ]),
  where: z.lazy(() => TutorWhereInputSchema).optional()
}).strict();

export default TutorUpsertWithoutGroupInputSchema;
