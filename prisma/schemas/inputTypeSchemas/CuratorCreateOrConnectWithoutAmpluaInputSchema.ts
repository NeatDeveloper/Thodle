import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorWhereUniqueInputSchema } from './CuratorWhereUniqueInputSchema';
import { CuratorCreateWithoutAmpluaInputSchema } from './CuratorCreateWithoutAmpluaInputSchema';
import { CuratorUncheckedCreateWithoutAmpluaInputSchema } from './CuratorUncheckedCreateWithoutAmpluaInputSchema';

export const CuratorCreateOrConnectWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorCreateOrConnectWithoutAmpluaInput> = z.object({
  where: z.lazy(() => CuratorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CuratorCreateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutAmpluaInputSchema) ]),
}).strict();

export default CuratorCreateOrConnectWithoutAmpluaInputSchema;
