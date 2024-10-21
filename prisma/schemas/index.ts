import { z } from 'zod';
import { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

// JSON
//------------------------------------------------------

export type NullableJsonInput = Prisma.JsonValue | null | 'JsonNull' | 'DbNull' | Prisma.NullTypes.DbNull | Prisma.NullTypes.JsonNull;

export const transformJsonNull = (v?: NullableJsonInput) => {
  if (!v || v === 'DbNull') return Prisma.DbNull;
  if (v === 'JsonNull') return Prisma.JsonNull;
  return v;
};

export const JsonValueSchema: z.ZodType<Prisma.JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.literal(null),
    z.record(z.lazy(() => JsonValueSchema.optional())),
    z.array(z.lazy(() => JsonValueSchema)),
  ])
);

export type JsonValueType = z.infer<typeof JsonValueSchema>;

export const NullableJsonValue = z
  .union([JsonValueSchema, z.literal('DbNull'), z.literal('JsonNull')])
  .nullable()
  .transform((v) => transformJsonNull(v));

export type NullableJsonValueType = z.infer<typeof NullableJsonValue>;

export const InputJsonValueSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.object({ toJSON: z.function(z.tuple([]), z.any()) }),
    z.record(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
    z.array(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
  ])
);

export type InputJsonValueType = z.infer<typeof InputJsonValueSchema>;


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const AmpluaScalarFieldEnumSchema = z.enum(['id','tgID','amplua','createdAt','updatedAt']);

export const CuratorScalarFieldEnumSchema = z.enum(['id','tgID','group','createdAt','updatedAt']);

export const GroupHeadScalarFieldEnumSchema = z.enum(['id','tgID','group','level','createdAt','updatedAt']);

export const LectorScalarFieldEnumSchema = z.enum(['id','tgID','lastName','firstName','surname','initials','group','faculity','createdAt','updatedAt']);

export const LectorRankScalarFieldEnumSchema = z.enum(['id','title','shortVariant','lectorId']);

export const StudentScalarFieldEnumSchema = z.enum(['id','tgID','group','createdAt','updatedAt']);

export const TutorScalarFieldEnumSchema = z.enum(['id','tgID','group','createdAt','updatedAt']);

export const ScheduleScalarFieldEnumSchema = z.enum(['id','discipline']);

export const AuditoriumScalarFieldEnumSchema = z.enum(['id','building','number','createdAt','updatedAt']);

export const BuildingScalarFieldEnumSchema = z.enum(['id','title','nonVerbalName','address','university','createdAt','updatedAt']);

export const DisciplineScalarFieldEnumSchema = z.enum(['id','title','faculity','createdAt','updatedAt']);

export const FaculityScalarFieldEnumSchema = z.enum(['id','university','createdAt','updatedAt']);

export const WeekScalarFieldEnumSchema = z.enum(['id','title','count','university','createdAt','updatedAt']);

export const GroupScalarFieldEnumSchema = z.enum(['id','groupYear','faculity','createdAt','updatedAt']);

export const UniversityScalarFieldEnumSchema = z.enum(['id','name','fullName','city','studyTime','createdAt','updatedAt']);

export const UserScalarFieldEnumSchema = z.enum(['id','tgID','lastName','firstName','username','role','lang','isBot','isPremium','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const JsonNullValueInputSchema = z.enum(['JsonNull',]).transform((value) => (value === 'JsonNull' ? Prisma.JsonNull : value));

export const QueryModeSchema = z.enum(['default','insensitive']);

export const AmpluaOrderByRelevanceFieldEnumSchema = z.enum(['id']);

export const CuratorOrderByRelevanceFieldEnumSchema = z.enum(['id']);

export const GroupHeadOrderByRelevanceFieldEnumSchema = z.enum(['id']);

export const NullsOrderSchema = z.enum(['first','last']);

export const LectorOrderByRelevanceFieldEnumSchema = z.enum(['id','lastName','firstName','surname','initials']);

export const LectorRankOrderByRelevanceFieldEnumSchema = z.enum(['title','shortVariant','lectorId']);

export const StudentOrderByRelevanceFieldEnumSchema = z.enum(['id']);

export const TutorOrderByRelevanceFieldEnumSchema = z.enum(['id']);

export const AuditoriumOrderByRelevanceFieldEnumSchema = z.enum(['number']);

export const BuildingOrderByRelevanceFieldEnumSchema = z.enum(['title','nonVerbalName','address']);

export const DisciplineOrderByRelevanceFieldEnumSchema = z.enum(['title']);

export const WeekOrderByRelevanceFieldEnumSchema = z.enum(['title']);

export const JsonNullValueFilterSchema = z.enum(['DbNull','JsonNull','AnyNull',]).transform((value) => value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.JsonNull : value === 'AnyNull' ? Prisma.AnyNull : value);

export const UniversityOrderByRelevanceFieldEnumSchema = z.enum(['name','fullName','city']);

export const UserOrderByRelevanceFieldEnumSchema = z.enum(['id','lastName','firstName','username']);

export const AmpluaEnumSchema = z.enum(['UNDEFINED','STUDENT','CURATOR','GROUP_HEAD','LECTOR','TUTOR']);

export type AmpluaEnumType = `${z.infer<typeof AmpluaEnumSchema>}`

export const GroupHeadLevelSchema = z.enum(['PRIMARY','SECONDARY']);

export type GroupHeadLevelType = `${z.infer<typeof GroupHeadLevelSchema>}`

export const WeekCountSchema = z.enum(['FIRST','SECOND']);

export type WeekCountType = `${z.infer<typeof WeekCountSchema>}`

export const UserRoleSchema = z.enum(['REGULAR','ADMIN']);

export type UserRoleType = `${z.infer<typeof UserRoleSchema>}`

export const LangSchema = z.enum(['RU','EN']);

export type LangType = `${z.infer<typeof LangSchema>}`

export const LessonTypeSchema = z.enum(['LECTURE','PRACTICE']);

export type LessonTypeType = `${z.infer<typeof LessonTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

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
// CURATOR SCHEMA
/////////////////////////////////////////

export const CuratorSchema = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Curator = z.infer<typeof CuratorSchema>

/////////////////////////////////////////
// GROUP HEAD SCHEMA
/////////////////////////////////////////

export const GroupHeadSchema = z.object({
  level: GroupHeadLevelSchema,
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type GroupHead = z.infer<typeof GroupHeadSchema>

/////////////////////////////////////////
// LECTOR SCHEMA
/////////////////////////////////////////

export const LectorSchema = z.object({
  id: z.string(),
  tgID: z.bigint(),
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  faculity: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Lector = z.infer<typeof LectorSchema>

/////////////////////////////////////////
// LECTOR RANK SCHEMA
/////////////////////////////////////////

export const LectorRankSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  shortVariant: z.string(),
  lectorId: z.string(),
})

export type LectorRank = z.infer<typeof LectorRankSchema>

/////////////////////////////////////////
// STUDENT SCHEMA
/////////////////////////////////////////

export const StudentSchema = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Student = z.infer<typeof StudentSchema>

/////////////////////////////////////////
// TUTOR SCHEMA
/////////////////////////////////////////

export const TutorSchema = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Tutor = z.infer<typeof TutorSchema>

/////////////////////////////////////////
// SCHEDULE SCHEMA
/////////////////////////////////////////

export const ScheduleSchema = z.object({
  id: z.number().int(),
  discipline: z.number().int(),
})

export type Schedule = z.infer<typeof ScheduleSchema>

/////////////////////////////////////////
// AUDITORIUM SCHEMA
/////////////////////////////////////////

/**
 * Модель **Аудитории**
 * 
 * Описание, всех аудиторий университета. Конкретно в данном случае, аудитории прикреплены к корпусам
 * @namespace СтруктураУниверситета
 */
export const AuditoriumSchema = z.object({
  /**
   * ID университета в базе данных
   */
  id: z.number().int(),
  /**
   * ID корпуса
   */
  building: z.number().int(),
  /**
   * Номер аудитории в строковом формате(302, 302a)
   */
  number: z.string(),
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type Auditorium = z.infer<typeof AuditoriumSchema>

/////////////////////////////////////////
// BUILDING SCHEMA
/////////////////////////////////////////

/**
 * Модель **Корпуса**
 * 
 * Описание корпусов университета, для упрощения навигации студентов в основном приложение
 * @namespace СтруктураУниверситета
 */
export const BuildingSchema = z.object({
  /**
   * ID университета в базе данных
   */
  id: z.number().int(),
  /**
   * Название корпуса
   */
  title: z.string(),
  /**
   * Внегласное название корпуса
   */
  nonVerbalName: z.string().nullable(),
  /**
   * Адрес(улица) на котором находится корпус
   */
  address: z.string(),
  /**
   * ID университета, к которому корпус привязан
   */
  university: z.number().int(),
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type Building = z.infer<typeof BuildingSchema>

/////////////////////////////////////////
// DISCIPLINE SCHEMA
/////////////////////////////////////////

/**
 * Модель **Дисциплина**
 * 
 * Описание, всех дисциплин университета. Конкретно в данном случае, дисциплины прикреплены к факультетам
 * @namespace СтруктураУниверситета
 */
export const DisciplineSchema = z.object({
  /**
   * ID дисциплины в базе данных
   */
  id: z.number().int(),
  /**
   * Название дисциплины
   */
  title: z.string(),
  /**
   * ID факультета
   */
  faculity: z.number().int().nullable(),
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type Discipline = z.infer<typeof DisciplineSchema>

/////////////////////////////////////////
// FACULITY SCHEMA
/////////////////////////////////////////

/**
 * Модель **Факультет**
 * 
 * Описание, всех факультетов университета. Конкретно в данном случае, факультеты прикреплены к университету
 * @namespace СтруктураУниверситета
 */
export const FaculitySchema = z.object({
  /**
   * ID университета в базе данных
   */
  id: z.number().int(),
  /**
   * ID университета
   */
  university: z.number().int(),
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type Faculity = z.infer<typeof FaculitySchema>

/////////////////////////////////////////
// WEEK SCHEMA
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
export const WeekSchema = z.object({
  /**
   * Порядок недели
   */
  count: WeekCountSchema,
  /**
   * ID недели в университете
   */
  id: z.number().int(),
  /**
   * Название недели в кокретном университете
   */
  title: z.string(),
  /**
   * ID университета
   */
  university: z.number().int().nullable(),
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type Week = z.infer<typeof WeekSchema>

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
// UNIVERSITY SCHEMA
/////////////////////////////////////////

/**
 * Модель **Университета**
 * 
 * Точка входа для описания структуры университета. Тут содержатся основные его данные, для нормальной работы всего приложения
 * @namespace СтруктураУниверситета
 */
export const UniversitySchema = z.object({
  /**
   * ID университета в базе данных
   */
  id: z.number().int(),
  /**
   * Название университета в сокращенном варианте
   */
  name: z.string(),
  /**
   * Название университета
   */
  fullName: z.string(),
  /**
   * Город, где университет находится
   */
  city: z.string(),
  /**
   * Массив, где хранятся время когда проходят учебные процессы
   * @minItems 5
   */
  studyTime: JsonValueSchema,
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type University = z.infer<typeof UniversitySchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

/**
 * Модель **пользователя**
 * 
 * Является основной моделью в базе данных, от которого мы наследуемся при работе с расписаниями
 * @namespace Пользователь
 */
export const UserSchema = z.object({
  /**
   * Роль пользователя в системе
   */
  role: UserRoleSchema,
  /**
   * Выбраный им язык
   */
  lang: LangSchema,
  /**
   * ID пользователя в базе данных
   */
  id: z.string().uuid(),
  /**
   * ID пользователя в телеграм
   */
  tgID: z.bigint(),
  /**
   * Фамилия пользователя в телеграм
   */
  lastName: z.string().nullable(),
  /**
   * Имя пользователя в телеграм
   */
  firstName: z.string().nullable(),
  /**
   * Имя пользователя пользователя в телеграм
   */
  username: z.string().nullable(),
  /**
   * Является ли пользователь ботом
   */
  isBot: z.boolean(),
  /**
   * Является ли пользователь премиум пользователем
   */
  isPremium: z.boolean(),
  /**
   * Дата создания пользователя в нашей системе
   */
  createdAt: z.coerce.date(),
  /**
   * Дата обновления пользователя в нашей системе
   */
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// AMPLUA
//------------------------------------------------------

export const AmpluaIncludeSchema: z.ZodType<Prisma.AmpluaInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  student: z.union([z.boolean(),z.lazy(() => StudentArgsSchema)]).optional(),
  groupHead: z.union([z.boolean(),z.lazy(() => GroupHeadArgsSchema)]).optional(),
  curator: z.union([z.boolean(),z.lazy(() => CuratorArgsSchema)]).optional(),
  tutor: z.union([z.boolean(),z.lazy(() => TutorArgsSchema)]).optional(),
  lector: z.union([z.boolean(),z.lazy(() => LectorArgsSchema)]).optional(),
}).strict()

export const AmpluaArgsSchema: z.ZodType<Prisma.AmpluaDefaultArgs> = z.object({
  select: z.lazy(() => AmpluaSelectSchema).optional(),
  include: z.lazy(() => AmpluaIncludeSchema).optional(),
}).strict();

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

// CURATOR
//------------------------------------------------------

export const CuratorIncludeSchema: z.ZodType<Prisma.CuratorInclude> = z.object({
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export const CuratorArgsSchema: z.ZodType<Prisma.CuratorDefaultArgs> = z.object({
  select: z.lazy(() => CuratorSelectSchema).optional(),
  include: z.lazy(() => CuratorIncludeSchema).optional(),
}).strict();

export const CuratorSelectSchema: z.ZodType<Prisma.CuratorSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  group: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

// GROUP HEAD
//------------------------------------------------------

export const GroupHeadIncludeSchema: z.ZodType<Prisma.GroupHeadInclude> = z.object({
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export const GroupHeadArgsSchema: z.ZodType<Prisma.GroupHeadDefaultArgs> = z.object({
  select: z.lazy(() => GroupHeadSelectSchema).optional(),
  include: z.lazy(() => GroupHeadIncludeSchema).optional(),
}).strict();

export const GroupHeadSelectSchema: z.ZodType<Prisma.GroupHeadSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  group: z.boolean().optional(),
  level: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

// LECTOR
//------------------------------------------------------

export const LectorIncludeSchema: z.ZodType<Prisma.LectorInclude> = z.object({
  ranks: z.union([z.boolean(),z.lazy(() => LectorRankFindManyArgsSchema)]).optional(),
  Faculity: z.union([z.boolean(),z.lazy(() => FaculityArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LectorCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LectorArgsSchema: z.ZodType<Prisma.LectorDefaultArgs> = z.object({
  select: z.lazy(() => LectorSelectSchema).optional(),
  include: z.lazy(() => LectorIncludeSchema).optional(),
}).strict();

export const LectorCountOutputTypeArgsSchema: z.ZodType<Prisma.LectorCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LectorCountOutputTypeSelectSchema).nullish(),
}).strict();

export const LectorCountOutputTypeSelectSchema: z.ZodType<Prisma.LectorCountOutputTypeSelect> = z.object({
  ranks: z.boolean().optional(),
}).strict();

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

// LECTOR RANK
//------------------------------------------------------

export const LectorRankIncludeSchema: z.ZodType<Prisma.LectorRankInclude> = z.object({
  Lector: z.union([z.boolean(),z.lazy(() => LectorArgsSchema)]).optional(),
}).strict()

export const LectorRankArgsSchema: z.ZodType<Prisma.LectorRankDefaultArgs> = z.object({
  select: z.lazy(() => LectorRankSelectSchema).optional(),
  include: z.lazy(() => LectorRankIncludeSchema).optional(),
}).strict();

export const LectorRankSelectSchema: z.ZodType<Prisma.LectorRankSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  shortVariant: z.boolean().optional(),
  lectorId: z.boolean().optional(),
  Lector: z.union([z.boolean(),z.lazy(() => LectorArgsSchema)]).optional(),
}).strict()

// STUDENT
//------------------------------------------------------

export const StudentIncludeSchema: z.ZodType<Prisma.StudentInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
}).strict()

export const StudentArgsSchema: z.ZodType<Prisma.StudentDefaultArgs> = z.object({
  select: z.lazy(() => StudentSelectSchema).optional(),
  include: z.lazy(() => StudentIncludeSchema).optional(),
}).strict();

export const StudentSelectSchema: z.ZodType<Prisma.StudentSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  group: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
}).strict()

// TUTOR
//------------------------------------------------------

export const TutorIncludeSchema: z.ZodType<Prisma.TutorInclude> = z.object({
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export const TutorArgsSchema: z.ZodType<Prisma.TutorDefaultArgs> = z.object({
  select: z.lazy(() => TutorSelectSchema).optional(),
  include: z.lazy(() => TutorIncludeSchema).optional(),
}).strict();

export const TutorSelectSchema: z.ZodType<Prisma.TutorSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  group: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Group: z.union([z.boolean(),z.lazy(() => GroupArgsSchema)]).optional(),
  Amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

// SCHEDULE
//------------------------------------------------------

export const ScheduleIncludeSchema: z.ZodType<Prisma.ScheduleInclude> = z.object({
  Discipline: z.union([z.boolean(),z.lazy(() => DisciplineArgsSchema)]).optional(),
}).strict()

export const ScheduleArgsSchema: z.ZodType<Prisma.ScheduleDefaultArgs> = z.object({
  select: z.lazy(() => ScheduleSelectSchema).optional(),
  include: z.lazy(() => ScheduleIncludeSchema).optional(),
}).strict();

export const ScheduleSelectSchema: z.ZodType<Prisma.ScheduleSelect> = z.object({
  id: z.boolean().optional(),
  discipline: z.boolean().optional(),
  Discipline: z.union([z.boolean(),z.lazy(() => DisciplineArgsSchema)]).optional(),
}).strict()

// AUDITORIUM
//------------------------------------------------------

export const AuditoriumIncludeSchema: z.ZodType<Prisma.AuditoriumInclude> = z.object({
  Building: z.union([z.boolean(),z.lazy(() => BuildingArgsSchema)]).optional(),
}).strict()

export const AuditoriumArgsSchema: z.ZodType<Prisma.AuditoriumDefaultArgs> = z.object({
  select: z.lazy(() => AuditoriumSelectSchema).optional(),
  include: z.lazy(() => AuditoriumIncludeSchema).optional(),
}).strict();

export const AuditoriumSelectSchema: z.ZodType<Prisma.AuditoriumSelect> = z.object({
  id: z.boolean().optional(),
  building: z.boolean().optional(),
  number: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Building: z.union([z.boolean(),z.lazy(() => BuildingArgsSchema)]).optional(),
}).strict()

// BUILDING
//------------------------------------------------------

export const BuildingIncludeSchema: z.ZodType<Prisma.BuildingInclude> = z.object({
  auditoriums: z.union([z.boolean(),z.lazy(() => AuditoriumFindManyArgsSchema)]).optional(),
  University: z.union([z.boolean(),z.lazy(() => UniversityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BuildingCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BuildingArgsSchema: z.ZodType<Prisma.BuildingDefaultArgs> = z.object({
  select: z.lazy(() => BuildingSelectSchema).optional(),
  include: z.lazy(() => BuildingIncludeSchema).optional(),
}).strict();

export const BuildingCountOutputTypeArgsSchema: z.ZodType<Prisma.BuildingCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BuildingCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BuildingCountOutputTypeSelectSchema: z.ZodType<Prisma.BuildingCountOutputTypeSelect> = z.object({
  auditoriums: z.boolean().optional(),
}).strict();

export const BuildingSelectSchema: z.ZodType<Prisma.BuildingSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  nonVerbalName: z.boolean().optional(),
  address: z.boolean().optional(),
  university: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  auditoriums: z.union([z.boolean(),z.lazy(() => AuditoriumFindManyArgsSchema)]).optional(),
  University: z.union([z.boolean(),z.lazy(() => UniversityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BuildingCountOutputTypeArgsSchema)]).optional(),
}).strict()

// DISCIPLINE
//------------------------------------------------------

export const DisciplineIncludeSchema: z.ZodType<Prisma.DisciplineInclude> = z.object({
  schedules: z.union([z.boolean(),z.lazy(() => ScheduleFindManyArgsSchema)]).optional(),
  Faculity: z.union([z.boolean(),z.lazy(() => FaculityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DisciplineCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DisciplineArgsSchema: z.ZodType<Prisma.DisciplineDefaultArgs> = z.object({
  select: z.lazy(() => DisciplineSelectSchema).optional(),
  include: z.lazy(() => DisciplineIncludeSchema).optional(),
}).strict();

export const DisciplineCountOutputTypeArgsSchema: z.ZodType<Prisma.DisciplineCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DisciplineCountOutputTypeSelectSchema).nullish(),
}).strict();

export const DisciplineCountOutputTypeSelectSchema: z.ZodType<Prisma.DisciplineCountOutputTypeSelect> = z.object({
  schedules: z.boolean().optional(),
}).strict();

export const DisciplineSelectSchema: z.ZodType<Prisma.DisciplineSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  faculity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  schedules: z.union([z.boolean(),z.lazy(() => ScheduleFindManyArgsSchema)]).optional(),
  Faculity: z.union([z.boolean(),z.lazy(() => FaculityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DisciplineCountOutputTypeArgsSchema)]).optional(),
}).strict()

// FACULITY
//------------------------------------------------------

export const FaculityIncludeSchema: z.ZodType<Prisma.FaculityInclude> = z.object({
  disciplines: z.union([z.boolean(),z.lazy(() => DisciplineFindManyArgsSchema)]).optional(),
  lectors: z.union([z.boolean(),z.lazy(() => LectorFindManyArgsSchema)]).optional(),
  groups: z.union([z.boolean(),z.lazy(() => GroupFindManyArgsSchema)]).optional(),
  University: z.union([z.boolean(),z.lazy(() => UniversityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FaculityCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const FaculityArgsSchema: z.ZodType<Prisma.FaculityDefaultArgs> = z.object({
  select: z.lazy(() => FaculitySelectSchema).optional(),
  include: z.lazy(() => FaculityIncludeSchema).optional(),
}).strict();

export const FaculityCountOutputTypeArgsSchema: z.ZodType<Prisma.FaculityCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => FaculityCountOutputTypeSelectSchema).nullish(),
}).strict();

export const FaculityCountOutputTypeSelectSchema: z.ZodType<Prisma.FaculityCountOutputTypeSelect> = z.object({
  disciplines: z.boolean().optional(),
  lectors: z.boolean().optional(),
  groups: z.boolean().optional(),
}).strict();

export const FaculitySelectSchema: z.ZodType<Prisma.FaculitySelect> = z.object({
  id: z.boolean().optional(),
  university: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  disciplines: z.union([z.boolean(),z.lazy(() => DisciplineFindManyArgsSchema)]).optional(),
  lectors: z.union([z.boolean(),z.lazy(() => LectorFindManyArgsSchema)]).optional(),
  groups: z.union([z.boolean(),z.lazy(() => GroupFindManyArgsSchema)]).optional(),
  University: z.union([z.boolean(),z.lazy(() => UniversityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FaculityCountOutputTypeArgsSchema)]).optional(),
}).strict()

// WEEK
//------------------------------------------------------

export const WeekIncludeSchema: z.ZodType<Prisma.WeekInclude> = z.object({
  University: z.union([z.boolean(),z.lazy(() => UniversityArgsSchema)]).optional(),
}).strict()

export const WeekArgsSchema: z.ZodType<Prisma.WeekDefaultArgs> = z.object({
  select: z.lazy(() => WeekSelectSchema).optional(),
  include: z.lazy(() => WeekIncludeSchema).optional(),
}).strict();

export const WeekSelectSchema: z.ZodType<Prisma.WeekSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  count: z.boolean().optional(),
  university: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  University: z.union([z.boolean(),z.lazy(() => UniversityArgsSchema)]).optional(),
}).strict()

// GROUP
//------------------------------------------------------

export const GroupIncludeSchema: z.ZodType<Prisma.GroupInclude> = z.object({
  curator: z.union([z.boolean(),z.lazy(() => CuratorArgsSchema)]).optional(),
  groupHeads: z.union([z.boolean(),z.lazy(() => GroupHeadFindManyArgsSchema)]).optional(),
  students: z.union([z.boolean(),z.lazy(() => StudentFindManyArgsSchema)]).optional(),
  tutor: z.union([z.boolean(),z.lazy(() => TutorArgsSchema)]).optional(),
  Faculity: z.union([z.boolean(),z.lazy(() => FaculityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const GroupArgsSchema: z.ZodType<Prisma.GroupDefaultArgs> = z.object({
  select: z.lazy(() => GroupSelectSchema).optional(),
  include: z.lazy(() => GroupIncludeSchema).optional(),
}).strict();

export const GroupCountOutputTypeArgsSchema: z.ZodType<Prisma.GroupCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => GroupCountOutputTypeSelectSchema).nullish(),
}).strict();

export const GroupCountOutputTypeSelectSchema: z.ZodType<Prisma.GroupCountOutputTypeSelect> = z.object({
  groupHeads: z.boolean().optional(),
  students: z.boolean().optional(),
}).strict();

export const GroupSelectSchema: z.ZodType<Prisma.GroupSelect> = z.object({
  id: z.boolean().optional(),
  groupYear: z.boolean().optional(),
  faculity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  curator: z.union([z.boolean(),z.lazy(() => CuratorArgsSchema)]).optional(),
  groupHeads: z.union([z.boolean(),z.lazy(() => GroupHeadFindManyArgsSchema)]).optional(),
  students: z.union([z.boolean(),z.lazy(() => StudentFindManyArgsSchema)]).optional(),
  tutor: z.union([z.boolean(),z.lazy(() => TutorArgsSchema)]).optional(),
  Faculity: z.union([z.boolean(),z.lazy(() => FaculityArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

// UNIVERSITY
//------------------------------------------------------

export const UniversityIncludeSchema: z.ZodType<Prisma.UniversityInclude> = z.object({
  weeks: z.union([z.boolean(),z.lazy(() => WeekFindManyArgsSchema)]).optional(),
  faculties: z.union([z.boolean(),z.lazy(() => FaculityFindManyArgsSchema)]).optional(),
  buildings: z.union([z.boolean(),z.lazy(() => BuildingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UniversityCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UniversityArgsSchema: z.ZodType<Prisma.UniversityDefaultArgs> = z.object({
  select: z.lazy(() => UniversitySelectSchema).optional(),
  include: z.lazy(() => UniversityIncludeSchema).optional(),
}).strict();

export const UniversityCountOutputTypeArgsSchema: z.ZodType<Prisma.UniversityCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UniversityCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UniversityCountOutputTypeSelectSchema: z.ZodType<Prisma.UniversityCountOutputTypeSelect> = z.object({
  weeks: z.boolean().optional(),
  faculties: z.boolean().optional(),
  buildings: z.boolean().optional(),
}).strict();

export const UniversitySelectSchema: z.ZodType<Prisma.UniversitySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  fullName: z.boolean().optional(),
  city: z.boolean().optional(),
  studyTime: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  weeks: z.union([z.boolean(),z.lazy(() => WeekFindManyArgsSchema)]).optional(),
  faculties: z.union([z.boolean(),z.lazy(() => FaculityFindManyArgsSchema)]).optional(),
  buildings: z.union([z.boolean(),z.lazy(() => BuildingFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UniversityCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  tgID: z.boolean().optional(),
  lastName: z.boolean().optional(),
  firstName: z.boolean().optional(),
  username: z.boolean().optional(),
  role: z.boolean().optional(),
  lang: z.boolean().optional(),
  isBot: z.boolean().optional(),
  isPremium: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  amplua: z.union([z.boolean(),z.lazy(() => AmpluaArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AmpluaWhereInputSchema: z.ZodType<Prisma.AmpluaWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AmpluaWhereInputSchema),z.lazy(() => AmpluaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AmpluaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AmpluaWhereInputSchema),z.lazy(() => AmpluaWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  amplua: z.lazy(() => EnumAmpluaEnumNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  student: z.union([ z.lazy(() => StudentNullableRelationFilterSchema),z.lazy(() => StudentWhereInputSchema) ]).optional().nullable(),
  groupHead: z.union([ z.lazy(() => GroupHeadNullableRelationFilterSchema),z.lazy(() => GroupHeadWhereInputSchema) ]).optional().nullable(),
  curator: z.union([ z.lazy(() => CuratorNullableRelationFilterSchema),z.lazy(() => CuratorWhereInputSchema) ]).optional().nullable(),
  tutor: z.union([ z.lazy(() => TutorNullableRelationFilterSchema),z.lazy(() => TutorWhereInputSchema) ]).optional().nullable(),
  lector: z.union([ z.lazy(() => LectorNullableRelationFilterSchema),z.lazy(() => LectorWhereInputSchema) ]).optional().nullable(),
}).strict();

export const AmpluaOrderByWithRelationInputSchema: z.ZodType<Prisma.AmpluaOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  amplua: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  student: z.lazy(() => StudentOrderByWithRelationInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadOrderByWithRelationInputSchema).optional(),
  curator: z.lazy(() => CuratorOrderByWithRelationInputSchema).optional(),
  tutor: z.lazy(() => TutorOrderByWithRelationInputSchema).optional(),
  lector: z.lazy(() => LectorOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => AmpluaOrderByRelevanceInputSchema).optional()
}).strict();

export const AmpluaWhereUniqueInputSchema: z.ZodType<Prisma.AmpluaWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => AmpluaIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string(),
    id_tgID: z.lazy(() => AmpluaIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => AmpluaIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    id_tgID: z.lazy(() => AmpluaIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  tgID: z.bigint().optional(),
  id_tgID: z.lazy(() => AmpluaIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AmpluaWhereInputSchema),z.lazy(() => AmpluaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AmpluaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AmpluaWhereInputSchema),z.lazy(() => AmpluaWhereInputSchema).array() ]).optional(),
  amplua: z.lazy(() => EnumAmpluaEnumNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  student: z.union([ z.lazy(() => StudentNullableRelationFilterSchema),z.lazy(() => StudentWhereInputSchema) ]).optional().nullable(),
  groupHead: z.union([ z.lazy(() => GroupHeadNullableRelationFilterSchema),z.lazy(() => GroupHeadWhereInputSchema) ]).optional().nullable(),
  curator: z.union([ z.lazy(() => CuratorNullableRelationFilterSchema),z.lazy(() => CuratorWhereInputSchema) ]).optional().nullable(),
  tutor: z.union([ z.lazy(() => TutorNullableRelationFilterSchema),z.lazy(() => TutorWhereInputSchema) ]).optional().nullable(),
  lector: z.union([ z.lazy(() => LectorNullableRelationFilterSchema),z.lazy(() => LectorWhereInputSchema) ]).optional().nullable(),
}).strict());

export const AmpluaOrderByWithAggregationInputSchema: z.ZodType<Prisma.AmpluaOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  amplua: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AmpluaCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AmpluaAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AmpluaMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AmpluaMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AmpluaSumOrderByAggregateInputSchema).optional()
}).strict();

export const AmpluaScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AmpluaScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AmpluaScalarWhereWithAggregatesInputSchema),z.lazy(() => AmpluaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AmpluaScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AmpluaScalarWhereWithAggregatesInputSchema),z.lazy(() => AmpluaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  amplua: z.lazy(() => EnumAmpluaEnumNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CuratorWhereInputSchema: z.ZodType<Prisma.CuratorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CuratorWhereInputSchema),z.lazy(() => CuratorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CuratorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CuratorWhereInputSchema),z.lazy(() => CuratorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict();

export const CuratorOrderByWithRelationInputSchema: z.ZodType<Prisma.CuratorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Group: z.lazy(() => GroupOrderByWithRelationInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => CuratorOrderByRelevanceInputSchema).optional()
}).strict();

export const CuratorWhereUniqueInputSchema: z.ZodType<Prisma.CuratorWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    group: z.number().int(),
    id_tgID: z.lazy(() => CuratorIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    group: z.number().int(),
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => CuratorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string(),
    group: z.number().int(),
    id_tgID: z.lazy(() => CuratorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
    group: z.number().int(),
  }),
  z.object({
    id: z.string(),
    id_tgID: z.lazy(() => CuratorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    group: z.number().int(),
    id_tgID: z.lazy(() => CuratorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
    group: z.number().int(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => CuratorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    group: z.number().int(),
    id_tgID: z.lazy(() => CuratorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    group: z.number().int(),
  }),
  z.object({
    id_tgID: z.lazy(() => CuratorIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  tgID: z.bigint().optional(),
  group: z.number().int().optional(),
  id_tgID: z.lazy(() => CuratorIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => CuratorWhereInputSchema),z.lazy(() => CuratorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CuratorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CuratorWhereInputSchema),z.lazy(() => CuratorWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict());

export const CuratorOrderByWithAggregationInputSchema: z.ZodType<Prisma.CuratorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CuratorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CuratorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CuratorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CuratorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CuratorSumOrderByAggregateInputSchema).optional()
}).strict();

export const CuratorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CuratorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CuratorScalarWhereWithAggregatesInputSchema),z.lazy(() => CuratorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CuratorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CuratorScalarWhereWithAggregatesInputSchema),z.lazy(() => CuratorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const GroupHeadWhereInputSchema: z.ZodType<Prisma.GroupHeadWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GroupHeadWhereInputSchema),z.lazy(() => GroupHeadWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupHeadWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupHeadWhereInputSchema),z.lazy(() => GroupHeadWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  level: z.union([ z.lazy(() => EnumGroupHeadLevelFilterSchema),z.lazy(() => GroupHeadLevelSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict();

export const GroupHeadOrderByWithRelationInputSchema: z.ZodType<Prisma.GroupHeadOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Group: z.lazy(() => GroupOrderByWithRelationInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => GroupHeadOrderByRelevanceInputSchema).optional()
}).strict();

export const GroupHeadWhereUniqueInputSchema: z.ZodType<Prisma.GroupHeadWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => GroupHeadIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string(),
    id_tgID: z.lazy(() => GroupHeadIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => GroupHeadIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    id_tgID: z.lazy(() => GroupHeadIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  tgID: z.bigint().optional(),
  id_tgID: z.lazy(() => GroupHeadIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => GroupHeadWhereInputSchema),z.lazy(() => GroupHeadWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupHeadWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupHeadWhereInputSchema),z.lazy(() => GroupHeadWhereInputSchema).array() ]).optional(),
  group: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  level: z.union([ z.lazy(() => EnumGroupHeadLevelFilterSchema),z.lazy(() => GroupHeadLevelSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict());

export const GroupHeadOrderByWithAggregationInputSchema: z.ZodType<Prisma.GroupHeadOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GroupHeadCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GroupHeadAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GroupHeadMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GroupHeadMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GroupHeadSumOrderByAggregateInputSchema).optional()
}).strict();

export const GroupHeadScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GroupHeadScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GroupHeadScalarWhereWithAggregatesInputSchema),z.lazy(() => GroupHeadScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupHeadScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupHeadScalarWhereWithAggregatesInputSchema),z.lazy(() => GroupHeadScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  level: z.union([ z.lazy(() => EnumGroupHeadLevelWithAggregatesFilterSchema),z.lazy(() => GroupHeadLevelSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const LectorWhereInputSchema: z.ZodType<Prisma.LectorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LectorWhereInputSchema),z.lazy(() => LectorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorWhereInputSchema),z.lazy(() => LectorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  surname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  initials: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  group: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ranks: z.lazy(() => LectorRankListRelationFilterSchema).optional(),
  Faculity: z.union([ z.lazy(() => FaculityNullableRelationFilterSchema),z.lazy(() => FaculityWhereInputSchema) ]).optional().nullable(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict();

export const LectorOrderByWithRelationInputSchema: z.ZodType<Prisma.LectorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  surname: z.lazy(() => SortOrderSchema).optional(),
  initials: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ranks: z.lazy(() => LectorRankOrderByRelationAggregateInputSchema).optional(),
  Faculity: z.lazy(() => FaculityOrderByWithRelationInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LectorOrderByRelevanceInputSchema).optional()
}).strict();

export const LectorWhereUniqueInputSchema: z.ZodType<Prisma.LectorWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    group: z.number().int(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    group: z.number().int(),
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string(),
    group: z.number().int(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
    group: z.number().int(),
  }),
  z.object({
    id: z.string(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    group: z.number().int(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
    group: z.number().int(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    group: z.number().int(),
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    group: z.number().int(),
  }),
  z.object({
    id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  tgID: z.bigint().optional(),
  group: z.number().int().optional(),
  id_tgID: z.lazy(() => LectorIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => LectorWhereInputSchema),z.lazy(() => LectorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorWhereInputSchema),z.lazy(() => LectorWhereInputSchema).array() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  surname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  initials: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ranks: z.lazy(() => LectorRankListRelationFilterSchema).optional(),
  Faculity: z.union([ z.lazy(() => FaculityNullableRelationFilterSchema),z.lazy(() => FaculityWhereInputSchema) ]).optional().nullable(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict());

export const LectorOrderByWithAggregationInputSchema: z.ZodType<Prisma.LectorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  surname: z.lazy(() => SortOrderSchema).optional(),
  initials: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LectorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LectorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LectorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LectorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LectorSumOrderByAggregateInputSchema).optional()
}).strict();

export const LectorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LectorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LectorScalarWhereWithAggregatesInputSchema),z.lazy(() => LectorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorScalarWhereWithAggregatesInputSchema),z.lazy(() => LectorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  lastName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  surname: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  initials: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  group: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const LectorRankWhereInputSchema: z.ZodType<Prisma.LectorRankWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LectorRankWhereInputSchema),z.lazy(() => LectorRankWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorRankWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorRankWhereInputSchema),z.lazy(() => LectorRankWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  shortVariant: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lectorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Lector: z.union([ z.lazy(() => LectorRelationFilterSchema),z.lazy(() => LectorWhereInputSchema) ]).optional(),
}).strict();

export const LectorRankOrderByWithRelationInputSchema: z.ZodType<Prisma.LectorRankOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  shortVariant: z.lazy(() => SortOrderSchema).optional(),
  lectorId: z.lazy(() => SortOrderSchema).optional(),
  Lector: z.lazy(() => LectorOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LectorRankOrderByRelevanceInputSchema).optional()
}).strict();

export const LectorRankWhereUniqueInputSchema: z.ZodType<Prisma.LectorRankWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    title: z.string(),
    shortVariant: z.string()
  }),
  z.object({
    id: z.number().int(),
    title: z.string(),
  }),
  z.object({
    id: z.number().int(),
    shortVariant: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    title: z.string(),
    shortVariant: z.string(),
  }),
  z.object({
    title: z.string(),
  }),
  z.object({
    shortVariant: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  title: z.string().optional(),
  shortVariant: z.string().optional(),
  AND: z.union([ z.lazy(() => LectorRankWhereInputSchema),z.lazy(() => LectorRankWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorRankWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorRankWhereInputSchema),z.lazy(() => LectorRankWhereInputSchema).array() ]).optional(),
  lectorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Lector: z.union([ z.lazy(() => LectorRelationFilterSchema),z.lazy(() => LectorWhereInputSchema) ]).optional(),
}).strict());

export const LectorRankOrderByWithAggregationInputSchema: z.ZodType<Prisma.LectorRankOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  shortVariant: z.lazy(() => SortOrderSchema).optional(),
  lectorId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LectorRankCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LectorRankAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LectorRankMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LectorRankMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LectorRankSumOrderByAggregateInputSchema).optional()
}).strict();

export const LectorRankScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LectorRankScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LectorRankScalarWhereWithAggregatesInputSchema),z.lazy(() => LectorRankScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorRankScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorRankScalarWhereWithAggregatesInputSchema),z.lazy(() => LectorRankScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  shortVariant: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  lectorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const StudentWhereInputSchema: z.ZodType<Prisma.StudentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
  Group: z.union([ z.lazy(() => GroupNullableRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional().nullable(),
}).strict();

export const StudentOrderByWithRelationInputSchema: z.ZodType<Prisma.StudentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => AmpluaOrderByWithRelationInputSchema).optional(),
  Group: z.lazy(() => GroupOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => StudentOrderByRelevanceInputSchema).optional()
}).strict();

export const StudentWhereUniqueInputSchema: z.ZodType<Prisma.StudentWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => StudentIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string(),
    id_tgID: z.lazy(() => StudentIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => StudentIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    id_tgID: z.lazy(() => StudentIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  tgID: z.bigint().optional(),
  id_tgID: z.lazy(() => StudentIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  group: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
  Group: z.union([ z.lazy(() => GroupNullableRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional().nullable(),
}).strict());

export const StudentOrderByWithAggregationInputSchema: z.ZodType<Prisma.StudentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StudentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => StudentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StudentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StudentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => StudentSumOrderByAggregateInputSchema).optional()
}).strict();

export const StudentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StudentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StudentScalarWhereWithAggregatesInputSchema),z.lazy(() => StudentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentScalarWhereWithAggregatesInputSchema),z.lazy(() => StudentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TutorWhereInputSchema: z.ZodType<Prisma.TutorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TutorWhereInputSchema),z.lazy(() => TutorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TutorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TutorWhereInputSchema),z.lazy(() => TutorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict();

export const TutorOrderByWithRelationInputSchema: z.ZodType<Prisma.TutorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Group: z.lazy(() => GroupOrderByWithRelationInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => TutorOrderByRelevanceInputSchema).optional()
}).strict();

export const TutorWhereUniqueInputSchema: z.ZodType<Prisma.TutorWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    group: z.number().int(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    group: z.number().int(),
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string(),
    group: z.number().int(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
    group: z.number().int(),
  }),
  z.object({
    id: z.string(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    group: z.number().int(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
    group: z.number().int(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    group: z.number().int(),
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    group: z.number().int(),
  }),
  z.object({
    id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  tgID: z.bigint().optional(),
  group: z.number().int().optional(),
  id_tgID: z.lazy(() => TutorIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TutorWhereInputSchema),z.lazy(() => TutorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TutorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TutorWhereInputSchema),z.lazy(() => TutorWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Group: z.union([ z.lazy(() => GroupRelationFilterSchema),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  Amplua: z.union([ z.lazy(() => AmpluaRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
}).strict());

export const TutorOrderByWithAggregationInputSchema: z.ZodType<Prisma.TutorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TutorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TutorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TutorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TutorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TutorSumOrderByAggregateInputSchema).optional()
}).strict();

export const TutorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TutorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TutorScalarWhereWithAggregatesInputSchema),z.lazy(() => TutorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TutorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TutorScalarWhereWithAggregatesInputSchema),z.lazy(() => TutorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ScheduleWhereInputSchema: z.ZodType<Prisma.ScheduleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ScheduleWhereInputSchema),z.lazy(() => ScheduleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ScheduleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ScheduleWhereInputSchema),z.lazy(() => ScheduleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  discipline: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  Discipline: z.union([ z.lazy(() => DisciplineRelationFilterSchema),z.lazy(() => DisciplineWhereInputSchema) ]).optional(),
}).strict();

export const ScheduleOrderByWithRelationInputSchema: z.ZodType<Prisma.ScheduleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discipline: z.lazy(() => SortOrderSchema).optional(),
  Discipline: z.lazy(() => DisciplineOrderByWithRelationInputSchema).optional()
}).strict();

export const ScheduleWhereUniqueInputSchema: z.ZodType<Prisma.ScheduleWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ScheduleWhereInputSchema),z.lazy(() => ScheduleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ScheduleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ScheduleWhereInputSchema),z.lazy(() => ScheduleWhereInputSchema).array() ]).optional(),
  discipline: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  Discipline: z.union([ z.lazy(() => DisciplineRelationFilterSchema),z.lazy(() => DisciplineWhereInputSchema) ]).optional(),
}).strict());

export const ScheduleOrderByWithAggregationInputSchema: z.ZodType<Prisma.ScheduleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discipline: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ScheduleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ScheduleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ScheduleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ScheduleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ScheduleSumOrderByAggregateInputSchema).optional()
}).strict();

export const ScheduleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ScheduleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ScheduleScalarWhereWithAggregatesInputSchema),z.lazy(() => ScheduleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ScheduleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ScheduleScalarWhereWithAggregatesInputSchema),z.lazy(() => ScheduleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  discipline: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const AuditoriumWhereInputSchema: z.ZodType<Prisma.AuditoriumWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuditoriumWhereInputSchema),z.lazy(() => AuditoriumWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuditoriumWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuditoriumWhereInputSchema),z.lazy(() => AuditoriumWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  building: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Building: z.union([ z.lazy(() => BuildingRelationFilterSchema),z.lazy(() => BuildingWhereInputSchema) ]).optional(),
}).strict();

export const AuditoriumOrderByWithRelationInputSchema: z.ZodType<Prisma.AuditoriumOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  building: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Building: z.lazy(() => BuildingOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => AuditoriumOrderByRelevanceInputSchema).optional()
}).strict();

export const AuditoriumWhereUniqueInputSchema: z.ZodType<Prisma.AuditoriumWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => AuditoriumWhereInputSchema),z.lazy(() => AuditoriumWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuditoriumWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuditoriumWhereInputSchema),z.lazy(() => AuditoriumWhereInputSchema).array() ]).optional(),
  building: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Building: z.union([ z.lazy(() => BuildingRelationFilterSchema),z.lazy(() => BuildingWhereInputSchema) ]).optional(),
}).strict());

export const AuditoriumOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuditoriumOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  building: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AuditoriumCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AuditoriumAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AuditoriumMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AuditoriumMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AuditoriumSumOrderByAggregateInputSchema).optional()
}).strict();

export const AuditoriumScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AuditoriumScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AuditoriumScalarWhereWithAggregatesInputSchema),z.lazy(() => AuditoriumScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuditoriumScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuditoriumScalarWhereWithAggregatesInputSchema),z.lazy(() => AuditoriumScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  building: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BuildingWhereInputSchema: z.ZodType<Prisma.BuildingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BuildingWhereInputSchema),z.lazy(() => BuildingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BuildingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BuildingWhereInputSchema),z.lazy(() => BuildingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nonVerbalName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  university: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  auditoriums: z.lazy(() => AuditoriumListRelationFilterSchema).optional(),
  University: z.union([ z.lazy(() => UniversityRelationFilterSchema),z.lazy(() => UniversityWhereInputSchema) ]).optional(),
}).strict();

export const BuildingOrderByWithRelationInputSchema: z.ZodType<Prisma.BuildingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  nonVerbalName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  auditoriums: z.lazy(() => AuditoriumOrderByRelationAggregateInputSchema).optional(),
  University: z.lazy(() => UniversityOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => BuildingOrderByRelevanceInputSchema).optional()
}).strict();

export const BuildingWhereUniqueInputSchema: z.ZodType<Prisma.BuildingWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => BuildingWhereInputSchema),z.lazy(() => BuildingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BuildingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BuildingWhereInputSchema),z.lazy(() => BuildingWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nonVerbalName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  university: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  auditoriums: z.lazy(() => AuditoriumListRelationFilterSchema).optional(),
  University: z.union([ z.lazy(() => UniversityRelationFilterSchema),z.lazy(() => UniversityWhereInputSchema) ]).optional(),
}).strict());

export const BuildingOrderByWithAggregationInputSchema: z.ZodType<Prisma.BuildingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  nonVerbalName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BuildingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BuildingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BuildingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BuildingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BuildingSumOrderByAggregateInputSchema).optional()
}).strict();

export const BuildingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BuildingScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BuildingScalarWhereWithAggregatesInputSchema),z.lazy(() => BuildingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BuildingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BuildingScalarWhereWithAggregatesInputSchema),z.lazy(() => BuildingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nonVerbalName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  university: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const DisciplineWhereInputSchema: z.ZodType<Prisma.DisciplineWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DisciplineWhereInputSchema),z.lazy(() => DisciplineWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DisciplineWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DisciplineWhereInputSchema),z.lazy(() => DisciplineWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  schedules: z.lazy(() => ScheduleListRelationFilterSchema).optional(),
  Faculity: z.union([ z.lazy(() => FaculityNullableRelationFilterSchema),z.lazy(() => FaculityWhereInputSchema) ]).optional().nullable(),
}).strict();

export const DisciplineOrderByWithRelationInputSchema: z.ZodType<Prisma.DisciplineOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  schedules: z.lazy(() => ScheduleOrderByRelationAggregateInputSchema).optional(),
  Faculity: z.lazy(() => FaculityOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => DisciplineOrderByRelevanceInputSchema).optional()
}).strict();

export const DisciplineWhereUniqueInputSchema: z.ZodType<Prisma.DisciplineWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => DisciplineWhereInputSchema),z.lazy(() => DisciplineWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DisciplineWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DisciplineWhereInputSchema),z.lazy(() => DisciplineWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  schedules: z.lazy(() => ScheduleListRelationFilterSchema).optional(),
  Faculity: z.union([ z.lazy(() => FaculityNullableRelationFilterSchema),z.lazy(() => FaculityWhereInputSchema) ]).optional().nullable(),
}).strict());

export const DisciplineOrderByWithAggregationInputSchema: z.ZodType<Prisma.DisciplineOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DisciplineCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DisciplineAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DisciplineMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DisciplineMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DisciplineSumOrderByAggregateInputSchema).optional()
}).strict();

export const DisciplineScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DisciplineScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DisciplineScalarWhereWithAggregatesInputSchema),z.lazy(() => DisciplineScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DisciplineScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DisciplineScalarWhereWithAggregatesInputSchema),z.lazy(() => DisciplineScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const FaculityWhereInputSchema: z.ZodType<Prisma.FaculityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FaculityWhereInputSchema),z.lazy(() => FaculityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FaculityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FaculityWhereInputSchema),z.lazy(() => FaculityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  university: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  disciplines: z.lazy(() => DisciplineListRelationFilterSchema).optional(),
  lectors: z.lazy(() => LectorListRelationFilterSchema).optional(),
  groups: z.lazy(() => GroupListRelationFilterSchema).optional(),
  University: z.union([ z.lazy(() => UniversityRelationFilterSchema),z.lazy(() => UniversityWhereInputSchema) ]).optional(),
}).strict();

export const FaculityOrderByWithRelationInputSchema: z.ZodType<Prisma.FaculityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  disciplines: z.lazy(() => DisciplineOrderByRelationAggregateInputSchema).optional(),
  lectors: z.lazy(() => LectorOrderByRelationAggregateInputSchema).optional(),
  groups: z.lazy(() => GroupOrderByRelationAggregateInputSchema).optional(),
  University: z.lazy(() => UniversityOrderByWithRelationInputSchema).optional()
}).strict();

export const FaculityWhereUniqueInputSchema: z.ZodType<Prisma.FaculityWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => FaculityWhereInputSchema),z.lazy(() => FaculityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FaculityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FaculityWhereInputSchema),z.lazy(() => FaculityWhereInputSchema).array() ]).optional(),
  university: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  disciplines: z.lazy(() => DisciplineListRelationFilterSchema).optional(),
  lectors: z.lazy(() => LectorListRelationFilterSchema).optional(),
  groups: z.lazy(() => GroupListRelationFilterSchema).optional(),
  University: z.union([ z.lazy(() => UniversityRelationFilterSchema),z.lazy(() => UniversityWhereInputSchema) ]).optional(),
}).strict());

export const FaculityOrderByWithAggregationInputSchema: z.ZodType<Prisma.FaculityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FaculityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => FaculityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FaculityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FaculityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => FaculitySumOrderByAggregateInputSchema).optional()
}).strict();

export const FaculityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FaculityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => FaculityScalarWhereWithAggregatesInputSchema),z.lazy(() => FaculityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => FaculityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FaculityScalarWhereWithAggregatesInputSchema),z.lazy(() => FaculityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  university: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const WeekWhereInputSchema: z.ZodType<Prisma.WeekWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WeekWhereInputSchema),z.lazy(() => WeekWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeekWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeekWhereInputSchema),z.lazy(() => WeekWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  count: z.union([ z.lazy(() => EnumWeekCountFilterSchema),z.lazy(() => WeekCountSchema) ]).optional(),
  university: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  University: z.union([ z.lazy(() => UniversityNullableRelationFilterSchema),z.lazy(() => UniversityWhereInputSchema) ]).optional().nullable(),
}).strict();

export const WeekOrderByWithRelationInputSchema: z.ZodType<Prisma.WeekOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  university: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  University: z.lazy(() => UniversityOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => WeekOrderByRelevanceInputSchema).optional()
}).strict();

export const WeekWhereUniqueInputSchema: z.ZodType<Prisma.WeekWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => WeekWhereInputSchema),z.lazy(() => WeekWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeekWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeekWhereInputSchema),z.lazy(() => WeekWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  count: z.union([ z.lazy(() => EnumWeekCountFilterSchema),z.lazy(() => WeekCountSchema) ]).optional(),
  university: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  University: z.union([ z.lazy(() => UniversityNullableRelationFilterSchema),z.lazy(() => UniversityWhereInputSchema) ]).optional().nullable(),
}).strict());

export const WeekOrderByWithAggregationInputSchema: z.ZodType<Prisma.WeekOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  university: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WeekCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WeekAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WeekMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WeekMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WeekSumOrderByAggregateInputSchema).optional()
}).strict();

export const WeekScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WeekScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WeekScalarWhereWithAggregatesInputSchema),z.lazy(() => WeekScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeekScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeekScalarWhereWithAggregatesInputSchema),z.lazy(() => WeekScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  count: z.union([ z.lazy(() => EnumWeekCountWithAggregatesFilterSchema),z.lazy(() => WeekCountSchema) ]).optional(),
  university: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const GroupWhereInputSchema: z.ZodType<Prisma.GroupWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GroupWhereInputSchema),z.lazy(() => GroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupWhereInputSchema),z.lazy(() => GroupWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  groupYear: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  faculity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  curator: z.union([ z.lazy(() => CuratorNullableRelationFilterSchema),z.lazy(() => CuratorWhereInputSchema) ]).optional().nullable(),
  groupHeads: z.lazy(() => GroupHeadListRelationFilterSchema).optional(),
  students: z.lazy(() => StudentListRelationFilterSchema).optional(),
  tutor: z.union([ z.lazy(() => TutorNullableRelationFilterSchema),z.lazy(() => TutorWhereInputSchema) ]).optional().nullable(),
  Faculity: z.union([ z.lazy(() => FaculityRelationFilterSchema),z.lazy(() => FaculityWhereInputSchema) ]).optional(),
}).strict();

export const GroupOrderByWithRelationInputSchema: z.ZodType<Prisma.GroupOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  groupYear: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  curator: z.lazy(() => CuratorOrderByWithRelationInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadOrderByRelationAggregateInputSchema).optional(),
  students: z.lazy(() => StudentOrderByRelationAggregateInputSchema).optional(),
  tutor: z.lazy(() => TutorOrderByWithRelationInputSchema).optional(),
  Faculity: z.lazy(() => FaculityOrderByWithRelationInputSchema).optional()
}).strict();

export const GroupWhereUniqueInputSchema: z.ZodType<Prisma.GroupWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => GroupWhereInputSchema),z.lazy(() => GroupWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupWhereInputSchema),z.lazy(() => GroupWhereInputSchema).array() ]).optional(),
  groupYear: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  faculity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  curator: z.union([ z.lazy(() => CuratorNullableRelationFilterSchema),z.lazy(() => CuratorWhereInputSchema) ]).optional().nullable(),
  groupHeads: z.lazy(() => GroupHeadListRelationFilterSchema).optional(),
  students: z.lazy(() => StudentListRelationFilterSchema).optional(),
  tutor: z.union([ z.lazy(() => TutorNullableRelationFilterSchema),z.lazy(() => TutorWhereInputSchema) ]).optional().nullable(),
  Faculity: z.union([ z.lazy(() => FaculityRelationFilterSchema),z.lazy(() => FaculityWhereInputSchema) ]).optional(),
}).strict());

export const GroupOrderByWithAggregationInputSchema: z.ZodType<Prisma.GroupOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  groupYear: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GroupCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GroupAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GroupMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GroupMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GroupSumOrderByAggregateInputSchema).optional()
}).strict();

export const GroupScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GroupScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GroupScalarWhereWithAggregatesInputSchema),z.lazy(() => GroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupScalarWhereWithAggregatesInputSchema),z.lazy(() => GroupScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  groupYear: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  faculity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UniversityWhereInputSchema: z.ZodType<Prisma.UniversityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UniversityWhereInputSchema),z.lazy(() => UniversityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UniversityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UniversityWhereInputSchema),z.lazy(() => UniversityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fullName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  studyTime: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  weeks: z.lazy(() => WeekListRelationFilterSchema).optional(),
  faculties: z.lazy(() => FaculityListRelationFilterSchema).optional(),
  buildings: z.lazy(() => BuildingListRelationFilterSchema).optional()
}).strict();

export const UniversityOrderByWithRelationInputSchema: z.ZodType<Prisma.UniversityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  studyTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  weeks: z.lazy(() => WeekOrderByRelationAggregateInputSchema).optional(),
  faculties: z.lazy(() => FaculityOrderByRelationAggregateInputSchema).optional(),
  buildings: z.lazy(() => BuildingOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => UniversityOrderByRelevanceInputSchema).optional()
}).strict();

export const UniversityWhereUniqueInputSchema: z.ZodType<Prisma.UniversityWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string(),
    fullName: z.string()
  }),
  z.object({
    id: z.number().int(),
    name: z.string(),
  }),
  z.object({
    id: z.number().int(),
    fullName: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string(),
    fullName: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
  z.object({
    fullName: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  fullName: z.string().optional(),
  AND: z.union([ z.lazy(() => UniversityWhereInputSchema),z.lazy(() => UniversityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UniversityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UniversityWhereInputSchema),z.lazy(() => UniversityWhereInputSchema).array() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  studyTime: z.lazy(() => JsonFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  weeks: z.lazy(() => WeekListRelationFilterSchema).optional(),
  faculties: z.lazy(() => FaculityListRelationFilterSchema).optional(),
  buildings: z.lazy(() => BuildingListRelationFilterSchema).optional()
}).strict());

export const UniversityOrderByWithAggregationInputSchema: z.ZodType<Prisma.UniversityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  studyTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UniversityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UniversityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UniversityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UniversityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UniversitySumOrderByAggregateInputSchema).optional()
}).strict();

export const UniversityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UniversityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UniversityScalarWhereWithAggregatesInputSchema),z.lazy(() => UniversityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UniversityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UniversityScalarWhereWithAggregatesInputSchema),z.lazy(() => UniversityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  fullName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  studyTime: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumUserRoleFilterSchema),z.lazy(() => UserRoleSchema) ]).optional(),
  lang: z.union([ z.lazy(() => EnumLangFilterSchema),z.lazy(() => LangSchema) ]).optional(),
  isBot: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isPremium: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaNullableRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional().nullable(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  firstName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  lang: z.lazy(() => SortOrderSchema).optional(),
  isBot: z.lazy(() => SortOrderSchema).optional(),
  isPremium: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  amplua: z.lazy(() => AmpluaOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => UserOrderByRelevanceInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    tgID: z.bigint(),
    username: z.string(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
    tgID: z.bigint(),
    username: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
    tgID: z.bigint(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().uuid(),
    tgID: z.bigint(),
  }),
  z.object({
    id: z.string().uuid(),
    username: z.string(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().uuid(),
    username: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    tgID: z.bigint(),
    username: z.string(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
    username: z.string(),
  }),
  z.object({
    tgID: z.bigint(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    tgID: z.bigint(),
  }),
  z.object({
    username: z.string(),
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
  z.object({
    username: z.string(),
  }),
  z.object({
    id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  tgID: z.bigint().optional(),
  username: z.string().optional(),
  id_tgID: z.lazy(() => UserIdTgIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumUserRoleFilterSchema),z.lazy(() => UserRoleSchema) ]).optional(),
  lang: z.union([ z.lazy(() => EnumLangFilterSchema),z.lazy(() => LangSchema) ]).optional(),
  isBot: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isPremium: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaNullableRelationFilterSchema),z.lazy(() => AmpluaWhereInputSchema) ]).optional().nullable(),
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  firstName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  lang: z.lazy(() => SortOrderSchema).optional(),
  isBot: z.lazy(() => SortOrderSchema).optional(),
  isPremium: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  lastName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumUserRoleWithAggregatesFilterSchema),z.lazy(() => UserRoleSchema) ]).optional(),
  lang: z.union([ z.lazy(() => EnumLangWithAggregatesFilterSchema),z.lazy(() => LangSchema) ]).optional(),
  isBot: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  isPremium: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AmpluaCreateInputSchema: z.ZodType<Prisma.AmpluaCreateInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAmpluaInputSchema),
  student: z.lazy(() => StudentCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaUncheckedCreateInputSchema: z.ZodType<Prisma.AmpluaUncheckedCreateInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  student: z.lazy(() => StudentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaUpdateInputSchema: z.ZodType<Prisma.AmpluaUpdateInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAmpluaNestedInputSchema).optional(),
  student: z.lazy(() => StudentUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const AmpluaUncheckedUpdateInputSchema: z.ZodType<Prisma.AmpluaUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  student: z.lazy(() => StudentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const AmpluaCreateManyInputSchema: z.ZodType<Prisma.AmpluaCreateManyInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AmpluaUpdateManyMutationInputSchema: z.ZodType<Prisma.AmpluaUpdateManyMutationInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AmpluaUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AmpluaUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CuratorCreateInputSchema: z.ZodType<Prisma.CuratorCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutCuratorInputSchema),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutCuratorInputSchema)
}).strict();

export const CuratorUncheckedCreateInputSchema: z.ZodType<Prisma.CuratorUncheckedCreateInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CuratorUpdateInputSchema: z.ZodType<Prisma.CuratorUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneRequiredWithoutCuratorNestedInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutCuratorNestedInputSchema).optional()
}).strict();

export const CuratorUncheckedUpdateInputSchema: z.ZodType<Prisma.CuratorUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CuratorCreateManyInputSchema: z.ZodType<Prisma.CuratorCreateManyInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CuratorUpdateManyMutationInputSchema: z.ZodType<Prisma.CuratorUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CuratorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CuratorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupHeadCreateInputSchema: z.ZodType<Prisma.GroupHeadCreateInput> = z.object({
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutGroupHeadsInputSchema),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutGroupHeadInputSchema)
}).strict();

export const GroupHeadUncheckedCreateInputSchema: z.ZodType<Prisma.GroupHeadUncheckedCreateInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GroupHeadUpdateInputSchema: z.ZodType<Prisma.GroupHeadUpdateInput> = z.object({
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneRequiredWithoutGroupHeadsNestedInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutGroupHeadNestedInputSchema).optional()
}).strict();

export const GroupHeadUncheckedUpdateInputSchema: z.ZodType<Prisma.GroupHeadUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupHeadCreateManyInputSchema: z.ZodType<Prisma.GroupHeadCreateManyInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GroupHeadUpdateManyMutationInputSchema: z.ZodType<Prisma.GroupHeadUpdateManyMutationInput> = z.object({
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupHeadUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GroupHeadUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LectorCreateInputSchema: z.ZodType<Prisma.LectorCreateInput> = z.object({
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ranks: z.lazy(() => LectorRankCreateNestedManyWithoutLectorInputSchema).optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutLectorsInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutLectorInputSchema)
}).strict();

export const LectorUncheckedCreateInputSchema: z.ZodType<Prisma.LectorUncheckedCreateInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  faculity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ranks: z.lazy(() => LectorRankUncheckedCreateNestedManyWithoutLectorInputSchema).optional()
}).strict();

export const LectorUpdateInputSchema: z.ZodType<Prisma.LectorUpdateInput> = z.object({
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  initials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ranks: z.lazy(() => LectorRankUpdateManyWithoutLectorNestedInputSchema).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneWithoutLectorsNestedInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutLectorNestedInputSchema).optional()
}).strict();

export const LectorUncheckedUpdateInputSchema: z.ZodType<Prisma.LectorUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  initials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ranks: z.lazy(() => LectorRankUncheckedUpdateManyWithoutLectorNestedInputSchema).optional()
}).strict();

export const LectorCreateManyInputSchema: z.ZodType<Prisma.LectorCreateManyInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  faculity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const LectorUpdateManyMutationInputSchema: z.ZodType<Prisma.LectorUpdateManyMutationInput> = z.object({
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  initials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LectorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LectorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  initials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LectorRankCreateInputSchema: z.ZodType<Prisma.LectorRankCreateInput> = z.object({
  title: z.string(),
  shortVariant: z.string(),
  Lector: z.lazy(() => LectorCreateNestedOneWithoutRanksInputSchema)
}).strict();

export const LectorRankUncheckedCreateInputSchema: z.ZodType<Prisma.LectorRankUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  shortVariant: z.string(),
  lectorId: z.string()
}).strict();

export const LectorRankUpdateInputSchema: z.ZodType<Prisma.LectorRankUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortVariant: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Lector: z.lazy(() => LectorUpdateOneRequiredWithoutRanksNestedInputSchema).optional()
}).strict();

export const LectorRankUncheckedUpdateInputSchema: z.ZodType<Prisma.LectorRankUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortVariant: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lectorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LectorRankCreateManyInputSchema: z.ZodType<Prisma.LectorRankCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  shortVariant: z.string(),
  lectorId: z.string()
}).strict();

export const LectorRankUpdateManyMutationInputSchema: z.ZodType<Prisma.LectorRankUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortVariant: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LectorRankUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LectorRankUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortVariant: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lectorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StudentCreateInputSchema: z.ZodType<Prisma.StudentCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => AmpluaCreateNestedOneWithoutStudentInputSchema),
  Group: z.lazy(() => GroupCreateNestedOneWithoutStudentsInputSchema).optional()
}).strict();

export const StudentUncheckedCreateInputSchema: z.ZodType<Prisma.StudentUncheckedCreateInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const StudentUpdateInputSchema: z.ZodType<Prisma.StudentUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => AmpluaUpdateOneRequiredWithoutStudentNestedInputSchema).optional(),
  Group: z.lazy(() => GroupUpdateOneWithoutStudentsNestedInputSchema).optional()
}).strict();

export const StudentUncheckedUpdateInputSchema: z.ZodType<Prisma.StudentUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StudentCreateManyInputSchema: z.ZodType<Prisma.StudentCreateManyInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const StudentUpdateManyMutationInputSchema: z.ZodType<Prisma.StudentUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StudentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StudentUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TutorCreateInputSchema: z.ZodType<Prisma.TutorCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutTutorInputSchema),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutTutorInputSchema)
}).strict();

export const TutorUncheckedCreateInputSchema: z.ZodType<Prisma.TutorUncheckedCreateInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TutorUpdateInputSchema: z.ZodType<Prisma.TutorUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneRequiredWithoutTutorNestedInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutTutorNestedInputSchema).optional()
}).strict();

export const TutorUncheckedUpdateInputSchema: z.ZodType<Prisma.TutorUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TutorCreateManyInputSchema: z.ZodType<Prisma.TutorCreateManyInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TutorUpdateManyMutationInputSchema: z.ZodType<Prisma.TutorUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TutorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TutorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ScheduleCreateInputSchema: z.ZodType<Prisma.ScheduleCreateInput> = z.object({
  Discipline: z.lazy(() => DisciplineCreateNestedOneWithoutSchedulesInputSchema)
}).strict();

export const ScheduleUncheckedCreateInputSchema: z.ZodType<Prisma.ScheduleUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  discipline: z.number().int()
}).strict();

export const ScheduleUpdateInputSchema: z.ZodType<Prisma.ScheduleUpdateInput> = z.object({
  Discipline: z.lazy(() => DisciplineUpdateOneRequiredWithoutSchedulesNestedInputSchema).optional()
}).strict();

export const ScheduleUncheckedUpdateInputSchema: z.ZodType<Prisma.ScheduleUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  discipline: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ScheduleCreateManyInputSchema: z.ZodType<Prisma.ScheduleCreateManyInput> = z.object({
  id: z.number().int().optional(),
  discipline: z.number().int()
}).strict();

export const ScheduleUpdateManyMutationInputSchema: z.ZodType<Prisma.ScheduleUpdateManyMutationInput> = z.object({
}).strict();

export const ScheduleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ScheduleUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  discipline: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuditoriumCreateInputSchema: z.ZodType<Prisma.AuditoriumCreateInput> = z.object({
  number: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Building: z.lazy(() => BuildingCreateNestedOneWithoutAuditoriumsInputSchema)
}).strict();

export const AuditoriumUncheckedCreateInputSchema: z.ZodType<Prisma.AuditoriumUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  building: z.number().int(),
  number: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AuditoriumUpdateInputSchema: z.ZodType<Prisma.AuditoriumUpdateInput> = z.object({
  number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Building: z.lazy(() => BuildingUpdateOneRequiredWithoutAuditoriumsNestedInputSchema).optional()
}).strict();

export const AuditoriumUncheckedUpdateInputSchema: z.ZodType<Prisma.AuditoriumUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  building: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuditoriumCreateManyInputSchema: z.ZodType<Prisma.AuditoriumCreateManyInput> = z.object({
  id: z.number().int().optional(),
  building: z.number().int(),
  number: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AuditoriumUpdateManyMutationInputSchema: z.ZodType<Prisma.AuditoriumUpdateManyMutationInput> = z.object({
  number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuditoriumUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AuditoriumUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  building: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BuildingCreateInputSchema: z.ZodType<Prisma.BuildingCreateInput> = z.object({
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  auditoriums: z.lazy(() => AuditoriumCreateNestedManyWithoutBuildingInputSchema).optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutBuildingsInputSchema)
}).strict();

export const BuildingUncheckedCreateInputSchema: z.ZodType<Prisma.BuildingUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  auditoriums: z.lazy(() => AuditoriumUncheckedCreateNestedManyWithoutBuildingInputSchema).optional()
}).strict();

export const BuildingUpdateInputSchema: z.ZodType<Prisma.BuildingUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nonVerbalName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  auditoriums: z.lazy(() => AuditoriumUpdateManyWithoutBuildingNestedInputSchema).optional(),
  University: z.lazy(() => UniversityUpdateOneRequiredWithoutBuildingsNestedInputSchema).optional()
}).strict();

export const BuildingUncheckedUpdateInputSchema: z.ZodType<Prisma.BuildingUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nonVerbalName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  auditoriums: z.lazy(() => AuditoriumUncheckedUpdateManyWithoutBuildingNestedInputSchema).optional()
}).strict();

export const BuildingCreateManyInputSchema: z.ZodType<Prisma.BuildingCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BuildingUpdateManyMutationInputSchema: z.ZodType<Prisma.BuildingUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nonVerbalName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BuildingUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BuildingUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nonVerbalName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DisciplineCreateInputSchema: z.ZodType<Prisma.DisciplineCreateInput> = z.object({
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  schedules: z.lazy(() => ScheduleCreateNestedManyWithoutDisciplineInputSchema).optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutDisciplinesInputSchema).optional()
}).strict();

export const DisciplineUncheckedCreateInputSchema: z.ZodType<Prisma.DisciplineUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  faculity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  schedules: z.lazy(() => ScheduleUncheckedCreateNestedManyWithoutDisciplineInputSchema).optional()
}).strict();

export const DisciplineUpdateInputSchema: z.ZodType<Prisma.DisciplineUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  schedules: z.lazy(() => ScheduleUpdateManyWithoutDisciplineNestedInputSchema).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneWithoutDisciplinesNestedInputSchema).optional()
}).strict();

export const DisciplineUncheckedUpdateInputSchema: z.ZodType<Prisma.DisciplineUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  schedules: z.lazy(() => ScheduleUncheckedUpdateManyWithoutDisciplineNestedInputSchema).optional()
}).strict();

export const DisciplineCreateManyInputSchema: z.ZodType<Prisma.DisciplineCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  faculity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const DisciplineUpdateManyMutationInputSchema: z.ZodType<Prisma.DisciplineUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DisciplineUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DisciplineUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FaculityCreateInputSchema: z.ZodType<Prisma.FaculityCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineCreateNestedManyWithoutFaculityInputSchema).optional(),
  lectors: z.lazy(() => LectorCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutFaculityInputSchema).optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutFacultiesInputSchema)
}).strict();

export const FaculityUncheckedCreateInputSchema: z.ZodType<Prisma.FaculityUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema).optional(),
  lectors: z.lazy(() => LectorUncheckedCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutFaculityInputSchema).optional()
}).strict();

export const FaculityUpdateInputSchema: z.ZodType<Prisma.FaculityUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  disciplines: z.lazy(() => DisciplineUpdateManyWithoutFaculityNestedInputSchema).optional(),
  lectors: z.lazy(() => LectorUpdateManyWithoutFaculityNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutFaculityNestedInputSchema).optional(),
  University: z.lazy(() => UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema).optional()
}).strict();

export const FaculityUncheckedUpdateInputSchema: z.ZodType<Prisma.FaculityUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  disciplines: z.lazy(() => DisciplineUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional(),
  lectors: z.lazy(() => LectorUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional()
}).strict();

export const FaculityCreateManyInputSchema: z.ZodType<Prisma.FaculityCreateManyInput> = z.object({
  id: z.number().int().optional(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const FaculityUpdateManyMutationInputSchema: z.ZodType<Prisma.FaculityUpdateManyMutationInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FaculityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.FaculityUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WeekCreateInputSchema: z.ZodType<Prisma.WeekCreateInput> = z.object({
  title: z.string(),
  count: z.lazy(() => WeekCountSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutWeeksInputSchema).optional()
}).strict();

export const WeekUncheckedCreateInputSchema: z.ZodType<Prisma.WeekUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  count: z.lazy(() => WeekCountSchema),
  university: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WeekUpdateInputSchema: z.ZodType<Prisma.WeekUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => EnumWeekCountFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  University: z.lazy(() => UniversityUpdateOneWithoutWeeksNestedInputSchema).optional()
}).strict();

export const WeekUncheckedUpdateInputSchema: z.ZodType<Prisma.WeekUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => EnumWeekCountFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WeekCreateManyInputSchema: z.ZodType<Prisma.WeekCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  count: z.lazy(() => WeekCountSchema),
  university: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WeekUpdateManyMutationInputSchema: z.ZodType<Prisma.WeekUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => EnumWeekCountFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WeekUncheckedUpdateManyInputSchema: z.ZodType<Prisma.WeekUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => EnumWeekCountFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupCreateInputSchema: z.ZodType<Prisma.GroupCreateInput> = z.object({
  groupYear: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutGroupInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadCreateNestedManyWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutGroupInputSchema).optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutGroupsInputSchema)
}).strict();

export const GroupUncheckedCreateInputSchema: z.ZodType<Prisma.GroupUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  faculity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutGroupInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutGroupInputSchema).optional()
}).strict();

export const GroupUpdateInputSchema: z.ZodType<Prisma.GroupUpdateInput> = z.object({
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutGroupNestedInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUpdateManyWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutGroupNestedInputSchema).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupCreateManyInputSchema: z.ZodType<Prisma.GroupCreateManyInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  faculity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GroupUpdateManyMutationInputSchema: z.ZodType<Prisma.GroupUpdateManyMutationInput> = z.object({
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UniversityCreateInputSchema: z.ZodType<Prisma.UniversityCreateInput> = z.object({
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  weeks: z.lazy(() => WeekCreateNestedManyWithoutUniversityInputSchema).optional(),
  faculties: z.lazy(() => FaculityCreateNestedManyWithoutUniversityInputSchema).optional(),
  buildings: z.lazy(() => BuildingCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export const UniversityUncheckedCreateInputSchema: z.ZodType<Prisma.UniversityUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  weeks: z.lazy(() => WeekUncheckedCreateNestedManyWithoutUniversityInputSchema).optional(),
  faculties: z.lazy(() => FaculityUncheckedCreateNestedManyWithoutUniversityInputSchema).optional(),
  buildings: z.lazy(() => BuildingUncheckedCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export const UniversityUpdateInputSchema: z.ZodType<Prisma.UniversityUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  weeks: z.lazy(() => WeekUpdateManyWithoutUniversityNestedInputSchema).optional(),
  faculties: z.lazy(() => FaculityUpdateManyWithoutUniversityNestedInputSchema).optional(),
  buildings: z.lazy(() => BuildingUpdateManyWithoutUniversityNestedInputSchema).optional()
}).strict();

export const UniversityUncheckedUpdateInputSchema: z.ZodType<Prisma.UniversityUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  weeks: z.lazy(() => WeekUncheckedUpdateManyWithoutUniversityNestedInputSchema).optional(),
  faculties: z.lazy(() => FaculityUncheckedUpdateManyWithoutUniversityNestedInputSchema).optional(),
  buildings: z.lazy(() => BuildingUncheckedUpdateManyWithoutUniversityNestedInputSchema).optional()
}).strict();

export const UniversityCreateManyInputSchema: z.ZodType<Prisma.UniversityCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UniversityUpdateManyMutationInputSchema: z.ZodType<Prisma.UniversityUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UniversityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UniversityUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  tgID: z.bigint(),
  lastName: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  username: z.string().optional().nullable(),
  role: z.lazy(() => UserRoleSchema).optional(),
  lang: z.lazy(() => LangSchema),
  isBot: z.boolean(),
  isPremium: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  amplua: z.lazy(() => AmpluaCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  tgID: z.bigint(),
  lastName: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  username: z.string().optional().nullable(),
  role: z.lazy(() => UserRoleSchema).optional(),
  lang: z.lazy(() => LangSchema),
  isBot: z.boolean(),
  isPremium: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  amplua: z.lazy(() => AmpluaUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  lang: z.union([ z.lazy(() => LangSchema),z.lazy(() => EnumLangFieldUpdateOperationsInputSchema) ]).optional(),
  isBot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isPremium: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  amplua: z.lazy(() => AmpluaUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  lang: z.union([ z.lazy(() => LangSchema),z.lazy(() => EnumLangFieldUpdateOperationsInputSchema) ]).optional(),
  isBot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isPremium: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  amplua: z.lazy(() => AmpluaUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  tgID: z.bigint(),
  lastName: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  username: z.string().optional().nullable(),
  role: z.lazy(() => UserRoleSchema).optional(),
  lang: z.lazy(() => LangSchema),
  isBot: z.boolean(),
  isPremium: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  lang: z.union([ z.lazy(() => LangSchema),z.lazy(() => EnumLangFieldUpdateOperationsInputSchema) ]).optional(),
  isBot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isPremium: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  lang: z.union([ z.lazy(() => LangSchema),z.lazy(() => EnumLangFieldUpdateOperationsInputSchema) ]).optional(),
  isBot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isPremium: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const BigIntFilterSchema: z.ZodType<Prisma.BigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const EnumAmpluaEnumNullableListFilterSchema: z.ZodType<Prisma.EnumAmpluaEnumNullableListFilter> = z.object({
  equals: z.lazy(() => AmpluaEnumSchema).array().optional().nullable(),
  has: z.lazy(() => AmpluaEnumSchema).optional().nullable(),
  hasEvery: z.lazy(() => AmpluaEnumSchema).array().optional(),
  hasSome: z.lazy(() => AmpluaEnumSchema).array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const StudentNullableRelationFilterSchema: z.ZodType<Prisma.StudentNullableRelationFilter> = z.object({
  is: z.lazy(() => StudentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => StudentWhereInputSchema).optional().nullable()
}).strict();

export const GroupHeadNullableRelationFilterSchema: z.ZodType<Prisma.GroupHeadNullableRelationFilter> = z.object({
  is: z.lazy(() => GroupHeadWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GroupHeadWhereInputSchema).optional().nullable()
}).strict();

export const CuratorNullableRelationFilterSchema: z.ZodType<Prisma.CuratorNullableRelationFilter> = z.object({
  is: z.lazy(() => CuratorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CuratorWhereInputSchema).optional().nullable()
}).strict();

export const TutorNullableRelationFilterSchema: z.ZodType<Prisma.TutorNullableRelationFilter> = z.object({
  is: z.lazy(() => TutorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TutorWhereInputSchema).optional().nullable()
}).strict();

export const LectorNullableRelationFilterSchema: z.ZodType<Prisma.LectorNullableRelationFilter> = z.object({
  is: z.lazy(() => LectorWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LectorWhereInputSchema).optional().nullable()
}).strict();

export const AmpluaOrderByRelevanceInputSchema: z.ZodType<Prisma.AmpluaOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => AmpluaOrderByRelevanceFieldEnumSchema),z.lazy(() => AmpluaOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const AmpluaIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.AmpluaIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export const AmpluaCountOrderByAggregateInputSchema: z.ZodType<Prisma.AmpluaCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  amplua: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AmpluaAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AmpluaAvgOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AmpluaMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AmpluaMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AmpluaMinOrderByAggregateInputSchema: z.ZodType<Prisma.AmpluaMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AmpluaSumOrderByAggregateInputSchema: z.ZodType<Prisma.AmpluaSumOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const GroupRelationFilterSchema: z.ZodType<Prisma.GroupRelationFilter> = z.object({
  is: z.lazy(() => GroupWhereInputSchema).optional(),
  isNot: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export const AmpluaRelationFilterSchema: z.ZodType<Prisma.AmpluaRelationFilter> = z.object({
  is: z.lazy(() => AmpluaWhereInputSchema).optional(),
  isNot: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export const CuratorOrderByRelevanceInputSchema: z.ZodType<Prisma.CuratorOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => CuratorOrderByRelevanceFieldEnumSchema),z.lazy(() => CuratorOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const CuratorIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.CuratorIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export const CuratorCountOrderByAggregateInputSchema: z.ZodType<Prisma.CuratorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CuratorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CuratorAvgOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CuratorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CuratorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CuratorMinOrderByAggregateInputSchema: z.ZodType<Prisma.CuratorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CuratorSumOrderByAggregateInputSchema: z.ZodType<Prisma.CuratorSumOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const EnumGroupHeadLevelFilterSchema: z.ZodType<Prisma.EnumGroupHeadLevelFilter> = z.object({
  equals: z.lazy(() => GroupHeadLevelSchema).optional(),
  in: z.lazy(() => GroupHeadLevelSchema).array().optional(),
  notIn: z.lazy(() => GroupHeadLevelSchema).array().optional(),
  not: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => NestedEnumGroupHeadLevelFilterSchema) ]).optional(),
}).strict();

export const GroupHeadOrderByRelevanceInputSchema: z.ZodType<Prisma.GroupHeadOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => GroupHeadOrderByRelevanceFieldEnumSchema),z.lazy(() => GroupHeadOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const GroupHeadIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.GroupHeadIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export const GroupHeadCountOrderByAggregateInputSchema: z.ZodType<Prisma.GroupHeadCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupHeadAvgOrderByAggregateInputSchema: z.ZodType<Prisma.GroupHeadAvgOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupHeadMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GroupHeadMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupHeadMinOrderByAggregateInputSchema: z.ZodType<Prisma.GroupHeadMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupHeadSumOrderByAggregateInputSchema: z.ZodType<Prisma.GroupHeadSumOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumGroupHeadLevelWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGroupHeadLevelWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GroupHeadLevelSchema).optional(),
  in: z.lazy(() => GroupHeadLevelSchema).array().optional(),
  notIn: z.lazy(() => GroupHeadLevelSchema).array().optional(),
  not: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => NestedEnumGroupHeadLevelWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGroupHeadLevelFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGroupHeadLevelFilterSchema).optional()
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const LectorRankListRelationFilterSchema: z.ZodType<Prisma.LectorRankListRelationFilter> = z.object({
  every: z.lazy(() => LectorRankWhereInputSchema).optional(),
  some: z.lazy(() => LectorRankWhereInputSchema).optional(),
  none: z.lazy(() => LectorRankWhereInputSchema).optional()
}).strict();

export const FaculityNullableRelationFilterSchema: z.ZodType<Prisma.FaculityNullableRelationFilter> = z.object({
  is: z.lazy(() => FaculityWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => FaculityWhereInputSchema).optional().nullable()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const LectorRankOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LectorRankOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LectorOrderByRelevanceInputSchema: z.ZodType<Prisma.LectorOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LectorOrderByRelevanceFieldEnumSchema),z.lazy(() => LectorOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const LectorIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.LectorIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export const LectorCountOrderByAggregateInputSchema: z.ZodType<Prisma.LectorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  surname: z.lazy(() => SortOrderSchema).optional(),
  initials: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LectorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LectorAvgOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LectorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LectorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  surname: z.lazy(() => SortOrderSchema).optional(),
  initials: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LectorMinOrderByAggregateInputSchema: z.ZodType<Prisma.LectorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  surname: z.lazy(() => SortOrderSchema).optional(),
  initials: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LectorSumOrderByAggregateInputSchema: z.ZodType<Prisma.LectorSumOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const LectorRelationFilterSchema: z.ZodType<Prisma.LectorRelationFilter> = z.object({
  is: z.lazy(() => LectorWhereInputSchema).optional(),
  isNot: z.lazy(() => LectorWhereInputSchema).optional()
}).strict();

export const LectorRankOrderByRelevanceInputSchema: z.ZodType<Prisma.LectorRankOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => LectorRankOrderByRelevanceFieldEnumSchema),z.lazy(() => LectorRankOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const LectorRankCountOrderByAggregateInputSchema: z.ZodType<Prisma.LectorRankCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  shortVariant: z.lazy(() => SortOrderSchema).optional(),
  lectorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LectorRankAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LectorRankAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LectorRankMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LectorRankMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  shortVariant: z.lazy(() => SortOrderSchema).optional(),
  lectorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LectorRankMinOrderByAggregateInputSchema: z.ZodType<Prisma.LectorRankMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  shortVariant: z.lazy(() => SortOrderSchema).optional(),
  lectorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LectorRankSumOrderByAggregateInputSchema: z.ZodType<Prisma.LectorRankSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupNullableRelationFilterSchema: z.ZodType<Prisma.GroupNullableRelationFilter> = z.object({
  is: z.lazy(() => GroupWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GroupWhereInputSchema).optional().nullable()
}).strict();

export const StudentOrderByRelevanceInputSchema: z.ZodType<Prisma.StudentOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => StudentOrderByRelevanceFieldEnumSchema),z.lazy(() => StudentOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const StudentIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.StudentIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export const StudentCountOrderByAggregateInputSchema: z.ZodType<Prisma.StudentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StudentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StudentAvgOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StudentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StudentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StudentMinOrderByAggregateInputSchema: z.ZodType<Prisma.StudentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StudentSumOrderByAggregateInputSchema: z.ZodType<Prisma.StudentSumOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TutorOrderByRelevanceInputSchema: z.ZodType<Prisma.TutorOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => TutorOrderByRelevanceFieldEnumSchema),z.lazy(() => TutorOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const TutorIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.TutorIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export const TutorCountOrderByAggregateInputSchema: z.ZodType<Prisma.TutorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TutorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TutorAvgOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TutorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TutorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TutorMinOrderByAggregateInputSchema: z.ZodType<Prisma.TutorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TutorSumOrderByAggregateInputSchema: z.ZodType<Prisma.TutorSumOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional(),
  group: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DisciplineRelationFilterSchema: z.ZodType<Prisma.DisciplineRelationFilter> = z.object({
  is: z.lazy(() => DisciplineWhereInputSchema).optional(),
  isNot: z.lazy(() => DisciplineWhereInputSchema).optional()
}).strict();

export const ScheduleCountOrderByAggregateInputSchema: z.ZodType<Prisma.ScheduleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discipline: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ScheduleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ScheduleAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discipline: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ScheduleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ScheduleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discipline: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ScheduleMinOrderByAggregateInputSchema: z.ZodType<Prisma.ScheduleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discipline: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ScheduleSumOrderByAggregateInputSchema: z.ZodType<Prisma.ScheduleSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discipline: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuildingRelationFilterSchema: z.ZodType<Prisma.BuildingRelationFilter> = z.object({
  is: z.lazy(() => BuildingWhereInputSchema).optional(),
  isNot: z.lazy(() => BuildingWhereInputSchema).optional()
}).strict();

export const AuditoriumOrderByRelevanceInputSchema: z.ZodType<Prisma.AuditoriumOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => AuditoriumOrderByRelevanceFieldEnumSchema),z.lazy(() => AuditoriumOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const AuditoriumCountOrderByAggregateInputSchema: z.ZodType<Prisma.AuditoriumCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  building: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuditoriumAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AuditoriumAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  building: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuditoriumMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AuditoriumMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  building: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuditoriumMinOrderByAggregateInputSchema: z.ZodType<Prisma.AuditoriumMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  building: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuditoriumSumOrderByAggregateInputSchema: z.ZodType<Prisma.AuditoriumSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  building: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const AuditoriumListRelationFilterSchema: z.ZodType<Prisma.AuditoriumListRelationFilter> = z.object({
  every: z.lazy(() => AuditoriumWhereInputSchema).optional(),
  some: z.lazy(() => AuditoriumWhereInputSchema).optional(),
  none: z.lazy(() => AuditoriumWhereInputSchema).optional()
}).strict();

export const UniversityRelationFilterSchema: z.ZodType<Prisma.UniversityRelationFilter> = z.object({
  is: z.lazy(() => UniversityWhereInputSchema).optional(),
  isNot: z.lazy(() => UniversityWhereInputSchema).optional()
}).strict();

export const AuditoriumOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AuditoriumOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuildingOrderByRelevanceInputSchema: z.ZodType<Prisma.BuildingOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => BuildingOrderByRelevanceFieldEnumSchema),z.lazy(() => BuildingOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const BuildingCountOrderByAggregateInputSchema: z.ZodType<Prisma.BuildingCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  nonVerbalName: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuildingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BuildingAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuildingMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BuildingMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  nonVerbalName: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuildingMinOrderByAggregateInputSchema: z.ZodType<Prisma.BuildingMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  nonVerbalName: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuildingSumOrderByAggregateInputSchema: z.ZodType<Prisma.BuildingSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const ScheduleListRelationFilterSchema: z.ZodType<Prisma.ScheduleListRelationFilter> = z.object({
  every: z.lazy(() => ScheduleWhereInputSchema).optional(),
  some: z.lazy(() => ScheduleWhereInputSchema).optional(),
  none: z.lazy(() => ScheduleWhereInputSchema).optional()
}).strict();

export const ScheduleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ScheduleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DisciplineOrderByRelevanceInputSchema: z.ZodType<Prisma.DisciplineOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => DisciplineOrderByRelevanceFieldEnumSchema),z.lazy(() => DisciplineOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const DisciplineCountOrderByAggregateInputSchema: z.ZodType<Prisma.DisciplineCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DisciplineAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DisciplineAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DisciplineMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DisciplineMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DisciplineMinOrderByAggregateInputSchema: z.ZodType<Prisma.DisciplineMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DisciplineSumOrderByAggregateInputSchema: z.ZodType<Prisma.DisciplineSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DisciplineListRelationFilterSchema: z.ZodType<Prisma.DisciplineListRelationFilter> = z.object({
  every: z.lazy(() => DisciplineWhereInputSchema).optional(),
  some: z.lazy(() => DisciplineWhereInputSchema).optional(),
  none: z.lazy(() => DisciplineWhereInputSchema).optional()
}).strict();

export const LectorListRelationFilterSchema: z.ZodType<Prisma.LectorListRelationFilter> = z.object({
  every: z.lazy(() => LectorWhereInputSchema).optional(),
  some: z.lazy(() => LectorWhereInputSchema).optional(),
  none: z.lazy(() => LectorWhereInputSchema).optional()
}).strict();

export const GroupListRelationFilterSchema: z.ZodType<Prisma.GroupListRelationFilter> = z.object({
  every: z.lazy(() => GroupWhereInputSchema).optional(),
  some: z.lazy(() => GroupWhereInputSchema).optional(),
  none: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export const DisciplineOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DisciplineOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LectorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LectorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GroupOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FaculityCountOrderByAggregateInputSchema: z.ZodType<Prisma.FaculityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FaculityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.FaculityAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FaculityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.FaculityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FaculityMinOrderByAggregateInputSchema: z.ZodType<Prisma.FaculityMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FaculitySumOrderByAggregateInputSchema: z.ZodType<Prisma.FaculitySumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumWeekCountFilterSchema: z.ZodType<Prisma.EnumWeekCountFilter> = z.object({
  equals: z.lazy(() => WeekCountSchema).optional(),
  in: z.lazy(() => WeekCountSchema).array().optional(),
  notIn: z.lazy(() => WeekCountSchema).array().optional(),
  not: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => NestedEnumWeekCountFilterSchema) ]).optional(),
}).strict();

export const UniversityNullableRelationFilterSchema: z.ZodType<Prisma.UniversityNullableRelationFilter> = z.object({
  is: z.lazy(() => UniversityWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UniversityWhereInputSchema).optional().nullable()
}).strict();

export const WeekOrderByRelevanceInputSchema: z.ZodType<Prisma.WeekOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => WeekOrderByRelevanceFieldEnumSchema),z.lazy(() => WeekOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const WeekCountOrderByAggregateInputSchema: z.ZodType<Prisma.WeekCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WeekAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WeekAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WeekMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WeekMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WeekMinOrderByAggregateInputSchema: z.ZodType<Prisma.WeekMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  count: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WeekSumOrderByAggregateInputSchema: z.ZodType<Prisma.WeekSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  university: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumWeekCountWithAggregatesFilterSchema: z.ZodType<Prisma.EnumWeekCountWithAggregatesFilter> = z.object({
  equals: z.lazy(() => WeekCountSchema).optional(),
  in: z.lazy(() => WeekCountSchema).array().optional(),
  notIn: z.lazy(() => WeekCountSchema).array().optional(),
  not: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => NestedEnumWeekCountWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumWeekCountFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumWeekCountFilterSchema).optional()
}).strict();

export const GroupHeadListRelationFilterSchema: z.ZodType<Prisma.GroupHeadListRelationFilter> = z.object({
  every: z.lazy(() => GroupHeadWhereInputSchema).optional(),
  some: z.lazy(() => GroupHeadWhereInputSchema).optional(),
  none: z.lazy(() => GroupHeadWhereInputSchema).optional()
}).strict();

export const StudentListRelationFilterSchema: z.ZodType<Prisma.StudentListRelationFilter> = z.object({
  every: z.lazy(() => StudentWhereInputSchema).optional(),
  some: z.lazy(() => StudentWhereInputSchema).optional(),
  none: z.lazy(() => StudentWhereInputSchema).optional()
}).strict();

export const FaculityRelationFilterSchema: z.ZodType<Prisma.FaculityRelationFilter> = z.object({
  is: z.lazy(() => FaculityWhereInputSchema).optional(),
  isNot: z.lazy(() => FaculityWhereInputSchema).optional()
}).strict();

export const GroupHeadOrderByRelationAggregateInputSchema: z.ZodType<Prisma.GroupHeadOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StudentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StudentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupCountOrderByAggregateInputSchema: z.ZodType<Prisma.GroupCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  groupYear: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupAvgOrderByAggregateInputSchema: z.ZodType<Prisma.GroupAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  groupYear: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GroupMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  groupYear: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupMinOrderByAggregateInputSchema: z.ZodType<Prisma.GroupMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  groupYear: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GroupSumOrderByAggregateInputSchema: z.ZodType<Prisma.GroupSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  groupYear: z.lazy(() => SortOrderSchema).optional(),
  faculity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JsonFilterSchema: z.ZodType<Prisma.JsonFilter> = z.object({
  equals: InputJsonValueSchema.optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValueSchema.optional().nullable(),
  array_starts_with: InputJsonValueSchema.optional().nullable(),
  array_ends_with: InputJsonValueSchema.optional().nullable(),
  lt: InputJsonValueSchema.optional(),
  lte: InputJsonValueSchema.optional(),
  gt: InputJsonValueSchema.optional(),
  gte: InputJsonValueSchema.optional(),
  not: InputJsonValueSchema.optional()
}).strict();

export const WeekListRelationFilterSchema: z.ZodType<Prisma.WeekListRelationFilter> = z.object({
  every: z.lazy(() => WeekWhereInputSchema).optional(),
  some: z.lazy(() => WeekWhereInputSchema).optional(),
  none: z.lazy(() => WeekWhereInputSchema).optional()
}).strict();

export const FaculityListRelationFilterSchema: z.ZodType<Prisma.FaculityListRelationFilter> = z.object({
  every: z.lazy(() => FaculityWhereInputSchema).optional(),
  some: z.lazy(() => FaculityWhereInputSchema).optional(),
  none: z.lazy(() => FaculityWhereInputSchema).optional()
}).strict();

export const BuildingListRelationFilterSchema: z.ZodType<Prisma.BuildingListRelationFilter> = z.object({
  every: z.lazy(() => BuildingWhereInputSchema).optional(),
  some: z.lazy(() => BuildingWhereInputSchema).optional(),
  none: z.lazy(() => BuildingWhereInputSchema).optional()
}).strict();

export const WeekOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WeekOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FaculityOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FaculityOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BuildingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BuildingOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UniversityOrderByRelevanceInputSchema: z.ZodType<Prisma.UniversityOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => UniversityOrderByRelevanceFieldEnumSchema),z.lazy(() => UniversityOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const UniversityCountOrderByAggregateInputSchema: z.ZodType<Prisma.UniversityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  studyTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UniversityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UniversityAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UniversityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UniversityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UniversityMinOrderByAggregateInputSchema: z.ZodType<Prisma.UniversityMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  fullName: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UniversitySumOrderByAggregateInputSchema: z.ZodType<Prisma.UniversitySumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JsonWithAggregatesFilterSchema: z.ZodType<Prisma.JsonWithAggregatesFilter> = z.object({
  equals: InputJsonValueSchema.optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValueSchema.optional().nullable(),
  array_starts_with: InputJsonValueSchema.optional().nullable(),
  array_ends_with: InputJsonValueSchema.optional().nullable(),
  lt: InputJsonValueSchema.optional(),
  lte: InputJsonValueSchema.optional(),
  gt: InputJsonValueSchema.optional(),
  gte: InputJsonValueSchema.optional(),
  not: InputJsonValueSchema.optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedJsonFilterSchema).optional(),
  _max: z.lazy(() => NestedJsonFilterSchema).optional()
}).strict();

export const EnumUserRoleFilterSchema: z.ZodType<Prisma.EnumUserRoleFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleFilterSchema) ]).optional(),
}).strict();

export const EnumLangFilterSchema: z.ZodType<Prisma.EnumLangFilter> = z.object({
  equals: z.lazy(() => LangSchema).optional(),
  in: z.lazy(() => LangSchema).array().optional(),
  notIn: z.lazy(() => LangSchema).array().optional(),
  not: z.union([ z.lazy(() => LangSchema),z.lazy(() => NestedEnumLangFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const AmpluaNullableRelationFilterSchema: z.ZodType<Prisma.AmpluaNullableRelationFilter> = z.object({
  is: z.lazy(() => AmpluaWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AmpluaWhereInputSchema).optional().nullable()
}).strict();

export const UserOrderByRelevanceInputSchema: z.ZodType<Prisma.UserOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => UserOrderByRelevanceFieldEnumSchema),z.lazy(() => UserOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export const UserIdTgIDCompoundUniqueInputSchema: z.ZodType<Prisma.UserIdTgIDCompoundUniqueInput> = z.object({
  id: z.string(),
  tgID: z.bigint()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  lang: z.lazy(() => SortOrderSchema).optional(),
  isBot: z.lazy(() => SortOrderSchema).optional(),
  isPremium: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  lang: z.lazy(() => SortOrderSchema).optional(),
  isBot: z.lazy(() => SortOrderSchema).optional(),
  isPremium: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  tgID: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  lang: z.lazy(() => SortOrderSchema).optional(),
  isBot: z.lazy(() => SortOrderSchema).optional(),
  isPremium: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = z.object({
  tgID: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumUserRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUserRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRoleFilterSchema).optional()
}).strict();

export const EnumLangWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLangWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LangSchema).optional(),
  in: z.lazy(() => LangSchema).array().optional(),
  notIn: z.lazy(() => LangSchema).array().optional(),
  not: z.union([ z.lazy(() => LangSchema),z.lazy(() => NestedEnumLangWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLangFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLangFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const AmpluaCreateampluaInputSchema: z.ZodType<Prisma.AmpluaCreateampluaInput> = z.object({
  set: z.lazy(() => AmpluaEnumSchema).array()
}).strict();

export const UserCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const StudentCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.StudentCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutUserInputSchema),z.lazy(() => StudentUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputSchema).optional()
}).strict();

export const GroupHeadCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupHeadCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => GroupHeadWhereUniqueInputSchema).optional()
}).strict();

export const CuratorCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional()
}).strict();

export const TutorCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => TutorCreateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TutorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => TutorWhereUniqueInputSchema).optional()
}).strict();

export const LectorCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LectorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => LectorWhereUniqueInputSchema).optional()
}).strict();

export const StudentUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.StudentUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutUserInputSchema),z.lazy(() => StudentUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputSchema).optional()
}).strict();

export const GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadUncheckedCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupHeadCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => GroupHeadWhereUniqueInputSchema).optional()
}).strict();

export const CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorUncheckedCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional()
}).strict();

export const TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorUncheckedCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => TutorCreateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TutorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => TutorWhereUniqueInputSchema).optional()
}).strict();

export const LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorUncheckedCreateNestedOneWithoutAmpluaInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LectorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => LectorWhereUniqueInputSchema).optional()
}).strict();

export const AmpluaUpdateampluaInputSchema: z.ZodType<Prisma.AmpluaUpdateampluaInput> = z.object({
  set: z.lazy(() => AmpluaEnumSchema).array().optional(),
  push: z.union([ z.lazy(() => AmpluaEnumSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAmpluaInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => UserUpdateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export const StudentUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.StudentUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutUserInputSchema),z.lazy(() => StudentUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => StudentUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => StudentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => StudentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StudentUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => StudentUpdateWithoutUserInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const GroupHeadUpdateOneWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.GroupHeadUpdateOneWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupHeadCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => GroupHeadUpsertWithoutAmpluaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GroupHeadWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GroupHeadWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GroupHeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupHeadUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUpdateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export const CuratorUpdateOneWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.CuratorUpdateOneWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => CuratorUpsertWithoutAmpluaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CuratorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CuratorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CuratorUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => CuratorUpdateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export const TutorUpdateOneWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.TutorUpdateOneWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => TutorCreateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TutorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => TutorUpsertWithoutAmpluaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TutorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TutorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TutorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TutorUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => TutorUpdateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export const LectorUpdateOneWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.LectorUpdateOneWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LectorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => LectorUpsertWithoutAmpluaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LectorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LectorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LectorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LectorUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => LectorUpdateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const StudentUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.StudentUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutUserInputSchema),z.lazy(() => StudentUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => StudentUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => StudentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => StudentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StudentUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => StudentUpdateWithoutUserInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupHeadCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => GroupHeadUpsertWithoutAmpluaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GroupHeadWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GroupHeadWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GroupHeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupHeadUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUpdateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export const CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.CuratorUncheckedUpdateOneWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => CuratorUpsertWithoutAmpluaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CuratorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CuratorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CuratorUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => CuratorUpdateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export const TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.TutorUncheckedUpdateOneWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => TutorCreateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TutorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => TutorUpsertWithoutAmpluaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TutorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TutorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TutorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TutorUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => TutorUpdateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export const LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema: z.ZodType<Prisma.LectorUncheckedUpdateOneWithoutAmpluaNestedInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedCreateWithoutAmpluaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LectorCreateOrConnectWithoutAmpluaInputSchema).optional(),
  upsert: z.lazy(() => LectorUpsertWithoutAmpluaInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LectorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LectorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LectorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LectorUpdateToOneWithWhereWithoutAmpluaInputSchema),z.lazy(() => LectorUpdateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutAmpluaInputSchema) ]).optional(),
}).strict();

export const GroupCreateNestedOneWithoutCuratorInputSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutCuratorInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutCuratorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutCuratorInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional()
}).strict();

export const AmpluaCreateNestedOneWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaCreateNestedOneWithoutCuratorInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutCuratorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutCuratorInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export const GroupUpdateOneRequiredWithoutCuratorNestedInputSchema: z.ZodType<Prisma.GroupUpdateOneRequiredWithoutCuratorNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutCuratorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutCuratorInputSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutCuratorInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupUpdateToOneWithWhereWithoutCuratorInputSchema),z.lazy(() => GroupUpdateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutCuratorInputSchema) ]).optional(),
}).strict();

export const AmpluaUpdateOneRequiredWithoutCuratorNestedInputSchema: z.ZodType<Prisma.AmpluaUpdateOneRequiredWithoutCuratorNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutCuratorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutCuratorInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutCuratorInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutCuratorInputSchema),z.lazy(() => AmpluaUpdateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutCuratorInputSchema) ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const GroupCreateNestedOneWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutGroupHeadsInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupHeadsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutGroupHeadsInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional()
}).strict();

export const AmpluaCreateNestedOneWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaCreateNestedOneWithoutGroupHeadInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutGroupHeadInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutGroupHeadInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export const EnumGroupHeadLevelFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGroupHeadLevelFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GroupHeadLevelSchema).optional()
}).strict();

export const GroupUpdateOneRequiredWithoutGroupHeadsNestedInputSchema: z.ZodType<Prisma.GroupUpdateOneRequiredWithoutGroupHeadsNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupHeadsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutGroupHeadsInputSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutGroupHeadsInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupUpdateToOneWithWhereWithoutGroupHeadsInputSchema),z.lazy(() => GroupUpdateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutGroupHeadsInputSchema) ]).optional(),
}).strict();

export const AmpluaUpdateOneRequiredWithoutGroupHeadNestedInputSchema: z.ZodType<Prisma.AmpluaUpdateOneRequiredWithoutGroupHeadNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutGroupHeadInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutGroupHeadInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutGroupHeadInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUpdateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutGroupHeadInputSchema) ]).optional(),
}).strict();

export const LectorRankCreateNestedManyWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankCreateNestedManyWithoutLectorInput> = z.object({
  create: z.union([ z.lazy(() => LectorRankCreateWithoutLectorInputSchema),z.lazy(() => LectorRankCreateWithoutLectorInputSchema).array(),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LectorRankCreateOrConnectWithoutLectorInputSchema),z.lazy(() => LectorRankCreateOrConnectWithoutLectorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LectorRankCreateManyLectorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FaculityCreateNestedOneWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityCreateNestedOneWithoutLectorsInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutLectorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaculityCreateOrConnectWithoutLectorsInputSchema).optional(),
  connect: z.lazy(() => FaculityWhereUniqueInputSchema).optional()
}).strict();

export const AmpluaCreateNestedOneWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaCreateNestedOneWithoutLectorInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutLectorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutLectorInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export const LectorRankUncheckedCreateNestedManyWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUncheckedCreateNestedManyWithoutLectorInput> = z.object({
  create: z.union([ z.lazy(() => LectorRankCreateWithoutLectorInputSchema),z.lazy(() => LectorRankCreateWithoutLectorInputSchema).array(),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LectorRankCreateOrConnectWithoutLectorInputSchema),z.lazy(() => LectorRankCreateOrConnectWithoutLectorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LectorRankCreateManyLectorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const LectorRankUpdateManyWithoutLectorNestedInputSchema: z.ZodType<Prisma.LectorRankUpdateManyWithoutLectorNestedInput> = z.object({
  create: z.union([ z.lazy(() => LectorRankCreateWithoutLectorInputSchema),z.lazy(() => LectorRankCreateWithoutLectorInputSchema).array(),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LectorRankCreateOrConnectWithoutLectorInputSchema),z.lazy(() => LectorRankCreateOrConnectWithoutLectorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LectorRankUpsertWithWhereUniqueWithoutLectorInputSchema),z.lazy(() => LectorRankUpsertWithWhereUniqueWithoutLectorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LectorRankCreateManyLectorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LectorRankUpdateWithWhereUniqueWithoutLectorInputSchema),z.lazy(() => LectorRankUpdateWithWhereUniqueWithoutLectorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LectorRankUpdateManyWithWhereWithoutLectorInputSchema),z.lazy(() => LectorRankUpdateManyWithWhereWithoutLectorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LectorRankScalarWhereInputSchema),z.lazy(() => LectorRankScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FaculityUpdateOneWithoutLectorsNestedInputSchema: z.ZodType<Prisma.FaculityUpdateOneWithoutLectorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutLectorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaculityCreateOrConnectWithoutLectorsInputSchema).optional(),
  upsert: z.lazy(() => FaculityUpsertWithoutLectorsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FaculityWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FaculityWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FaculityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FaculityUpdateToOneWithWhereWithoutLectorsInputSchema),z.lazy(() => FaculityUpdateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutLectorsInputSchema) ]).optional(),
}).strict();

export const AmpluaUpdateOneRequiredWithoutLectorNestedInputSchema: z.ZodType<Prisma.AmpluaUpdateOneRequiredWithoutLectorNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutLectorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutLectorInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutLectorInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutLectorInputSchema),z.lazy(() => AmpluaUpdateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutLectorInputSchema) ]).optional(),
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const LectorRankUncheckedUpdateManyWithoutLectorNestedInputSchema: z.ZodType<Prisma.LectorRankUncheckedUpdateManyWithoutLectorNestedInput> = z.object({
  create: z.union([ z.lazy(() => LectorRankCreateWithoutLectorInputSchema),z.lazy(() => LectorRankCreateWithoutLectorInputSchema).array(),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LectorRankCreateOrConnectWithoutLectorInputSchema),z.lazy(() => LectorRankCreateOrConnectWithoutLectorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LectorRankUpsertWithWhereUniqueWithoutLectorInputSchema),z.lazy(() => LectorRankUpsertWithWhereUniqueWithoutLectorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LectorRankCreateManyLectorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LectorRankWhereUniqueInputSchema),z.lazy(() => LectorRankWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LectorRankUpdateWithWhereUniqueWithoutLectorInputSchema),z.lazy(() => LectorRankUpdateWithWhereUniqueWithoutLectorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LectorRankUpdateManyWithWhereWithoutLectorInputSchema),z.lazy(() => LectorRankUpdateManyWithWhereWithoutLectorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LectorRankScalarWhereInputSchema),z.lazy(() => LectorRankScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const LectorCreateNestedOneWithoutRanksInputSchema: z.ZodType<Prisma.LectorCreateNestedOneWithoutRanksInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedCreateWithoutRanksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LectorCreateOrConnectWithoutRanksInputSchema).optional(),
  connect: z.lazy(() => LectorWhereUniqueInputSchema).optional()
}).strict();

export const LectorUpdateOneRequiredWithoutRanksNestedInputSchema: z.ZodType<Prisma.LectorUpdateOneRequiredWithoutRanksNestedInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedCreateWithoutRanksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LectorCreateOrConnectWithoutRanksInputSchema).optional(),
  upsert: z.lazy(() => LectorUpsertWithoutRanksInputSchema).optional(),
  connect: z.lazy(() => LectorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LectorUpdateToOneWithWhereWithoutRanksInputSchema),z.lazy(() => LectorUpdateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutRanksInputSchema) ]).optional(),
}).strict();

export const AmpluaCreateNestedOneWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaCreateNestedOneWithoutStudentInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutStudentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutStudentInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export const GroupCreateNestedOneWithoutStudentsInputSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutStudentsInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutStudentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutStudentsInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional()
}).strict();

export const AmpluaUpdateOneRequiredWithoutStudentNestedInputSchema: z.ZodType<Prisma.AmpluaUpdateOneRequiredWithoutStudentNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutStudentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutStudentInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutStudentInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutStudentInputSchema),z.lazy(() => AmpluaUpdateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutStudentInputSchema) ]).optional(),
}).strict();

export const GroupUpdateOneWithoutStudentsNestedInputSchema: z.ZodType<Prisma.GroupUpdateOneWithoutStudentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutStudentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutStudentsInputSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutStudentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GroupWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupUpdateToOneWithWhereWithoutStudentsInputSchema),z.lazy(() => GroupUpdateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutStudentsInputSchema) ]).optional(),
}).strict();

export const GroupCreateNestedOneWithoutTutorInputSchema: z.ZodType<Prisma.GroupCreateNestedOneWithoutTutorInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutTutorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutTutorInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional()
}).strict();

export const AmpluaCreateNestedOneWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaCreateNestedOneWithoutTutorInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutTutorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutTutorInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export const GroupUpdateOneRequiredWithoutTutorNestedInputSchema: z.ZodType<Prisma.GroupUpdateOneRequiredWithoutTutorNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutTutorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GroupCreateOrConnectWithoutTutorInputSchema).optional(),
  upsert: z.lazy(() => GroupUpsertWithoutTutorInputSchema).optional(),
  connect: z.lazy(() => GroupWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GroupUpdateToOneWithWhereWithoutTutorInputSchema),z.lazy(() => GroupUpdateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutTutorInputSchema) ]).optional(),
}).strict();

export const AmpluaUpdateOneRequiredWithoutTutorNestedInputSchema: z.ZodType<Prisma.AmpluaUpdateOneRequiredWithoutTutorNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutTutorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutTutorInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutTutorInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutTutorInputSchema),z.lazy(() => AmpluaUpdateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutTutorInputSchema) ]).optional(),
}).strict();

export const DisciplineCreateNestedOneWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineCreateNestedOneWithoutSchedulesInput> = z.object({
  create: z.union([ z.lazy(() => DisciplineCreateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutSchedulesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DisciplineCreateOrConnectWithoutSchedulesInputSchema).optional(),
  connect: z.lazy(() => DisciplineWhereUniqueInputSchema).optional()
}).strict();

export const DisciplineUpdateOneRequiredWithoutSchedulesNestedInputSchema: z.ZodType<Prisma.DisciplineUpdateOneRequiredWithoutSchedulesNestedInput> = z.object({
  create: z.union([ z.lazy(() => DisciplineCreateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutSchedulesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DisciplineCreateOrConnectWithoutSchedulesInputSchema).optional(),
  upsert: z.lazy(() => DisciplineUpsertWithoutSchedulesInputSchema).optional(),
  connect: z.lazy(() => DisciplineWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DisciplineUpdateToOneWithWhereWithoutSchedulesInputSchema),z.lazy(() => DisciplineUpdateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedUpdateWithoutSchedulesInputSchema) ]).optional(),
}).strict();

export const BuildingCreateNestedOneWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingCreateNestedOneWithoutAuditoriumsInput> = z.object({
  create: z.union([ z.lazy(() => BuildingCreateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutAuditoriumsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BuildingCreateOrConnectWithoutAuditoriumsInputSchema).optional(),
  connect: z.lazy(() => BuildingWhereUniqueInputSchema).optional()
}).strict();

export const BuildingUpdateOneRequiredWithoutAuditoriumsNestedInputSchema: z.ZodType<Prisma.BuildingUpdateOneRequiredWithoutAuditoriumsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BuildingCreateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutAuditoriumsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BuildingCreateOrConnectWithoutAuditoriumsInputSchema).optional(),
  upsert: z.lazy(() => BuildingUpsertWithoutAuditoriumsInputSchema).optional(),
  connect: z.lazy(() => BuildingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BuildingUpdateToOneWithWhereWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUpdateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedUpdateWithoutAuditoriumsInputSchema) ]).optional(),
}).strict();

export const AuditoriumCreateNestedManyWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumCreateNestedManyWithoutBuildingInput> = z.object({
  create: z.union([ z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema).array(),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuditoriumCreateOrConnectWithoutBuildingInputSchema),z.lazy(() => AuditoriumCreateOrConnectWithoutBuildingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuditoriumCreateManyBuildingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UniversityCreateNestedOneWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityCreateNestedOneWithoutBuildingsInput> = z.object({
  create: z.union([ z.lazy(() => UniversityCreateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutBuildingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UniversityCreateOrConnectWithoutBuildingsInputSchema).optional(),
  connect: z.lazy(() => UniversityWhereUniqueInputSchema).optional()
}).strict();

export const AuditoriumUncheckedCreateNestedManyWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumUncheckedCreateNestedManyWithoutBuildingInput> = z.object({
  create: z.union([ z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema).array(),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuditoriumCreateOrConnectWithoutBuildingInputSchema),z.lazy(() => AuditoriumCreateOrConnectWithoutBuildingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuditoriumCreateManyBuildingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const AuditoriumUpdateManyWithoutBuildingNestedInputSchema: z.ZodType<Prisma.AuditoriumUpdateManyWithoutBuildingNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema).array(),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuditoriumCreateOrConnectWithoutBuildingInputSchema),z.lazy(() => AuditoriumCreateOrConnectWithoutBuildingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuditoriumUpsertWithWhereUniqueWithoutBuildingInputSchema),z.lazy(() => AuditoriumUpsertWithWhereUniqueWithoutBuildingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuditoriumCreateManyBuildingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuditoriumUpdateWithWhereUniqueWithoutBuildingInputSchema),z.lazy(() => AuditoriumUpdateWithWhereUniqueWithoutBuildingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuditoriumUpdateManyWithWhereWithoutBuildingInputSchema),z.lazy(() => AuditoriumUpdateManyWithWhereWithoutBuildingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuditoriumScalarWhereInputSchema),z.lazy(() => AuditoriumScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UniversityUpdateOneRequiredWithoutBuildingsNestedInputSchema: z.ZodType<Prisma.UniversityUpdateOneRequiredWithoutBuildingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UniversityCreateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutBuildingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UniversityCreateOrConnectWithoutBuildingsInputSchema).optional(),
  upsert: z.lazy(() => UniversityUpsertWithoutBuildingsInputSchema).optional(),
  connect: z.lazy(() => UniversityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UniversityUpdateToOneWithWhereWithoutBuildingsInputSchema),z.lazy(() => UniversityUpdateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutBuildingsInputSchema) ]).optional(),
}).strict();

export const AuditoriumUncheckedUpdateManyWithoutBuildingNestedInputSchema: z.ZodType<Prisma.AuditoriumUncheckedUpdateManyWithoutBuildingNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema).array(),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuditoriumCreateOrConnectWithoutBuildingInputSchema),z.lazy(() => AuditoriumCreateOrConnectWithoutBuildingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuditoriumUpsertWithWhereUniqueWithoutBuildingInputSchema),z.lazy(() => AuditoriumUpsertWithWhereUniqueWithoutBuildingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuditoriumCreateManyBuildingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuditoriumWhereUniqueInputSchema),z.lazy(() => AuditoriumWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuditoriumUpdateWithWhereUniqueWithoutBuildingInputSchema),z.lazy(() => AuditoriumUpdateWithWhereUniqueWithoutBuildingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuditoriumUpdateManyWithWhereWithoutBuildingInputSchema),z.lazy(() => AuditoriumUpdateManyWithWhereWithoutBuildingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuditoriumScalarWhereInputSchema),z.lazy(() => AuditoriumScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ScheduleCreateNestedManyWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleCreateNestedManyWithoutDisciplineInput> = z.object({
  create: z.union([ z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema).array(),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ScheduleCreateOrConnectWithoutDisciplineInputSchema),z.lazy(() => ScheduleCreateOrConnectWithoutDisciplineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ScheduleCreateManyDisciplineInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FaculityCreateNestedOneWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityCreateNestedOneWithoutDisciplinesInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutDisciplinesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaculityCreateOrConnectWithoutDisciplinesInputSchema).optional(),
  connect: z.lazy(() => FaculityWhereUniqueInputSchema).optional()
}).strict();

export const ScheduleUncheckedCreateNestedManyWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleUncheckedCreateNestedManyWithoutDisciplineInput> = z.object({
  create: z.union([ z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema).array(),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ScheduleCreateOrConnectWithoutDisciplineInputSchema),z.lazy(() => ScheduleCreateOrConnectWithoutDisciplineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ScheduleCreateManyDisciplineInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ScheduleUpdateManyWithoutDisciplineNestedInputSchema: z.ZodType<Prisma.ScheduleUpdateManyWithoutDisciplineNestedInput> = z.object({
  create: z.union([ z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema).array(),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ScheduleCreateOrConnectWithoutDisciplineInputSchema),z.lazy(() => ScheduleCreateOrConnectWithoutDisciplineInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ScheduleUpsertWithWhereUniqueWithoutDisciplineInputSchema),z.lazy(() => ScheduleUpsertWithWhereUniqueWithoutDisciplineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ScheduleCreateManyDisciplineInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ScheduleUpdateWithWhereUniqueWithoutDisciplineInputSchema),z.lazy(() => ScheduleUpdateWithWhereUniqueWithoutDisciplineInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ScheduleUpdateManyWithWhereWithoutDisciplineInputSchema),z.lazy(() => ScheduleUpdateManyWithWhereWithoutDisciplineInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ScheduleScalarWhereInputSchema),z.lazy(() => ScheduleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FaculityUpdateOneWithoutDisciplinesNestedInputSchema: z.ZodType<Prisma.FaculityUpdateOneWithoutDisciplinesNestedInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutDisciplinesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaculityCreateOrConnectWithoutDisciplinesInputSchema).optional(),
  upsert: z.lazy(() => FaculityUpsertWithoutDisciplinesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => FaculityWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => FaculityWhereInputSchema) ]).optional(),
  connect: z.lazy(() => FaculityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FaculityUpdateToOneWithWhereWithoutDisciplinesInputSchema),z.lazy(() => FaculityUpdateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutDisciplinesInputSchema) ]).optional(),
}).strict();

export const ScheduleUncheckedUpdateManyWithoutDisciplineNestedInputSchema: z.ZodType<Prisma.ScheduleUncheckedUpdateManyWithoutDisciplineNestedInput> = z.object({
  create: z.union([ z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema).array(),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ScheduleCreateOrConnectWithoutDisciplineInputSchema),z.lazy(() => ScheduleCreateOrConnectWithoutDisciplineInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ScheduleUpsertWithWhereUniqueWithoutDisciplineInputSchema),z.lazy(() => ScheduleUpsertWithWhereUniqueWithoutDisciplineInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ScheduleCreateManyDisciplineInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ScheduleWhereUniqueInputSchema),z.lazy(() => ScheduleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ScheduleUpdateWithWhereUniqueWithoutDisciplineInputSchema),z.lazy(() => ScheduleUpdateWithWhereUniqueWithoutDisciplineInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ScheduleUpdateManyWithWhereWithoutDisciplineInputSchema),z.lazy(() => ScheduleUpdateManyWithWhereWithoutDisciplineInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ScheduleScalarWhereInputSchema),z.lazy(() => ScheduleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const DisciplineCreateNestedManyWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineCreateNestedManyWithoutFaculityInput> = z.object({
  create: z.union([ z.lazy(() => DisciplineCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineCreateWithoutFaculityInputSchema).array(),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisciplineCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => DisciplineCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisciplineCreateManyFaculityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const LectorCreateNestedManyWithoutFaculityInputSchema: z.ZodType<Prisma.LectorCreateNestedManyWithoutFaculityInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutFaculityInputSchema),z.lazy(() => LectorCreateWithoutFaculityInputSchema).array(),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LectorCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => LectorCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LectorCreateManyFaculityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GroupCreateNestedManyWithoutFaculityInputSchema: z.ZodType<Prisma.GroupCreateNestedManyWithoutFaculityInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutFaculityInputSchema),z.lazy(() => GroupCreateWithoutFaculityInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => GroupCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyFaculityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UniversityCreateNestedOneWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityCreateNestedOneWithoutFacultiesInput> = z.object({
  create: z.union([ z.lazy(() => UniversityCreateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutFacultiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UniversityCreateOrConnectWithoutFacultiesInputSchema).optional(),
  connect: z.lazy(() => UniversityWhereUniqueInputSchema).optional()
}).strict();

export const DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUncheckedCreateNestedManyWithoutFaculityInput> = z.object({
  create: z.union([ z.lazy(() => DisciplineCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineCreateWithoutFaculityInputSchema).array(),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisciplineCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => DisciplineCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisciplineCreateManyFaculityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const LectorUncheckedCreateNestedManyWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUncheckedCreateNestedManyWithoutFaculityInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutFaculityInputSchema),z.lazy(() => LectorCreateWithoutFaculityInputSchema).array(),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LectorCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => LectorCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LectorCreateManyFaculityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const GroupUncheckedCreateNestedManyWithoutFaculityInputSchema: z.ZodType<Prisma.GroupUncheckedCreateNestedManyWithoutFaculityInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutFaculityInputSchema),z.lazy(() => GroupCreateWithoutFaculityInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => GroupCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyFaculityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DisciplineUpdateManyWithoutFaculityNestedInputSchema: z.ZodType<Prisma.DisciplineUpdateManyWithoutFaculityNestedInput> = z.object({
  create: z.union([ z.lazy(() => DisciplineCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineCreateWithoutFaculityInputSchema).array(),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisciplineCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => DisciplineCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DisciplineUpsertWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => DisciplineUpsertWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisciplineCreateManyFaculityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DisciplineUpdateWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => DisciplineUpdateWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DisciplineUpdateManyWithWhereWithoutFaculityInputSchema),z.lazy(() => DisciplineUpdateManyWithWhereWithoutFaculityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DisciplineScalarWhereInputSchema),z.lazy(() => DisciplineScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const LectorUpdateManyWithoutFaculityNestedInputSchema: z.ZodType<Prisma.LectorUpdateManyWithoutFaculityNestedInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutFaculityInputSchema),z.lazy(() => LectorCreateWithoutFaculityInputSchema).array(),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LectorCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => LectorCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LectorUpsertWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => LectorUpsertWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LectorCreateManyFaculityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LectorUpdateWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => LectorUpdateWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LectorUpdateManyWithWhereWithoutFaculityInputSchema),z.lazy(() => LectorUpdateManyWithWhereWithoutFaculityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LectorScalarWhereInputSchema),z.lazy(() => LectorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GroupUpdateManyWithoutFaculityNestedInputSchema: z.ZodType<Prisma.GroupUpdateManyWithoutFaculityNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutFaculityInputSchema),z.lazy(() => GroupCreateWithoutFaculityInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => GroupCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GroupUpsertWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => GroupUpsertWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyFaculityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GroupUpdateWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => GroupUpdateWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GroupUpdateManyWithWhereWithoutFaculityInputSchema),z.lazy(() => GroupUpdateManyWithWhereWithoutFaculityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GroupScalarWhereInputSchema),z.lazy(() => GroupScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema: z.ZodType<Prisma.UniversityUpdateOneRequiredWithoutFacultiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UniversityCreateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutFacultiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UniversityCreateOrConnectWithoutFacultiesInputSchema).optional(),
  upsert: z.lazy(() => UniversityUpsertWithoutFacultiesInputSchema).optional(),
  connect: z.lazy(() => UniversityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UniversityUpdateToOneWithWhereWithoutFacultiesInputSchema),z.lazy(() => UniversityUpdateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutFacultiesInputSchema) ]).optional(),
}).strict();

export const DisciplineUncheckedUpdateManyWithoutFaculityNestedInputSchema: z.ZodType<Prisma.DisciplineUncheckedUpdateManyWithoutFaculityNestedInput> = z.object({
  create: z.union([ z.lazy(() => DisciplineCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineCreateWithoutFaculityInputSchema).array(),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DisciplineCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => DisciplineCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DisciplineUpsertWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => DisciplineUpsertWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DisciplineCreateManyFaculityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DisciplineWhereUniqueInputSchema),z.lazy(() => DisciplineWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DisciplineUpdateWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => DisciplineUpdateWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DisciplineUpdateManyWithWhereWithoutFaculityInputSchema),z.lazy(() => DisciplineUpdateManyWithWhereWithoutFaculityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DisciplineScalarWhereInputSchema),z.lazy(() => DisciplineScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const LectorUncheckedUpdateManyWithoutFaculityNestedInputSchema: z.ZodType<Prisma.LectorUncheckedUpdateManyWithoutFaculityNestedInput> = z.object({
  create: z.union([ z.lazy(() => LectorCreateWithoutFaculityInputSchema),z.lazy(() => LectorCreateWithoutFaculityInputSchema).array(),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LectorCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => LectorCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LectorUpsertWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => LectorUpsertWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LectorCreateManyFaculityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LectorWhereUniqueInputSchema),z.lazy(() => LectorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LectorUpdateWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => LectorUpdateWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LectorUpdateManyWithWhereWithoutFaculityInputSchema),z.lazy(() => LectorUpdateManyWithWhereWithoutFaculityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LectorScalarWhereInputSchema),z.lazy(() => LectorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const GroupUncheckedUpdateManyWithoutFaculityNestedInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutFaculityNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupCreateWithoutFaculityInputSchema),z.lazy(() => GroupCreateWithoutFaculityInputSchema).array(),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupCreateOrConnectWithoutFaculityInputSchema),z.lazy(() => GroupCreateOrConnectWithoutFaculityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GroupUpsertWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => GroupUpsertWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupCreateManyFaculityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GroupWhereUniqueInputSchema),z.lazy(() => GroupWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GroupUpdateWithWhereUniqueWithoutFaculityInputSchema),z.lazy(() => GroupUpdateWithWhereUniqueWithoutFaculityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GroupUpdateManyWithWhereWithoutFaculityInputSchema),z.lazy(() => GroupUpdateManyWithWhereWithoutFaculityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GroupScalarWhereInputSchema),z.lazy(() => GroupScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UniversityCreateNestedOneWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityCreateNestedOneWithoutWeeksInput> = z.object({
  create: z.union([ z.lazy(() => UniversityCreateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutWeeksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UniversityCreateOrConnectWithoutWeeksInputSchema).optional(),
  connect: z.lazy(() => UniversityWhereUniqueInputSchema).optional()
}).strict();

export const EnumWeekCountFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumWeekCountFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => WeekCountSchema).optional()
}).strict();

export const UniversityUpdateOneWithoutWeeksNestedInputSchema: z.ZodType<Prisma.UniversityUpdateOneWithoutWeeksNestedInput> = z.object({
  create: z.union([ z.lazy(() => UniversityCreateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutWeeksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UniversityCreateOrConnectWithoutWeeksInputSchema).optional(),
  upsert: z.lazy(() => UniversityUpsertWithoutWeeksInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UniversityWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UniversityWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UniversityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UniversityUpdateToOneWithWhereWithoutWeeksInputSchema),z.lazy(() => UniversityUpdateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutWeeksInputSchema) ]).optional(),
}).strict();

export const CuratorCreateNestedOneWithoutGroupInputSchema: z.ZodType<Prisma.CuratorCreateNestedOneWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutGroupInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutGroupInputSchema).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional()
}).strict();

export const GroupHeadCreateNestedManyWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadCreateNestedManyWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadCreateWithoutGroupInputSchema).array(),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupHeadCreateOrConnectWithoutGroupInputSchema),z.lazy(() => GroupHeadCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupHeadCreateManyGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StudentCreateNestedManyWithoutGroupInputSchema: z.ZodType<Prisma.StudentCreateNestedManyWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutGroupInputSchema),z.lazy(() => StudentCreateWithoutGroupInputSchema).array(),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StudentCreateOrConnectWithoutGroupInputSchema),z.lazy(() => StudentCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StudentCreateManyGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TutorCreateNestedOneWithoutGroupInputSchema: z.ZodType<Prisma.TutorCreateNestedOneWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => TutorCreateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedCreateWithoutGroupInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TutorCreateOrConnectWithoutGroupInputSchema).optional(),
  connect: z.lazy(() => TutorWhereUniqueInputSchema).optional()
}).strict();

export const FaculityCreateNestedOneWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityCreateNestedOneWithoutGroupsInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutGroupsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaculityCreateOrConnectWithoutGroupsInputSchema).optional(),
  connect: z.lazy(() => FaculityWhereUniqueInputSchema).optional()
}).strict();

export const CuratorUncheckedCreateNestedOneWithoutGroupInputSchema: z.ZodType<Prisma.CuratorUncheckedCreateNestedOneWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutGroupInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutGroupInputSchema).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional()
}).strict();

export const GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUncheckedCreateNestedManyWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadCreateWithoutGroupInputSchema).array(),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupHeadCreateOrConnectWithoutGroupInputSchema),z.lazy(() => GroupHeadCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupHeadCreateManyGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StudentUncheckedCreateNestedManyWithoutGroupInputSchema: z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutGroupInputSchema),z.lazy(() => StudentCreateWithoutGroupInputSchema).array(),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StudentCreateOrConnectWithoutGroupInputSchema),z.lazy(() => StudentCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StudentCreateManyGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TutorUncheckedCreateNestedOneWithoutGroupInputSchema: z.ZodType<Prisma.TutorUncheckedCreateNestedOneWithoutGroupInput> = z.object({
  create: z.union([ z.lazy(() => TutorCreateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedCreateWithoutGroupInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TutorCreateOrConnectWithoutGroupInputSchema).optional(),
  connect: z.lazy(() => TutorWhereUniqueInputSchema).optional()
}).strict();

export const CuratorUpdateOneWithoutGroupNestedInputSchema: z.ZodType<Prisma.CuratorUpdateOneWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutGroupInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutGroupInputSchema).optional(),
  upsert: z.lazy(() => CuratorUpsertWithoutGroupInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CuratorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CuratorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CuratorUpdateToOneWithWhereWithoutGroupInputSchema),z.lazy(() => CuratorUpdateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutGroupInputSchema) ]).optional(),
}).strict();

export const GroupHeadUpdateManyWithoutGroupNestedInputSchema: z.ZodType<Prisma.GroupHeadUpdateManyWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadCreateWithoutGroupInputSchema).array(),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupHeadCreateOrConnectWithoutGroupInputSchema),z.lazy(() => GroupHeadCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GroupHeadUpsertWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => GroupHeadUpsertWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupHeadCreateManyGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GroupHeadUpdateWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => GroupHeadUpdateWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GroupHeadUpdateManyWithWhereWithoutGroupInputSchema),z.lazy(() => GroupHeadUpdateManyWithWhereWithoutGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GroupHeadScalarWhereInputSchema),z.lazy(() => GroupHeadScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StudentUpdateManyWithoutGroupNestedInputSchema: z.ZodType<Prisma.StudentUpdateManyWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutGroupInputSchema),z.lazy(() => StudentCreateWithoutGroupInputSchema).array(),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StudentCreateOrConnectWithoutGroupInputSchema),z.lazy(() => StudentCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StudentUpsertWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => StudentUpsertWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StudentCreateManyGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StudentUpdateWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => StudentUpdateWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StudentUpdateManyWithWhereWithoutGroupInputSchema),z.lazy(() => StudentUpdateManyWithWhereWithoutGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StudentScalarWhereInputSchema),z.lazy(() => StudentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TutorUpdateOneWithoutGroupNestedInputSchema: z.ZodType<Prisma.TutorUpdateOneWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => TutorCreateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedCreateWithoutGroupInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TutorCreateOrConnectWithoutGroupInputSchema).optional(),
  upsert: z.lazy(() => TutorUpsertWithoutGroupInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TutorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TutorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TutorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TutorUpdateToOneWithWhereWithoutGroupInputSchema),z.lazy(() => TutorUpdateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutGroupInputSchema) ]).optional(),
}).strict();

export const FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema: z.ZodType<Prisma.FaculityUpdateOneRequiredWithoutGroupsNestedInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutGroupsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaculityCreateOrConnectWithoutGroupsInputSchema).optional(),
  upsert: z.lazy(() => FaculityUpsertWithoutGroupsInputSchema).optional(),
  connect: z.lazy(() => FaculityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FaculityUpdateToOneWithWhereWithoutGroupsInputSchema),z.lazy(() => FaculityUpdateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutGroupsInputSchema) ]).optional(),
}).strict();

export const CuratorUncheckedUpdateOneWithoutGroupNestedInputSchema: z.ZodType<Prisma.CuratorUncheckedUpdateOneWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => CuratorCreateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutGroupInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CuratorCreateOrConnectWithoutGroupInputSchema).optional(),
  upsert: z.lazy(() => CuratorUpsertWithoutGroupInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CuratorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CuratorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CuratorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CuratorUpdateToOneWithWhereWithoutGroupInputSchema),z.lazy(() => CuratorUpdateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutGroupInputSchema) ]).optional(),
}).strict();

export const GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema: z.ZodType<Prisma.GroupHeadUncheckedUpdateManyWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadCreateWithoutGroupInputSchema).array(),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GroupHeadCreateOrConnectWithoutGroupInputSchema),z.lazy(() => GroupHeadCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GroupHeadUpsertWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => GroupHeadUpsertWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GroupHeadCreateManyGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GroupHeadWhereUniqueInputSchema),z.lazy(() => GroupHeadWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GroupHeadUpdateWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => GroupHeadUpdateWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GroupHeadUpdateManyWithWhereWithoutGroupInputSchema),z.lazy(() => GroupHeadUpdateManyWithWhereWithoutGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GroupHeadScalarWhereInputSchema),z.lazy(() => GroupHeadScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StudentUncheckedUpdateManyWithoutGroupNestedInputSchema: z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutGroupInputSchema),z.lazy(() => StudentCreateWithoutGroupInputSchema).array(),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StudentCreateOrConnectWithoutGroupInputSchema),z.lazy(() => StudentCreateOrConnectWithoutGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StudentUpsertWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => StudentUpsertWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StudentCreateManyGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StudentUpdateWithWhereUniqueWithoutGroupInputSchema),z.lazy(() => StudentUpdateWithWhereUniqueWithoutGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StudentUpdateManyWithWhereWithoutGroupInputSchema),z.lazy(() => StudentUpdateManyWithWhereWithoutGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StudentScalarWhereInputSchema),z.lazy(() => StudentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TutorUncheckedUpdateOneWithoutGroupNestedInputSchema: z.ZodType<Prisma.TutorUncheckedUpdateOneWithoutGroupNestedInput> = z.object({
  create: z.union([ z.lazy(() => TutorCreateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedCreateWithoutGroupInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TutorCreateOrConnectWithoutGroupInputSchema).optional(),
  upsert: z.lazy(() => TutorUpsertWithoutGroupInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TutorWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TutorWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TutorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TutorUpdateToOneWithWhereWithoutGroupInputSchema),z.lazy(() => TutorUpdateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutGroupInputSchema) ]).optional(),
}).strict();

export const WeekCreateNestedManyWithoutUniversityInputSchema: z.ZodType<Prisma.WeekCreateNestedManyWithoutUniversityInput> = z.object({
  create: z.union([ z.lazy(() => WeekCreateWithoutUniversityInputSchema),z.lazy(() => WeekCreateWithoutUniversityInputSchema).array(),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WeekCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => WeekCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WeekCreateManyUniversityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FaculityCreateNestedManyWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityCreateNestedManyWithoutUniversityInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutUniversityInputSchema),z.lazy(() => FaculityCreateWithoutUniversityInputSchema).array(),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FaculityCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => FaculityCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FaculityCreateManyUniversityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BuildingCreateNestedManyWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingCreateNestedManyWithoutUniversityInput> = z.object({
  create: z.union([ z.lazy(() => BuildingCreateWithoutUniversityInputSchema),z.lazy(() => BuildingCreateWithoutUniversityInputSchema).array(),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BuildingCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => BuildingCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BuildingCreateManyUniversityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WeekUncheckedCreateNestedManyWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUncheckedCreateNestedManyWithoutUniversityInput> = z.object({
  create: z.union([ z.lazy(() => WeekCreateWithoutUniversityInputSchema),z.lazy(() => WeekCreateWithoutUniversityInputSchema).array(),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WeekCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => WeekCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WeekCreateManyUniversityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FaculityUncheckedCreateNestedManyWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityUncheckedCreateNestedManyWithoutUniversityInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutUniversityInputSchema),z.lazy(() => FaculityCreateWithoutUniversityInputSchema).array(),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FaculityCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => FaculityCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FaculityCreateManyUniversityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BuildingUncheckedCreateNestedManyWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUncheckedCreateNestedManyWithoutUniversityInput> = z.object({
  create: z.union([ z.lazy(() => BuildingCreateWithoutUniversityInputSchema),z.lazy(() => BuildingCreateWithoutUniversityInputSchema).array(),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BuildingCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => BuildingCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BuildingCreateManyUniversityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WeekUpdateManyWithoutUniversityNestedInputSchema: z.ZodType<Prisma.WeekUpdateManyWithoutUniversityNestedInput> = z.object({
  create: z.union([ z.lazy(() => WeekCreateWithoutUniversityInputSchema),z.lazy(() => WeekCreateWithoutUniversityInputSchema).array(),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WeekCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => WeekCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WeekUpsertWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => WeekUpsertWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WeekCreateManyUniversityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WeekUpdateWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => WeekUpdateWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WeekUpdateManyWithWhereWithoutUniversityInputSchema),z.lazy(() => WeekUpdateManyWithWhereWithoutUniversityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WeekScalarWhereInputSchema),z.lazy(() => WeekScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FaculityUpdateManyWithoutUniversityNestedInputSchema: z.ZodType<Prisma.FaculityUpdateManyWithoutUniversityNestedInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutUniversityInputSchema),z.lazy(() => FaculityCreateWithoutUniversityInputSchema).array(),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FaculityCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => FaculityCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FaculityUpsertWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => FaculityUpsertWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FaculityCreateManyUniversityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FaculityUpdateWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => FaculityUpdateWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FaculityUpdateManyWithWhereWithoutUniversityInputSchema),z.lazy(() => FaculityUpdateManyWithWhereWithoutUniversityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FaculityScalarWhereInputSchema),z.lazy(() => FaculityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BuildingUpdateManyWithoutUniversityNestedInputSchema: z.ZodType<Prisma.BuildingUpdateManyWithoutUniversityNestedInput> = z.object({
  create: z.union([ z.lazy(() => BuildingCreateWithoutUniversityInputSchema),z.lazy(() => BuildingCreateWithoutUniversityInputSchema).array(),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BuildingCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => BuildingCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BuildingUpsertWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => BuildingUpsertWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BuildingCreateManyUniversityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BuildingUpdateWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => BuildingUpdateWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BuildingUpdateManyWithWhereWithoutUniversityInputSchema),z.lazy(() => BuildingUpdateManyWithWhereWithoutUniversityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BuildingScalarWhereInputSchema),z.lazy(() => BuildingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WeekUncheckedUpdateManyWithoutUniversityNestedInputSchema: z.ZodType<Prisma.WeekUncheckedUpdateManyWithoutUniversityNestedInput> = z.object({
  create: z.union([ z.lazy(() => WeekCreateWithoutUniversityInputSchema),z.lazy(() => WeekCreateWithoutUniversityInputSchema).array(),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WeekCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => WeekCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WeekUpsertWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => WeekUpsertWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WeekCreateManyUniversityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WeekWhereUniqueInputSchema),z.lazy(() => WeekWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WeekUpdateWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => WeekUpdateWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WeekUpdateManyWithWhereWithoutUniversityInputSchema),z.lazy(() => WeekUpdateManyWithWhereWithoutUniversityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WeekScalarWhereInputSchema),z.lazy(() => WeekScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const FaculityUncheckedUpdateManyWithoutUniversityNestedInputSchema: z.ZodType<Prisma.FaculityUncheckedUpdateManyWithoutUniversityNestedInput> = z.object({
  create: z.union([ z.lazy(() => FaculityCreateWithoutUniversityInputSchema),z.lazy(() => FaculityCreateWithoutUniversityInputSchema).array(),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FaculityCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => FaculityCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FaculityUpsertWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => FaculityUpsertWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FaculityCreateManyUniversityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FaculityWhereUniqueInputSchema),z.lazy(() => FaculityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FaculityUpdateWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => FaculityUpdateWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FaculityUpdateManyWithWhereWithoutUniversityInputSchema),z.lazy(() => FaculityUpdateManyWithWhereWithoutUniversityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FaculityScalarWhereInputSchema),z.lazy(() => FaculityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BuildingUncheckedUpdateManyWithoutUniversityNestedInputSchema: z.ZodType<Prisma.BuildingUncheckedUpdateManyWithoutUniversityNestedInput> = z.object({
  create: z.union([ z.lazy(() => BuildingCreateWithoutUniversityInputSchema),z.lazy(() => BuildingCreateWithoutUniversityInputSchema).array(),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BuildingCreateOrConnectWithoutUniversityInputSchema),z.lazy(() => BuildingCreateOrConnectWithoutUniversityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BuildingUpsertWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => BuildingUpsertWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BuildingCreateManyUniversityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BuildingWhereUniqueInputSchema),z.lazy(() => BuildingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BuildingUpdateWithWhereUniqueWithoutUniversityInputSchema),z.lazy(() => BuildingUpdateWithWhereUniqueWithoutUniversityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BuildingUpdateManyWithWhereWithoutUniversityInputSchema),z.lazy(() => BuildingUpdateManyWithWhereWithoutUniversityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BuildingScalarWhereInputSchema),z.lazy(() => BuildingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AmpluaCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.AmpluaCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export const AmpluaUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.AmpluaUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional()
}).strict();

export const EnumUserRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUserRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => UserRoleSchema).optional()
}).strict();

export const EnumLangFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLangFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LangSchema).optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const AmpluaUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.AmpluaUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => AmpluaUpdateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const AmpluaUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.AmpluaUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AmpluaCreateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AmpluaCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => AmpluaUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AmpluaWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AmpluaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AmpluaUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => AmpluaUpdateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedEnumGroupHeadLevelFilterSchema: z.ZodType<Prisma.NestedEnumGroupHeadLevelFilter> = z.object({
  equals: z.lazy(() => GroupHeadLevelSchema).optional(),
  in: z.lazy(() => GroupHeadLevelSchema).array().optional(),
  notIn: z.lazy(() => GroupHeadLevelSchema).array().optional(),
  not: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => NestedEnumGroupHeadLevelFilterSchema) ]).optional(),
}).strict();

export const NestedEnumGroupHeadLevelWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumGroupHeadLevelWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GroupHeadLevelSchema).optional(),
  in: z.lazy(() => GroupHeadLevelSchema).array().optional(),
  notIn: z.lazy(() => GroupHeadLevelSchema).array().optional(),
  not: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => NestedEnumGroupHeadLevelWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGroupHeadLevelFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGroupHeadLevelFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedEnumWeekCountFilterSchema: z.ZodType<Prisma.NestedEnumWeekCountFilter> = z.object({
  equals: z.lazy(() => WeekCountSchema).optional(),
  in: z.lazy(() => WeekCountSchema).array().optional(),
  notIn: z.lazy(() => WeekCountSchema).array().optional(),
  not: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => NestedEnumWeekCountFilterSchema) ]).optional(),
}).strict();

export const NestedEnumWeekCountWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumWeekCountWithAggregatesFilter> = z.object({
  equals: z.lazy(() => WeekCountSchema).optional(),
  in: z.lazy(() => WeekCountSchema).array().optional(),
  notIn: z.lazy(() => WeekCountSchema).array().optional(),
  not: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => NestedEnumWeekCountWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumWeekCountFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumWeekCountFilterSchema).optional()
}).strict();

export const NestedJsonFilterSchema: z.ZodType<Prisma.NestedJsonFilter> = z.object({
  equals: InputJsonValueSchema.optional(),
  path: z.string().array().optional(),
  string_contains: z.string().optional(),
  string_starts_with: z.string().optional(),
  string_ends_with: z.string().optional(),
  array_contains: InputJsonValueSchema.optional().nullable(),
  array_starts_with: InputJsonValueSchema.optional().nullable(),
  array_ends_with: InputJsonValueSchema.optional().nullable(),
  lt: InputJsonValueSchema.optional(),
  lte: InputJsonValueSchema.optional(),
  gt: InputJsonValueSchema.optional(),
  gte: InputJsonValueSchema.optional(),
  not: InputJsonValueSchema.optional()
}).strict();

export const NestedEnumUserRoleFilterSchema: z.ZodType<Prisma.NestedEnumUserRoleFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleFilterSchema) ]).optional(),
}).strict();

export const NestedEnumLangFilterSchema: z.ZodType<Prisma.NestedEnumLangFilter> = z.object({
  equals: z.lazy(() => LangSchema).optional(),
  in: z.lazy(() => LangSchema).array().optional(),
  notIn: z.lazy(() => LangSchema).array().optional(),
  not: z.union([ z.lazy(() => LangSchema),z.lazy(() => NestedEnumLangFilterSchema) ]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedEnumUserRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUserRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRoleFilterSchema).optional()
}).strict();

export const NestedEnumLangWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumLangWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LangSchema).optional(),
  in: z.lazy(() => LangSchema).array().optional(),
  notIn: z.lazy(() => LangSchema).array().optional(),
  not: z.union([ z.lazy(() => LangSchema),z.lazy(() => NestedEnumLangWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLangFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLangFilterSchema).optional()
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const UserCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.UserCreateWithoutAmpluaInput> = z.object({
  id: z.string().uuid().optional(),
  tgID: z.bigint(),
  lastName: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  username: z.string().optional().nullable(),
  role: z.lazy(() => UserRoleSchema).optional(),
  lang: z.lazy(() => LangSchema),
  isBot: z.boolean(),
  isPremium: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUncheckedCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAmpluaInput> = z.object({
  id: z.string().uuid().optional(),
  tgID: z.bigint(),
  lastName: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  username: z.string().optional().nullable(),
  role: z.lazy(() => UserRoleSchema).optional(),
  lang: z.lazy(() => LangSchema),
  isBot: z.boolean(),
  isPremium: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserCreateOrConnectWithoutAmpluaInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAmpluaInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedCreateWithoutAmpluaInputSchema) ]),
}).strict();

export const StudentCreateWithoutUserInputSchema: z.ZodType<Prisma.StudentCreateWithoutUserInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutStudentsInputSchema).optional()
}).strict();

export const StudentUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.StudentUncheckedCreateWithoutUserInput> = z.object({
  group: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const StudentCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => StudentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StudentCreateWithoutUserInputSchema),z.lazy(() => StudentUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const GroupHeadCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadCreateWithoutAmpluaInput> = z.object({
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutGroupHeadsInputSchema)
}).strict();

export const GroupHeadUncheckedCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadUncheckedCreateWithoutAmpluaInput> = z.object({
  group: z.number().int(),
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GroupHeadCreateOrConnectWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadCreateOrConnectWithoutAmpluaInput> = z.object({
  where: z.lazy(() => GroupHeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutAmpluaInputSchema) ]),
}).strict();

export const CuratorCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorCreateWithoutAmpluaInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutCuratorInputSchema)
}).strict();

export const CuratorUncheckedCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorUncheckedCreateWithoutAmpluaInput> = z.object({
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CuratorCreateOrConnectWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorCreateOrConnectWithoutAmpluaInput> = z.object({
  where: z.lazy(() => CuratorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CuratorCreateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutAmpluaInputSchema) ]),
}).strict();

export const TutorCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorCreateWithoutAmpluaInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Group: z.lazy(() => GroupCreateNestedOneWithoutTutorInputSchema)
}).strict();

export const TutorUncheckedCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorUncheckedCreateWithoutAmpluaInput> = z.object({
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TutorCreateOrConnectWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorCreateOrConnectWithoutAmpluaInput> = z.object({
  where: z.lazy(() => TutorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TutorCreateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedCreateWithoutAmpluaInputSchema) ]),
}).strict();

export const LectorCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorCreateWithoutAmpluaInput> = z.object({
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ranks: z.lazy(() => LectorRankCreateNestedManyWithoutLectorInputSchema).optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutLectorsInputSchema).optional()
}).strict();

export const LectorUncheckedCreateWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorUncheckedCreateWithoutAmpluaInput> = z.object({
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  faculity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ranks: z.lazy(() => LectorRankUncheckedCreateNestedManyWithoutLectorInputSchema).optional()
}).strict();

export const LectorCreateOrConnectWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorCreateOrConnectWithoutAmpluaInput> = z.object({
  where: z.lazy(() => LectorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LectorCreateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedCreateWithoutAmpluaInputSchema) ]),
}).strict();

export const UserUpsertWithoutAmpluaInputSchema: z.ZodType<Prisma.UserUpsertWithoutAmpluaInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAmpluaInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedCreateWithoutAmpluaInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAmpluaInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAmpluaInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAmpluaInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAmpluaInputSchema) ]),
}).strict();

export const UserUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.UserUpdateWithoutAmpluaInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  lang: z.union([ z.lazy(() => LangSchema),z.lazy(() => EnumLangFieldUpdateOperationsInputSchema) ]).optional(),
  isBot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isPremium: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAmpluaInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  lang: z.union([ z.lazy(() => LangSchema),z.lazy(() => EnumLangFieldUpdateOperationsInputSchema) ]).optional(),
  isBot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isPremium: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StudentUpsertWithoutUserInputSchema: z.ZodType<Prisma.StudentUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => StudentUpdateWithoutUserInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => StudentCreateWithoutUserInputSchema),z.lazy(() => StudentUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => StudentWhereInputSchema).optional()
}).strict();

export const StudentUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.StudentUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => StudentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StudentUpdateWithoutUserInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const StudentUpdateWithoutUserInputSchema: z.ZodType<Prisma.StudentUpdateWithoutUserInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneWithoutStudentsNestedInputSchema).optional()
}).strict();

export const StudentUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.StudentUncheckedUpdateWithoutUserInput> = z.object({
  group: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupHeadUpsertWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadUpsertWithoutAmpluaInput> = z.object({
  update: z.union([ z.lazy(() => GroupHeadUpdateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedUpdateWithoutAmpluaInputSchema) ]),
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutAmpluaInputSchema) ]),
  where: z.lazy(() => GroupHeadWhereInputSchema).optional()
}).strict();

export const GroupHeadUpdateToOneWithWhereWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadUpdateToOneWithWhereWithoutAmpluaInput> = z.object({
  where: z.lazy(() => GroupHeadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GroupHeadUpdateWithoutAmpluaInputSchema),z.lazy(() => GroupHeadUncheckedUpdateWithoutAmpluaInputSchema) ]),
}).strict();

export const GroupHeadUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadUpdateWithoutAmpluaInput> = z.object({
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneRequiredWithoutGroupHeadsNestedInputSchema).optional()
}).strict();

export const GroupHeadUncheckedUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.GroupHeadUncheckedUpdateWithoutAmpluaInput> = z.object({
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CuratorUpsertWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorUpsertWithoutAmpluaInput> = z.object({
  update: z.union([ z.lazy(() => CuratorUpdateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutAmpluaInputSchema) ]),
  create: z.union([ z.lazy(() => CuratorCreateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutAmpluaInputSchema) ]),
  where: z.lazy(() => CuratorWhereInputSchema).optional()
}).strict();

export const CuratorUpdateToOneWithWhereWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorUpdateToOneWithWhereWithoutAmpluaInput> = z.object({
  where: z.lazy(() => CuratorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CuratorUpdateWithoutAmpluaInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutAmpluaInputSchema) ]),
}).strict();

export const CuratorUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorUpdateWithoutAmpluaInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneRequiredWithoutCuratorNestedInputSchema).optional()
}).strict();

export const CuratorUncheckedUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.CuratorUncheckedUpdateWithoutAmpluaInput> = z.object({
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TutorUpsertWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorUpsertWithoutAmpluaInput> = z.object({
  update: z.union([ z.lazy(() => TutorUpdateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutAmpluaInputSchema) ]),
  create: z.union([ z.lazy(() => TutorCreateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedCreateWithoutAmpluaInputSchema) ]),
  where: z.lazy(() => TutorWhereInputSchema).optional()
}).strict();

export const TutorUpdateToOneWithWhereWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorUpdateToOneWithWhereWithoutAmpluaInput> = z.object({
  where: z.lazy(() => TutorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TutorUpdateWithoutAmpluaInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutAmpluaInputSchema) ]),
}).strict();

export const TutorUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorUpdateWithoutAmpluaInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Group: z.lazy(() => GroupUpdateOneRequiredWithoutTutorNestedInputSchema).optional()
}).strict();

export const TutorUncheckedUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.TutorUncheckedUpdateWithoutAmpluaInput> = z.object({
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LectorUpsertWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorUpsertWithoutAmpluaInput> = z.object({
  update: z.union([ z.lazy(() => LectorUpdateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutAmpluaInputSchema) ]),
  create: z.union([ z.lazy(() => LectorCreateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedCreateWithoutAmpluaInputSchema) ]),
  where: z.lazy(() => LectorWhereInputSchema).optional()
}).strict();

export const LectorUpdateToOneWithWhereWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorUpdateToOneWithWhereWithoutAmpluaInput> = z.object({
  where: z.lazy(() => LectorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LectorUpdateWithoutAmpluaInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutAmpluaInputSchema) ]),
}).strict();

export const LectorUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorUpdateWithoutAmpluaInput> = z.object({
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  initials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ranks: z.lazy(() => LectorRankUpdateManyWithoutLectorNestedInputSchema).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneWithoutLectorsNestedInputSchema).optional()
}).strict();

export const LectorUncheckedUpdateWithoutAmpluaInputSchema: z.ZodType<Prisma.LectorUncheckedUpdateWithoutAmpluaInput> = z.object({
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  initials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ranks: z.lazy(() => LectorRankUncheckedUpdateManyWithoutLectorNestedInputSchema).optional()
}).strict();

export const GroupCreateWithoutCuratorInputSchema: z.ZodType<Prisma.GroupCreateWithoutCuratorInput> = z.object({
  groupYear: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  groupHeads: z.lazy(() => GroupHeadCreateNestedManyWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutGroupInputSchema).optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutGroupsInputSchema)
}).strict();

export const GroupUncheckedCreateWithoutCuratorInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutCuratorInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  faculity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutGroupInputSchema).optional()
}).strict();

export const GroupCreateOrConnectWithoutCuratorInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutCuratorInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutCuratorInputSchema) ]),
}).strict();

export const AmpluaCreateWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaCreateWithoutCuratorInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAmpluaInputSchema),
  student: z.lazy(() => StudentCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaUncheckedCreateWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaUncheckedCreateWithoutCuratorInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  student: z.lazy(() => StudentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaCreateOrConnectWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaCreateOrConnectWithoutCuratorInput> = z.object({
  where: z.lazy(() => AmpluaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutCuratorInputSchema) ]),
}).strict();

export const GroupUpsertWithoutCuratorInputSchema: z.ZodType<Prisma.GroupUpsertWithoutCuratorInput> = z.object({
  update: z.union([ z.lazy(() => GroupUpdateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutCuratorInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutCuratorInputSchema) ]),
  where: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export const GroupUpdateToOneWithWhereWithoutCuratorInputSchema: z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutCuratorInput> = z.object({
  where: z.lazy(() => GroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GroupUpdateWithoutCuratorInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutCuratorInputSchema) ]),
}).strict();

export const GroupUpdateWithoutCuratorInputSchema: z.ZodType<Prisma.GroupUpdateWithoutCuratorInput> = z.object({
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  groupHeads: z.lazy(() => GroupHeadUpdateManyWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutGroupNestedInputSchema).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateWithoutCuratorInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutCuratorInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional()
}).strict();

export const AmpluaUpsertWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaUpsertWithoutCuratorInput> = z.object({
  update: z.union([ z.lazy(() => AmpluaUpdateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutCuratorInputSchema) ]),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutCuratorInputSchema) ]),
  where: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export const AmpluaUpdateToOneWithWhereWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaUpdateToOneWithWhereWithoutCuratorInput> = z.object({
  where: z.lazy(() => AmpluaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AmpluaUpdateWithoutCuratorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutCuratorInputSchema) ]),
}).strict();

export const AmpluaUpdateWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaUpdateWithoutCuratorInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAmpluaNestedInputSchema).optional(),
  student: z.lazy(() => StudentUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const AmpluaUncheckedUpdateWithoutCuratorInputSchema: z.ZodType<Prisma.AmpluaUncheckedUpdateWithoutCuratorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  student: z.lazy(() => StudentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const GroupCreateWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupCreateWithoutGroupHeadsInput> = z.object({
  groupYear: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutGroupInputSchema).optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutGroupsInputSchema)
}).strict();

export const GroupUncheckedCreateWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutGroupHeadsInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  faculity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutGroupInputSchema).optional()
}).strict();

export const GroupCreateOrConnectWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutGroupHeadsInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupHeadsInputSchema) ]),
}).strict();

export const AmpluaCreateWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaCreateWithoutGroupHeadInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAmpluaInputSchema),
  student: z.lazy(() => StudentCreateNestedOneWithoutUserInputSchema).optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaUncheckedCreateWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaUncheckedCreateWithoutGroupHeadInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  student: z.lazy(() => StudentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaCreateOrConnectWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaCreateOrConnectWithoutGroupHeadInput> = z.object({
  where: z.lazy(() => AmpluaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutGroupHeadInputSchema) ]),
}).strict();

export const GroupUpsertWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupUpsertWithoutGroupHeadsInput> = z.object({
  update: z.union([ z.lazy(() => GroupUpdateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutGroupHeadsInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutGroupHeadsInputSchema) ]),
  where: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export const GroupUpdateToOneWithWhereWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutGroupHeadsInput> = z.object({
  where: z.lazy(() => GroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GroupUpdateWithoutGroupHeadsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutGroupHeadsInputSchema) ]),
}).strict();

export const GroupUpdateWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupUpdateWithoutGroupHeadsInput> = z.object({
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutGroupNestedInputSchema).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateWithoutGroupHeadsInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutGroupHeadsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional()
}).strict();

export const AmpluaUpsertWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaUpsertWithoutGroupHeadInput> = z.object({
  update: z.union([ z.lazy(() => AmpluaUpdateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutGroupHeadInputSchema) ]),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutGroupHeadInputSchema) ]),
  where: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export const AmpluaUpdateToOneWithWhereWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaUpdateToOneWithWhereWithoutGroupHeadInput> = z.object({
  where: z.lazy(() => AmpluaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AmpluaUpdateWithoutGroupHeadInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutGroupHeadInputSchema) ]),
}).strict();

export const AmpluaUpdateWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaUpdateWithoutGroupHeadInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAmpluaNestedInputSchema).optional(),
  student: z.lazy(() => StudentUpdateOneWithoutUserNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const AmpluaUncheckedUpdateWithoutGroupHeadInputSchema: z.ZodType<Prisma.AmpluaUncheckedUpdateWithoutGroupHeadInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  student: z.lazy(() => StudentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const LectorRankCreateWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankCreateWithoutLectorInput> = z.object({
  title: z.string(),
  shortVariant: z.string()
}).strict();

export const LectorRankUncheckedCreateWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUncheckedCreateWithoutLectorInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  shortVariant: z.string()
}).strict();

export const LectorRankCreateOrConnectWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankCreateOrConnectWithoutLectorInput> = z.object({
  where: z.lazy(() => LectorRankWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LectorRankCreateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema) ]),
}).strict();

export const LectorRankCreateManyLectorInputEnvelopeSchema: z.ZodType<Prisma.LectorRankCreateManyLectorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LectorRankCreateManyLectorInputSchema),z.lazy(() => LectorRankCreateManyLectorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const FaculityCreateWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityCreateWithoutLectorsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutFaculityInputSchema).optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutFacultiesInputSchema)
}).strict();

export const FaculityUncheckedCreateWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityUncheckedCreateWithoutLectorsInput> = z.object({
  id: z.number().int().optional(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutFaculityInputSchema).optional()
}).strict();

export const FaculityCreateOrConnectWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityCreateOrConnectWithoutLectorsInput> = z.object({
  where: z.lazy(() => FaculityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FaculityCreateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutLectorsInputSchema) ]),
}).strict();

export const AmpluaCreateWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaCreateWithoutLectorInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAmpluaInputSchema),
  student: z.lazy(() => StudentCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaUncheckedCreateWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaUncheckedCreateWithoutLectorInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  student: z.lazy(() => StudentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaCreateOrConnectWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaCreateOrConnectWithoutLectorInput> = z.object({
  where: z.lazy(() => AmpluaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutLectorInputSchema) ]),
}).strict();

export const LectorRankUpsertWithWhereUniqueWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUpsertWithWhereUniqueWithoutLectorInput> = z.object({
  where: z.lazy(() => LectorRankWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LectorRankUpdateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedUpdateWithoutLectorInputSchema) ]),
  create: z.union([ z.lazy(() => LectorRankCreateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedCreateWithoutLectorInputSchema) ]),
}).strict();

export const LectorRankUpdateWithWhereUniqueWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUpdateWithWhereUniqueWithoutLectorInput> = z.object({
  where: z.lazy(() => LectorRankWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LectorRankUpdateWithoutLectorInputSchema),z.lazy(() => LectorRankUncheckedUpdateWithoutLectorInputSchema) ]),
}).strict();

export const LectorRankUpdateManyWithWhereWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUpdateManyWithWhereWithoutLectorInput> = z.object({
  where: z.lazy(() => LectorRankScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LectorRankUpdateManyMutationInputSchema),z.lazy(() => LectorRankUncheckedUpdateManyWithoutLectorInputSchema) ]),
}).strict();

export const LectorRankScalarWhereInputSchema: z.ZodType<Prisma.LectorRankScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LectorRankScalarWhereInputSchema),z.lazy(() => LectorRankScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorRankScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorRankScalarWhereInputSchema),z.lazy(() => LectorRankScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  shortVariant: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lectorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const FaculityUpsertWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityUpsertWithoutLectorsInput> = z.object({
  update: z.union([ z.lazy(() => FaculityUpdateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutLectorsInputSchema) ]),
  create: z.union([ z.lazy(() => FaculityCreateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutLectorsInputSchema) ]),
  where: z.lazy(() => FaculityWhereInputSchema).optional()
}).strict();

export const FaculityUpdateToOneWithWhereWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityUpdateToOneWithWhereWithoutLectorsInput> = z.object({
  where: z.lazy(() => FaculityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FaculityUpdateWithoutLectorsInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutLectorsInputSchema) ]),
}).strict();

export const FaculityUpdateWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityUpdateWithoutLectorsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  disciplines: z.lazy(() => DisciplineUpdateManyWithoutFaculityNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutFaculityNestedInputSchema).optional(),
  University: z.lazy(() => UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema).optional()
}).strict();

export const FaculityUncheckedUpdateWithoutLectorsInputSchema: z.ZodType<Prisma.FaculityUncheckedUpdateWithoutLectorsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  disciplines: z.lazy(() => DisciplineUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional()
}).strict();

export const AmpluaUpsertWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaUpsertWithoutLectorInput> = z.object({
  update: z.union([ z.lazy(() => AmpluaUpdateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutLectorInputSchema) ]),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutLectorInputSchema) ]),
  where: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export const AmpluaUpdateToOneWithWhereWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaUpdateToOneWithWhereWithoutLectorInput> = z.object({
  where: z.lazy(() => AmpluaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AmpluaUpdateWithoutLectorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutLectorInputSchema) ]),
}).strict();

export const AmpluaUpdateWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaUpdateWithoutLectorInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAmpluaNestedInputSchema).optional(),
  student: z.lazy(() => StudentUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const AmpluaUncheckedUpdateWithoutLectorInputSchema: z.ZodType<Prisma.AmpluaUncheckedUpdateWithoutLectorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  student: z.lazy(() => StudentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const LectorCreateWithoutRanksInputSchema: z.ZodType<Prisma.LectorCreateWithoutRanksInput> = z.object({
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutLectorsInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutLectorInputSchema)
}).strict();

export const LectorUncheckedCreateWithoutRanksInputSchema: z.ZodType<Prisma.LectorUncheckedCreateWithoutRanksInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  faculity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const LectorCreateOrConnectWithoutRanksInputSchema: z.ZodType<Prisma.LectorCreateOrConnectWithoutRanksInput> = z.object({
  where: z.lazy(() => LectorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LectorCreateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedCreateWithoutRanksInputSchema) ]),
}).strict();

export const LectorUpsertWithoutRanksInputSchema: z.ZodType<Prisma.LectorUpsertWithoutRanksInput> = z.object({
  update: z.union([ z.lazy(() => LectorUpdateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutRanksInputSchema) ]),
  create: z.union([ z.lazy(() => LectorCreateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedCreateWithoutRanksInputSchema) ]),
  where: z.lazy(() => LectorWhereInputSchema).optional()
}).strict();

export const LectorUpdateToOneWithWhereWithoutRanksInputSchema: z.ZodType<Prisma.LectorUpdateToOneWithWhereWithoutRanksInput> = z.object({
  where: z.lazy(() => LectorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LectorUpdateWithoutRanksInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutRanksInputSchema) ]),
}).strict();

export const LectorUpdateWithoutRanksInputSchema: z.ZodType<Prisma.LectorUpdateWithoutRanksInput> = z.object({
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  initials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneWithoutLectorsNestedInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutLectorNestedInputSchema).optional()
}).strict();

export const LectorUncheckedUpdateWithoutRanksInputSchema: z.ZodType<Prisma.LectorUncheckedUpdateWithoutRanksInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  initials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AmpluaCreateWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaCreateWithoutStudentInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAmpluaInputSchema),
  groupHead: z.lazy(() => GroupHeadCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaUncheckedCreateWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaUncheckedCreateWithoutStudentInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaCreateOrConnectWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaCreateOrConnectWithoutStudentInput> = z.object({
  where: z.lazy(() => AmpluaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutStudentInputSchema) ]),
}).strict();

export const GroupCreateWithoutStudentsInputSchema: z.ZodType<Prisma.GroupCreateWithoutStudentsInput> = z.object({
  groupYear: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutGroupInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutGroupInputSchema).optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutGroupsInputSchema)
}).strict();

export const GroupUncheckedCreateWithoutStudentsInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutStudentsInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  faculity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutGroupInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutGroupInputSchema).optional()
}).strict();

export const GroupCreateOrConnectWithoutStudentsInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutStudentsInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutStudentsInputSchema) ]),
}).strict();

export const AmpluaUpsertWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaUpsertWithoutStudentInput> = z.object({
  update: z.union([ z.lazy(() => AmpluaUpdateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutStudentInputSchema) ]),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutStudentInputSchema) ]),
  where: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export const AmpluaUpdateToOneWithWhereWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaUpdateToOneWithWhereWithoutStudentInput> = z.object({
  where: z.lazy(() => AmpluaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AmpluaUpdateWithoutStudentInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutStudentInputSchema) ]),
}).strict();

export const AmpluaUpdateWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaUpdateWithoutStudentInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAmpluaNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const AmpluaUncheckedUpdateWithoutStudentInputSchema: z.ZodType<Prisma.AmpluaUncheckedUpdateWithoutStudentInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const GroupUpsertWithoutStudentsInputSchema: z.ZodType<Prisma.GroupUpsertWithoutStudentsInput> = z.object({
  update: z.union([ z.lazy(() => GroupUpdateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutStudentsInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedCreateWithoutStudentsInputSchema) ]),
  where: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export const GroupUpdateToOneWithWhereWithoutStudentsInputSchema: z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutStudentsInput> = z.object({
  where: z.lazy(() => GroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GroupUpdateWithoutStudentsInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutStudentsInputSchema) ]),
}).strict();

export const GroupUpdateWithoutStudentsInputSchema: z.ZodType<Prisma.GroupUpdateWithoutStudentsInput> = z.object({
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutGroupNestedInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutGroupNestedInputSchema).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateWithoutStudentsInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutStudentsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupCreateWithoutTutorInputSchema: z.ZodType<Prisma.GroupCreateWithoutTutorInput> = z.object({
  groupYear: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutGroupInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadCreateNestedManyWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutGroupInputSchema).optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutGroupsInputSchema)
}).strict();

export const GroupUncheckedCreateWithoutTutorInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutTutorInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  faculity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutGroupInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutGroupInputSchema).optional()
}).strict();

export const GroupCreateOrConnectWithoutTutorInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutTutorInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutTutorInputSchema) ]),
}).strict();

export const AmpluaCreateWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaCreateWithoutTutorInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAmpluaInputSchema),
  student: z.lazy(() => StudentCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaUncheckedCreateWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaUncheckedCreateWithoutTutorInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  student: z.lazy(() => StudentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaCreateOrConnectWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaCreateOrConnectWithoutTutorInput> = z.object({
  where: z.lazy(() => AmpluaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutTutorInputSchema) ]),
}).strict();

export const GroupUpsertWithoutTutorInputSchema: z.ZodType<Prisma.GroupUpsertWithoutTutorInput> = z.object({
  update: z.union([ z.lazy(() => GroupUpdateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutTutorInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedCreateWithoutTutorInputSchema) ]),
  where: z.lazy(() => GroupWhereInputSchema).optional()
}).strict();

export const GroupUpdateToOneWithWhereWithoutTutorInputSchema: z.ZodType<Prisma.GroupUpdateToOneWithWhereWithoutTutorInput> = z.object({
  where: z.lazy(() => GroupWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GroupUpdateWithoutTutorInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutTutorInputSchema) ]),
}).strict();

export const GroupUpdateWithoutTutorInputSchema: z.ZodType<Prisma.GroupUpdateWithoutTutorInput> = z.object({
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutGroupNestedInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUpdateManyWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutGroupNestedInputSchema).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneRequiredWithoutGroupsNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateWithoutTutorInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutTutorInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedUpdateManyWithoutGroupNestedInputSchema).optional()
}).strict();

export const AmpluaUpsertWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaUpsertWithoutTutorInput> = z.object({
  update: z.union([ z.lazy(() => AmpluaUpdateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutTutorInputSchema) ]),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutTutorInputSchema) ]),
  where: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export const AmpluaUpdateToOneWithWhereWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaUpdateToOneWithWhereWithoutTutorInput> = z.object({
  where: z.lazy(() => AmpluaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AmpluaUpdateWithoutTutorInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutTutorInputSchema) ]),
}).strict();

export const AmpluaUpdateWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaUpdateWithoutTutorInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAmpluaNestedInputSchema).optional(),
  student: z.lazy(() => StudentUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const AmpluaUncheckedUpdateWithoutTutorInputSchema: z.ZodType<Prisma.AmpluaUncheckedUpdateWithoutTutorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  student: z.lazy(() => StudentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const DisciplineCreateWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineCreateWithoutSchedulesInput> = z.object({
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Faculity: z.lazy(() => FaculityCreateNestedOneWithoutDisciplinesInputSchema).optional()
}).strict();

export const DisciplineUncheckedCreateWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineUncheckedCreateWithoutSchedulesInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  faculity: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const DisciplineCreateOrConnectWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineCreateOrConnectWithoutSchedulesInput> = z.object({
  where: z.lazy(() => DisciplineWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DisciplineCreateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutSchedulesInputSchema) ]),
}).strict();

export const DisciplineUpsertWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineUpsertWithoutSchedulesInput> = z.object({
  update: z.union([ z.lazy(() => DisciplineUpdateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedUpdateWithoutSchedulesInputSchema) ]),
  create: z.union([ z.lazy(() => DisciplineCreateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutSchedulesInputSchema) ]),
  where: z.lazy(() => DisciplineWhereInputSchema).optional()
}).strict();

export const DisciplineUpdateToOneWithWhereWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineUpdateToOneWithWhereWithoutSchedulesInput> = z.object({
  where: z.lazy(() => DisciplineWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DisciplineUpdateWithoutSchedulesInputSchema),z.lazy(() => DisciplineUncheckedUpdateWithoutSchedulesInputSchema) ]),
}).strict();

export const DisciplineUpdateWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineUpdateWithoutSchedulesInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Faculity: z.lazy(() => FaculityUpdateOneWithoutDisciplinesNestedInputSchema).optional()
}).strict();

export const DisciplineUncheckedUpdateWithoutSchedulesInputSchema: z.ZodType<Prisma.DisciplineUncheckedUpdateWithoutSchedulesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  faculity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BuildingCreateWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingCreateWithoutAuditoriumsInput> = z.object({
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutBuildingsInputSchema)
}).strict();

export const BuildingUncheckedCreateWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingUncheckedCreateWithoutAuditoriumsInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BuildingCreateOrConnectWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingCreateOrConnectWithoutAuditoriumsInput> = z.object({
  where: z.lazy(() => BuildingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BuildingCreateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutAuditoriumsInputSchema) ]),
}).strict();

export const BuildingUpsertWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingUpsertWithoutAuditoriumsInput> = z.object({
  update: z.union([ z.lazy(() => BuildingUpdateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedUpdateWithoutAuditoriumsInputSchema) ]),
  create: z.union([ z.lazy(() => BuildingCreateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutAuditoriumsInputSchema) ]),
  where: z.lazy(() => BuildingWhereInputSchema).optional()
}).strict();

export const BuildingUpdateToOneWithWhereWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingUpdateToOneWithWhereWithoutAuditoriumsInput> = z.object({
  where: z.lazy(() => BuildingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BuildingUpdateWithoutAuditoriumsInputSchema),z.lazy(() => BuildingUncheckedUpdateWithoutAuditoriumsInputSchema) ]),
}).strict();

export const BuildingUpdateWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingUpdateWithoutAuditoriumsInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nonVerbalName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  University: z.lazy(() => UniversityUpdateOneRequiredWithoutBuildingsNestedInputSchema).optional()
}).strict();

export const BuildingUncheckedUpdateWithoutAuditoriumsInputSchema: z.ZodType<Prisma.BuildingUncheckedUpdateWithoutAuditoriumsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nonVerbalName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuditoriumCreateWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumCreateWithoutBuildingInput> = z.object({
  number: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AuditoriumUncheckedCreateWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumUncheckedCreateWithoutBuildingInput> = z.object({
  id: z.number().int().optional(),
  number: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AuditoriumCreateOrConnectWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumCreateOrConnectWithoutBuildingInput> = z.object({
  where: z.lazy(() => AuditoriumWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema) ]),
}).strict();

export const AuditoriumCreateManyBuildingInputEnvelopeSchema: z.ZodType<Prisma.AuditoriumCreateManyBuildingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AuditoriumCreateManyBuildingInputSchema),z.lazy(() => AuditoriumCreateManyBuildingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UniversityCreateWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityCreateWithoutBuildingsInput> = z.object({
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  weeks: z.lazy(() => WeekCreateNestedManyWithoutUniversityInputSchema).optional(),
  faculties: z.lazy(() => FaculityCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export const UniversityUncheckedCreateWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityUncheckedCreateWithoutBuildingsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  weeks: z.lazy(() => WeekUncheckedCreateNestedManyWithoutUniversityInputSchema).optional(),
  faculties: z.lazy(() => FaculityUncheckedCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export const UniversityCreateOrConnectWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityCreateOrConnectWithoutBuildingsInput> = z.object({
  where: z.lazy(() => UniversityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UniversityCreateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutBuildingsInputSchema) ]),
}).strict();

export const AuditoriumUpsertWithWhereUniqueWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumUpsertWithWhereUniqueWithoutBuildingInput> = z.object({
  where: z.lazy(() => AuditoriumWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AuditoriumUpdateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedUpdateWithoutBuildingInputSchema) ]),
  create: z.union([ z.lazy(() => AuditoriumCreateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedCreateWithoutBuildingInputSchema) ]),
}).strict();

export const AuditoriumUpdateWithWhereUniqueWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumUpdateWithWhereUniqueWithoutBuildingInput> = z.object({
  where: z.lazy(() => AuditoriumWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AuditoriumUpdateWithoutBuildingInputSchema),z.lazy(() => AuditoriumUncheckedUpdateWithoutBuildingInputSchema) ]),
}).strict();

export const AuditoriumUpdateManyWithWhereWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumUpdateManyWithWhereWithoutBuildingInput> = z.object({
  where: z.lazy(() => AuditoriumScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AuditoriumUpdateManyMutationInputSchema),z.lazy(() => AuditoriumUncheckedUpdateManyWithoutBuildingInputSchema) ]),
}).strict();

export const AuditoriumScalarWhereInputSchema: z.ZodType<Prisma.AuditoriumScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuditoriumScalarWhereInputSchema),z.lazy(() => AuditoriumScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuditoriumScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuditoriumScalarWhereInputSchema),z.lazy(() => AuditoriumScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  building: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UniversityUpsertWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityUpsertWithoutBuildingsInput> = z.object({
  update: z.union([ z.lazy(() => UniversityUpdateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutBuildingsInputSchema) ]),
  create: z.union([ z.lazy(() => UniversityCreateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutBuildingsInputSchema) ]),
  where: z.lazy(() => UniversityWhereInputSchema).optional()
}).strict();

export const UniversityUpdateToOneWithWhereWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityUpdateToOneWithWhereWithoutBuildingsInput> = z.object({
  where: z.lazy(() => UniversityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UniversityUpdateWithoutBuildingsInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutBuildingsInputSchema) ]),
}).strict();

export const UniversityUpdateWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityUpdateWithoutBuildingsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  weeks: z.lazy(() => WeekUpdateManyWithoutUniversityNestedInputSchema).optional(),
  faculties: z.lazy(() => FaculityUpdateManyWithoutUniversityNestedInputSchema).optional()
}).strict();

export const UniversityUncheckedUpdateWithoutBuildingsInputSchema: z.ZodType<Prisma.UniversityUncheckedUpdateWithoutBuildingsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  weeks: z.lazy(() => WeekUncheckedUpdateManyWithoutUniversityNestedInputSchema).optional(),
  faculties: z.lazy(() => FaculityUncheckedUpdateManyWithoutUniversityNestedInputSchema).optional()
}).strict();

export const ScheduleCreateWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleCreateWithoutDisciplineInput> = z.object({
}).strict();

export const ScheduleUncheckedCreateWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleUncheckedCreateWithoutDisciplineInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const ScheduleCreateOrConnectWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleCreateOrConnectWithoutDisciplineInput> = z.object({
  where: z.lazy(() => ScheduleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema) ]),
}).strict();

export const ScheduleCreateManyDisciplineInputEnvelopeSchema: z.ZodType<Prisma.ScheduleCreateManyDisciplineInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ScheduleCreateManyDisciplineInputSchema),z.lazy(() => ScheduleCreateManyDisciplineInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const FaculityCreateWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityCreateWithoutDisciplinesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lectors: z.lazy(() => LectorCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutFaculityInputSchema).optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutFacultiesInputSchema)
}).strict();

export const FaculityUncheckedCreateWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityUncheckedCreateWithoutDisciplinesInput> = z.object({
  id: z.number().int().optional(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lectors: z.lazy(() => LectorUncheckedCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutFaculityInputSchema).optional()
}).strict();

export const FaculityCreateOrConnectWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityCreateOrConnectWithoutDisciplinesInput> = z.object({
  where: z.lazy(() => FaculityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FaculityCreateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutDisciplinesInputSchema) ]),
}).strict();

export const ScheduleUpsertWithWhereUniqueWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleUpsertWithWhereUniqueWithoutDisciplineInput> = z.object({
  where: z.lazy(() => ScheduleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ScheduleUpdateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedUpdateWithoutDisciplineInputSchema) ]),
  create: z.union([ z.lazy(() => ScheduleCreateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedCreateWithoutDisciplineInputSchema) ]),
}).strict();

export const ScheduleUpdateWithWhereUniqueWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleUpdateWithWhereUniqueWithoutDisciplineInput> = z.object({
  where: z.lazy(() => ScheduleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ScheduleUpdateWithoutDisciplineInputSchema),z.lazy(() => ScheduleUncheckedUpdateWithoutDisciplineInputSchema) ]),
}).strict();

export const ScheduleUpdateManyWithWhereWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleUpdateManyWithWhereWithoutDisciplineInput> = z.object({
  where: z.lazy(() => ScheduleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ScheduleUpdateManyMutationInputSchema),z.lazy(() => ScheduleUncheckedUpdateManyWithoutDisciplineInputSchema) ]),
}).strict();

export const ScheduleScalarWhereInputSchema: z.ZodType<Prisma.ScheduleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ScheduleScalarWhereInputSchema),z.lazy(() => ScheduleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ScheduleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ScheduleScalarWhereInputSchema),z.lazy(() => ScheduleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  discipline: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const FaculityUpsertWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityUpsertWithoutDisciplinesInput> = z.object({
  update: z.union([ z.lazy(() => FaculityUpdateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutDisciplinesInputSchema) ]),
  create: z.union([ z.lazy(() => FaculityCreateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutDisciplinesInputSchema) ]),
  where: z.lazy(() => FaculityWhereInputSchema).optional()
}).strict();

export const FaculityUpdateToOneWithWhereWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityUpdateToOneWithWhereWithoutDisciplinesInput> = z.object({
  where: z.lazy(() => FaculityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FaculityUpdateWithoutDisciplinesInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutDisciplinesInputSchema) ]),
}).strict();

export const FaculityUpdateWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityUpdateWithoutDisciplinesInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lectors: z.lazy(() => LectorUpdateManyWithoutFaculityNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutFaculityNestedInputSchema).optional(),
  University: z.lazy(() => UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema).optional()
}).strict();

export const FaculityUncheckedUpdateWithoutDisciplinesInputSchema: z.ZodType<Prisma.FaculityUncheckedUpdateWithoutDisciplinesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lectors: z.lazy(() => LectorUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional()
}).strict();

export const DisciplineCreateWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineCreateWithoutFaculityInput> = z.object({
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  schedules: z.lazy(() => ScheduleCreateNestedManyWithoutDisciplineInputSchema).optional()
}).strict();

export const DisciplineUncheckedCreateWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUncheckedCreateWithoutFaculityInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  schedules: z.lazy(() => ScheduleUncheckedCreateNestedManyWithoutDisciplineInputSchema).optional()
}).strict();

export const DisciplineCreateOrConnectWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineCreateOrConnectWithoutFaculityInput> = z.object({
  where: z.lazy(() => DisciplineWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DisciplineCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema) ]),
}).strict();

export const DisciplineCreateManyFaculityInputEnvelopeSchema: z.ZodType<Prisma.DisciplineCreateManyFaculityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DisciplineCreateManyFaculityInputSchema),z.lazy(() => DisciplineCreateManyFaculityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const LectorCreateWithoutFaculityInputSchema: z.ZodType<Prisma.LectorCreateWithoutFaculityInput> = z.object({
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ranks: z.lazy(() => LectorRankCreateNestedManyWithoutLectorInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutLectorInputSchema)
}).strict();

export const LectorUncheckedCreateWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUncheckedCreateWithoutFaculityInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ranks: z.lazy(() => LectorRankUncheckedCreateNestedManyWithoutLectorInputSchema).optional()
}).strict();

export const LectorCreateOrConnectWithoutFaculityInputSchema: z.ZodType<Prisma.LectorCreateOrConnectWithoutFaculityInput> = z.object({
  where: z.lazy(() => LectorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LectorCreateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema) ]),
}).strict();

export const LectorCreateManyFaculityInputEnvelopeSchema: z.ZodType<Prisma.LectorCreateManyFaculityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LectorCreateManyFaculityInputSchema),z.lazy(() => LectorCreateManyFaculityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const GroupCreateWithoutFaculityInputSchema: z.ZodType<Prisma.GroupCreateWithoutFaculityInput> = z.object({
  groupYear: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutGroupInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadCreateNestedManyWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutGroupInputSchema).optional()
}).strict();

export const GroupUncheckedCreateWithoutFaculityInputSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutFaculityInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutGroupInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutGroupInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutGroupInputSchema).optional()
}).strict();

export const GroupCreateOrConnectWithoutFaculityInputSchema: z.ZodType<Prisma.GroupCreateOrConnectWithoutFaculityInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupCreateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema) ]),
}).strict();

export const GroupCreateManyFaculityInputEnvelopeSchema: z.ZodType<Prisma.GroupCreateManyFaculityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GroupCreateManyFaculityInputSchema),z.lazy(() => GroupCreateManyFaculityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UniversityCreateWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityCreateWithoutFacultiesInput> = z.object({
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  weeks: z.lazy(() => WeekCreateNestedManyWithoutUniversityInputSchema).optional(),
  buildings: z.lazy(() => BuildingCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export const UniversityUncheckedCreateWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityUncheckedCreateWithoutFacultiesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  weeks: z.lazy(() => WeekUncheckedCreateNestedManyWithoutUniversityInputSchema).optional(),
  buildings: z.lazy(() => BuildingUncheckedCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export const UniversityCreateOrConnectWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityCreateOrConnectWithoutFacultiesInput> = z.object({
  where: z.lazy(() => UniversityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UniversityCreateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutFacultiesInputSchema) ]),
}).strict();

export const DisciplineUpsertWithWhereUniqueWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUpsertWithWhereUniqueWithoutFaculityInput> = z.object({
  where: z.lazy(() => DisciplineWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DisciplineUpdateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedUpdateWithoutFaculityInputSchema) ]),
  create: z.union([ z.lazy(() => DisciplineCreateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedCreateWithoutFaculityInputSchema) ]),
}).strict();

export const DisciplineUpdateWithWhereUniqueWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUpdateWithWhereUniqueWithoutFaculityInput> = z.object({
  where: z.lazy(() => DisciplineWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DisciplineUpdateWithoutFaculityInputSchema),z.lazy(() => DisciplineUncheckedUpdateWithoutFaculityInputSchema) ]),
}).strict();

export const DisciplineUpdateManyWithWhereWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUpdateManyWithWhereWithoutFaculityInput> = z.object({
  where: z.lazy(() => DisciplineScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DisciplineUpdateManyMutationInputSchema),z.lazy(() => DisciplineUncheckedUpdateManyWithoutFaculityInputSchema) ]),
}).strict();

export const DisciplineScalarWhereInputSchema: z.ZodType<Prisma.DisciplineScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DisciplineScalarWhereInputSchema),z.lazy(() => DisciplineScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DisciplineScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DisciplineScalarWhereInputSchema),z.lazy(() => DisciplineScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const LectorUpsertWithWhereUniqueWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUpsertWithWhereUniqueWithoutFaculityInput> = z.object({
  where: z.lazy(() => LectorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LectorUpdateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutFaculityInputSchema) ]),
  create: z.union([ z.lazy(() => LectorCreateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedCreateWithoutFaculityInputSchema) ]),
}).strict();

export const LectorUpdateWithWhereUniqueWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUpdateWithWhereUniqueWithoutFaculityInput> = z.object({
  where: z.lazy(() => LectorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LectorUpdateWithoutFaculityInputSchema),z.lazy(() => LectorUncheckedUpdateWithoutFaculityInputSchema) ]),
}).strict();

export const LectorUpdateManyWithWhereWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUpdateManyWithWhereWithoutFaculityInput> = z.object({
  where: z.lazy(() => LectorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LectorUpdateManyMutationInputSchema),z.lazy(() => LectorUncheckedUpdateManyWithoutFaculityInputSchema) ]),
}).strict();

export const LectorScalarWhereInputSchema: z.ZodType<Prisma.LectorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LectorScalarWhereInputSchema),z.lazy(() => LectorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LectorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LectorScalarWhereInputSchema),z.lazy(() => LectorScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  surname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  initials: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  group: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  faculity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const GroupUpsertWithWhereUniqueWithoutFaculityInputSchema: z.ZodType<Prisma.GroupUpsertWithWhereUniqueWithoutFaculityInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GroupUpdateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutFaculityInputSchema) ]),
  create: z.union([ z.lazy(() => GroupCreateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedCreateWithoutFaculityInputSchema) ]),
}).strict();

export const GroupUpdateWithWhereUniqueWithoutFaculityInputSchema: z.ZodType<Prisma.GroupUpdateWithWhereUniqueWithoutFaculityInput> = z.object({
  where: z.lazy(() => GroupWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GroupUpdateWithoutFaculityInputSchema),z.lazy(() => GroupUncheckedUpdateWithoutFaculityInputSchema) ]),
}).strict();

export const GroupUpdateManyWithWhereWithoutFaculityInputSchema: z.ZodType<Prisma.GroupUpdateManyWithWhereWithoutFaculityInput> = z.object({
  where: z.lazy(() => GroupScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GroupUpdateManyMutationInputSchema),z.lazy(() => GroupUncheckedUpdateManyWithoutFaculityInputSchema) ]),
}).strict();

export const GroupScalarWhereInputSchema: z.ZodType<Prisma.GroupScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GroupScalarWhereInputSchema),z.lazy(() => GroupScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupScalarWhereInputSchema),z.lazy(() => GroupScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  groupYear: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  faculity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UniversityUpsertWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityUpsertWithoutFacultiesInput> = z.object({
  update: z.union([ z.lazy(() => UniversityUpdateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutFacultiesInputSchema) ]),
  create: z.union([ z.lazy(() => UniversityCreateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutFacultiesInputSchema) ]),
  where: z.lazy(() => UniversityWhereInputSchema).optional()
}).strict();

export const UniversityUpdateToOneWithWhereWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityUpdateToOneWithWhereWithoutFacultiesInput> = z.object({
  where: z.lazy(() => UniversityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UniversityUpdateWithoutFacultiesInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutFacultiesInputSchema) ]),
}).strict();

export const UniversityUpdateWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityUpdateWithoutFacultiesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  weeks: z.lazy(() => WeekUpdateManyWithoutUniversityNestedInputSchema).optional(),
  buildings: z.lazy(() => BuildingUpdateManyWithoutUniversityNestedInputSchema).optional()
}).strict();

export const UniversityUncheckedUpdateWithoutFacultiesInputSchema: z.ZodType<Prisma.UniversityUncheckedUpdateWithoutFacultiesInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  weeks: z.lazy(() => WeekUncheckedUpdateManyWithoutUniversityNestedInputSchema).optional(),
  buildings: z.lazy(() => BuildingUncheckedUpdateManyWithoutUniversityNestedInputSchema).optional()
}).strict();

export const UniversityCreateWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityCreateWithoutWeeksInput> = z.object({
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  faculties: z.lazy(() => FaculityCreateNestedManyWithoutUniversityInputSchema).optional(),
  buildings: z.lazy(() => BuildingCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export const UniversityUncheckedCreateWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityUncheckedCreateWithoutWeeksInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  fullName: z.string(),
  city: z.string(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  faculties: z.lazy(() => FaculityUncheckedCreateNestedManyWithoutUniversityInputSchema).optional(),
  buildings: z.lazy(() => BuildingUncheckedCreateNestedManyWithoutUniversityInputSchema).optional()
}).strict();

export const UniversityCreateOrConnectWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityCreateOrConnectWithoutWeeksInput> = z.object({
  where: z.lazy(() => UniversityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UniversityCreateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutWeeksInputSchema) ]),
}).strict();

export const UniversityUpsertWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityUpsertWithoutWeeksInput> = z.object({
  update: z.union([ z.lazy(() => UniversityUpdateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutWeeksInputSchema) ]),
  create: z.union([ z.lazy(() => UniversityCreateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedCreateWithoutWeeksInputSchema) ]),
  where: z.lazy(() => UniversityWhereInputSchema).optional()
}).strict();

export const UniversityUpdateToOneWithWhereWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityUpdateToOneWithWhereWithoutWeeksInput> = z.object({
  where: z.lazy(() => UniversityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UniversityUpdateWithoutWeeksInputSchema),z.lazy(() => UniversityUncheckedUpdateWithoutWeeksInputSchema) ]),
}).strict();

export const UniversityUpdateWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityUpdateWithoutWeeksInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  faculties: z.lazy(() => FaculityUpdateManyWithoutUniversityNestedInputSchema).optional(),
  buildings: z.lazy(() => BuildingUpdateManyWithoutUniversityNestedInputSchema).optional()
}).strict();

export const UniversityUncheckedUpdateWithoutWeeksInputSchema: z.ZodType<Prisma.UniversityUncheckedUpdateWithoutWeeksInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyTime: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  faculties: z.lazy(() => FaculityUncheckedUpdateManyWithoutUniversityNestedInputSchema).optional(),
  buildings: z.lazy(() => BuildingUncheckedUpdateManyWithoutUniversityNestedInputSchema).optional()
}).strict();

export const CuratorCreateWithoutGroupInputSchema: z.ZodType<Prisma.CuratorCreateWithoutGroupInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutCuratorInputSchema)
}).strict();

export const CuratorUncheckedCreateWithoutGroupInputSchema: z.ZodType<Prisma.CuratorUncheckedCreateWithoutGroupInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CuratorCreateOrConnectWithoutGroupInputSchema: z.ZodType<Prisma.CuratorCreateOrConnectWithoutGroupInput> = z.object({
  where: z.lazy(() => CuratorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CuratorCreateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export const GroupHeadCreateWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadCreateWithoutGroupInput> = z.object({
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutGroupHeadInputSchema)
}).strict();

export const GroupHeadUncheckedCreateWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUncheckedCreateWithoutGroupInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GroupHeadCreateOrConnectWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadCreateOrConnectWithoutGroupInput> = z.object({
  where: z.lazy(() => GroupHeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export const GroupHeadCreateManyGroupInputEnvelopeSchema: z.ZodType<Prisma.GroupHeadCreateManyGroupInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => GroupHeadCreateManyGroupInputSchema),z.lazy(() => GroupHeadCreateManyGroupInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const StudentCreateWithoutGroupInputSchema: z.ZodType<Prisma.StudentCreateWithoutGroupInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => AmpluaCreateNestedOneWithoutStudentInputSchema)
}).strict();

export const StudentUncheckedCreateWithoutGroupInputSchema: z.ZodType<Prisma.StudentUncheckedCreateWithoutGroupInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const StudentCreateOrConnectWithoutGroupInputSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutGroupInput> = z.object({
  where: z.lazy(() => StudentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StudentCreateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export const StudentCreateManyGroupInputEnvelopeSchema: z.ZodType<Prisma.StudentCreateManyGroupInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => StudentCreateManyGroupInputSchema),z.lazy(() => StudentCreateManyGroupInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TutorCreateWithoutGroupInputSchema: z.ZodType<Prisma.TutorCreateWithoutGroupInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Amplua: z.lazy(() => AmpluaCreateNestedOneWithoutTutorInputSchema)
}).strict();

export const TutorUncheckedCreateWithoutGroupInputSchema: z.ZodType<Prisma.TutorUncheckedCreateWithoutGroupInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TutorCreateOrConnectWithoutGroupInputSchema: z.ZodType<Prisma.TutorCreateOrConnectWithoutGroupInput> = z.object({
  where: z.lazy(() => TutorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TutorCreateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export const FaculityCreateWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityCreateWithoutGroupsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineCreateNestedManyWithoutFaculityInputSchema).optional(),
  lectors: z.lazy(() => LectorCreateNestedManyWithoutFaculityInputSchema).optional(),
  University: z.lazy(() => UniversityCreateNestedOneWithoutFacultiesInputSchema)
}).strict();

export const FaculityUncheckedCreateWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityUncheckedCreateWithoutGroupsInput> = z.object({
  id: z.number().int().optional(),
  university: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema).optional(),
  lectors: z.lazy(() => LectorUncheckedCreateNestedManyWithoutFaculityInputSchema).optional()
}).strict();

export const FaculityCreateOrConnectWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityCreateOrConnectWithoutGroupsInput> = z.object({
  where: z.lazy(() => FaculityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FaculityCreateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutGroupsInputSchema) ]),
}).strict();

export const CuratorUpsertWithoutGroupInputSchema: z.ZodType<Prisma.CuratorUpsertWithoutGroupInput> = z.object({
  update: z.union([ z.lazy(() => CuratorUpdateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutGroupInputSchema) ]),
  create: z.union([ z.lazy(() => CuratorCreateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedCreateWithoutGroupInputSchema) ]),
  where: z.lazy(() => CuratorWhereInputSchema).optional()
}).strict();

export const CuratorUpdateToOneWithWhereWithoutGroupInputSchema: z.ZodType<Prisma.CuratorUpdateToOneWithWhereWithoutGroupInput> = z.object({
  where: z.lazy(() => CuratorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CuratorUpdateWithoutGroupInputSchema),z.lazy(() => CuratorUncheckedUpdateWithoutGroupInputSchema) ]),
}).strict();

export const CuratorUpdateWithoutGroupInputSchema: z.ZodType<Prisma.CuratorUpdateWithoutGroupInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutCuratorNestedInputSchema).optional()
}).strict();

export const CuratorUncheckedUpdateWithoutGroupInputSchema: z.ZodType<Prisma.CuratorUncheckedUpdateWithoutGroupInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupHeadUpsertWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUpsertWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => GroupHeadWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GroupHeadUpdateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedUpdateWithoutGroupInputSchema) ]),
  create: z.union([ z.lazy(() => GroupHeadCreateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export const GroupHeadUpdateWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUpdateWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => GroupHeadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GroupHeadUpdateWithoutGroupInputSchema),z.lazy(() => GroupHeadUncheckedUpdateWithoutGroupInputSchema) ]),
}).strict();

export const GroupHeadUpdateManyWithWhereWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUpdateManyWithWhereWithoutGroupInput> = z.object({
  where: z.lazy(() => GroupHeadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GroupHeadUpdateManyMutationInputSchema),z.lazy(() => GroupHeadUncheckedUpdateManyWithoutGroupInputSchema) ]),
}).strict();

export const GroupHeadScalarWhereInputSchema: z.ZodType<Prisma.GroupHeadScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GroupHeadScalarWhereInputSchema),z.lazy(() => GroupHeadScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GroupHeadScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GroupHeadScalarWhereInputSchema),z.lazy(() => GroupHeadScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  level: z.union([ z.lazy(() => EnumGroupHeadLevelFilterSchema),z.lazy(() => GroupHeadLevelSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const StudentUpsertWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => StudentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StudentUpdateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutGroupInputSchema) ]),
  create: z.union([ z.lazy(() => StudentCreateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGroupInputSchema) ]),
}).strict();

export const StudentUpdateWithWhereUniqueWithoutGroupInputSchema: z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutGroupInput> = z.object({
  where: z.lazy(() => StudentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StudentUpdateWithoutGroupInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutGroupInputSchema) ]),
}).strict();

export const StudentUpdateManyWithWhereWithoutGroupInputSchema: z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutGroupInput> = z.object({
  where: z.lazy(() => StudentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StudentUpdateManyMutationInputSchema),z.lazy(() => StudentUncheckedUpdateManyWithoutGroupInputSchema) ]),
}).strict();

export const StudentScalarWhereInputSchema: z.ZodType<Prisma.StudentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StudentScalarWhereInputSchema),z.lazy(() => StudentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentScalarWhereInputSchema),z.lazy(() => StudentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tgID: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  group: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TutorUpsertWithoutGroupInputSchema: z.ZodType<Prisma.TutorUpsertWithoutGroupInput> = z.object({
  update: z.union([ z.lazy(() => TutorUpdateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutGroupInputSchema) ]),
  create: z.union([ z.lazy(() => TutorCreateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedCreateWithoutGroupInputSchema) ]),
  where: z.lazy(() => TutorWhereInputSchema).optional()
}).strict();

export const TutorUpdateToOneWithWhereWithoutGroupInputSchema: z.ZodType<Prisma.TutorUpdateToOneWithWhereWithoutGroupInput> = z.object({
  where: z.lazy(() => TutorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TutorUpdateWithoutGroupInputSchema),z.lazy(() => TutorUncheckedUpdateWithoutGroupInputSchema) ]),
}).strict();

export const TutorUpdateWithoutGroupInputSchema: z.ZodType<Prisma.TutorUpdateWithoutGroupInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutTutorNestedInputSchema).optional()
}).strict();

export const TutorUncheckedUpdateWithoutGroupInputSchema: z.ZodType<Prisma.TutorUncheckedUpdateWithoutGroupInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FaculityUpsertWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityUpsertWithoutGroupsInput> = z.object({
  update: z.union([ z.lazy(() => FaculityUpdateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutGroupsInputSchema) ]),
  create: z.union([ z.lazy(() => FaculityCreateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutGroupsInputSchema) ]),
  where: z.lazy(() => FaculityWhereInputSchema).optional()
}).strict();

export const FaculityUpdateToOneWithWhereWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityUpdateToOneWithWhereWithoutGroupsInput> = z.object({
  where: z.lazy(() => FaculityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FaculityUpdateWithoutGroupsInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutGroupsInputSchema) ]),
}).strict();

export const FaculityUpdateWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityUpdateWithoutGroupsInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  disciplines: z.lazy(() => DisciplineUpdateManyWithoutFaculityNestedInputSchema).optional(),
  lectors: z.lazy(() => LectorUpdateManyWithoutFaculityNestedInputSchema).optional(),
  University: z.lazy(() => UniversityUpdateOneRequiredWithoutFacultiesNestedInputSchema).optional()
}).strict();

export const FaculityUncheckedUpdateWithoutGroupsInputSchema: z.ZodType<Prisma.FaculityUncheckedUpdateWithoutGroupsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  university: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  disciplines: z.lazy(() => DisciplineUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional(),
  lectors: z.lazy(() => LectorUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional()
}).strict();

export const WeekCreateWithoutUniversityInputSchema: z.ZodType<Prisma.WeekCreateWithoutUniversityInput> = z.object({
  title: z.string(),
  count: z.lazy(() => WeekCountSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WeekUncheckedCreateWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUncheckedCreateWithoutUniversityInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  count: z.lazy(() => WeekCountSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WeekCreateOrConnectWithoutUniversityInputSchema: z.ZodType<Prisma.WeekCreateOrConnectWithoutUniversityInput> = z.object({
  where: z.lazy(() => WeekWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WeekCreateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema) ]),
}).strict();

export const WeekCreateManyUniversityInputEnvelopeSchema: z.ZodType<Prisma.WeekCreateManyUniversityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WeekCreateManyUniversityInputSchema),z.lazy(() => WeekCreateManyUniversityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const FaculityCreateWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityCreateWithoutUniversityInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineCreateNestedManyWithoutFaculityInputSchema).optional(),
  lectors: z.lazy(() => LectorCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutFaculityInputSchema).optional()
}).strict();

export const FaculityUncheckedCreateWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityUncheckedCreateWithoutUniversityInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  disciplines: z.lazy(() => DisciplineUncheckedCreateNestedManyWithoutFaculityInputSchema).optional(),
  lectors: z.lazy(() => LectorUncheckedCreateNestedManyWithoutFaculityInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutFaculityInputSchema).optional()
}).strict();

export const FaculityCreateOrConnectWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityCreateOrConnectWithoutUniversityInput> = z.object({
  where: z.lazy(() => FaculityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FaculityCreateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema) ]),
}).strict();

export const FaculityCreateManyUniversityInputEnvelopeSchema: z.ZodType<Prisma.FaculityCreateManyUniversityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FaculityCreateManyUniversityInputSchema),z.lazy(() => FaculityCreateManyUniversityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BuildingCreateWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingCreateWithoutUniversityInput> = z.object({
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  auditoriums: z.lazy(() => AuditoriumCreateNestedManyWithoutBuildingInputSchema).optional()
}).strict();

export const BuildingUncheckedCreateWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUncheckedCreateWithoutUniversityInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  auditoriums: z.lazy(() => AuditoriumUncheckedCreateNestedManyWithoutBuildingInputSchema).optional()
}).strict();

export const BuildingCreateOrConnectWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingCreateOrConnectWithoutUniversityInput> = z.object({
  where: z.lazy(() => BuildingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BuildingCreateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema) ]),
}).strict();

export const BuildingCreateManyUniversityInputEnvelopeSchema: z.ZodType<Prisma.BuildingCreateManyUniversityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BuildingCreateManyUniversityInputSchema),z.lazy(() => BuildingCreateManyUniversityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const WeekUpsertWithWhereUniqueWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUpsertWithWhereUniqueWithoutUniversityInput> = z.object({
  where: z.lazy(() => WeekWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WeekUpdateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedUpdateWithoutUniversityInputSchema) ]),
  create: z.union([ z.lazy(() => WeekCreateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedCreateWithoutUniversityInputSchema) ]),
}).strict();

export const WeekUpdateWithWhereUniqueWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUpdateWithWhereUniqueWithoutUniversityInput> = z.object({
  where: z.lazy(() => WeekWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WeekUpdateWithoutUniversityInputSchema),z.lazy(() => WeekUncheckedUpdateWithoutUniversityInputSchema) ]),
}).strict();

export const WeekUpdateManyWithWhereWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUpdateManyWithWhereWithoutUniversityInput> = z.object({
  where: z.lazy(() => WeekScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WeekUpdateManyMutationInputSchema),z.lazy(() => WeekUncheckedUpdateManyWithoutUniversityInputSchema) ]),
}).strict();

export const WeekScalarWhereInputSchema: z.ZodType<Prisma.WeekScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WeekScalarWhereInputSchema),z.lazy(() => WeekScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeekScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeekScalarWhereInputSchema),z.lazy(() => WeekScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  count: z.union([ z.lazy(() => EnumWeekCountFilterSchema),z.lazy(() => WeekCountSchema) ]).optional(),
  university: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const FaculityUpsertWithWhereUniqueWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityUpsertWithWhereUniqueWithoutUniversityInput> = z.object({
  where: z.lazy(() => FaculityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FaculityUpdateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutUniversityInputSchema) ]),
  create: z.union([ z.lazy(() => FaculityCreateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedCreateWithoutUniversityInputSchema) ]),
}).strict();

export const FaculityUpdateWithWhereUniqueWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityUpdateWithWhereUniqueWithoutUniversityInput> = z.object({
  where: z.lazy(() => FaculityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FaculityUpdateWithoutUniversityInputSchema),z.lazy(() => FaculityUncheckedUpdateWithoutUniversityInputSchema) ]),
}).strict();

export const FaculityUpdateManyWithWhereWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityUpdateManyWithWhereWithoutUniversityInput> = z.object({
  where: z.lazy(() => FaculityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FaculityUpdateManyMutationInputSchema),z.lazy(() => FaculityUncheckedUpdateManyWithoutUniversityInputSchema) ]),
}).strict();

export const FaculityScalarWhereInputSchema: z.ZodType<Prisma.FaculityScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FaculityScalarWhereInputSchema),z.lazy(() => FaculityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FaculityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FaculityScalarWhereInputSchema),z.lazy(() => FaculityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  university: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BuildingUpsertWithWhereUniqueWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUpsertWithWhereUniqueWithoutUniversityInput> = z.object({
  where: z.lazy(() => BuildingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BuildingUpdateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedUpdateWithoutUniversityInputSchema) ]),
  create: z.union([ z.lazy(() => BuildingCreateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedCreateWithoutUniversityInputSchema) ]),
}).strict();

export const BuildingUpdateWithWhereUniqueWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUpdateWithWhereUniqueWithoutUniversityInput> = z.object({
  where: z.lazy(() => BuildingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BuildingUpdateWithoutUniversityInputSchema),z.lazy(() => BuildingUncheckedUpdateWithoutUniversityInputSchema) ]),
}).strict();

export const BuildingUpdateManyWithWhereWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUpdateManyWithWhereWithoutUniversityInput> = z.object({
  where: z.lazy(() => BuildingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BuildingUpdateManyMutationInputSchema),z.lazy(() => BuildingUncheckedUpdateManyWithoutUniversityInputSchema) ]),
}).strict();

export const BuildingScalarWhereInputSchema: z.ZodType<Prisma.BuildingScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BuildingScalarWhereInputSchema),z.lazy(() => BuildingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BuildingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BuildingScalarWhereInputSchema),z.lazy(() => BuildingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nonVerbalName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  university: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AmpluaCreateWithoutUserInputSchema: z.ZodType<Prisma.AmpluaCreateWithoutUserInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  student: z.lazy(() => StudentCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AmpluaUncheckedCreateWithoutUserInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaCreateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  student: z.lazy(() => StudentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedCreateNestedOneWithoutAmpluaInputSchema).optional()
}).strict();

export const AmpluaCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AmpluaCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AmpluaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AmpluaUpsertWithoutUserInputSchema: z.ZodType<Prisma.AmpluaUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => AmpluaUpdateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AmpluaCreateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => AmpluaWhereInputSchema).optional()
}).strict();

export const AmpluaUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AmpluaUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AmpluaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AmpluaUpdateWithoutUserInputSchema),z.lazy(() => AmpluaUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AmpluaUpdateWithoutUserInputSchema: z.ZodType<Prisma.AmpluaUpdateWithoutUserInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  student: z.lazy(() => StudentUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const AmpluaUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AmpluaUncheckedUpdateWithoutUserInput> = z.object({
  amplua: z.union([ z.lazy(() => AmpluaUpdateampluaInputSchema),z.lazy(() => AmpluaEnumSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  student: z.lazy(() => StudentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  groupHead: z.lazy(() => GroupHeadUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional(),
  lector: z.lazy(() => LectorUncheckedUpdateOneWithoutAmpluaNestedInputSchema).optional()
}).strict();

export const LectorRankCreateManyLectorInputSchema: z.ZodType<Prisma.LectorRankCreateManyLectorInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  shortVariant: z.string()
}).strict();

export const LectorRankUpdateWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUpdateWithoutLectorInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortVariant: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LectorRankUncheckedUpdateWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUncheckedUpdateWithoutLectorInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortVariant: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LectorRankUncheckedUpdateManyWithoutLectorInputSchema: z.ZodType<Prisma.LectorRankUncheckedUpdateManyWithoutLectorInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortVariant: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuditoriumCreateManyBuildingInputSchema: z.ZodType<Prisma.AuditoriumCreateManyBuildingInput> = z.object({
  id: z.number().int().optional(),
  number: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AuditoriumUpdateWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumUpdateWithoutBuildingInput> = z.object({
  number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuditoriumUncheckedUpdateWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumUncheckedUpdateWithoutBuildingInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuditoriumUncheckedUpdateManyWithoutBuildingInputSchema: z.ZodType<Prisma.AuditoriumUncheckedUpdateManyWithoutBuildingInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ScheduleCreateManyDisciplineInputSchema: z.ZodType<Prisma.ScheduleCreateManyDisciplineInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const ScheduleUpdateWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleUpdateWithoutDisciplineInput> = z.object({
}).strict();

export const ScheduleUncheckedUpdateWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleUncheckedUpdateWithoutDisciplineInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ScheduleUncheckedUpdateManyWithoutDisciplineInputSchema: z.ZodType<Prisma.ScheduleUncheckedUpdateManyWithoutDisciplineInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DisciplineCreateManyFaculityInputSchema: z.ZodType<Prisma.DisciplineCreateManyFaculityInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const LectorCreateManyFaculityInputSchema: z.ZodType<Prisma.LectorCreateManyFaculityInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  lastName: z.string(),
  firstName: z.string(),
  surname: z.string(),
  initials: z.string(),
  group: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GroupCreateManyFaculityInputSchema: z.ZodType<Prisma.GroupCreateManyFaculityInput> = z.object({
  id: z.number().int().optional(),
  groupYear: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const DisciplineUpdateWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUpdateWithoutFaculityInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  schedules: z.lazy(() => ScheduleUpdateManyWithoutDisciplineNestedInputSchema).optional()
}).strict();

export const DisciplineUncheckedUpdateWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUncheckedUpdateWithoutFaculityInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  schedules: z.lazy(() => ScheduleUncheckedUpdateManyWithoutDisciplineNestedInputSchema).optional()
}).strict();

export const DisciplineUncheckedUpdateManyWithoutFaculityInputSchema: z.ZodType<Prisma.DisciplineUncheckedUpdateManyWithoutFaculityInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LectorUpdateWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUpdateWithoutFaculityInput> = z.object({
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  initials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ranks: z.lazy(() => LectorRankUpdateManyWithoutLectorNestedInputSchema).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutLectorNestedInputSchema).optional()
}).strict();

export const LectorUncheckedUpdateWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUncheckedUpdateWithoutFaculityInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  initials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ranks: z.lazy(() => LectorRankUncheckedUpdateManyWithoutLectorNestedInputSchema).optional()
}).strict();

export const LectorUncheckedUpdateManyWithoutFaculityInputSchema: z.ZodType<Prisma.LectorUncheckedUpdateManyWithoutFaculityInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  surname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  initials: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupUpdateWithoutFaculityInputSchema: z.ZodType<Prisma.GroupUpdateWithoutFaculityInput> = z.object({
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUpdateOneWithoutGroupNestedInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUpdateManyWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUpdateOneWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateWithoutFaculityInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateWithoutFaculityInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  curator: z.lazy(() => CuratorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional(),
  groupHeads: z.lazy(() => GroupHeadUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  students: z.lazy(() => StudentUncheckedUpdateManyWithoutGroupNestedInputSchema).optional(),
  tutor: z.lazy(() => TutorUncheckedUpdateOneWithoutGroupNestedInputSchema).optional()
}).strict();

export const GroupUncheckedUpdateManyWithoutFaculityInputSchema: z.ZodType<Prisma.GroupUncheckedUpdateManyWithoutFaculityInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  groupYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupHeadCreateManyGroupInputSchema: z.ZodType<Prisma.GroupHeadCreateManyGroupInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  level: z.lazy(() => GroupHeadLevelSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const StudentCreateManyGroupInputSchema: z.ZodType<Prisma.StudentCreateManyGroupInput> = z.object({
  id: z.string(),
  tgID: z.bigint(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const GroupHeadUpdateWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUpdateWithoutGroupInput> = z.object({
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Amplua: z.lazy(() => AmpluaUpdateOneRequiredWithoutGroupHeadNestedInputSchema).optional()
}).strict();

export const GroupHeadUncheckedUpdateWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUncheckedUpdateWithoutGroupInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GroupHeadUncheckedUpdateManyWithoutGroupInputSchema: z.ZodType<Prisma.GroupHeadUncheckedUpdateManyWithoutGroupInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GroupHeadLevelSchema),z.lazy(() => EnumGroupHeadLevelFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StudentUpdateWithoutGroupInputSchema: z.ZodType<Prisma.StudentUpdateWithoutGroupInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => AmpluaUpdateOneRequiredWithoutStudentNestedInputSchema).optional()
}).strict();

export const StudentUncheckedUpdateWithoutGroupInputSchema: z.ZodType<Prisma.StudentUncheckedUpdateWithoutGroupInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StudentUncheckedUpdateManyWithoutGroupInputSchema: z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutGroupInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tgID: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WeekCreateManyUniversityInputSchema: z.ZodType<Prisma.WeekCreateManyUniversityInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  count: z.lazy(() => WeekCountSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const FaculityCreateManyUniversityInputSchema: z.ZodType<Prisma.FaculityCreateManyUniversityInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BuildingCreateManyUniversityInputSchema: z.ZodType<Prisma.BuildingCreateManyUniversityInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  nonVerbalName: z.string().optional().nullable(),
  address: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WeekUpdateWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUpdateWithoutUniversityInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => EnumWeekCountFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WeekUncheckedUpdateWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUncheckedUpdateWithoutUniversityInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => EnumWeekCountFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WeekUncheckedUpdateManyWithoutUniversityInputSchema: z.ZodType<Prisma.WeekUncheckedUpdateManyWithoutUniversityInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  count: z.union([ z.lazy(() => WeekCountSchema),z.lazy(() => EnumWeekCountFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const FaculityUpdateWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityUpdateWithoutUniversityInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  disciplines: z.lazy(() => DisciplineUpdateManyWithoutFaculityNestedInputSchema).optional(),
  lectors: z.lazy(() => LectorUpdateManyWithoutFaculityNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutFaculityNestedInputSchema).optional()
}).strict();

export const FaculityUncheckedUpdateWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityUncheckedUpdateWithoutUniversityInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  disciplines: z.lazy(() => DisciplineUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional(),
  lectors: z.lazy(() => LectorUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutFaculityNestedInputSchema).optional()
}).strict();

export const FaculityUncheckedUpdateManyWithoutUniversityInputSchema: z.ZodType<Prisma.FaculityUncheckedUpdateManyWithoutUniversityInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BuildingUpdateWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUpdateWithoutUniversityInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nonVerbalName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  auditoriums: z.lazy(() => AuditoriumUpdateManyWithoutBuildingNestedInputSchema).optional()
}).strict();

export const BuildingUncheckedUpdateWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUncheckedUpdateWithoutUniversityInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nonVerbalName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  auditoriums: z.lazy(() => AuditoriumUncheckedUpdateManyWithoutBuildingNestedInputSchema).optional()
}).strict();

export const BuildingUncheckedUpdateManyWithoutUniversityInputSchema: z.ZodType<Prisma.BuildingUncheckedUpdateManyWithoutUniversityInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nonVerbalName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AmpluaFindFirstArgsSchema: z.ZodType<Prisma.AmpluaFindFirstArgs> = z.object({
  select: AmpluaSelectSchema.optional(),
  include: AmpluaIncludeSchema.optional(),
  where: AmpluaWhereInputSchema.optional(),
  orderBy: z.union([ AmpluaOrderByWithRelationInputSchema.array(),AmpluaOrderByWithRelationInputSchema ]).optional(),
  cursor: AmpluaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AmpluaScalarFieldEnumSchema,AmpluaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AmpluaFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AmpluaFindFirstOrThrowArgs> = z.object({
  select: AmpluaSelectSchema.optional(),
  include: AmpluaIncludeSchema.optional(),
  where: AmpluaWhereInputSchema.optional(),
  orderBy: z.union([ AmpluaOrderByWithRelationInputSchema.array(),AmpluaOrderByWithRelationInputSchema ]).optional(),
  cursor: AmpluaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AmpluaScalarFieldEnumSchema,AmpluaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AmpluaFindManyArgsSchema: z.ZodType<Prisma.AmpluaFindManyArgs> = z.object({
  select: AmpluaSelectSchema.optional(),
  include: AmpluaIncludeSchema.optional(),
  where: AmpluaWhereInputSchema.optional(),
  orderBy: z.union([ AmpluaOrderByWithRelationInputSchema.array(),AmpluaOrderByWithRelationInputSchema ]).optional(),
  cursor: AmpluaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AmpluaScalarFieldEnumSchema,AmpluaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AmpluaAggregateArgsSchema: z.ZodType<Prisma.AmpluaAggregateArgs> = z.object({
  where: AmpluaWhereInputSchema.optional(),
  orderBy: z.union([ AmpluaOrderByWithRelationInputSchema.array(),AmpluaOrderByWithRelationInputSchema ]).optional(),
  cursor: AmpluaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AmpluaGroupByArgsSchema: z.ZodType<Prisma.AmpluaGroupByArgs> = z.object({
  where: AmpluaWhereInputSchema.optional(),
  orderBy: z.union([ AmpluaOrderByWithAggregationInputSchema.array(),AmpluaOrderByWithAggregationInputSchema ]).optional(),
  by: AmpluaScalarFieldEnumSchema.array(),
  having: AmpluaScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AmpluaFindUniqueArgsSchema: z.ZodType<Prisma.AmpluaFindUniqueArgs> = z.object({
  select: AmpluaSelectSchema.optional(),
  include: AmpluaIncludeSchema.optional(),
  where: AmpluaWhereUniqueInputSchema,
}).strict() ;

export const AmpluaFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AmpluaFindUniqueOrThrowArgs> = z.object({
  select: AmpluaSelectSchema.optional(),
  include: AmpluaIncludeSchema.optional(),
  where: AmpluaWhereUniqueInputSchema,
}).strict() ;

export const CuratorFindFirstArgsSchema: z.ZodType<Prisma.CuratorFindFirstArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  where: CuratorWhereInputSchema.optional(),
  orderBy: z.union([ CuratorOrderByWithRelationInputSchema.array(),CuratorOrderByWithRelationInputSchema ]).optional(),
  cursor: CuratorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CuratorScalarFieldEnumSchema,CuratorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CuratorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CuratorFindFirstOrThrowArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  where: CuratorWhereInputSchema.optional(),
  orderBy: z.union([ CuratorOrderByWithRelationInputSchema.array(),CuratorOrderByWithRelationInputSchema ]).optional(),
  cursor: CuratorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CuratorScalarFieldEnumSchema,CuratorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CuratorFindManyArgsSchema: z.ZodType<Prisma.CuratorFindManyArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  where: CuratorWhereInputSchema.optional(),
  orderBy: z.union([ CuratorOrderByWithRelationInputSchema.array(),CuratorOrderByWithRelationInputSchema ]).optional(),
  cursor: CuratorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CuratorScalarFieldEnumSchema,CuratorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CuratorAggregateArgsSchema: z.ZodType<Prisma.CuratorAggregateArgs> = z.object({
  where: CuratorWhereInputSchema.optional(),
  orderBy: z.union([ CuratorOrderByWithRelationInputSchema.array(),CuratorOrderByWithRelationInputSchema ]).optional(),
  cursor: CuratorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CuratorGroupByArgsSchema: z.ZodType<Prisma.CuratorGroupByArgs> = z.object({
  where: CuratorWhereInputSchema.optional(),
  orderBy: z.union([ CuratorOrderByWithAggregationInputSchema.array(),CuratorOrderByWithAggregationInputSchema ]).optional(),
  by: CuratorScalarFieldEnumSchema.array(),
  having: CuratorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CuratorFindUniqueArgsSchema: z.ZodType<Prisma.CuratorFindUniqueArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  where: CuratorWhereUniqueInputSchema,
}).strict() ;

export const CuratorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CuratorFindUniqueOrThrowArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  where: CuratorWhereUniqueInputSchema,
}).strict() ;

export const GroupHeadFindFirstArgsSchema: z.ZodType<Prisma.GroupHeadFindFirstArgs> = z.object({
  select: GroupHeadSelectSchema.optional(),
  include: GroupHeadIncludeSchema.optional(),
  where: GroupHeadWhereInputSchema.optional(),
  orderBy: z.union([ GroupHeadOrderByWithRelationInputSchema.array(),GroupHeadOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupHeadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GroupHeadScalarFieldEnumSchema,GroupHeadScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GroupHeadFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GroupHeadFindFirstOrThrowArgs> = z.object({
  select: GroupHeadSelectSchema.optional(),
  include: GroupHeadIncludeSchema.optional(),
  where: GroupHeadWhereInputSchema.optional(),
  orderBy: z.union([ GroupHeadOrderByWithRelationInputSchema.array(),GroupHeadOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupHeadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GroupHeadScalarFieldEnumSchema,GroupHeadScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GroupHeadFindManyArgsSchema: z.ZodType<Prisma.GroupHeadFindManyArgs> = z.object({
  select: GroupHeadSelectSchema.optional(),
  include: GroupHeadIncludeSchema.optional(),
  where: GroupHeadWhereInputSchema.optional(),
  orderBy: z.union([ GroupHeadOrderByWithRelationInputSchema.array(),GroupHeadOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupHeadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GroupHeadScalarFieldEnumSchema,GroupHeadScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GroupHeadAggregateArgsSchema: z.ZodType<Prisma.GroupHeadAggregateArgs> = z.object({
  where: GroupHeadWhereInputSchema.optional(),
  orderBy: z.union([ GroupHeadOrderByWithRelationInputSchema.array(),GroupHeadOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupHeadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GroupHeadGroupByArgsSchema: z.ZodType<Prisma.GroupHeadGroupByArgs> = z.object({
  where: GroupHeadWhereInputSchema.optional(),
  orderBy: z.union([ GroupHeadOrderByWithAggregationInputSchema.array(),GroupHeadOrderByWithAggregationInputSchema ]).optional(),
  by: GroupHeadScalarFieldEnumSchema.array(),
  having: GroupHeadScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GroupHeadFindUniqueArgsSchema: z.ZodType<Prisma.GroupHeadFindUniqueArgs> = z.object({
  select: GroupHeadSelectSchema.optional(),
  include: GroupHeadIncludeSchema.optional(),
  where: GroupHeadWhereUniqueInputSchema,
}).strict() ;

export const GroupHeadFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GroupHeadFindUniqueOrThrowArgs> = z.object({
  select: GroupHeadSelectSchema.optional(),
  include: GroupHeadIncludeSchema.optional(),
  where: GroupHeadWhereUniqueInputSchema,
}).strict() ;

export const LectorFindFirstArgsSchema: z.ZodType<Prisma.LectorFindFirstArgs> = z.object({
  select: LectorSelectSchema.optional(),
  include: LectorIncludeSchema.optional(),
  where: LectorWhereInputSchema.optional(),
  orderBy: z.union([ LectorOrderByWithRelationInputSchema.array(),LectorOrderByWithRelationInputSchema ]).optional(),
  cursor: LectorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LectorScalarFieldEnumSchema,LectorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LectorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LectorFindFirstOrThrowArgs> = z.object({
  select: LectorSelectSchema.optional(),
  include: LectorIncludeSchema.optional(),
  where: LectorWhereInputSchema.optional(),
  orderBy: z.union([ LectorOrderByWithRelationInputSchema.array(),LectorOrderByWithRelationInputSchema ]).optional(),
  cursor: LectorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LectorScalarFieldEnumSchema,LectorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LectorFindManyArgsSchema: z.ZodType<Prisma.LectorFindManyArgs> = z.object({
  select: LectorSelectSchema.optional(),
  include: LectorIncludeSchema.optional(),
  where: LectorWhereInputSchema.optional(),
  orderBy: z.union([ LectorOrderByWithRelationInputSchema.array(),LectorOrderByWithRelationInputSchema ]).optional(),
  cursor: LectorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LectorScalarFieldEnumSchema,LectorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LectorAggregateArgsSchema: z.ZodType<Prisma.LectorAggregateArgs> = z.object({
  where: LectorWhereInputSchema.optional(),
  orderBy: z.union([ LectorOrderByWithRelationInputSchema.array(),LectorOrderByWithRelationInputSchema ]).optional(),
  cursor: LectorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LectorGroupByArgsSchema: z.ZodType<Prisma.LectorGroupByArgs> = z.object({
  where: LectorWhereInputSchema.optional(),
  orderBy: z.union([ LectorOrderByWithAggregationInputSchema.array(),LectorOrderByWithAggregationInputSchema ]).optional(),
  by: LectorScalarFieldEnumSchema.array(),
  having: LectorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LectorFindUniqueArgsSchema: z.ZodType<Prisma.LectorFindUniqueArgs> = z.object({
  select: LectorSelectSchema.optional(),
  include: LectorIncludeSchema.optional(),
  where: LectorWhereUniqueInputSchema,
}).strict() ;

export const LectorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LectorFindUniqueOrThrowArgs> = z.object({
  select: LectorSelectSchema.optional(),
  include: LectorIncludeSchema.optional(),
  where: LectorWhereUniqueInputSchema,
}).strict() ;

export const LectorRankFindFirstArgsSchema: z.ZodType<Prisma.LectorRankFindFirstArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  where: LectorRankWhereInputSchema.optional(),
  orderBy: z.union([ LectorRankOrderByWithRelationInputSchema.array(),LectorRankOrderByWithRelationInputSchema ]).optional(),
  cursor: LectorRankWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LectorRankScalarFieldEnumSchema,LectorRankScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LectorRankFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LectorRankFindFirstOrThrowArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  where: LectorRankWhereInputSchema.optional(),
  orderBy: z.union([ LectorRankOrderByWithRelationInputSchema.array(),LectorRankOrderByWithRelationInputSchema ]).optional(),
  cursor: LectorRankWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LectorRankScalarFieldEnumSchema,LectorRankScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LectorRankFindManyArgsSchema: z.ZodType<Prisma.LectorRankFindManyArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  where: LectorRankWhereInputSchema.optional(),
  orderBy: z.union([ LectorRankOrderByWithRelationInputSchema.array(),LectorRankOrderByWithRelationInputSchema ]).optional(),
  cursor: LectorRankWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LectorRankScalarFieldEnumSchema,LectorRankScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LectorRankAggregateArgsSchema: z.ZodType<Prisma.LectorRankAggregateArgs> = z.object({
  where: LectorRankWhereInputSchema.optional(),
  orderBy: z.union([ LectorRankOrderByWithRelationInputSchema.array(),LectorRankOrderByWithRelationInputSchema ]).optional(),
  cursor: LectorRankWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LectorRankGroupByArgsSchema: z.ZodType<Prisma.LectorRankGroupByArgs> = z.object({
  where: LectorRankWhereInputSchema.optional(),
  orderBy: z.union([ LectorRankOrderByWithAggregationInputSchema.array(),LectorRankOrderByWithAggregationInputSchema ]).optional(),
  by: LectorRankScalarFieldEnumSchema.array(),
  having: LectorRankScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LectorRankFindUniqueArgsSchema: z.ZodType<Prisma.LectorRankFindUniqueArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  where: LectorRankWhereUniqueInputSchema,
}).strict() ;

export const LectorRankFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LectorRankFindUniqueOrThrowArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  where: LectorRankWhereUniqueInputSchema,
}).strict() ;

export const StudentFindFirstArgsSchema: z.ZodType<Prisma.StudentFindFirstArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithRelationInputSchema.array(),StudentOrderByWithRelationInputSchema ]).optional(),
  cursor: StudentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StudentScalarFieldEnumSchema,StudentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const StudentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StudentFindFirstOrThrowArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithRelationInputSchema.array(),StudentOrderByWithRelationInputSchema ]).optional(),
  cursor: StudentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StudentScalarFieldEnumSchema,StudentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const StudentFindManyArgsSchema: z.ZodType<Prisma.StudentFindManyArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithRelationInputSchema.array(),StudentOrderByWithRelationInputSchema ]).optional(),
  cursor: StudentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StudentScalarFieldEnumSchema,StudentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const StudentAggregateArgsSchema: z.ZodType<Prisma.StudentAggregateArgs> = z.object({
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithRelationInputSchema.array(),StudentOrderByWithRelationInputSchema ]).optional(),
  cursor: StudentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const StudentGroupByArgsSchema: z.ZodType<Prisma.StudentGroupByArgs> = z.object({
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithAggregationInputSchema.array(),StudentOrderByWithAggregationInputSchema ]).optional(),
  by: StudentScalarFieldEnumSchema.array(),
  having: StudentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const StudentFindUniqueArgsSchema: z.ZodType<Prisma.StudentFindUniqueArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereUniqueInputSchema,
}).strict() ;

export const StudentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StudentFindUniqueOrThrowArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereUniqueInputSchema,
}).strict() ;

export const TutorFindFirstArgsSchema: z.ZodType<Prisma.TutorFindFirstArgs> = z.object({
  select: TutorSelectSchema.optional(),
  include: TutorIncludeSchema.optional(),
  where: TutorWhereInputSchema.optional(),
  orderBy: z.union([ TutorOrderByWithRelationInputSchema.array(),TutorOrderByWithRelationInputSchema ]).optional(),
  cursor: TutorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TutorScalarFieldEnumSchema,TutorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TutorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TutorFindFirstOrThrowArgs> = z.object({
  select: TutorSelectSchema.optional(),
  include: TutorIncludeSchema.optional(),
  where: TutorWhereInputSchema.optional(),
  orderBy: z.union([ TutorOrderByWithRelationInputSchema.array(),TutorOrderByWithRelationInputSchema ]).optional(),
  cursor: TutorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TutorScalarFieldEnumSchema,TutorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TutorFindManyArgsSchema: z.ZodType<Prisma.TutorFindManyArgs> = z.object({
  select: TutorSelectSchema.optional(),
  include: TutorIncludeSchema.optional(),
  where: TutorWhereInputSchema.optional(),
  orderBy: z.union([ TutorOrderByWithRelationInputSchema.array(),TutorOrderByWithRelationInputSchema ]).optional(),
  cursor: TutorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TutorScalarFieldEnumSchema,TutorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TutorAggregateArgsSchema: z.ZodType<Prisma.TutorAggregateArgs> = z.object({
  where: TutorWhereInputSchema.optional(),
  orderBy: z.union([ TutorOrderByWithRelationInputSchema.array(),TutorOrderByWithRelationInputSchema ]).optional(),
  cursor: TutorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TutorGroupByArgsSchema: z.ZodType<Prisma.TutorGroupByArgs> = z.object({
  where: TutorWhereInputSchema.optional(),
  orderBy: z.union([ TutorOrderByWithAggregationInputSchema.array(),TutorOrderByWithAggregationInputSchema ]).optional(),
  by: TutorScalarFieldEnumSchema.array(),
  having: TutorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TutorFindUniqueArgsSchema: z.ZodType<Prisma.TutorFindUniqueArgs> = z.object({
  select: TutorSelectSchema.optional(),
  include: TutorIncludeSchema.optional(),
  where: TutorWhereUniqueInputSchema,
}).strict() ;

export const TutorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TutorFindUniqueOrThrowArgs> = z.object({
  select: TutorSelectSchema.optional(),
  include: TutorIncludeSchema.optional(),
  where: TutorWhereUniqueInputSchema,
}).strict() ;

export const ScheduleFindFirstArgsSchema: z.ZodType<Prisma.ScheduleFindFirstArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  where: ScheduleWhereInputSchema.optional(),
  orderBy: z.union([ ScheduleOrderByWithRelationInputSchema.array(),ScheduleOrderByWithRelationInputSchema ]).optional(),
  cursor: ScheduleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ScheduleScalarFieldEnumSchema,ScheduleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ScheduleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ScheduleFindFirstOrThrowArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  where: ScheduleWhereInputSchema.optional(),
  orderBy: z.union([ ScheduleOrderByWithRelationInputSchema.array(),ScheduleOrderByWithRelationInputSchema ]).optional(),
  cursor: ScheduleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ScheduleScalarFieldEnumSchema,ScheduleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ScheduleFindManyArgsSchema: z.ZodType<Prisma.ScheduleFindManyArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  where: ScheduleWhereInputSchema.optional(),
  orderBy: z.union([ ScheduleOrderByWithRelationInputSchema.array(),ScheduleOrderByWithRelationInputSchema ]).optional(),
  cursor: ScheduleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ScheduleScalarFieldEnumSchema,ScheduleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ScheduleAggregateArgsSchema: z.ZodType<Prisma.ScheduleAggregateArgs> = z.object({
  where: ScheduleWhereInputSchema.optional(),
  orderBy: z.union([ ScheduleOrderByWithRelationInputSchema.array(),ScheduleOrderByWithRelationInputSchema ]).optional(),
  cursor: ScheduleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ScheduleGroupByArgsSchema: z.ZodType<Prisma.ScheduleGroupByArgs> = z.object({
  where: ScheduleWhereInputSchema.optional(),
  orderBy: z.union([ ScheduleOrderByWithAggregationInputSchema.array(),ScheduleOrderByWithAggregationInputSchema ]).optional(),
  by: ScheduleScalarFieldEnumSchema.array(),
  having: ScheduleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ScheduleFindUniqueArgsSchema: z.ZodType<Prisma.ScheduleFindUniqueArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  where: ScheduleWhereUniqueInputSchema,
}).strict() ;

export const ScheduleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ScheduleFindUniqueOrThrowArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  where: ScheduleWhereUniqueInputSchema,
}).strict() ;

export const AuditoriumFindFirstArgsSchema: z.ZodType<Prisma.AuditoriumFindFirstArgs> = z.object({
  select: AuditoriumSelectSchema.optional(),
  include: AuditoriumIncludeSchema.optional(),
  where: AuditoriumWhereInputSchema.optional(),
  orderBy: z.union([ AuditoriumOrderByWithRelationInputSchema.array(),AuditoriumOrderByWithRelationInputSchema ]).optional(),
  cursor: AuditoriumWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuditoriumScalarFieldEnumSchema,AuditoriumScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AuditoriumFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AuditoriumFindFirstOrThrowArgs> = z.object({
  select: AuditoriumSelectSchema.optional(),
  include: AuditoriumIncludeSchema.optional(),
  where: AuditoriumWhereInputSchema.optional(),
  orderBy: z.union([ AuditoriumOrderByWithRelationInputSchema.array(),AuditoriumOrderByWithRelationInputSchema ]).optional(),
  cursor: AuditoriumWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuditoriumScalarFieldEnumSchema,AuditoriumScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AuditoriumFindManyArgsSchema: z.ZodType<Prisma.AuditoriumFindManyArgs> = z.object({
  select: AuditoriumSelectSchema.optional(),
  include: AuditoriumIncludeSchema.optional(),
  where: AuditoriumWhereInputSchema.optional(),
  orderBy: z.union([ AuditoriumOrderByWithRelationInputSchema.array(),AuditoriumOrderByWithRelationInputSchema ]).optional(),
  cursor: AuditoriumWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuditoriumScalarFieldEnumSchema,AuditoriumScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AuditoriumAggregateArgsSchema: z.ZodType<Prisma.AuditoriumAggregateArgs> = z.object({
  where: AuditoriumWhereInputSchema.optional(),
  orderBy: z.union([ AuditoriumOrderByWithRelationInputSchema.array(),AuditoriumOrderByWithRelationInputSchema ]).optional(),
  cursor: AuditoriumWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AuditoriumGroupByArgsSchema: z.ZodType<Prisma.AuditoriumGroupByArgs> = z.object({
  where: AuditoriumWhereInputSchema.optional(),
  orderBy: z.union([ AuditoriumOrderByWithAggregationInputSchema.array(),AuditoriumOrderByWithAggregationInputSchema ]).optional(),
  by: AuditoriumScalarFieldEnumSchema.array(),
  having: AuditoriumScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AuditoriumFindUniqueArgsSchema: z.ZodType<Prisma.AuditoriumFindUniqueArgs> = z.object({
  select: AuditoriumSelectSchema.optional(),
  include: AuditoriumIncludeSchema.optional(),
  where: AuditoriumWhereUniqueInputSchema,
}).strict() ;

export const AuditoriumFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AuditoriumFindUniqueOrThrowArgs> = z.object({
  select: AuditoriumSelectSchema.optional(),
  include: AuditoriumIncludeSchema.optional(),
  where: AuditoriumWhereUniqueInputSchema,
}).strict() ;

export const BuildingFindFirstArgsSchema: z.ZodType<Prisma.BuildingFindFirstArgs> = z.object({
  select: BuildingSelectSchema.optional(),
  include: BuildingIncludeSchema.optional(),
  where: BuildingWhereInputSchema.optional(),
  orderBy: z.union([ BuildingOrderByWithRelationInputSchema.array(),BuildingOrderByWithRelationInputSchema ]).optional(),
  cursor: BuildingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BuildingScalarFieldEnumSchema,BuildingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BuildingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BuildingFindFirstOrThrowArgs> = z.object({
  select: BuildingSelectSchema.optional(),
  include: BuildingIncludeSchema.optional(),
  where: BuildingWhereInputSchema.optional(),
  orderBy: z.union([ BuildingOrderByWithRelationInputSchema.array(),BuildingOrderByWithRelationInputSchema ]).optional(),
  cursor: BuildingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BuildingScalarFieldEnumSchema,BuildingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BuildingFindManyArgsSchema: z.ZodType<Prisma.BuildingFindManyArgs> = z.object({
  select: BuildingSelectSchema.optional(),
  include: BuildingIncludeSchema.optional(),
  where: BuildingWhereInputSchema.optional(),
  orderBy: z.union([ BuildingOrderByWithRelationInputSchema.array(),BuildingOrderByWithRelationInputSchema ]).optional(),
  cursor: BuildingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BuildingScalarFieldEnumSchema,BuildingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BuildingAggregateArgsSchema: z.ZodType<Prisma.BuildingAggregateArgs> = z.object({
  where: BuildingWhereInputSchema.optional(),
  orderBy: z.union([ BuildingOrderByWithRelationInputSchema.array(),BuildingOrderByWithRelationInputSchema ]).optional(),
  cursor: BuildingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BuildingGroupByArgsSchema: z.ZodType<Prisma.BuildingGroupByArgs> = z.object({
  where: BuildingWhereInputSchema.optional(),
  orderBy: z.union([ BuildingOrderByWithAggregationInputSchema.array(),BuildingOrderByWithAggregationInputSchema ]).optional(),
  by: BuildingScalarFieldEnumSchema.array(),
  having: BuildingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BuildingFindUniqueArgsSchema: z.ZodType<Prisma.BuildingFindUniqueArgs> = z.object({
  select: BuildingSelectSchema.optional(),
  include: BuildingIncludeSchema.optional(),
  where: BuildingWhereUniqueInputSchema,
}).strict() ;

export const BuildingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BuildingFindUniqueOrThrowArgs> = z.object({
  select: BuildingSelectSchema.optional(),
  include: BuildingIncludeSchema.optional(),
  where: BuildingWhereUniqueInputSchema,
}).strict() ;

export const DisciplineFindFirstArgsSchema: z.ZodType<Prisma.DisciplineFindFirstArgs> = z.object({
  select: DisciplineSelectSchema.optional(),
  include: DisciplineIncludeSchema.optional(),
  where: DisciplineWhereInputSchema.optional(),
  orderBy: z.union([ DisciplineOrderByWithRelationInputSchema.array(),DisciplineOrderByWithRelationInputSchema ]).optional(),
  cursor: DisciplineWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DisciplineScalarFieldEnumSchema,DisciplineScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DisciplineFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DisciplineFindFirstOrThrowArgs> = z.object({
  select: DisciplineSelectSchema.optional(),
  include: DisciplineIncludeSchema.optional(),
  where: DisciplineWhereInputSchema.optional(),
  orderBy: z.union([ DisciplineOrderByWithRelationInputSchema.array(),DisciplineOrderByWithRelationInputSchema ]).optional(),
  cursor: DisciplineWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DisciplineScalarFieldEnumSchema,DisciplineScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DisciplineFindManyArgsSchema: z.ZodType<Prisma.DisciplineFindManyArgs> = z.object({
  select: DisciplineSelectSchema.optional(),
  include: DisciplineIncludeSchema.optional(),
  where: DisciplineWhereInputSchema.optional(),
  orderBy: z.union([ DisciplineOrderByWithRelationInputSchema.array(),DisciplineOrderByWithRelationInputSchema ]).optional(),
  cursor: DisciplineWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DisciplineScalarFieldEnumSchema,DisciplineScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DisciplineAggregateArgsSchema: z.ZodType<Prisma.DisciplineAggregateArgs> = z.object({
  where: DisciplineWhereInputSchema.optional(),
  orderBy: z.union([ DisciplineOrderByWithRelationInputSchema.array(),DisciplineOrderByWithRelationInputSchema ]).optional(),
  cursor: DisciplineWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const DisciplineGroupByArgsSchema: z.ZodType<Prisma.DisciplineGroupByArgs> = z.object({
  where: DisciplineWhereInputSchema.optional(),
  orderBy: z.union([ DisciplineOrderByWithAggregationInputSchema.array(),DisciplineOrderByWithAggregationInputSchema ]).optional(),
  by: DisciplineScalarFieldEnumSchema.array(),
  having: DisciplineScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const DisciplineFindUniqueArgsSchema: z.ZodType<Prisma.DisciplineFindUniqueArgs> = z.object({
  select: DisciplineSelectSchema.optional(),
  include: DisciplineIncludeSchema.optional(),
  where: DisciplineWhereUniqueInputSchema,
}).strict() ;

export const DisciplineFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DisciplineFindUniqueOrThrowArgs> = z.object({
  select: DisciplineSelectSchema.optional(),
  include: DisciplineIncludeSchema.optional(),
  where: DisciplineWhereUniqueInputSchema,
}).strict() ;

export const FaculityFindFirstArgsSchema: z.ZodType<Prisma.FaculityFindFirstArgs> = z.object({
  select: FaculitySelectSchema.optional(),
  include: FaculityIncludeSchema.optional(),
  where: FaculityWhereInputSchema.optional(),
  orderBy: z.union([ FaculityOrderByWithRelationInputSchema.array(),FaculityOrderByWithRelationInputSchema ]).optional(),
  cursor: FaculityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FaculityScalarFieldEnumSchema,FaculityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FaculityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.FaculityFindFirstOrThrowArgs> = z.object({
  select: FaculitySelectSchema.optional(),
  include: FaculityIncludeSchema.optional(),
  where: FaculityWhereInputSchema.optional(),
  orderBy: z.union([ FaculityOrderByWithRelationInputSchema.array(),FaculityOrderByWithRelationInputSchema ]).optional(),
  cursor: FaculityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FaculityScalarFieldEnumSchema,FaculityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FaculityFindManyArgsSchema: z.ZodType<Prisma.FaculityFindManyArgs> = z.object({
  select: FaculitySelectSchema.optional(),
  include: FaculityIncludeSchema.optional(),
  where: FaculityWhereInputSchema.optional(),
  orderBy: z.union([ FaculityOrderByWithRelationInputSchema.array(),FaculityOrderByWithRelationInputSchema ]).optional(),
  cursor: FaculityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ FaculityScalarFieldEnumSchema,FaculityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const FaculityAggregateArgsSchema: z.ZodType<Prisma.FaculityAggregateArgs> = z.object({
  where: FaculityWhereInputSchema.optional(),
  orderBy: z.union([ FaculityOrderByWithRelationInputSchema.array(),FaculityOrderByWithRelationInputSchema ]).optional(),
  cursor: FaculityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FaculityGroupByArgsSchema: z.ZodType<Prisma.FaculityGroupByArgs> = z.object({
  where: FaculityWhereInputSchema.optional(),
  orderBy: z.union([ FaculityOrderByWithAggregationInputSchema.array(),FaculityOrderByWithAggregationInputSchema ]).optional(),
  by: FaculityScalarFieldEnumSchema.array(),
  having: FaculityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const FaculityFindUniqueArgsSchema: z.ZodType<Prisma.FaculityFindUniqueArgs> = z.object({
  select: FaculitySelectSchema.optional(),
  include: FaculityIncludeSchema.optional(),
  where: FaculityWhereUniqueInputSchema,
}).strict() ;

export const FaculityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.FaculityFindUniqueOrThrowArgs> = z.object({
  select: FaculitySelectSchema.optional(),
  include: FaculityIncludeSchema.optional(),
  where: FaculityWhereUniqueInputSchema,
}).strict() ;

export const WeekFindFirstArgsSchema: z.ZodType<Prisma.WeekFindFirstArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  where: WeekWhereInputSchema.optional(),
  orderBy: z.union([ WeekOrderByWithRelationInputSchema.array(),WeekOrderByWithRelationInputSchema ]).optional(),
  cursor: WeekWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WeekScalarFieldEnumSchema,WeekScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WeekFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WeekFindFirstOrThrowArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  where: WeekWhereInputSchema.optional(),
  orderBy: z.union([ WeekOrderByWithRelationInputSchema.array(),WeekOrderByWithRelationInputSchema ]).optional(),
  cursor: WeekWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WeekScalarFieldEnumSchema,WeekScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WeekFindManyArgsSchema: z.ZodType<Prisma.WeekFindManyArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  where: WeekWhereInputSchema.optional(),
  orderBy: z.union([ WeekOrderByWithRelationInputSchema.array(),WeekOrderByWithRelationInputSchema ]).optional(),
  cursor: WeekWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WeekScalarFieldEnumSchema,WeekScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const WeekAggregateArgsSchema: z.ZodType<Prisma.WeekAggregateArgs> = z.object({
  where: WeekWhereInputSchema.optional(),
  orderBy: z.union([ WeekOrderByWithRelationInputSchema.array(),WeekOrderByWithRelationInputSchema ]).optional(),
  cursor: WeekWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const WeekGroupByArgsSchema: z.ZodType<Prisma.WeekGroupByArgs> = z.object({
  where: WeekWhereInputSchema.optional(),
  orderBy: z.union([ WeekOrderByWithAggregationInputSchema.array(),WeekOrderByWithAggregationInputSchema ]).optional(),
  by: WeekScalarFieldEnumSchema.array(),
  having: WeekScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const WeekFindUniqueArgsSchema: z.ZodType<Prisma.WeekFindUniqueArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  where: WeekWhereUniqueInputSchema,
}).strict() ;

export const WeekFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WeekFindUniqueOrThrowArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  where: WeekWhereUniqueInputSchema,
}).strict() ;

export const GroupFindFirstArgsSchema: z.ZodType<Prisma.GroupFindFirstArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GroupScalarFieldEnumSchema,GroupScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GroupFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GroupFindFirstOrThrowArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GroupScalarFieldEnumSchema,GroupScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GroupFindManyArgsSchema: z.ZodType<Prisma.GroupFindManyArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GroupScalarFieldEnumSchema,GroupScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GroupAggregateArgsSchema: z.ZodType<Prisma.GroupAggregateArgs> = z.object({
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithRelationInputSchema.array(),GroupOrderByWithRelationInputSchema ]).optional(),
  cursor: GroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GroupGroupByArgsSchema: z.ZodType<Prisma.GroupGroupByArgs> = z.object({
  where: GroupWhereInputSchema.optional(),
  orderBy: z.union([ GroupOrderByWithAggregationInputSchema.array(),GroupOrderByWithAggregationInputSchema ]).optional(),
  by: GroupScalarFieldEnumSchema.array(),
  having: GroupScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GroupFindUniqueArgsSchema: z.ZodType<Prisma.GroupFindUniqueArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
}).strict() ;

export const GroupFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GroupFindUniqueOrThrowArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
}).strict() ;

export const UniversityFindFirstArgsSchema: z.ZodType<Prisma.UniversityFindFirstArgs> = z.object({
  select: UniversitySelectSchema.optional(),
  include: UniversityIncludeSchema.optional(),
  where: UniversityWhereInputSchema.optional(),
  orderBy: z.union([ UniversityOrderByWithRelationInputSchema.array(),UniversityOrderByWithRelationInputSchema ]).optional(),
  cursor: UniversityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UniversityScalarFieldEnumSchema,UniversityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UniversityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UniversityFindFirstOrThrowArgs> = z.object({
  select: UniversitySelectSchema.optional(),
  include: UniversityIncludeSchema.optional(),
  where: UniversityWhereInputSchema.optional(),
  orderBy: z.union([ UniversityOrderByWithRelationInputSchema.array(),UniversityOrderByWithRelationInputSchema ]).optional(),
  cursor: UniversityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UniversityScalarFieldEnumSchema,UniversityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UniversityFindManyArgsSchema: z.ZodType<Prisma.UniversityFindManyArgs> = z.object({
  select: UniversitySelectSchema.optional(),
  include: UniversityIncludeSchema.optional(),
  where: UniversityWhereInputSchema.optional(),
  orderBy: z.union([ UniversityOrderByWithRelationInputSchema.array(),UniversityOrderByWithRelationInputSchema ]).optional(),
  cursor: UniversityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UniversityScalarFieldEnumSchema,UniversityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UniversityAggregateArgsSchema: z.ZodType<Prisma.UniversityAggregateArgs> = z.object({
  where: UniversityWhereInputSchema.optional(),
  orderBy: z.union([ UniversityOrderByWithRelationInputSchema.array(),UniversityOrderByWithRelationInputSchema ]).optional(),
  cursor: UniversityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UniversityGroupByArgsSchema: z.ZodType<Prisma.UniversityGroupByArgs> = z.object({
  where: UniversityWhereInputSchema.optional(),
  orderBy: z.union([ UniversityOrderByWithAggregationInputSchema.array(),UniversityOrderByWithAggregationInputSchema ]).optional(),
  by: UniversityScalarFieldEnumSchema.array(),
  having: UniversityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UniversityFindUniqueArgsSchema: z.ZodType<Prisma.UniversityFindUniqueArgs> = z.object({
  select: UniversitySelectSchema.optional(),
  include: UniversityIncludeSchema.optional(),
  where: UniversityWhereUniqueInputSchema,
}).strict() ;

export const UniversityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UniversityFindUniqueOrThrowArgs> = z.object({
  select: UniversitySelectSchema.optional(),
  include: UniversityIncludeSchema.optional(),
  where: UniversityWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const AmpluaCreateArgsSchema: z.ZodType<Prisma.AmpluaCreateArgs> = z.object({
  select: AmpluaSelectSchema.optional(),
  include: AmpluaIncludeSchema.optional(),
  data: z.union([ AmpluaCreateInputSchema,AmpluaUncheckedCreateInputSchema ]),
}).strict() ;

export const AmpluaUpsertArgsSchema: z.ZodType<Prisma.AmpluaUpsertArgs> = z.object({
  select: AmpluaSelectSchema.optional(),
  include: AmpluaIncludeSchema.optional(),
  where: AmpluaWhereUniqueInputSchema,
  create: z.union([ AmpluaCreateInputSchema,AmpluaUncheckedCreateInputSchema ]),
  update: z.union([ AmpluaUpdateInputSchema,AmpluaUncheckedUpdateInputSchema ]),
}).strict() ;

export const AmpluaCreateManyArgsSchema: z.ZodType<Prisma.AmpluaCreateManyArgs> = z.object({
  data: z.union([ AmpluaCreateManyInputSchema,AmpluaCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AmpluaCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AmpluaCreateManyAndReturnArgs> = z.object({
  data: z.union([ AmpluaCreateManyInputSchema,AmpluaCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AmpluaDeleteArgsSchema: z.ZodType<Prisma.AmpluaDeleteArgs> = z.object({
  select: AmpluaSelectSchema.optional(),
  include: AmpluaIncludeSchema.optional(),
  where: AmpluaWhereUniqueInputSchema,
}).strict() ;

export const AmpluaUpdateArgsSchema: z.ZodType<Prisma.AmpluaUpdateArgs> = z.object({
  select: AmpluaSelectSchema.optional(),
  include: AmpluaIncludeSchema.optional(),
  data: z.union([ AmpluaUpdateInputSchema,AmpluaUncheckedUpdateInputSchema ]),
  where: AmpluaWhereUniqueInputSchema,
}).strict() ;

export const AmpluaUpdateManyArgsSchema: z.ZodType<Prisma.AmpluaUpdateManyArgs> = z.object({
  data: z.union([ AmpluaUpdateManyMutationInputSchema,AmpluaUncheckedUpdateManyInputSchema ]),
  where: AmpluaWhereInputSchema.optional(),
}).strict() ;

export const AmpluaDeleteManyArgsSchema: z.ZodType<Prisma.AmpluaDeleteManyArgs> = z.object({
  where: AmpluaWhereInputSchema.optional(),
}).strict() ;

export const CuratorCreateArgsSchema: z.ZodType<Prisma.CuratorCreateArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  data: z.union([ CuratorCreateInputSchema,CuratorUncheckedCreateInputSchema ]),
}).strict() ;

export const CuratorUpsertArgsSchema: z.ZodType<Prisma.CuratorUpsertArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  where: CuratorWhereUniqueInputSchema,
  create: z.union([ CuratorCreateInputSchema,CuratorUncheckedCreateInputSchema ]),
  update: z.union([ CuratorUpdateInputSchema,CuratorUncheckedUpdateInputSchema ]),
}).strict() ;

export const CuratorCreateManyArgsSchema: z.ZodType<Prisma.CuratorCreateManyArgs> = z.object({
  data: z.union([ CuratorCreateManyInputSchema,CuratorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CuratorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CuratorCreateManyAndReturnArgs> = z.object({
  data: z.union([ CuratorCreateManyInputSchema,CuratorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CuratorDeleteArgsSchema: z.ZodType<Prisma.CuratorDeleteArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  where: CuratorWhereUniqueInputSchema,
}).strict() ;

export const CuratorUpdateArgsSchema: z.ZodType<Prisma.CuratorUpdateArgs> = z.object({
  select: CuratorSelectSchema.optional(),
  include: CuratorIncludeSchema.optional(),
  data: z.union([ CuratorUpdateInputSchema,CuratorUncheckedUpdateInputSchema ]),
  where: CuratorWhereUniqueInputSchema,
}).strict() ;

export const CuratorUpdateManyArgsSchema: z.ZodType<Prisma.CuratorUpdateManyArgs> = z.object({
  data: z.union([ CuratorUpdateManyMutationInputSchema,CuratorUncheckedUpdateManyInputSchema ]),
  where: CuratorWhereInputSchema.optional(),
}).strict() ;

export const CuratorDeleteManyArgsSchema: z.ZodType<Prisma.CuratorDeleteManyArgs> = z.object({
  where: CuratorWhereInputSchema.optional(),
}).strict() ;

export const GroupHeadCreateArgsSchema: z.ZodType<Prisma.GroupHeadCreateArgs> = z.object({
  select: GroupHeadSelectSchema.optional(),
  include: GroupHeadIncludeSchema.optional(),
  data: z.union([ GroupHeadCreateInputSchema,GroupHeadUncheckedCreateInputSchema ]),
}).strict() ;

export const GroupHeadUpsertArgsSchema: z.ZodType<Prisma.GroupHeadUpsertArgs> = z.object({
  select: GroupHeadSelectSchema.optional(),
  include: GroupHeadIncludeSchema.optional(),
  where: GroupHeadWhereUniqueInputSchema,
  create: z.union([ GroupHeadCreateInputSchema,GroupHeadUncheckedCreateInputSchema ]),
  update: z.union([ GroupHeadUpdateInputSchema,GroupHeadUncheckedUpdateInputSchema ]),
}).strict() ;

export const GroupHeadCreateManyArgsSchema: z.ZodType<Prisma.GroupHeadCreateManyArgs> = z.object({
  data: z.union([ GroupHeadCreateManyInputSchema,GroupHeadCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GroupHeadCreateManyAndReturnArgsSchema: z.ZodType<Prisma.GroupHeadCreateManyAndReturnArgs> = z.object({
  data: z.union([ GroupHeadCreateManyInputSchema,GroupHeadCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GroupHeadDeleteArgsSchema: z.ZodType<Prisma.GroupHeadDeleteArgs> = z.object({
  select: GroupHeadSelectSchema.optional(),
  include: GroupHeadIncludeSchema.optional(),
  where: GroupHeadWhereUniqueInputSchema,
}).strict() ;

export const GroupHeadUpdateArgsSchema: z.ZodType<Prisma.GroupHeadUpdateArgs> = z.object({
  select: GroupHeadSelectSchema.optional(),
  include: GroupHeadIncludeSchema.optional(),
  data: z.union([ GroupHeadUpdateInputSchema,GroupHeadUncheckedUpdateInputSchema ]),
  where: GroupHeadWhereUniqueInputSchema,
}).strict() ;

export const GroupHeadUpdateManyArgsSchema: z.ZodType<Prisma.GroupHeadUpdateManyArgs> = z.object({
  data: z.union([ GroupHeadUpdateManyMutationInputSchema,GroupHeadUncheckedUpdateManyInputSchema ]),
  where: GroupHeadWhereInputSchema.optional(),
}).strict() ;

export const GroupHeadDeleteManyArgsSchema: z.ZodType<Prisma.GroupHeadDeleteManyArgs> = z.object({
  where: GroupHeadWhereInputSchema.optional(),
}).strict() ;

export const LectorCreateArgsSchema: z.ZodType<Prisma.LectorCreateArgs> = z.object({
  select: LectorSelectSchema.optional(),
  include: LectorIncludeSchema.optional(),
  data: z.union([ LectorCreateInputSchema,LectorUncheckedCreateInputSchema ]),
}).strict() ;

export const LectorUpsertArgsSchema: z.ZodType<Prisma.LectorUpsertArgs> = z.object({
  select: LectorSelectSchema.optional(),
  include: LectorIncludeSchema.optional(),
  where: LectorWhereUniqueInputSchema,
  create: z.union([ LectorCreateInputSchema,LectorUncheckedCreateInputSchema ]),
  update: z.union([ LectorUpdateInputSchema,LectorUncheckedUpdateInputSchema ]),
}).strict() ;

export const LectorCreateManyArgsSchema: z.ZodType<Prisma.LectorCreateManyArgs> = z.object({
  data: z.union([ LectorCreateManyInputSchema,LectorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LectorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LectorCreateManyAndReturnArgs> = z.object({
  data: z.union([ LectorCreateManyInputSchema,LectorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LectorDeleteArgsSchema: z.ZodType<Prisma.LectorDeleteArgs> = z.object({
  select: LectorSelectSchema.optional(),
  include: LectorIncludeSchema.optional(),
  where: LectorWhereUniqueInputSchema,
}).strict() ;

export const LectorUpdateArgsSchema: z.ZodType<Prisma.LectorUpdateArgs> = z.object({
  select: LectorSelectSchema.optional(),
  include: LectorIncludeSchema.optional(),
  data: z.union([ LectorUpdateInputSchema,LectorUncheckedUpdateInputSchema ]),
  where: LectorWhereUniqueInputSchema,
}).strict() ;

export const LectorUpdateManyArgsSchema: z.ZodType<Prisma.LectorUpdateManyArgs> = z.object({
  data: z.union([ LectorUpdateManyMutationInputSchema,LectorUncheckedUpdateManyInputSchema ]),
  where: LectorWhereInputSchema.optional(),
}).strict() ;

export const LectorDeleteManyArgsSchema: z.ZodType<Prisma.LectorDeleteManyArgs> = z.object({
  where: LectorWhereInputSchema.optional(),
}).strict() ;

export const LectorRankCreateArgsSchema: z.ZodType<Prisma.LectorRankCreateArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  data: z.union([ LectorRankCreateInputSchema,LectorRankUncheckedCreateInputSchema ]),
}).strict() ;

export const LectorRankUpsertArgsSchema: z.ZodType<Prisma.LectorRankUpsertArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  where: LectorRankWhereUniqueInputSchema,
  create: z.union([ LectorRankCreateInputSchema,LectorRankUncheckedCreateInputSchema ]),
  update: z.union([ LectorRankUpdateInputSchema,LectorRankUncheckedUpdateInputSchema ]),
}).strict() ;

export const LectorRankCreateManyArgsSchema: z.ZodType<Prisma.LectorRankCreateManyArgs> = z.object({
  data: z.union([ LectorRankCreateManyInputSchema,LectorRankCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LectorRankCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LectorRankCreateManyAndReturnArgs> = z.object({
  data: z.union([ LectorRankCreateManyInputSchema,LectorRankCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LectorRankDeleteArgsSchema: z.ZodType<Prisma.LectorRankDeleteArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  where: LectorRankWhereUniqueInputSchema,
}).strict() ;

export const LectorRankUpdateArgsSchema: z.ZodType<Prisma.LectorRankUpdateArgs> = z.object({
  select: LectorRankSelectSchema.optional(),
  include: LectorRankIncludeSchema.optional(),
  data: z.union([ LectorRankUpdateInputSchema,LectorRankUncheckedUpdateInputSchema ]),
  where: LectorRankWhereUniqueInputSchema,
}).strict() ;

export const LectorRankUpdateManyArgsSchema: z.ZodType<Prisma.LectorRankUpdateManyArgs> = z.object({
  data: z.union([ LectorRankUpdateManyMutationInputSchema,LectorRankUncheckedUpdateManyInputSchema ]),
  where: LectorRankWhereInputSchema.optional(),
}).strict() ;

export const LectorRankDeleteManyArgsSchema: z.ZodType<Prisma.LectorRankDeleteManyArgs> = z.object({
  where: LectorRankWhereInputSchema.optional(),
}).strict() ;

export const StudentCreateArgsSchema: z.ZodType<Prisma.StudentCreateArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  data: z.union([ StudentCreateInputSchema,StudentUncheckedCreateInputSchema ]),
}).strict() ;

export const StudentUpsertArgsSchema: z.ZodType<Prisma.StudentUpsertArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereUniqueInputSchema,
  create: z.union([ StudentCreateInputSchema,StudentUncheckedCreateInputSchema ]),
  update: z.union([ StudentUpdateInputSchema,StudentUncheckedUpdateInputSchema ]),
}).strict() ;

export const StudentCreateManyArgsSchema: z.ZodType<Prisma.StudentCreateManyArgs> = z.object({
  data: z.union([ StudentCreateManyInputSchema,StudentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const StudentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.StudentCreateManyAndReturnArgs> = z.object({
  data: z.union([ StudentCreateManyInputSchema,StudentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const StudentDeleteArgsSchema: z.ZodType<Prisma.StudentDeleteArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereUniqueInputSchema,
}).strict() ;

export const StudentUpdateArgsSchema: z.ZodType<Prisma.StudentUpdateArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  data: z.union([ StudentUpdateInputSchema,StudentUncheckedUpdateInputSchema ]),
  where: StudentWhereUniqueInputSchema,
}).strict() ;

export const StudentUpdateManyArgsSchema: z.ZodType<Prisma.StudentUpdateManyArgs> = z.object({
  data: z.union([ StudentUpdateManyMutationInputSchema,StudentUncheckedUpdateManyInputSchema ]),
  where: StudentWhereInputSchema.optional(),
}).strict() ;

export const StudentDeleteManyArgsSchema: z.ZodType<Prisma.StudentDeleteManyArgs> = z.object({
  where: StudentWhereInputSchema.optional(),
}).strict() ;

export const TutorCreateArgsSchema: z.ZodType<Prisma.TutorCreateArgs> = z.object({
  select: TutorSelectSchema.optional(),
  include: TutorIncludeSchema.optional(),
  data: z.union([ TutorCreateInputSchema,TutorUncheckedCreateInputSchema ]),
}).strict() ;

export const TutorUpsertArgsSchema: z.ZodType<Prisma.TutorUpsertArgs> = z.object({
  select: TutorSelectSchema.optional(),
  include: TutorIncludeSchema.optional(),
  where: TutorWhereUniqueInputSchema,
  create: z.union([ TutorCreateInputSchema,TutorUncheckedCreateInputSchema ]),
  update: z.union([ TutorUpdateInputSchema,TutorUncheckedUpdateInputSchema ]),
}).strict() ;

export const TutorCreateManyArgsSchema: z.ZodType<Prisma.TutorCreateManyArgs> = z.object({
  data: z.union([ TutorCreateManyInputSchema,TutorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TutorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TutorCreateManyAndReturnArgs> = z.object({
  data: z.union([ TutorCreateManyInputSchema,TutorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TutorDeleteArgsSchema: z.ZodType<Prisma.TutorDeleteArgs> = z.object({
  select: TutorSelectSchema.optional(),
  include: TutorIncludeSchema.optional(),
  where: TutorWhereUniqueInputSchema,
}).strict() ;

export const TutorUpdateArgsSchema: z.ZodType<Prisma.TutorUpdateArgs> = z.object({
  select: TutorSelectSchema.optional(),
  include: TutorIncludeSchema.optional(),
  data: z.union([ TutorUpdateInputSchema,TutorUncheckedUpdateInputSchema ]),
  where: TutorWhereUniqueInputSchema,
}).strict() ;

export const TutorUpdateManyArgsSchema: z.ZodType<Prisma.TutorUpdateManyArgs> = z.object({
  data: z.union([ TutorUpdateManyMutationInputSchema,TutorUncheckedUpdateManyInputSchema ]),
  where: TutorWhereInputSchema.optional(),
}).strict() ;

export const TutorDeleteManyArgsSchema: z.ZodType<Prisma.TutorDeleteManyArgs> = z.object({
  where: TutorWhereInputSchema.optional(),
}).strict() ;

export const ScheduleCreateArgsSchema: z.ZodType<Prisma.ScheduleCreateArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  data: z.union([ ScheduleCreateInputSchema,ScheduleUncheckedCreateInputSchema ]),
}).strict() ;

export const ScheduleUpsertArgsSchema: z.ZodType<Prisma.ScheduleUpsertArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  where: ScheduleWhereUniqueInputSchema,
  create: z.union([ ScheduleCreateInputSchema,ScheduleUncheckedCreateInputSchema ]),
  update: z.union([ ScheduleUpdateInputSchema,ScheduleUncheckedUpdateInputSchema ]),
}).strict() ;

export const ScheduleCreateManyArgsSchema: z.ZodType<Prisma.ScheduleCreateManyArgs> = z.object({
  data: z.union([ ScheduleCreateManyInputSchema,ScheduleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ScheduleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ScheduleCreateManyAndReturnArgs> = z.object({
  data: z.union([ ScheduleCreateManyInputSchema,ScheduleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ScheduleDeleteArgsSchema: z.ZodType<Prisma.ScheduleDeleteArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  where: ScheduleWhereUniqueInputSchema,
}).strict() ;

export const ScheduleUpdateArgsSchema: z.ZodType<Prisma.ScheduleUpdateArgs> = z.object({
  select: ScheduleSelectSchema.optional(),
  include: ScheduleIncludeSchema.optional(),
  data: z.union([ ScheduleUpdateInputSchema,ScheduleUncheckedUpdateInputSchema ]),
  where: ScheduleWhereUniqueInputSchema,
}).strict() ;

export const ScheduleUpdateManyArgsSchema: z.ZodType<Prisma.ScheduleUpdateManyArgs> = z.object({
  data: z.union([ ScheduleUpdateManyMutationInputSchema,ScheduleUncheckedUpdateManyInputSchema ]),
  where: ScheduleWhereInputSchema.optional(),
}).strict() ;

export const ScheduleDeleteManyArgsSchema: z.ZodType<Prisma.ScheduleDeleteManyArgs> = z.object({
  where: ScheduleWhereInputSchema.optional(),
}).strict() ;

export const AuditoriumCreateArgsSchema: z.ZodType<Prisma.AuditoriumCreateArgs> = z.object({
  select: AuditoriumSelectSchema.optional(),
  include: AuditoriumIncludeSchema.optional(),
  data: z.union([ AuditoriumCreateInputSchema,AuditoriumUncheckedCreateInputSchema ]),
}).strict() ;

export const AuditoriumUpsertArgsSchema: z.ZodType<Prisma.AuditoriumUpsertArgs> = z.object({
  select: AuditoriumSelectSchema.optional(),
  include: AuditoriumIncludeSchema.optional(),
  where: AuditoriumWhereUniqueInputSchema,
  create: z.union([ AuditoriumCreateInputSchema,AuditoriumUncheckedCreateInputSchema ]),
  update: z.union([ AuditoriumUpdateInputSchema,AuditoriumUncheckedUpdateInputSchema ]),
}).strict() ;

export const AuditoriumCreateManyArgsSchema: z.ZodType<Prisma.AuditoriumCreateManyArgs> = z.object({
  data: z.union([ AuditoriumCreateManyInputSchema,AuditoriumCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AuditoriumCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AuditoriumCreateManyAndReturnArgs> = z.object({
  data: z.union([ AuditoriumCreateManyInputSchema,AuditoriumCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AuditoriumDeleteArgsSchema: z.ZodType<Prisma.AuditoriumDeleteArgs> = z.object({
  select: AuditoriumSelectSchema.optional(),
  include: AuditoriumIncludeSchema.optional(),
  where: AuditoriumWhereUniqueInputSchema,
}).strict() ;

export const AuditoriumUpdateArgsSchema: z.ZodType<Prisma.AuditoriumUpdateArgs> = z.object({
  select: AuditoriumSelectSchema.optional(),
  include: AuditoriumIncludeSchema.optional(),
  data: z.union([ AuditoriumUpdateInputSchema,AuditoriumUncheckedUpdateInputSchema ]),
  where: AuditoriumWhereUniqueInputSchema,
}).strict() ;

export const AuditoriumUpdateManyArgsSchema: z.ZodType<Prisma.AuditoriumUpdateManyArgs> = z.object({
  data: z.union([ AuditoriumUpdateManyMutationInputSchema,AuditoriumUncheckedUpdateManyInputSchema ]),
  where: AuditoriumWhereInputSchema.optional(),
}).strict() ;

export const AuditoriumDeleteManyArgsSchema: z.ZodType<Prisma.AuditoriumDeleteManyArgs> = z.object({
  where: AuditoriumWhereInputSchema.optional(),
}).strict() ;

export const BuildingCreateArgsSchema: z.ZodType<Prisma.BuildingCreateArgs> = z.object({
  select: BuildingSelectSchema.optional(),
  include: BuildingIncludeSchema.optional(),
  data: z.union([ BuildingCreateInputSchema,BuildingUncheckedCreateInputSchema ]),
}).strict() ;

export const BuildingUpsertArgsSchema: z.ZodType<Prisma.BuildingUpsertArgs> = z.object({
  select: BuildingSelectSchema.optional(),
  include: BuildingIncludeSchema.optional(),
  where: BuildingWhereUniqueInputSchema,
  create: z.union([ BuildingCreateInputSchema,BuildingUncheckedCreateInputSchema ]),
  update: z.union([ BuildingUpdateInputSchema,BuildingUncheckedUpdateInputSchema ]),
}).strict() ;

export const BuildingCreateManyArgsSchema: z.ZodType<Prisma.BuildingCreateManyArgs> = z.object({
  data: z.union([ BuildingCreateManyInputSchema,BuildingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BuildingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BuildingCreateManyAndReturnArgs> = z.object({
  data: z.union([ BuildingCreateManyInputSchema,BuildingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BuildingDeleteArgsSchema: z.ZodType<Prisma.BuildingDeleteArgs> = z.object({
  select: BuildingSelectSchema.optional(),
  include: BuildingIncludeSchema.optional(),
  where: BuildingWhereUniqueInputSchema,
}).strict() ;

export const BuildingUpdateArgsSchema: z.ZodType<Prisma.BuildingUpdateArgs> = z.object({
  select: BuildingSelectSchema.optional(),
  include: BuildingIncludeSchema.optional(),
  data: z.union([ BuildingUpdateInputSchema,BuildingUncheckedUpdateInputSchema ]),
  where: BuildingWhereUniqueInputSchema,
}).strict() ;

export const BuildingUpdateManyArgsSchema: z.ZodType<Prisma.BuildingUpdateManyArgs> = z.object({
  data: z.union([ BuildingUpdateManyMutationInputSchema,BuildingUncheckedUpdateManyInputSchema ]),
  where: BuildingWhereInputSchema.optional(),
}).strict() ;

export const BuildingDeleteManyArgsSchema: z.ZodType<Prisma.BuildingDeleteManyArgs> = z.object({
  where: BuildingWhereInputSchema.optional(),
}).strict() ;

export const DisciplineCreateArgsSchema: z.ZodType<Prisma.DisciplineCreateArgs> = z.object({
  select: DisciplineSelectSchema.optional(),
  include: DisciplineIncludeSchema.optional(),
  data: z.union([ DisciplineCreateInputSchema,DisciplineUncheckedCreateInputSchema ]),
}).strict() ;

export const DisciplineUpsertArgsSchema: z.ZodType<Prisma.DisciplineUpsertArgs> = z.object({
  select: DisciplineSelectSchema.optional(),
  include: DisciplineIncludeSchema.optional(),
  where: DisciplineWhereUniqueInputSchema,
  create: z.union([ DisciplineCreateInputSchema,DisciplineUncheckedCreateInputSchema ]),
  update: z.union([ DisciplineUpdateInputSchema,DisciplineUncheckedUpdateInputSchema ]),
}).strict() ;

export const DisciplineCreateManyArgsSchema: z.ZodType<Prisma.DisciplineCreateManyArgs> = z.object({
  data: z.union([ DisciplineCreateManyInputSchema,DisciplineCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const DisciplineCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DisciplineCreateManyAndReturnArgs> = z.object({
  data: z.union([ DisciplineCreateManyInputSchema,DisciplineCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const DisciplineDeleteArgsSchema: z.ZodType<Prisma.DisciplineDeleteArgs> = z.object({
  select: DisciplineSelectSchema.optional(),
  include: DisciplineIncludeSchema.optional(),
  where: DisciplineWhereUniqueInputSchema,
}).strict() ;

export const DisciplineUpdateArgsSchema: z.ZodType<Prisma.DisciplineUpdateArgs> = z.object({
  select: DisciplineSelectSchema.optional(),
  include: DisciplineIncludeSchema.optional(),
  data: z.union([ DisciplineUpdateInputSchema,DisciplineUncheckedUpdateInputSchema ]),
  where: DisciplineWhereUniqueInputSchema,
}).strict() ;

export const DisciplineUpdateManyArgsSchema: z.ZodType<Prisma.DisciplineUpdateManyArgs> = z.object({
  data: z.union([ DisciplineUpdateManyMutationInputSchema,DisciplineUncheckedUpdateManyInputSchema ]),
  where: DisciplineWhereInputSchema.optional(),
}).strict() ;

export const DisciplineDeleteManyArgsSchema: z.ZodType<Prisma.DisciplineDeleteManyArgs> = z.object({
  where: DisciplineWhereInputSchema.optional(),
}).strict() ;

export const FaculityCreateArgsSchema: z.ZodType<Prisma.FaculityCreateArgs> = z.object({
  select: FaculitySelectSchema.optional(),
  include: FaculityIncludeSchema.optional(),
  data: z.union([ FaculityCreateInputSchema,FaculityUncheckedCreateInputSchema ]),
}).strict() ;

export const FaculityUpsertArgsSchema: z.ZodType<Prisma.FaculityUpsertArgs> = z.object({
  select: FaculitySelectSchema.optional(),
  include: FaculityIncludeSchema.optional(),
  where: FaculityWhereUniqueInputSchema,
  create: z.union([ FaculityCreateInputSchema,FaculityUncheckedCreateInputSchema ]),
  update: z.union([ FaculityUpdateInputSchema,FaculityUncheckedUpdateInputSchema ]),
}).strict() ;

export const FaculityCreateManyArgsSchema: z.ZodType<Prisma.FaculityCreateManyArgs> = z.object({
  data: z.union([ FaculityCreateManyInputSchema,FaculityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const FaculityCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FaculityCreateManyAndReturnArgs> = z.object({
  data: z.union([ FaculityCreateManyInputSchema,FaculityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const FaculityDeleteArgsSchema: z.ZodType<Prisma.FaculityDeleteArgs> = z.object({
  select: FaculitySelectSchema.optional(),
  include: FaculityIncludeSchema.optional(),
  where: FaculityWhereUniqueInputSchema,
}).strict() ;

export const FaculityUpdateArgsSchema: z.ZodType<Prisma.FaculityUpdateArgs> = z.object({
  select: FaculitySelectSchema.optional(),
  include: FaculityIncludeSchema.optional(),
  data: z.union([ FaculityUpdateInputSchema,FaculityUncheckedUpdateInputSchema ]),
  where: FaculityWhereUniqueInputSchema,
}).strict() ;

export const FaculityUpdateManyArgsSchema: z.ZodType<Prisma.FaculityUpdateManyArgs> = z.object({
  data: z.union([ FaculityUpdateManyMutationInputSchema,FaculityUncheckedUpdateManyInputSchema ]),
  where: FaculityWhereInputSchema.optional(),
}).strict() ;

export const FaculityDeleteManyArgsSchema: z.ZodType<Prisma.FaculityDeleteManyArgs> = z.object({
  where: FaculityWhereInputSchema.optional(),
}).strict() ;

export const WeekCreateArgsSchema: z.ZodType<Prisma.WeekCreateArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  data: z.union([ WeekCreateInputSchema,WeekUncheckedCreateInputSchema ]),
}).strict() ;

export const WeekUpsertArgsSchema: z.ZodType<Prisma.WeekUpsertArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  where: WeekWhereUniqueInputSchema,
  create: z.union([ WeekCreateInputSchema,WeekUncheckedCreateInputSchema ]),
  update: z.union([ WeekUpdateInputSchema,WeekUncheckedUpdateInputSchema ]),
}).strict() ;

export const WeekCreateManyArgsSchema: z.ZodType<Prisma.WeekCreateManyArgs> = z.object({
  data: z.union([ WeekCreateManyInputSchema,WeekCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const WeekCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WeekCreateManyAndReturnArgs> = z.object({
  data: z.union([ WeekCreateManyInputSchema,WeekCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const WeekDeleteArgsSchema: z.ZodType<Prisma.WeekDeleteArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  where: WeekWhereUniqueInputSchema,
}).strict() ;

export const WeekUpdateArgsSchema: z.ZodType<Prisma.WeekUpdateArgs> = z.object({
  select: WeekSelectSchema.optional(),
  include: WeekIncludeSchema.optional(),
  data: z.union([ WeekUpdateInputSchema,WeekUncheckedUpdateInputSchema ]),
  where: WeekWhereUniqueInputSchema,
}).strict() ;

export const WeekUpdateManyArgsSchema: z.ZodType<Prisma.WeekUpdateManyArgs> = z.object({
  data: z.union([ WeekUpdateManyMutationInputSchema,WeekUncheckedUpdateManyInputSchema ]),
  where: WeekWhereInputSchema.optional(),
}).strict() ;

export const WeekDeleteManyArgsSchema: z.ZodType<Prisma.WeekDeleteManyArgs> = z.object({
  where: WeekWhereInputSchema.optional(),
}).strict() ;

export const GroupCreateArgsSchema: z.ZodType<Prisma.GroupCreateArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  data: z.union([ GroupCreateInputSchema,GroupUncheckedCreateInputSchema ]),
}).strict() ;

export const GroupUpsertArgsSchema: z.ZodType<Prisma.GroupUpsertArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
  create: z.union([ GroupCreateInputSchema,GroupUncheckedCreateInputSchema ]),
  update: z.union([ GroupUpdateInputSchema,GroupUncheckedUpdateInputSchema ]),
}).strict() ;

export const GroupCreateManyArgsSchema: z.ZodType<Prisma.GroupCreateManyArgs> = z.object({
  data: z.union([ GroupCreateManyInputSchema,GroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GroupCreateManyAndReturnArgsSchema: z.ZodType<Prisma.GroupCreateManyAndReturnArgs> = z.object({
  data: z.union([ GroupCreateManyInputSchema,GroupCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GroupDeleteArgsSchema: z.ZodType<Prisma.GroupDeleteArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  where: GroupWhereUniqueInputSchema,
}).strict() ;

export const GroupUpdateArgsSchema: z.ZodType<Prisma.GroupUpdateArgs> = z.object({
  select: GroupSelectSchema.optional(),
  include: GroupIncludeSchema.optional(),
  data: z.union([ GroupUpdateInputSchema,GroupUncheckedUpdateInputSchema ]),
  where: GroupWhereUniqueInputSchema,
}).strict() ;

export const GroupUpdateManyArgsSchema: z.ZodType<Prisma.GroupUpdateManyArgs> = z.object({
  data: z.union([ GroupUpdateManyMutationInputSchema,GroupUncheckedUpdateManyInputSchema ]),
  where: GroupWhereInputSchema.optional(),
}).strict() ;

export const GroupDeleteManyArgsSchema: z.ZodType<Prisma.GroupDeleteManyArgs> = z.object({
  where: GroupWhereInputSchema.optional(),
}).strict() ;

export const UniversityCreateArgsSchema: z.ZodType<Prisma.UniversityCreateArgs> = z.object({
  select: UniversitySelectSchema.optional(),
  include: UniversityIncludeSchema.optional(),
  data: z.union([ UniversityCreateInputSchema,UniversityUncheckedCreateInputSchema ]),
}).strict() ;

export const UniversityUpsertArgsSchema: z.ZodType<Prisma.UniversityUpsertArgs> = z.object({
  select: UniversitySelectSchema.optional(),
  include: UniversityIncludeSchema.optional(),
  where: UniversityWhereUniqueInputSchema,
  create: z.union([ UniversityCreateInputSchema,UniversityUncheckedCreateInputSchema ]),
  update: z.union([ UniversityUpdateInputSchema,UniversityUncheckedUpdateInputSchema ]),
}).strict() ;

export const UniversityCreateManyArgsSchema: z.ZodType<Prisma.UniversityCreateManyArgs> = z.object({
  data: z.union([ UniversityCreateManyInputSchema,UniversityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UniversityCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UniversityCreateManyAndReturnArgs> = z.object({
  data: z.union([ UniversityCreateManyInputSchema,UniversityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UniversityDeleteArgsSchema: z.ZodType<Prisma.UniversityDeleteArgs> = z.object({
  select: UniversitySelectSchema.optional(),
  include: UniversityIncludeSchema.optional(),
  where: UniversityWhereUniqueInputSchema,
}).strict() ;

export const UniversityUpdateArgsSchema: z.ZodType<Prisma.UniversityUpdateArgs> = z.object({
  select: UniversitySelectSchema.optional(),
  include: UniversityIncludeSchema.optional(),
  data: z.union([ UniversityUpdateInputSchema,UniversityUncheckedUpdateInputSchema ]),
  where: UniversityWhereUniqueInputSchema,
}).strict() ;

export const UniversityUpdateManyArgsSchema: z.ZodType<Prisma.UniversityUpdateManyArgs> = z.object({
  data: z.union([ UniversityUpdateManyMutationInputSchema,UniversityUncheckedUpdateManyInputSchema ]),
  where: UniversityWhereInputSchema.optional(),
}).strict() ;

export const UniversityDeleteManyArgsSchema: z.ZodType<Prisma.UniversityDeleteManyArgs> = z.object({
  where: UniversityWhereInputSchema.optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;