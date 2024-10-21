import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityCreateWithoutLectorsInputSchema } from './FaculityCreateWithoutLectorsInputSchema';
import { FaculityUncheckedCreateWithoutLectorsInputSchema } from './FaculityUncheckedCreateWithoutLectorsInputSchema';
import { FaculityCreateOrConnectWithoutLectorsInputSchema } from './FaculityCreateOrConnectWithoutLectorsInputSchema';
import { FaculityUpsertWithoutLectorsInputSchema } from './FaculityUpsertWithoutLectorsInputSchema';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';
import { FaculityUpdateToOneWithWhereWithoutLectorsInputSchema } from './FaculityUpdateToOneWithWhereWithoutLectorsInputSchema';
import { FaculityUpdateWithoutLectorsInputSchema } from './FaculityUpdateWithoutLectorsInputSchema';
import { FaculityUncheckedUpdateWithoutLectorsInputSchema } from './FaculityUncheckedUpdateWithoutLectorsInputSchema';

export const FaculityUpdateOneWithoutLectorsNestedInputSchema: z.ZodType<Prisma.FaculityUpdateOneWithoutLectorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutLectorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaculityCreateOrConnectWithoutLectorsInputSchema).optional(),
  upsert: z.lazy(() => FaculityUpsertWithoutLectorsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FaculityWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FaculityWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FaculityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FaculityUpdateToOneWithWhereWithoutLectorsInputSchema),z.lazy(() => FaculityUpdateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutLectorsInputSchema) ]).optional(),
}).strict();

export default FaculityUpdateOneWithoutLectorsNestedInputSchema;
