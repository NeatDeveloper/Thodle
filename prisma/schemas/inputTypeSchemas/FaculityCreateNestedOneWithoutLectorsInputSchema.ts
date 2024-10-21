import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityCreateWithoutLectorsInputSchema } from './FaculityCreateWithoutLectorsInputSchema';
import { FaculityUncheckedCreateWithoutLectorsInputSchema } from './FaculityUncheckedCreateWithoutLectorsInputSchema';
import { FaculityCreateOrConnectWithoutLectorsInputSchema } from './FaculityCreateOrConnectWithoutLectorsInputSchema';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';

export const FaculityCreateNestedOneWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityCreateNestedOneWithoutLectorsInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutLectorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaculityCreateOrConnectWithoutLectorsInputSchema).optional(),
  connect: z.lazy(() => FaculityWhereUniqueInputSchema).optional()
}).strict();

export default FaculityCreateNestedOneWithoutLectorsInputSchema;
