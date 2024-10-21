import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateampluaInputSchema } from './AmpluaCreateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { UserCreateNestedOneWithoutAmpluaInputSchema } from './UserCreateNestedOneWithoutAmpluaInputSchema';
import { StudentCreateNestedOneWithoutUserInputSchema } from './StudentCreateNestedOneWithoutUserInputSchema';
import { GroupHeadCreateNestedOneWithoutAmpluaInputSchema } from './GroupHeadCreateNestedOneWithoutAmpluaInputSchema';
import { TutorCreateNestedOneWithoutAmpluaInputSchema } from './TutorCreateNestedOneWithoutAmpluaInputSchema';
import { LectorCreateNestedOneWithoutAmpluaInputSchema } from './LectorCreateNestedOneWithoutAmpluaInputSchema';

export const AmpluaCreateWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaCreateWithoutCuratorInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAmpluaInputSchema),
  student: z.lazy(() => StudentCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export default AmpluaCreateWithoutCuratorInputSchema;
