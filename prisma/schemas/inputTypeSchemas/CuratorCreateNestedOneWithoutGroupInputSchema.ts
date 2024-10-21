import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorCreateWithoutGroupInputSchema } from './CuratorCreateWithoutGroupInputSchema';
import { CuratorUncheckedCreateWithoutGroupInputSchema } from './CuratorUncheckedCreateWithoutGroupInputSchema';
import { CuratorCreateOrConnectWithoutGroupInputSchema } from './CuratorCreateOrConnectWithoutGroupInputSchema';
import { CuratorWhereUniqueInputSchema } from './CuratorWhereUniqueInputSchema';

export const CuratorCreateNestedOneWithoutGroupInputSchema: z.ZodType<Prisma.CuratorCreateNestedOneWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutGroupInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutGroupInputSchema).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional()
}).strict();

export default CuratorCreateNestedOneWithoutGroupInputSchema;
