import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TutorSelectSchema } from '../inputTypeSchemas/TutorSelectSchema';
import { TutorIncludeSchema } from '../inputTypeSchemas/TutorIncludeSchema';

export const TutorArgsSchema: z.ZodType<Prisma.TutorDefaultArgs> = z.object({
  select: z.lazy(() => TutorSelectSchema).optional(),
  include: z.lazy(() => TutorIncludeSchema).optional(),
}).strict();

export default TutorArgsSchema;
