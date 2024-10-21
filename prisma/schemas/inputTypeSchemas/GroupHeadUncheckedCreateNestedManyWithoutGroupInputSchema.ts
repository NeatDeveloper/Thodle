import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GroupHeadCreateWithoutGroupInputSchema } from './GroupHeadCreateWithoutGroupInputSchema';
import { GroupHeadUncheckedCreateWithoutGroupInputSchema } from './GroupHeadUncheckedCreateWithoutGroupInputSchema';
import { GroupHeadCreateOrConnectWithoutGroupInputSchema } from './GroupHeadCreateOrConnectWithoutGroupInputSchema';
import { GroupHeadCreateManyGroupInputEnvelopeSchema } from './GroupHeadCreateManyGroupInputEnvelopeSchema';
import { GroupHeadWhereUniqueInputSchema } from './GroupHeadWhereUniqueInputSchema';

export const GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUncheckedCreateNestedManyWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadCreateWithoutGroupInputSchema).array(),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupHeadCreateOrConnectWithoutGroupInputSchema),z.lazy(() => GroupHeadCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupHeadCreateManyGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema;
