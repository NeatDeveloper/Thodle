import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaculitySelectSchema } from '../inputTypeSchemas/FaculitySelectSchema';
import { FaculityIncludeSchema } from '../inputTypeSchemas/FaculityIncludeSchema';

export const FaculityArgsSchema: z.ZodType<Prisma.FaculityDefaultArgs> = z.object({
  select: z.lazy(() => FaculitySelectSchema).optional(),
  include: z.lazy(() => FaculityIncludeSchema).optional(),
}).strict();

export default FaculityArgsSchema;
