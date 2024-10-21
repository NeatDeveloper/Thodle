import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateNestedOneWithoutTutorInputSchema } from './GroupCreateNestedOneWithoutTutorInputSchema';
import { AmpluaCreateNestedOneWithoutTutorInputSchema } from './AmpluaCreateNestedOneWithoutTutorInputSchema';

export const TutorCreateInputSchema: z.ZodType<Prisma.TutorCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutTutorInputSchema),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutTutorInputSchema)
}).strict();

export default TutorCreateInputSchema;
