import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateampluaInputSchema } from './AmpluaCreateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { StudentCreateNestedOneWithoutUserInputSchema } from './StudentCreateNestedOneWithoutUserInputSchema';
import { GroupHeadCreateNestedOneWithoutAmpluaInputSchema } from './GroupHeadCreateNestedOneWithoutAmpluaInputSchema';
import { CuratorCreateNestedOneWithoutAmpluaInputSchema } from './CuratorCreateNestedOneWithoutAmpluaInputSchema';
import { TutorCreateNestedOneWithoutAmpluaInputSchema } from './TutorCreateNestedOneWithoutAmpluaInputSchema';
import { LectorCreateNestedOneWithoutAmpluaInputSchema } from './LectorCreateNestedOneWithoutAmpluaInputSchema';

export const AmpluaCreateWithoutUserInputSchema: z.ZodType<Prisma.AmpluaCreateWithoutUserInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  student: z.lazy(() => StudentCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export default AmpluaCreateWithoutUserInputSchema;
