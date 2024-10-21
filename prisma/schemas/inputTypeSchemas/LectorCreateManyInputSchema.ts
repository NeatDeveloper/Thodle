import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LectorCreateManyInputSchema: z.ZodType<Prisma.LectorCreateManyInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  faculity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default LectorCreateManyInputSchema;
