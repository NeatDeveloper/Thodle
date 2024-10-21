import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AmpluaCreateNestedOneWithoutTutorInputSchema } from './AmpluaCreateNestedOneWithoutTutorInputSchema';

export const TutorCreateWithoutGroupInputSchema: z.ZodType<Prisma.TutorCreateWithoutGroupInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutTutorInputSchema)
}).strict();

export default TutorCreateWithoutGroupInputSchema;
