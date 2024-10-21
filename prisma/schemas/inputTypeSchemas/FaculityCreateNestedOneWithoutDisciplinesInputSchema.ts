import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityCreateWithoutDisciplinesInputSchema } from './FaculityCreateWithoutDisciplinesInputSchema';
import { FaculityUncheckedCreateWithoutDisciplinesInputSchema } from './FaculityUncheckedCreateWithoutDisciplinesInputSchema';
import { FaculityCreateOrConnectWithoutDisciplinesInputSchema } from './FaculityCreateOrConnectWithoutDisciplinesInputSchema';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';

export const FaculityCreateNestedOneWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityCreateNestedOneWithoutDisciplinesInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutDisciplinesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaculityCreateOrConnectWithoutDisciplinesInputSchema).optional(),
  connect: z.lazy(() => FaculityWhereUniqueInputSchema).optional()
}).strict();

export default FaculityCreateNestedOneWithoutDisciplinesInputSchema;
