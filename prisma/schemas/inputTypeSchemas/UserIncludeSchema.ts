import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
