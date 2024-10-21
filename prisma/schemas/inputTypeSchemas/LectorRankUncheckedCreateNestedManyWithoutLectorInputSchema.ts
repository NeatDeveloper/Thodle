import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LectorRankCreateWithoutLectorInputSchema } from './LectorRankCreateWithoutLectorInputSchema';
import { LectorRankUncheckedCreateWithoutLectorInputSchema } from './LectorRankUncheckedCreateWithoutLectorInputSchema';
import { LectorRankCreateOrConnectWithoutLectorInputSchema } from './LectorRankCreateOrConnectWithoutLectorInputSchema';
import { LectorRankCreateManyLectorInputEnvelopeSchema } from './LectorRankCreateManyLectorInputEnvelopeSchema';
import { LectorRankWhereUniqueInputSchema } from './LectorRankWhereUniqueInputSchema';

export const LectorRankUncheckedCreateNestedManyWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUncheckedCreateNestedManyWithoutLectorInput> = z.object({
  create: z.union([ z.lazy(() => LectorRankCreateWithoutLectorInputSchema),z.lazy(() => LectorRankCreateWithoutLectorInputSchema).array(),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LectorRankCreateOrConnectWithoutLectorInputSchema),z.lazy(() => LectorRankCreateOrConnectWithoutLectorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LectorRankCreateManyLectorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LectorRankUncheckedCreateNestedManyWithoutLectorInputSchema;
