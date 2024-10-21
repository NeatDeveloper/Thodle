import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BigIntFieldUpdateOperationsInputSchema } from './BigIntFieldUpdateOperationsInputSchema';
import { AmpluaUpdateampluaInputSchema } from './AmpluaUpdateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StudentUncheckedUpdateOneWithoutUserNestedInputSchema } from './StudentUncheckedUpdateOneWithoutUserNestedInputSchema';
import { GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema } from './GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema';
import { CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema } from './CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema';
import { LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema } from './LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema';

export const AmpluaUncheckedUpdateWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaUncheckedUpdateWithoutTutorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  student: z.lazy(() => StudentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export default AmpluaUncheckedUpdateWithoutTutorInputSchema;
