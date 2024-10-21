import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorCreateWithoutAmpluaInputSchema } from './CuratorCreateWithoutAmpluaInputSchema';
import { CuratorUncheckedCreateWithoutAmpluaInputSchema } from './CuratorUncheckedCreateWithoutAmpluaInputSchema';
import { CuratorCreateOrConnectWithoutAmpluaInputSchema } from './CuratorCreateOrConnectWithoutAmpluaInputSchema';
import { CuratorUpsertWithoutAmpluaInputSchema } from './CuratorUpsertWithoutAmpluaInputSchema';
import { CuratorWhereInputSchema } from './CuratorWhereInputSchema';
import { CuratorWhereUniqueInputSchema } from './CuratorWhereUniqueInputSchema';
import { CuratorUpdateToOneWithWhereWithoutAmpluaInputSchema } from './CuratorUpdateToOneWithWhereWithoutAmpluaInputSchema';
import { CuratorUpdateWithoutAmpluaInputSchema } from './CuratorUpdateWithoutAmpluaInputSchema';
import { CuratorUncheckedUpdateWithoutAmpluaInputSchema } from './CuratorUncheckedUpdateWithoutAmpluaInputSchema';

export const CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.CuratorUncheckedUpdateOneWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => CuratorUpsertWithoutAmpluaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CuratorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CuratorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CuratorUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => CuratorUpdateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export default CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema;
