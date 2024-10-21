import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadLevelSchema } from './GroupHeadLevelSchema';

export const EnumGroupHeadLevelFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGroupHeadLevelFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GroupHeadLevelSchema).optional()
}).strict();

export default EnumGroupHeadLevelFieldUpdateOperationsInputSchema;
