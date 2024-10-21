import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BuildingCreateNestedOneWithoutAuditoriumsInputSchema } from './BuildingCreateNestedOneWithoutAuditoriumsInputSchema';

export const AuditoriumCreateInputSchema: z.ZodType<Prisma.AuditoriumCreateInput> = z.object({
  number: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Building: z.lazy(() => BuildingCreateNestedOneWithoutAuditoriumsInputSchema)
}).strict();

export default AuditoriumCreateInputSchema;
