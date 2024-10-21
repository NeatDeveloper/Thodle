import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateNestedOneWithoutStudentInputSchema } from './AmpluaCreateNestedOneWithoutStudentInputSchema';

export const StudentCreateWithoutGroupInputSchema: z.ZodType<Prisma.StudentCreateWithoutGroupInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => AmpluaCreateNestedOneWithoutStudentInputSchema)
}).strict();

export default StudentCreateWithoutGroupInputSchema;
