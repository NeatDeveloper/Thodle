import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';
import { FaculityCreateWithoutDisciplinesInputSchema } from './FaculityCreateWithoutDisciplinesInputSchema';
import { FaculityUncheckedCreateWithoutDisciplinesInputSchema } from './FaculityUncheckedCreateWithoutDisciplinesInputSchema';

export const FaculityCreateOrConnectWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityCreateOrConnectWithoutDisciplinesInput> = z.object({
  where: z.lazy(() => FaculityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FaculityCreateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutDisciplinesInputSchema) ]),
}).strict();

export default FaculityCreateOrConnectWithoutDisciplinesInputSchema;
