import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateNestedOneWithoutStudentInputSchema } from './AmpluaCreateNestedOneWithoutStudentInputSchema';
import { GroupCreateNestedOneWithoutStudentsInputSchema } from './GroupCreateNestedOneWithoutStudentsInputSchema';

export const StudentCreateInputSchema: z.ZodType<Prisma.StudentCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => AmpluaCreateNestedOneWithoutStudentInputSchema),
  Group: z.lazy(() => GroupCreateNestedOneWithoutStudentsInputSchema).optional()
}).strict();

export default StudentCreateInputSchema;
