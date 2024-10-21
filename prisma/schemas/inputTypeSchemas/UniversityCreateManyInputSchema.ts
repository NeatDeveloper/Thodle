import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const UniversityCreateManyInputSchema: z.ZodType<Prisma.UniversityCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UniversityCreateManyInputSchema;
