import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityCreateWithoutGroupsInputSchema } from './FaculityCreateWithoutGroupsInputSchema';
import { FaculityUncheckedCreateWithoutGroupsInputSchema } from './FaculityUncheckedCreateWithoutGroupsInputSchema';
import { FaculityCreateOrConnectWithoutGroupsInputSchema } from './FaculityCreateOrConnectWithoutGroupsInputSchema';
import { FaculityUpsertWithoutGroupsInputSchema } from './FaculityUpsertWithoutGroupsInputSchema';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';
import { FaculityUpdateToOneWithWhereWithoutGroupsInputSchema } from './FaculityUpdateToOneWithWhereWithoutGroupsInputSchema';
import { FaculityUpdateWithoutGroupsInputSchema } from './FaculityUpdateWithoutGroupsInputSchema';
import { FaculityUncheckedUpdateWithoutGroupsInputSchema } from './FaculityUncheckedUpdateWithoutGroupsInputSchema';

export const FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema: z.ZodType<Prisma.FaculityUpdateOneRequiredWithoutGroupsNestedInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutGroupsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaculityCreateOrConnectWithoutGroupsInputSchema).optional(),
  upsert: z.lazy(() => FaculityUpsertWithoutGroupsInputSchema).optional(),
  connect: z.lazy(() => FaculityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FaculityUpdateToOneWithWhereWithoutGroupsInputSchema),z.lazy(() => FaculityUpdateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutGroupsInputSchema) ]).optional(),
}).strict();

export default FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema;
