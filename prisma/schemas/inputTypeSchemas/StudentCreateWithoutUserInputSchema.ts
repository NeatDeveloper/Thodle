import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateNestedOneWithoutStudentsInputSchema } from './GroupCreateNestedOneWithoutStudentsInputSchema';

export const StudentCreateWithoutUserInputSchema: z.ZodType<Prisma.StudentCreateWithoutUserInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutStudentsInputSchema).optional()
}).strict();

export default StudentCreateWithoutUserInputSchema;
