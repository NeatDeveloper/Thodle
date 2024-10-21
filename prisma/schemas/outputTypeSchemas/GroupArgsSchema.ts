import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupSelectSchema } from '../inputTypeSchemas/GroupSelectSchema';
import { GroupIncludeSchema } from '../inputTypeSchemas/GroupIncludeSchema';

export const GroupArgsSchema: z.ZodType<Prisma.GroupDefaultArgs> = z.object({
  select: z.lazy(() => GroupSelectSchema).optional(),
  include: z.lazy(() => GroupIncludeSchema).optional(),
}).strict();

export default GroupArgsSchema;
