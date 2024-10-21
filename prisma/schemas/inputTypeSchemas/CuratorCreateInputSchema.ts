import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateNestedOneWithoutCuratorInputSchema } from './GroupCreateNestedOneWithoutCuratorInputSchema';
import { AmpluaCreateNestedOneWithoutCuratorInputSchema } from './AmpluaCreateNestedOneWithoutCuratorInputSchema';

export const CuratorCreateInputSchema: z.ZodType<Prisma.CuratorCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutCuratorInputSchema),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutCuratorInputSchema)
}).strict();

export default CuratorCreateInputSchema;
