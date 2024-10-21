import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateampluaInputSchema } from './AmpluaCreateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { StudentUncheckedCreateNestedOneWithoutUserInputSchema } from './StudentUncheckedCreateNestedOneWithoutUserInputSchema';
import { GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema } from './GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema';
import { CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema } from './CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema';
import { LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema } from './LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema';

export const AmpluaUncheckedCreateWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaUncheckedCreateWithoutTutorInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  student: z.lazy(() => StudentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export default AmpluaUncheckedCreateWithoutTutorInputSchema;
