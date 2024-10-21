import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CuratorSelectSchema } from '../inputTypeSchemas/CuratorSelectSchema';
import { CuratorIncludeSchema } from '../inputTypeSchemas/CuratorIncludeSchema';

export const CuratorArgsSchema: z.ZodType<Prisma.CuratorDefaultArgs> = z.object({
  select: z.lazy(() => CuratorSelectSchema).optional(),
  include: z.lazy(() => CuratorIncludeSchema).optional(),
}).strict();

export default CuratorArgsSchema;
