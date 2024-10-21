import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TutorIncludeSchema } from '../inputTypeSchemas/TutorIncludeSchema'
import { TutorWhereUniqueInputSchema } from '../inputTypeSchemas/TutorWhereUniqueInputSchema'
import { TutorCreateInputSchema } from '../inputTypeSchemas/TutorCreateInputSchema'
import { TutorUncheckedCreateInputSchema } from '../inputTypeSchemas/TutorUncheckedCreateInputSchema'
import { TutorUpdateInputSchema } from '../inputTypeSchemas/TutorUpdateInputSchema'
import { TutorUncheckedUpdateInputSchema } from '../inputTypeSchemas/TutorUncheckedUpdateInputSchema'
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

export const TutorUpsertArgsSchema: z.ZodType<Prisma.TutorUpsertArgs> = z.object({
  select: TutorSelectSchema.optional(),
  include: TutorIncludeSchema.optional(),
  where: TutorWhereUniqueInputSchema,
  create: z.union([ TutorCreateInputSchema,TutorUncheckedCreateInputSchema ]),
  update: z.union([ TutorUpdateInputSchema,TutorUncheckedUpdateInputSchema ]),
}).strict() ;

export default TutorUpsertArgsSchema;
