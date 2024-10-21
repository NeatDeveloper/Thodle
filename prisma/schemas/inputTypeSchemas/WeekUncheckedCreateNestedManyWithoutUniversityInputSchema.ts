import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekCreateWithoutUniversityInputSchema } from './WeekCreateWithoutUniversityInputSchema';
import { WeekUncheckedCreateWithoutUniversityInputSchema } from './WeekUncheckedCreateWithoutUniversityInputSchema';
import { WeekCreateOrConnectWithoutUniversityInputSchema } from './WeekCreateOrConnectWithoutUniversityInputSchema';
import { WeekCreateManyUniversityInputEnvelopeSchema } from './WeekCreateManyUniversityInputEnvelopeSchema';
import { WeekWhereUniqueInputSchema } from './WeekWhereUniqueInputSchema';

export const WeekUncheckedCreateNestedManyWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUncheckedCreateNestedManyWithoutUniversityInput> = z.object({
  create: z.union([ z.lazy(() => WeekCreateWithoutUniversityInputSchema),z.lazy(() => WeekCreateWithoutUniversityInputSchema).array(),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WeekCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => WeekCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WeekCreateManyUniversityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WeekUncheckedCreateNestedManyWithoutUniversityInputSchema;
