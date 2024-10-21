import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateNestedOneWithoutCuratorInputSchema } from './AmpluaCreateNestedOneWithoutCuratorInputSchema';

export const CuratorCreateWithoutGroupInputSchema: z.ZodType<Prisma.CuratorCreateWithoutGroupInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutCuratorInputSchema)
}).strict();

export default CuratorCreateWithoutGroupInputSchema;
