import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"
import { GroupArgsSchema } from "../outputTypeSchemas/GroupArgsSchema"

export const StudentSelectSchema: z.ZodType<Prisma.StudentSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  group: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
}).strict()

export default StudentSelectSchema;
