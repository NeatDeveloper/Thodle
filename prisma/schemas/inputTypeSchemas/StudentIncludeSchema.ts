import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"
import { GroupArgsSchema } from "../outputTypeSchemas/GroupArgsSchema"

export const StudentIncludeSchema: z.ZodType<Prisma.StudentInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
}).strict()

export default StudentIncludeSchema;
