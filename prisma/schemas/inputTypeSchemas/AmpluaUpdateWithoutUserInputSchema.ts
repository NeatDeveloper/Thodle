import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaUpdateampluaInputSchema } from './AmpluaUpdateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StudentUpdateOneWithoutUserNestedInputSchema } from './StudentUpdateOneWithoutUserNestedInputSchema';
import { GroupHeadUpdateOneWithoutAmpluaNestedInputSchema } from './GroupHeadUpdateOneWithoutAmpluaNestedInputSchema';
import { CuratorUpdateOneWithoutAmpluaNestedInputSchema } from './CuratorUpdateOneWithoutAmpluaNestedInputSchema';
import { TutorUpdateOneWithoutAmpluaNestedInputSchema } from './TutorUpdateOneWithoutAmpluaNestedInputSchema';
import { LectorUpdateOneWithoutAmpluaNestedInputSchema } from './LectorUpdateOneWithoutAmpluaNestedInputSchema';

export const AmpluaUpdateWithoutUserInputSchema: z.ZodType<Prisma.AmpluaUpdateWithoutUserInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  student: z.lazy(() => StudentUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export default AmpluaUpdateWithoutUserInputSchema;
