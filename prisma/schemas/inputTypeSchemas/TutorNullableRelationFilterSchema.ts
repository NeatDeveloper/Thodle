import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TutorWhereInputSchema } from './TutorWhereInputSchema';

export const TutorNullableRelationFilterSchema: z.ZodType<Prisma.TutorNullableRelationFilter> = z.object({
  is: z.lazy(() => TutorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TutorWhereInputSchema).optional().nullable()
}).strict();

export default TutorNullableRelationFilterSchema;
