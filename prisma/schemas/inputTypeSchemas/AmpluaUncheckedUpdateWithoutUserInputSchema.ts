import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaUpdateampluaInputSchema } from './AmpluaUpdateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StudentUncheckedUpdateOneWithoutUserNestedInputSchema } from './StudentUncheckedUpdateOneWithoutUserNestedInputSchema';
import { GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema } from './GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema';
import { CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema } from './CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema';
import { TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema } from './TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema';
import { LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema } from './LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema';

export const AmpluaUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AmpluaUncheckedUpdateWithoutUserInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  student: z.lazy(() => StudentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export default AmpluaUncheckedUpdateWithoutUserInputSchema;
