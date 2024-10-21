import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorCreateWithoutFaculityInputSchema } from './LectorCreateWithoutFaculityInputSchema';
import { LectorUncheckedCreateWithoutFaculityInputSchema } from './LectorUncheckedCreateWithoutFaculityInputSchema';
import { LectorCreateOrConnectWithoutFaculityInputSchema } from './LectorCreateOrConnectWithoutFaculityInputSchema';
import { LectorCreateManyFaculityInputEnvelopeSchema } from './LectorCreateManyFaculityInputEnvelopeSchema';
import { LectorWhereUniqueInputSchema } from './LectorWhereUniqueInputSchema';

export const LectorUncheckedCreateNestedManyWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUncheckedCreateNestedManyWithoutFaculityInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutFaculityInputSchema),z.lazy(() => LectorCreateWithoutFaculityInputSchema).array(),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LectorCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => LectorCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LectorCreateManyFaculityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LectorUncheckedCreateNestedManyWithoutFaculityInputSchema;
