import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaUpdateampluaInputSchema } from './AmpluaUpdateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutAmpluaNestedInputSchema } from './UserUpdateOneRequiredWithoutAmpluaNestedInputSchema';
import { StudentUpdateOneWithoutUserNestedInputSchema } from './StudentUpdateOneWithoutUserNestedInputSchema';
import { GroupHeadUpdateOneWithoutAmpluaNestedInputSchema } from './GroupHeadUpdateOneWithoutAmpluaNestedInputSchema';
import { CuratorUpdateOneWithoutAmpluaNestedInputSchema } from './CuratorUpdateOneWithoutAmpluaNestedInputSchema';
import { LectorUpdateOneWithoutAmpluaNestedInputSchema } from './LectorUpdateOneWithoutAmpluaNestedInputSchema';

export const AmpluaUpdateWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaUpdateWithoutTutorInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAmpluaNestedInputSchema).optional(),
  student: z.lazy(() => StudentUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export default AmpluaUpdateWithoutTutorInputSchema;
