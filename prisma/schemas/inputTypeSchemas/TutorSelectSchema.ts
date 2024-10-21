import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupArgsSchema } from "../outputTypeSchemas/GroupArgsSchema"
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"

export const TutorSelectSchema: z.ZodType<Prisma.TutorSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  group: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export default TutorSelectSchema;
