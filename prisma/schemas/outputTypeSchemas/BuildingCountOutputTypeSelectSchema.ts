import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BuildingCountOutputTypeSelectSchema: z.ZodType<Prisma.BuildingCountOutputTypeSelect> = z.object({
  auditoriums: z.boolean().optional(),
}).strict();

export default BuildingCountOutputTypeSelectSchema;
