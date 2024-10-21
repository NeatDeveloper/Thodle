import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LectorIncludeSchema } from '../inputTypeSchemas/LectorIncludeSchema'
import { LectorWhereUniqueInputSchema } from '../inputTypeSchemas/LectorWhereUniqueInputSchema'
import { LectorRankFindManyArgsSchema } from "../outputTypeSchemas/LectorRankFindManyArgsSchema"
import { FaculityArgsSchema } from "../outputTypeSchemas/FaculityArgsSchema"
import { AmpluaArgsSchema } from "../outputTypeSchemas/AmpluaArgsSchema"
import { LectorCountOutputTypeArgsSchema } from "../outputTypeSchemas/LectorCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LectorSelectSchema: z.ZodType<Prisma.LectorSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  lastName: z.boolean().optional(),
  firstName: z.boolean().optional(),
  surname: z.boolean().optional(),
  initials: z.boolean().optional(),
  group: z.boolean().optional(),
  faculity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ranks: z.union([z.boolean(),z.lazy(() => LectorRankFindManyArgsSchema)]).optional(),
  Faculity: z.union([z.boolean(),z.lazy(() => FaculityArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LectorCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LectorDeleteArgsSchema: z.ZodType<Prisma.LectorDeleteArgs> = z.object({
  select: LectorSelectSchema.optional(),
  include: LectorIncludeSchema.optional(),
  where: LectorWhereUniqueInputSchema,
}).strict() ;

export default LectorDeleteArgsSchema;
