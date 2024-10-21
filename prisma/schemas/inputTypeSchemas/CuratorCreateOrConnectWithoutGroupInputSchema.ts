import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorWhereUniqueInputSchema } from './CuratorWhereUniqueInputSchema';
import { CuratorCreateWithoutGroupInputSchema } from './CuratorCreateWithoutGroupInputSchema';
import { CuratorUncheckedCreateWithoutGroupInputSchema } from './CuratorUncheckedCreateWithoutGroupInputSchema';

export const CuratorCreateOrConnectWithoutGroupInputSchema: z.ZodType<Prisma.CuratorCreateOrConnectWithoutGroupInput> = z.object({
  where: z.lazy(() => CuratorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CuratorCreateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export default CuratorCreateOrConnectWithoutGroupInputSchema;
