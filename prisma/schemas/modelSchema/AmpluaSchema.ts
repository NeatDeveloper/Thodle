import { z } from 'zod';
import { AmpluaEnumSchema } from '../inputTypeSchemas/AmpluaEnumSchema'
import type { UserWithRelations } from './UserSchema'
import type { StudentWithRelations } from './StudentSchema'
import type { GroupHeadWithRelations } from './GroupHeadSchema'
import type { CuratorWithRelations } from './CuratorSchema'
import type { TutorWithRelations } from './TutorSchema'
import type { LectorWithRelations } from './LectorSchema'
import { UserWithRelationsSchema } from './UserSchema'
import { StudentWithRelationsSchema } from './StudentSchema'
import { GroupHeadWithRelationsSchema } from './GroupHeadSchema'
import { CuratorWithRelationsSchema } from './CuratorSchema'
import { TutorWithRelationsSchema } from './TutorSchema'
import { LectorWithRelationsSchema } from './LectorSchema'

/////////////////////////////////////////
// AMPLUA SCHEMA
/////////////////////////////////////////

export const AmpluaSchema = z.object({
  amplua: AmpluaEnumSchema.array(),
  id: z.string(),
  tgID: z.bigint(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Amplua = z.infer<typeof AmpluaSchema>

/////////////////////////////////////////
// AMPLUA RELATION SCHEMA
/////////////////////////////////////////

export type AmpluaRelations = {
  user: UserWithRelations;
  student?: StudentWithRelations | null;
  groupHead?: GroupHeadWithRelations | null;
  curator?: CuratorWithRelations | null;
  tutor?: TutorWithRelations | null;
  lector?: LectorWithRelations | null;
};

export type AmpluaWithRelations = z.infer<typeof AmpluaSchema> & AmpluaRelations

export const AmpluaWithRelationsSchema: z.ZodType<AmpluaWithRelations> = AmpluaSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema),
  student: z.lazy(() => StudentWithRelationsSchema).nullable(),
  groupHead: z.lazy(() => GroupHeadWithRelationsSchema).nullable(),
  curator: z.lazy(() => CuratorWithRelationsSchema).nullable(),
  tutor: z.lazy(() => TutorWithRelationsSchema).nullable(),
  lector: z.lazy(() => LectorWithRelationsSchema).nullable(),
}))

export default AmpluaSchema;
