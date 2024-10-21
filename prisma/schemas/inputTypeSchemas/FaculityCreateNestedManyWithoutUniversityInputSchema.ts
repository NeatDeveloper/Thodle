import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityCreateWithoutUniversityInputSchema } from './FaculityCreateWithoutUniversityInputSchema';
import { FaculityUncheckedCreateWithoutUniversityInputSchema } from './FaculityUncheckedCreateWithoutUniversityInputSchema';
import { FaculityCreateOrConnectWithoutUniversityInputSchema } from './FaculityCreateOrConnectWithoutUniversityInputSchema';
import { FaculityCreateManyUniversityInputEnvelopeSchema } from './FaculityCreateManyUniversityInputEnvelopeSchema';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';

export const FaculityCreateNestedManyWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityCreateNestedManyWithoutUniversityInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutUniversityInputSchema),z.lazy(() => FaculityCreateWithoutUniversityInputSchema).array(),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FaculityCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => FaculityCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FaculityCreateManyUniversityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default FaculityCreateNestedManyWithoutUniversityInputSchema;
