import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BuildingCountOutputTypeSelectSchema } from './BuildingCountOutputTypeSelectSchema';

export const BuildingCountOutputTypeArgsSchema: z.ZodType<Prisma.BuildingCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BuildingCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BuildingCountOutputTypeSelectSchema;
