import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorCreateWithoutAmpluaInputSchema } from './CuratorCreateWithoutAmpluaInputSchema';
import { CuratorUncheckedCreateWithoutAmpluaInputSchema } from './CuratorUncheckedCreateWithoutAmpluaInputSchema';
import { CuratorCreateOrConnectWithoutAmpluaInputSchema } from './CuratorCreateOrConnectWithoutAmpluaInputSchema';
import { CuratorWhereUniqueInputSchema } from './CuratorWhereUniqueInputSchema';

export const CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorUncheckedCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional()
}).strict();

export default CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema;
