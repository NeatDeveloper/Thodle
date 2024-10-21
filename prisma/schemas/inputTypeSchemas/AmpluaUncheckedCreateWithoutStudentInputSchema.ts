import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateampluaInputSchema } from './AmpluaCreateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema } from './GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema';
import { CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema } from './CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema';
import { TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema } from './TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema';
import { LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema } from './LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema';

export const AmpluaUncheckedCreateWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaUncheckedCreateWithoutStudentInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export default AmpluaUncheckedCreateWithoutStudentInputSchema;
