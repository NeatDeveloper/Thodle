import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CuratorWhereInputSchema } from './CuratorWhereInputSchema';
import { CuratorUpdateWithoutGroupInputSchema } from './CuratorUpdateWithoutGroupInputSchema';
import { CuratorUncheckedUpdateWithoutGroupInputSchema } from './CuratorUncheckedUpdateWithoutGroupInputSchema';

export const CuratorUpdateToOneWithWhereWithoutGroupInputSchema: z.ZodType<Prisma.CuratorUpdateToOneWithWhereWithoutGroupInput> = z.object({
  where: z.lazy(() => CuratorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CuratorUpdateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutGroupInputSchema) ]),
}).strict();

export default CuratorUpdateToOneWithWhereWithoutGroupInputSchema;
