import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeekCreateWithoutUniversityInputSchema } from './WeekCreateWithoutUniversityInputSchema';
import { WeekUncheckedCreateWithoutUniversityInputSchema } from './WeekUncheckedCreateWithoutUniversityInputSchema';
import { WeekCreateOrConnectWithoutUniversityInputSchema } from './WeekCreateOrConnectWithoutUniversityInputSchema';
import { WeekUpsertWithWhereUniqueWithoutUniversityInputSchema } from './WeekUpsertWithWhereUniqueWithoutUniversityInputSchema';
import { WeekCreateManyUniversityInputEnvelopeSchema } from './WeekCreateManyUniversityInputEnvelopeSchema';
import { WeekWhereUniqueInputSchema } from './WeekWhereUniqueInputSchema';
import { WeekUpdateWithWhereUniqueWithoutUniversityInputSchema } from './WeekUpdateWithWhereUniqueWithoutUniversityInputSchema';
import { WeekUpdateManyWithWhereWithoutUniversityInputSchema } from './WeekUpdateManyWithWhereWithoutUniversityInputSchema';
import { WeekScalarWhereInputSchema } from './WeekScalarWhereInputSchema';

export const WeekUpdateManyWithoutUniversityNestedInputSchema: z.ZodType<Prisma.WeekUpdateManyWithoutUniversityNestedInput> = z.object({
  create: z.union([ z.lazy(() => WeekCreateWithoutUniversityInputSchema),z.lazy(() => WeekCreateWithoutUniversityInputSchema).array(),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WeekCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => WeekCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WeekUpsertWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => WeekUpsertWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WeekCreateManyUniversityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WeekUpdateWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => WeekUpdateWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WeekUpdateManyWithWhereWithoutUniversityInputSchema),z.lazy(() => WeekUpdateManyWithWhereWithoutUniversityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WeekScalarWhereInputSchema),z.lazy(() => WeekScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WeekUpdateManyWithoutUniversityNestedInputSchema;
