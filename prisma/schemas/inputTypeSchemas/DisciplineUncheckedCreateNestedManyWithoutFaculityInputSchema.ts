import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DisciplineCreateWithoutFaculityInputSchema } from './DisciplineCreateWithoutFaculityInputSchema';
import { DisciplineUncheckedCreateWithoutFaculityInputSchema } from './DisciplineUncheckedCreateWithoutFaculityInputSchema';
import { DisciplineCreateOrConnectWithoutFaculityInputSchema } from './DisciplineCreateOrConnectWithoutFaculityInputSchema';
import { DisciplineCreateManyFaculityInputEnvelopeSchema } from './DisciplineCreateManyFaculityInputEnvelopeSchema';
import { DisciplineWhereUniqueInputSchema } from './DisciplineWhereUniqueInputSchema';

export const DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUncheckedCreateNestedManyWithoutFaculityInput> = z.object({
  create: z.union([ z.lazy(() => DisciplineCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineCreateWithoutFaculityInputSchema).array(),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisciplineCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => DisciplineCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisciplineCreateManyFaculityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema;
