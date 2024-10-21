import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupUpdateWithoutTutorInputSchema } from './GroupUpdateWithoutTutorInputSchema';
import { GroupUncheckedUpdateWithoutTutorInputSchema } from './GroupUncheckedUpdateWithoutTutorInputSchema';
import { GroupCreateWithoutTutorInputSchema } from './GroupCreateWithoutTutorInputSchema';
import { GroupUncheckedCreateWithoutTutorInputSchema } from './GroupUncheckedCreateWithoutTutorInputSchema';
import { GroupWhereInputSchema } from './GroupWhereInputSchema';

export const GroupUpsertWithoutTutorInputSchema: z.ZodType<Prisma.GroupUpsertWithoutTutorInput> = z.object({
  update: z.union([ z.lazy(() => GroupUpdateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutTutorInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutTutorInputSchema) ]),
  where: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export default GroupUpsertWithoutTutorInputSchema;
