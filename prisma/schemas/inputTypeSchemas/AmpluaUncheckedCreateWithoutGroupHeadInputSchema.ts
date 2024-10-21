import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateampluaInputSchema } from './AmpluaCreateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { StudentUncheckedCreateNestedOneWithoutUserInputSchema } from './StudentUncheckedCreateNestedOneWithoutUserInputSchema';
import { CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema } from './CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema';
import { TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema } from './TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema';
import { LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema } from './LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema';

export const AmpluaUncheckedCreateWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaUncheckedCreateWithoutGroupHeadInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  student: z.lazy(() => StudentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export default AmpluaUncheckedCreateWithoutGroupHeadInputSchema;
