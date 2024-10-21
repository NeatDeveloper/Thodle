import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaUpdateampluaInputSchema } from './AmpluaUpdateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutAmpluaNestedInputSchema } from './UserUpdateOneRequiredWithoutAmpluaNestedInputSchema';
import { StudentUpdateOneWithoutUserNestedInputSchema } from './StudentUpdateOneWithoutUserNestedInputSchema';
import { CuratorUpdateOneWithoutAmpluaNestedInputSchema } from './CuratorUpdateOneWithoutAmpluaNestedInputSchema';
import { TutorUpdateOneWithoutAmpluaNestedInputSchema } from './TutorUpdateOneWithoutAmpluaNestedInputSchema';
import { LectorUpdateOneWithoutAmpluaNestedInputSchema } from './LectorUpdateOneWithoutAmpluaNestedInputSchema';

export const AmpluaUpdateWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaUpdateWithoutGroupHeadInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAmpluaNestedInputSchema).optional(),
  student: z.lazy(() => StudentUpdateOneWithoutUserNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export default AmpluaUpdateWithoutGroupHeadInputSchema;
