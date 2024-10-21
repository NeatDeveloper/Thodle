import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupHeadSelectSchema } from '../inputTypeSchemas/GroupHeadSelectSchema';
import { GroupHeadIncludeSchema } from '../inputTypeSchemas/GroupHeadIncludeSchema';

export const GroupHeadArgsSchema: z.ZodType<Prisma.GroupHeadDefaultArgs> = z.object({
  select: z.lazy(() => GroupHeadSelectSchema).optional(),
  include: z.lazy(() => GroupHeadIncludeSchema).optional(),
}).strict();

export default GroupHeadArgsSchema;
