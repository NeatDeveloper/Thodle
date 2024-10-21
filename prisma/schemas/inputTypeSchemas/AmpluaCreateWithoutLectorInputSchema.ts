import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateampluaInputSchema } from './AmpluaCreateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { UserCreateNestedOneWithoutAmpluaInputSchema } from './UserCreateNestedOneWithoutAmpluaInputSchema';
import { StudentCreateNestedOneWithoutUserInputSchema } from './StudentCreateNestedOneWithoutUserInputSchema';
import { GroupHeadCreateNestedOneWithoutAmpluaInputSchema } from './GroupHeadCreateNestedOneWithoutAmpluaInputSchema';
import { CuratorCreateNestedOneWithoutAmpluaInputSchema } from './CuratorCreateNestedOneWithoutAmpluaInputSchema';
import { TutorCreateNestedOneWithoutAmpluaInputSchema } from './TutorCreateNestedOneWithoutAmpluaInputSchema';

export const AmpluaCreateWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaCreateWithoutLectorInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAmpluaInputSchema),
  student: z.lazy(() => StudentCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export default AmpluaCreateWithoutLectorInputSchema;
