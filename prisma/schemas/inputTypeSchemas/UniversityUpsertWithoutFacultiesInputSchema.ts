import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityUpdateWithoutFacultiesInputSchema } from './UniversityUpdateWithoutFacultiesInputSchema';
import { UniversityUncheckedUpdateWithoutFacultiesInputSchema } from './UniversityUncheckedUpdateWithoutFacultiesInputSchema';
import { UniversityCreateWithoutFacultiesInputSchema } from './UniversityCreateWithoutFacultiesInputSchema';
import { UniversityUncheckedCreateWithoutFacultiesInputSchema } from './UniversityUncheckedCreateWithoutFacultiesInputSchema';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';

export const UniversityUpsertWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityUpsertWithoutFacultiesInput> = z.object({
  update: z.union([ z.lazy(() => UniversityUpdateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutFacultiesInputSchema) ]),
  create: z.union([ z.lazy(() => UniversityCreateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutFacultiesInputSchema) ]),
  where: z.lazy(() => UniversityWhereInputSchema).optional()
}).strict();

export default UniversityUpsertWithoutFacultiesInputSchema;
