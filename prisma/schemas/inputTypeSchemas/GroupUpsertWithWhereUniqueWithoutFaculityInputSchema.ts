import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupWhereUniqueInputSchema } from './GroupWhereUniqueInputSchema';
import { GroupUpdateWithoutFaculityInputSchema } from './GroupUpdateWithoutFaculityInputSchema';
import { GroupUncheckedUpdateWithoutFaculityInputSchema } from './GroupUncheckedUpdateWithoutFaculityInputSchema';
import { GroupCreateWithoutFaculityInputSchema } from './GroupCreateWithoutFaculityInputSchema';
import { GroupUncheckedCreateWithoutFaculityInputSchema } from './GroupUncheckedCreateWithoutFaculityInputSchema';

export const GroupUpsertWithWhereUniqueWithoutFaculityInputSchema: z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutFaculityInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GroupUpdateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutFaculityInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema) ]),
}).strict();

export default GroupUpsertWithWhereUniqueWithoutFaculityInputSchema;
