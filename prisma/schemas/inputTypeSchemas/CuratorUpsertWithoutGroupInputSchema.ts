import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorUpdateWithoutGroupInputSchema } from './CuratorUpdateWithoutGroupInputSchema';
import { CuratorUncheckedUpdateWithoutGroupInputSchema } from './CuratorUncheckedUpdateWithoutGroupInputSchema';
import { CuratorCreateWithoutGroupInputSchema } from './CuratorCreateWithoutGroupInputSchema';
import { CuratorUncheckedCreateWithoutGroupInputSchema } from './CuratorUncheckedCreateWithoutGroupInputSchema';
import { CuratorWhereInputSchema } from './CuratorWhereInputSchema';

export const CuratorUpsertWithoutGroupInputSchema: z.ZodType<Prisma.CuratorUpsertWithoutGroupInput> = z.object({
  update: z.union([ z.lazy(() => CuratorUpdateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutGroupInputSchema) ]),
  create: z.union([ z.lazy(() => CuratorCreateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutGroupInputSchema) ]),
  where: z.lazy(() => CuratorWhereInputSchema).optional()
}).strict();

export default CuratorUpsertWithoutGroupInputSchema;
