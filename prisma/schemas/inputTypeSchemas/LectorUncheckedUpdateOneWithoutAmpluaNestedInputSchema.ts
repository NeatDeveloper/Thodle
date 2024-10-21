import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorCreateWithoutAmpluaInputSchema } from './LectorCreateWithoutAmpluaInputSchema';
import { LectorUncheckedCreateWithoutAmpluaInputSchema } from './LectorUncheckedCreateWithoutAmpluaInputSchema';
import { LectorCreateOrConnectWithoutAmpluaInputSchema } from './LectorCreateOrConnectWithoutAmpluaInputSchema';
import { LectorUpsertWithoutAmpluaInputSchema } from './LectorUpsertWithoutAmpluaInputSchema';
import { LectorWhereInputSchema } from './LectorWhereInputSchema';
import { LectorWhereUniqueInputSchema } from './LectorWhereUniqueInputSchema';
import { LectorUpdateToOneWithWhereWithoutAmpluaInputSchema } from './LectorUpdateToOneWithWhereWithoutAmpluaInputSchema';
import { LectorUpdateWithoutAmpluaInputSchema } from './LectorUpdateWithoutAmpluaInputSchema';
import { LectorUncheckedUpdateWithoutAmpluaInputSchema } from './LectorUncheckedUpdateWithoutAmpluaInputSchema';

export const LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.LectorUncheckedUpdateOneWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LectorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => LectorUpsertWithoutAmpluaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LectorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LectorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LectorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LectorUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => LectorUpdateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export default LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema;
