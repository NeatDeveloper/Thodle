import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateNestedOneWithoutTutorInputSchema } from './GroupCreateNestedOneWithoutTutorInputSchema';

export const TutorCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorCreateWithoutAmpluaInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutTutorInputSchema)
}).strict();

export default TutorCreateWithoutAmpluaInputSchema;
