import { z } from 'zod';
import type { CuratorWithRelations } from './CuratorSchema'
import type { GroupHeadWithRelations } from './GroupHeadSchema'
import type { StudentWithRelations } from './StudentSchema'
import type { TutorWithRelations } from './TutorSchema'
import type { FaculityWithRelations } from './FaculitySchema'
import { CuratorWithRelationsSchema } from './CuratorSchema'
import { GroupHeadWithRelationsSchema } from './GroupHeadSchema'
import { StudentWithRelationsSchema } from './StudentSchema'
import { TutorWithRelationsSchema } from './TutorSchema'
import { FaculityWithRelationsSchema } from './FaculitySchema'

/////////////////////////////////////////
// GROUP SCHEMA
/////////////////////////////////////////

/**
 * Модель **Неделя**
 * 
 * Описание, названий недель университета. Конкретно в данном случае, это поможет в правильном структурировании расписаний в приложении,
 * а также, позволяет реализовать поддержку именования недель в конкретном университете.
 * 
 * Например: "Первая и Вторая", "Красная и Чёрная"
 * @namespace СтруктураУниверситета
 */
export const GroupSchema = z.object({
  /**
   * ID группы в университете
   */
  id: z.number().int(),
  groupYear: z.number().int(),
  faculity: z.number().int(),
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type Group = z.infer<typeof GroupSchema>

/////////////////////////////////////////
// GROUP RELATION SCHEMA
/////////////////////////////////////////

export type GroupRelations = {
  curator?: CuratorWithRelations | null;
  groupHeads: GroupHeadWithRelations[];
  students: StudentWithRelations[];
  tutor?: TutorWithRelations | null;
  Faculity: FaculityWithRelations;
};

export type GroupWithRelations = z.infer<typeof GroupSchema> & GroupRelations

export const GroupWithRelationsSchema: z.ZodType<GroupWithRelations> = GroupSchema.merge(z.object({
  curator: z.lazy(() => CuratorWithRelationsSchema).nullable(),
  groupHeads: z.lazy(() => GroupHeadWithRelationsSchema).array(),
  students: z.lazy(() => StudentWithRelationsSchema).array(),
  tutor: z.lazy(() => TutorWithRelationsSchema).nullable(),
  Faculity: z.lazy(() => FaculityWithRelationsSchema),
}))

export default GroupSchema;
