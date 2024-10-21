import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TutorIncludeSchema } from '../inputTypeSchemas/TutorIncludeSchema'
import { TutorCreateInputSchema } from '../inputTypeSchemas/TutorCreateInputSchema'
import { TutorUncheckedCreateInputSchema } from '../inputTypeSchemas/TutorUncheckedCreateInputSchema'
import { GroupArgsSchema } from "../outputTypeSchemas/GroupArgsSchema"
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TutorSelectSchema: z.ZodType<Prisma.TutorSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  group: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export const TutorCreateArgsSchema: z.ZodType<Prisma.TutorCreateArgs> = z.object({
  select: TutorSelectSchema.optional(),
  include: TutorIncludeSchema.optional(),
  data: z.union([ TutorCreateInputSchema,TutorUncheckedCreateInputSchema ]),
}).strict() ;

export default TutorCreateArgsSchema;
