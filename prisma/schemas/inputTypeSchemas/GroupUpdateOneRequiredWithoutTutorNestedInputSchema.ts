import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupCreateWithoutTutorInputSchema } from './GroupCreateWithoutTutorInputSchema';
import { GroupUncheckedCreateWithoutTutorInputSchema } from './GroupUncheckedCreateWithoutTutorInputSchema';
import { GroupCreateOrConnectWithoutTutorInputSchema } from './GroupCreateOrConnectWithoutTutorInputSchema';
import { GroupUpsertWithoutTutorInputSchema } from './GroupUpsertWithoutTutorInputSchema';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';
import { GroupUpdateToOneWithWhereWithoutTutorInputSchema } from './GroupUpdateToOneWithWhereWithoutTutorInputSchema';
import { GroupUpdateWithoutTutorInputSchema } from './GroupUpdateWithoutTutorInputSchema';
import { GroupUncheckedUpdateWithoutTutorInputSchema } from './GroupUncheckedUpdateWithoutTutorInputSchema';

export const GroupUpdateOneRequiredWithoutTutorNestedInputSchema: z.ZodType<Prisma.GroupUpdateOneRequiredWithoutTutorNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutTutorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutTutorInputSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutTutorInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupUpdateToOneWithWhereWithoutTutorInputSchema),z.lazy(() => GroupUpdateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutTutorInputSchema) ]).optional(),
}).strict();

export default GroupUpdateOneRequiredWithoutTutorNestedInputSchema;
