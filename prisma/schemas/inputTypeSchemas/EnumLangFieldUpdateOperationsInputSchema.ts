import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LangSchema } from './LangSchema';

export const EnumLangFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLangFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LangSchema).optional()
}).strict();

export default EnumLangFieldUpdateOperationsInputSchema;
