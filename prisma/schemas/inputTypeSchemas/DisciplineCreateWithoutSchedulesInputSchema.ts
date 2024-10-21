import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityCreateNestedOneWithoutDisciplinesInputSchema } from './FaculityCreateNestedOneWithoutDisciplinesInputSchema';

export const DisciplineCreateWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineCreateWithoutSchedulesInput> = z.object({
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutDisciplinesInputSchema).optional()
}).strict();

export default DisciplineCreateWithoutSchedulesInputSchema;
