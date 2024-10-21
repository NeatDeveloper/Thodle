import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityCreateWithoutWeeksInputSchema } from './UniversityCreateWithoutWeeksInputSchema';
import { UniversityUncheckedCreateWithoutWeeksInputSchema } from './UniversityUncheckedCreateWithoutWeeksInputSchema';
import { UniversityCreateOrConnectWithoutWeeksInputSchema } from './UniversityCreateOrConnectWithoutWeeksInputSchema';
import { UniversityWhereUniqueInputSchema } from './UniversityWhereUniqueInputSchema';

export const UniversityCreateNestedOneWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityCreateNestedOneWithoutWeeksInput> = z.object({
  create: z.union([ z.lazy(() => UniversityCreateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutWeeksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UniversityCreateOrConnectWithoutWeeksInputSchema).optional(),
  connect: z.lazy(() => UniversityWhereUniqueInputSchema).optional()
}).strict();

export default UniversityCreateNestedOneWithoutWeeksInputSchema;
