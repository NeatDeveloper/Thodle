import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityCreateWithoutDisciplinesInputSchema } from './FaculityCreateWithoutDisciplinesInputSchema';
import { FaculityUncheckedCreateWithoutDisciplinesInputSchema } from './FaculityUncheckedCreateWithoutDisciplinesInputSchema';
import { FaculityCreateOrConnectWithoutDisciplinesInputSchema } from './FaculityCreateOrConnectWithoutDisciplinesInputSchema';
import { FaculityUpsertWithoutDisciplinesInputSchema } from './FaculityUpsertWithoutDisciplinesInputSchema';
import { FaculityWhereInputSchema } from './FaculityWhereInputSchema';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';
import { FaculityUpdateToOneWithWhereWithoutDisciplinesInputSchema } from './FaculityUpdateToOneWithWhereWithoutDisciplinesInputSchema';
import { FaculityUpdateWithoutDisciplinesInputSchema } from './FaculityUpdateWithoutDisciplinesInputSchema';
import { FaculityUncheckedUpdateWithoutDisciplinesInputSchema } from './FaculityUncheckedUpdateWithoutDisciplinesInputSchema';

export const FaculityUpdateOneWithoutDisciplinesNestedInputSchema: z.ZodType<Prisma.FaculityUpdateOneWithoutDisciplinesNestedInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutDisciplinesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaculityCreateOrConnectWithoutDisciplinesInputSchema).optional(),
  upsert: z.lazy(() => FaculityUpsertWithoutDisciplinesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FaculityWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FaculityWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FaculityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FaculityUpdateToOneWithWhereWithoutDisciplinesInputSchema),z.lazy(() => FaculityUpdateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutDisciplinesInputSchema) ]).optional(),
}).strict();

export default FaculityUpdateOneWithoutDisciplinesNestedInputSchema;
