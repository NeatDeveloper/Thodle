import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorCreateWithoutAmpluaInputSchema } from './CuratorCreateWithoutAmpluaInputSchema';
import { CuratorUncheckedCreateWithoutAmpluaInputSchema } from './CuratorUncheckedCreateWithoutAmpluaInputSchema';
import { CuratorCreateOrConnectWithoutAmpluaInputSchema } from './CuratorCreateOrConnectWithoutAmpluaInputSchema';
import { CuratorWhereUniqueInputSchema } from './CuratorWhereUniqueInputSchema';

export const CuratorCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional()
}).strict();

export default CuratorCreateNestedOneWithoutAmpluaInputSchema;
