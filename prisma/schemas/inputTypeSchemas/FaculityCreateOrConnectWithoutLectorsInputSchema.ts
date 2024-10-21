import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';
import { FaculityCreateWithoutLectorsInputSchema } from './FaculityCreateWithoutLectorsInputSchema';
import { FaculityUncheckedCreateWithoutLectorsInputSchema } from './FaculityUncheckedCreateWithoutLectorsInputSchema';

export const FaculityCreateOrConnectWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityCreateOrConnectWithoutLectorsInput> = z.object({
  where: z.lazy(() => FaculityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FaculityCreateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutLectorsInputSchema) ]),
}).strict();

export default FaculityCreateOrConnectWithoutLectorsInputSchema;
