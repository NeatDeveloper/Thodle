import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';
import { UniversityUpdateWithoutFacultiesInputSchema } from './UniversityUpdateWithoutFacultiesInputSchema';
import { UniversityUncheckedUpdateWithoutFacultiesInputSchema } from './UniversityUncheckedUpdateWithoutFacultiesInputSchema';

export const UniversityUpdateToOneWithWhereWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityUpdateToOneWithWhereWithoutFacultiesInput> = z.object({
  where: z.lazy(() => UniversityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UniversityUpdateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutFacultiesInputSchema) ]),
}).strict();

export default UniversityUpdateToOneWithWhereWithoutFacultiesInputSchema;
