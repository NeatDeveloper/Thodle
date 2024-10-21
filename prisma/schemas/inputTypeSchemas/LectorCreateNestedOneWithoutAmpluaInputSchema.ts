import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorCreateWithoutAmpluaInputSchema } from './LectorCreateWithoutAmpluaInputSchema';
import { LectorUncheckedCreateWithoutAmpluaInputSchema } from './LectorUncheckedCreateWithoutAmpluaInputSchema';
import { LectorCreateOrConnectWithoutAmpluaInputSchema } from './LectorCreateOrConnectWithoutAmpluaInputSchema';
import { LectorWhereUniqueInputSchema } from './LectorWhereUniqueInputSchema';

export const LectorCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LectorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => LectorWhereUniqueInputSchema).optional()
}).strict();

export default LectorCreateNestedOneWithoutAmpluaInputSchema;
