import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateWithoutUserInputSchema } from './AmpluaCreateWithoutUserInputSchema';
import { AmpluaUncheckedCreateWithoutUserInputSchema } from './AmpluaUncheckedCreateWithoutUserInputSchema';
import { AmpluaCreateOrConnectWithoutUserInputSchema } from './AmpluaCreateOrConnectWithoutUserInputSchema';
import { AmpluaUpsertWithoutUserInputSchema } from './AmpluaUpsertWithoutUserInputSchema';
import { AmpluaWhereInputSchema } from './AmpluaWhereInputSchema';
import { AmpluaWhereUniqueInputSchema } from './AmpluaWhereUniqueInputSchema';
import { AmpluaUpdateToOneWithWhereWithoutUserInputSchema } from './AmpluaUpdateToOneWithWhereWithoutUserInputSchema';
import { AmpluaUpdateWithoutUserInputSchema } from './AmpluaUpdateWithoutUserInputSchema';
import { AmpluaUncheckedUpdateWithoutUserInputSchema } from './AmpluaUncheckedUpdateWithoutUserInputSchema';

export const AmpluaUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.AmpluaUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => AmpluaUpdateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default AmpluaUpdateOneWithoutUserNestedInputSchema;
