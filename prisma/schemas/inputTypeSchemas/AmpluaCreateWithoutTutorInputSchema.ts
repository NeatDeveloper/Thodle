import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateampluaInputSchema } from './AmpluaCreateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { UserCreateNestedOneWithoutAmpluaInputSchema } from './UserCreateNestedOneWithoutAmpluaInputSchema';
import { StudentCreateNestedOneWithoutUserInputSchema } from './StudentCreateNestedOneWithoutUserInputSchema';
import { GroupHeadCreateNestedOneWithoutAmpluaInputSchema } from './GroupHeadCreateNestedOneWithoutAmpluaInputSchema';
import { CuratorCreateNestedOneWithoutAmpluaInputSchema } from './CuratorCreateNestedOneWithoutAmpluaInputSchema';
import { LectorCreateNestedOneWithoutAmpluaInputSchema } from './LectorCreateNestedOneWithoutAmpluaInputSchema';

export const AmpluaCreateWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaCreateWithoutTutorInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAmpluaInputSchema),
  student: z.lazy(() => StudentCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export default AmpluaCreateWithoutTutorInputSchema;
