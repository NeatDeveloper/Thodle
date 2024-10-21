import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UniversitySelectSchema } from '../inputTypeSchemas/UniversitySelectSchema';
import { UniversityIncludeSchema } from '../inputTypeSchemas/UniversityIncludeSchema';

export const UniversityArgsSchema: z.ZodType<Prisma.UniversityDefaultArgs> = z.object({
  select: z.lazy(() => UniversitySelectSchema).optional(),
  include: z.lazy(() => UniversityIncludeSchema).optional(),
}).strict();

export default UniversityArgsSchema;
