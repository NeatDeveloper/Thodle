import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaUpdateampluaInputSchema } from './AmpluaUpdateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutAmpluaNestedInputSchema } from './UserUpdateOneRequiredWithoutAmpluaNestedInputSchema';
import { StudentUpdateOneWithoutUserNestedInputSchema } from './StudentUpdateOneWithoutUserNestedInputSchema';
import { GroupHeadUpdateOneWithoutAmpluaNestedInputSchema } from './GroupHeadUpdateOneWithoutAmpluaNestedInputSchema';
import { CuratorUpdateOneWithoutAmpluaNestedInputSchema } from './CuratorUpdateOneWithoutAmpluaNestedInputSchema';
import { TutorUpdateOneWithoutAmpluaNestedInputSchema } from './TutorUpdateOneWithoutAmpluaNestedInputSchema';

export const AmpluaUpdateWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaUpdateWithoutLectorInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAmpluaNestedInputSchema).optional(),
  student: z.lazy(() => StudentUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export default AmpluaUpdateWithoutLectorInputSchema;
