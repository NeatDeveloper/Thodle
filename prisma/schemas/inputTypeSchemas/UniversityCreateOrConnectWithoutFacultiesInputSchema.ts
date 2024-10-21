import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityWhereUniqueInputSchema } from './UniversityWhereUniqueInputSchema';
import { UniversityCreateWithoutFacultiesInputSchema } from './UniversityCreateWithoutFacultiesInputSchema';
import { UniversityUncheckedCreateWithoutFacultiesInputSchema } from './UniversityUncheckedCreateWithoutFacultiesInputSchema';

export const UniversityCreateOrConnectWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityCreateOrConnectWithoutFacultiesInput> = z.object({
  where: z.lazy(() => UniversityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UniversityCreateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutFacultiesInputSchema) ]),
}).strict();

export default UniversityCreateOrConnectWithoutFacultiesInputSchema;
