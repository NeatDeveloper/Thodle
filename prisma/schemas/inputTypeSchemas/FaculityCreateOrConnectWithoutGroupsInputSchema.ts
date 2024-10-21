import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FaculityWhereUniqueInputSchema } from './FaculityWhereUniqueInputSchema';
import { FaculityCreateWithoutGroupsInputSchema } from './FaculityCreateWithoutGroupsInputSchema';
import { FaculityUncheckedCreateWithoutGroupsInputSchema } from './FaculityUncheckedCreateWithoutGroupsInputSchema';

export const FaculityCreateOrConnectWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityCreateOrConnectWithoutGroupsInput> = z.object({
  where: z.lazy(() => FaculityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FaculityCreateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutGroupsInputSchema) ]),
}).strict();

export default FaculityCreateOrConnectWithoutGroupsInputSchema;
