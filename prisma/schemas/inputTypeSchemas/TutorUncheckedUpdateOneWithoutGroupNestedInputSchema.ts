import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorCreateWithoutGroupInputSchema } from './TutorCreateWithoutGroupInputSchema';
import { TutorUncheckedCreateWithoutGroupInputSchema } from './TutorUncheckedCreateWithoutGroupInputSchema';
import { TutorCreateOrConnectWithoutGroupInputSchema } from './TutorCreateOrConnectWithoutGroupInputSchema';
import { TutorUpsertWithoutGroupInputSchema } from './TutorUpsertWithoutGroupInputSchema';
import { TutorWhereInputSchema } from './TutorWhereInputSchema';
import { TutorWhereUniqueInputSchema } from './TutorWhereUniqueInputSchema';
import { TutorUpdateToOneWithWhereWithoutGroupInputSchema } from './TutorUpdateToOneWithWhereWithoutGroupInputSchema';
import { TutorUpdateWithoutGroupInputSchema } from './TutorUpdateWithoutGroupInputSchema';
import { TutorUncheckedUpdateWithoutGroupInputSchema } from './TutorUncheckedUpdateWithoutGroupInputSchema';

export const TutorUncheckedUpdateOneWithoutGroupNestedInputSchema: z.ZodType<Prisma.TutorUncheckedUpdateOneWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => TutorCreateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedCreateWithoutGroupInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TutorCreateOrConnectWithoutGroupInputSchema).optional(),
  upsert: z.lazy(() => TutorUpsertWithoutGroupInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TutorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TutorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TutorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TutorUpdateToOneWithWhereWithoutGroupInputSchema),z.lazy(() => TutorUpdateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutGroupInputSchema) ]).optional(),
}).strict();

export default TutorUncheckedUpdateOneWithoutGroupNestedInputSchema;
