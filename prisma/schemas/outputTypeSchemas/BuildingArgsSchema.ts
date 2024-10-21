import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingSelectSchema } from '../inputTypeSchemas/BuildingSelectSchema';
import { BuildingIncludeSchema } from '../inputTypeSchemas/BuildingIncludeSchema';

export const BuildingArgsSchema: z.ZodType<Prisma.BuildingDefaultArgs> = z.object({
  select: z.lazy(() => BuildingSelectSchema).optional(),
  include: z.lazy(() => BuildingIncludeSchema).optional(),
}).strict();

export default BuildingArgsSchema;
