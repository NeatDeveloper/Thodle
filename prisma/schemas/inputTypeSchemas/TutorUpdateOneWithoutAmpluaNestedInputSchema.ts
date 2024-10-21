import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorCreateWithoutAmpluaInputSchema } from './TutorCreateWithoutAmpluaInputSchema';
import { TutorUncheckedCreateWithoutAmpluaInputSchema } from './TutorUncheckedCreateWithoutAmpluaInputSchema';
import { TutorCreateOrConnectWithoutAmpluaInputSchema } from './TutorCreateOrConnectWithoutAmpluaInputSchema';
import { TutorUpsertWithoutAmpluaInputSchema } from './TutorUpsertWithoutAmpluaInputSchema';
import { TutorWhereInputSchema } from './TutorWhereInputSchema';
import { TutorWhereUniqueInputSchema } from './TutorWhereUniqueInputSchema';
import { TutorUpdateToOneWithWhereWithoutAmpluaInputSchema } from './TutorUpdateToOneWithWhereWithoutAmpluaInputSchema';
import { TutorUpdateWithoutAmpluaInputSchema } from './TutorUpdateWithoutAmpluaInputSchema';
import { TutorUncheckedUpdateWithoutAmpluaInputSchema } from './TutorUncheckedUpdateWithoutAmpluaInputSchema';

export const TutorUpdateOneWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.TutorUpdateOneWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => TutorCreateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TutorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => TutorUpsertWithoutAmpluaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TutorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TutorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TutorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TutorUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => TutorUpdateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export default TutorUpdateOneWithoutAmpluaNestedInputSchema;
