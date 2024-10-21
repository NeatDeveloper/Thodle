import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityCreateWithoutGroupsInputSchema } from './FaculityCreateWithoutGroupsInputSchema';
import { FaculityUncheckedCreateWithoutGroupsInputSchema } from './FaculityUncheckedCreateWithoutGroupsInputSchema';
import { FaculityCreateOrConnectWithoutGroupsInputSchema } from './FaculityCreateOrConnectWithoutGroupsInputSchema';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';

export const FaculityCreateNestedOneWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityCreateNestedOneWithoutGroupsInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutGroupsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaculityCreateOrConnectWithoutGroupsInputSchema).optional(),
  connect: z.lazy(() => FaculityWhereUniqueInputSchema).optional()
}).strict();

export default FaculityCreateNestedOneWithoutGroupsInputSchema;
