import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AmpluaIncludeSchema } from '../inputTypeSchemas/AmpluaIncludeSchema'
import { AmpluaWhereUniqueInputSchema } from '../inputTypeSchemas/AmpluaWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { StudentArgsSchema } from "../outputTypeSchemas/StudentArgsSchema"
import { GroupHeadArgsSchema } from "../outputTypeSchemas/GroupHeadArgsSchema"
import { CuratorArgsSchema } from "../outputTypeSchemas/CuratorArgsSchema"
import { TutorArgsSchema } from "../outputTypeSchemas/TutorArgsSchema"
import { LectorArgsSchema } from "../outputTypeSchemas/LectorArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AmpluaSelectSchema: z.ZodType<Prisma.AmpluaSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  amplua: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  student: z.union([z.boolean(),z.lazy(() => StudentArgsSchema)]).optional(),
  groupHead: z.union([z.boolean(),z.lazy(() => GroupHeadArgsSchema)]).optional(),
  curator: z.union([z.boolean(),z.lazy(() => CuratorArgsSchema)]).optional(),
  tutor: z.union([z.boolean(),z.lazy(() => TutorArgsSchema)]).optional(),
  lector: z.union([z.boolean(),z.lazy(() => LectorArgsSchema)]).optional(),
}).strict()

export const AmpluaFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AmpluaFindUniqueOrThrowArgs> = z.object({
  select: AmpluaSelectSchema.optional(),
  include: AmpluaIncludeSchema.optional(),
  where: AmpluaWhereUniqueInputSchema,
}).strict() ;

export default AmpluaFindUniqueOrThrowArgsSchema;
