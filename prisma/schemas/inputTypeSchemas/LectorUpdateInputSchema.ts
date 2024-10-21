import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LectorRankUpdateManyWithoutLectorNestedInputSchema } from './LectorRankUpdateManyWithoutLectorNestedInputSchema';
import { FaculityUpdateOneWithoutLectorsNestedInputSchema } from './FaculityUpdateOneWithoutLectorsNestedInputSchema';
import { AmpluaUpdateOneRequiredWithoutLectorNestedInputSchema } from './AmpluaUpdateOneRequiredWithoutLectorNestedInputSchema';

export const LectorUpdateInputSchema: z.ZodType<Prisma.LectorUpdateInput> = z.object({
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  initials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ranks: z.lazy(() => LectorRankUpdateManyWithoutLectorNestedInputSchema).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneWithoutLectorsNestedInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutLectorNestedInputSchema).optional()
}).strict();

export default LectorUpdateInputSchema;
