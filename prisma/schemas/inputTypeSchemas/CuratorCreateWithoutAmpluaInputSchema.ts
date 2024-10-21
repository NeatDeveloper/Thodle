import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateNestedOneWithoutCuratorInputSchema } from './GroupCreateNestedOneWithoutCuratorInputSchema';

export const CuratorCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorCreateWithoutAmpluaInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutCuratorInputSchema)
}).strict();

export default CuratorCreateWithoutAmpluaInputSchema;
