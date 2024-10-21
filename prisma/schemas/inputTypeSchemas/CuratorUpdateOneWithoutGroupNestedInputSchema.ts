import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorCreateWithoutGroupInputSchema } from './CuratorCreateWithoutGroupInputSchema';
import { CuratorUncheckedCreateWithoutGroupInputSchema } from './CuratorUncheckedCreateWithoutGroupInputSchema';
import { CuratorCreateOrConnectWithoutGroupInputSchema } from './CuratorCreateOrConnectWithoutGroupInputSchema';
import { CuratorUpsertWithoutGroupInputSchema } from './CuratorUpsertWithoutGroupInputSchema';
import { CuratorWhereInputSchema } from './CuratorWhereInputSchema';
import { CuratorWhereUniqueInputSchema } from './CuratorWhereUniqueInputSchema';
import { CuratorUpdateToOneWithWhereWithoutGroupInputSchema } from './CuratorUpdateToOneWithWhereWithoutGroupInputSchema';
import { CuratorUpdateWithoutGroupInputSchema } from './CuratorUpdateWithoutGroupInputSchema';
import { CuratorUncheckedUpdateWithoutGroupInputSchema } from './CuratorUncheckedUpdateWithoutGroupInputSchema';

export const CuratorUpdateOneWithoutGroupNestedInputSchema: z.ZodType<Prisma.CuratorUpdateOneWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutGroupInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutGroupInputSchema).optional(),
  upsert: z.lazy(() => CuratorUpsertWithoutGroupInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CuratorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CuratorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CuratorUpdateToOneWithWhereWithoutGroupInputSchema),z.lazy(() => CuratorUpdateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutGroupInputSchema) ]).optional(),
}).strict();

export default CuratorUpdateOneWithoutGroupNestedInputSchema;
