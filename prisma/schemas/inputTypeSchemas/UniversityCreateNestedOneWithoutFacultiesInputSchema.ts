import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityCreateWithoutFacultiesInputSchema } from './UniversityCreateWithoutFacultiesInputSchema';
import { UniversityUncheckedCreateWithoutFacultiesInputSchema } from './UniversityUncheckedCreateWithoutFacultiesInputSchema';
import { UniversityCreateOrConnectWithoutFacultiesInputSchema } from './UniversityCreateOrConnectWithoutFacultiesInputSchema';
import { UniversityWhereUniqueInputSchema } from './UniversityWhereUniqueInputSchema';

export const UniversityCreateNestedOneWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityCreateNestedOneWithoutFacultiesInput> = z.object({
  create: z.union([ z.lazy(() => UniversityCreateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutFacultiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UniversityCreateOrConnectWithoutFacultiesInputSchema).optional(),
  connect: z.lazy(() => UniversityWhereUniqueInputSchema).optional()
}).strict();

export default UniversityCreateNestedOneWithoutFacultiesInputSchema;
