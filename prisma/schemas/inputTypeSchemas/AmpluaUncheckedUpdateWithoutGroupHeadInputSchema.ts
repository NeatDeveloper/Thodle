import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BigIntFieldUpdateOperationsInputSchema } from './BigIntFieldUpdateOperationsInputSchema';
import { AmpluaUpdateampluaInputSchema } from './AmpluaUpdateampluaInputSchema';
import { AmpluaEnumSchema } from './AmpluaEnumSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StudentUncheckedUpdateOneWithoutUserNestedInputSchema } from './StudentUncheckedUpdateOneWithoutUserNestedInputSchema';
import { CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema } from './CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema';
import { TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema } from './TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema';
import { LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema } from './LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema';

export const AmpluaUncheckedUpdateWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaUncheckedUpdateWithoutGroupHeadInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  student: z.lazy(() => StudentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export default AmpluaUncheckedUpdateWithoutGroupHeadInputSchema;
