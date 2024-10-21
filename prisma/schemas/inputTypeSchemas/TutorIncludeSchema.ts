import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GroupArgsSchema } from "../outputTypeSchemas/GroupArgsSchema"
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"

export const TutorIncludeSchema: z.ZodType<Prisma.TutorInclude> = z.object({
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export default TutorIncludeSchema;
