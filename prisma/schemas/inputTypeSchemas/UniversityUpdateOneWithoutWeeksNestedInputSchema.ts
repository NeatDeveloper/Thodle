import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UniversityCreateWithoutWeeksInputSchema } from './UniversityCreateWithoutWeeksInputSchema';
import { UniversityUncheckedCreateWithoutWeeksInputSchema } from './UniversityUncheckedCreateWithoutWeeksInputSchema';
import { UniversityCreateOrConnectWithoutWeeksInputSchema } from './UniversityCreateOrConnectWithoutWeeksInputSchema';
import { UniversityUpsertWithoutWeeksInputSchema } from './UniversityUpsertWithoutWeeksInputSchema';
import { UniversityWhereInputSchema } from './UniversityWhereInputSchema';
import { UniversityWhereUniqueInputSchema } from './UniversityWhereUniqueInputSchema';
import { UniversityUpdateToOneWithWhereWithoutWeeksInputSchema } from './UniversityUpdateToOneWithWhereWithoutWeeksInputSchema';
import { UniversityUpdateWithoutWeeksInputSchema } from './UniversityUpdateWithoutWeeksInputSchema';
import { UniversityUncheckedUpdateWithoutWeeksInputSchema } from './UniversityUncheckedUpdateWithoutWeeksInputSchema';

export const UniversityUpdateOneWithoutWeeksNestedInputSchema: z.ZodType<Prisma.UniversityUpdateOneWithoutWeeksNestedInput> = z.object({
  create: z.union([ z.lazy(() => UniversityCreateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutWeeksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UniversityCreateOrConnectWithoutWeeksInputSchema).optional(),
  upsert: z.lazy(() => UniversityUpsertWithoutWeeksInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UniversityWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UniversityWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UniversityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UniversityUpdateToOneWithWhereWithoutWeeksInputSchema),z.lazy(() => UniversityUpdateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutWeeksInputSchema) ]).optional(),
}).strict();

export default UniversityUpdateOneWithoutWeeksNestedInputSchema;
