import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupArgsSchema } from "../outputTypeSchemas/GroupArgsSchema"
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"

export const CuratorIncludeSchema: z.ZodType<Prisma.CuratorInclude> = z.object({
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export default CuratorIncludeSchema;
