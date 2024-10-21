import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityCreateWithoutFacultiesInputSchema } from './UniversityCreateWithoutFacultiesInputSchema';
import { UniversityUncheckedCreateWithoutFacultiesInputSchema } from './UniversityUncheckedCreateWithoutFacultiesInputSchema';
import { UniversityCreateOrConnectWithoutFacultiesInputSchema } from './UniversityCreateOrConnectWithoutFacultiesInputSchema';
import { UniversityUpsertWithoutFacultiesInputSchema } from './UniversityUpsertWithoutFacultiesInputSchema';
import { UniversityWhereUniqueInputSchema } from './UniversityWhereUniqueInputSchema';
import { UniversityUpdateToOneWithWhereWithoutFacultiesInputSchema } from './UniversityUpdateToOneWithWhereWithoutFacultiesInputSchema';
import { UniversityUpdateWithoutFacultiesInputSchema } from './UniversityUpdateWithoutFacultiesInputSchema';
import { UniversityUncheckedUpdateWithoutFacultiesInputSchema } from './UniversityUncheckedUpdateWithoutFacultiesInputSchema';

export const UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema: z.ZodType<Prisma.UniversityUpdateOneRequiredWithoutFacultiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UniversityCreateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutFacultiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UniversityCreateOrConnectWithoutFacultiesInputSchema).optional(),
  upsert: z.lazy(() => UniversityUpsertWithoutFacultiesInputSchema).optional(),
  connect: z.lazy(() => UniversityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UniversityUpdateToOneWithWhereWithoutFacultiesInputSchema),z.lazy(() => UniversityUpdateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutFacultiesInputSchema) ]).optional(),
}).strict();

export default UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema;
