# Thodle Bot
> Generated by [`prisma-markdown`](https://github.com/samchon/prisma-markdown)

- [default](#default)

## default
```mermaid
erDiagram
"Amplua" {
  String id PK
  AmpluaRole role
  DateTime created_at
  DateTime updated_at
}
"Curators" {
  String id PK
  DateTime updated_at
  DateTime created_at
}
"GroupHeads" {
  String id PK
  String group FK "nullable"
  GroupHeadRank role
  DateTime created_at
  DateTime updated_at
}
"Lectors" {
  String id PK
  String last_name
  String first_name
  String surname
  String initials
  Int group UK
  Int faculity FK "nullable"
  DateTime created_at
  DateTime updated_at
}
"LectorRanks" {
  Int id PK
  String title UK
  String short_variant UK
}
"Students" {
  String id PK
  String group FK "nullable"
  Int sub_group FK "nullable"
  DateTime created_at
  DateTime updated_at
}
"Tutors" {
  String id PK
  String group FK "nullable"
  DateTime updated_at
  DateTime created_at
}
"Schedule" {
  Int id PK
  Int discipline FK
}
"Auditoriums" {
  Int id PK
  Int building FK
  String number
  DateTime created_at
  DateTime updated_at
}
"Buildings" {
  Int id PK
  String title
  String short_name "nullable"
  String address
  Int university FK
  DateTime created_at
  DateTime updated_at
}
"Disciplines" {
  Int id PK
  String name
  String short_name "nullable"
  Int faculity FK "nullable"
  DateTime created_at
  DateTime updated_at
}
"Facilities" {
  Int id PK
  Int university FK
  DateTime created_at
  DateTime updated_at
}
"Groups" {
  String id PK
  String name UK
  String curator FK "nullable"
  Int faculity FK
  Int year
  DateTime created_at
  DateTime updated_at
}
"SubGroups" {
  Int id PK
  String name
  String group_id FK
  SubGroupOrder order
}
"Universities" {
  Int id PK
  String name UK
  String full_name UK
  String city
  Json study_time
  DateTime created_at
  DateTime updated_at
}
"Weeks" {
  Int id PK
  String title
  WeekCount count
  Int university FK "nullable"
  DateTime created_at
  DateTime updated_at
}
"Devices" {
  Int id PK
  String user_id FK
  String ip "nullable"
  String device "nullable"
  String os "nullable"
}
"Metas" {
  String id PK
  Boolean is_blocked
  Boolean is_view_welcome_screen
  DateTime updated_at
}
"Profiles" {
  String id PK
  String avatar "nullable"
  BigInt tg_id UK
  String last_name "nullable"
  String first_name "nullable"
  String username UK "nullable"
  String lang
  Boolean is_premium
  DateTime updated_at
  DateTime created_at
}
"Settings" {
  String id PK
  Boolean fullscreen
  DateTime updated_at
  DateTime created_at
}
"MailingSettings" {
  String id PK
  Boolean isPossible
}
"ScheduleSettings" {
  String id PK
  Boolean short_lesson_name
}
"ThemeSettings" {
  String id PK
  String theme
  String schema
}
"Users" {
  String id PK
  UserRole role
  DateTime updated_at
  DateTime created_at
}
"_LectorToLectorRank" {
  String A FK
  String B FK
}
"Amplua" |o--|| "Users" : User
"Curators" |o--|| "Amplua" : Amplua
"GroupHeads" }o--o| "Groups" : Group
"GroupHeads" |o--|| "Amplua" : Amplua
"Lectors" }o--o| "Facilities" : Faculity
"Lectors" |o--|| "Amplua" : Amplua
"Students" }o--o| "SubGroups" : SubGroup
"Students" |o--|| "Amplua" : Amplua
"Students" }o--o| "Groups" : Group
"Tutors" |o--o| "Groups" : Group
"Tutors" |o--|| "Amplua" : Amplua
"Schedule" }o--|| "Disciplines" : Discipline
"Auditoriums" }o--|| "Buildings" : Building
"Buildings" }o--|| "Universities" : University
"Disciplines" }o--o| "Facilities" : Faculity
"Facilities" }o--|| "Universities" : University
"Groups" }o--o| "Curators" : Curator
"Groups" }o--|| "Facilities" : Faculity
"SubGroups" }o--|| "Groups" : Group
"Weeks" }|--o| "Universities" : University
"Devices" }o--|| "Users" : User
"Metas" |o--|| "Users" : User
"Profiles" |o--|| "Users" : User
"Settings" |o--|| "Users" : User
"MailingSettings" |o--|| "Settings" : settings
"ScheduleSettings" |o--|| "Settings" : settings
"ThemeSettings" |o--|| "Settings" : settings
"_LectorToLectorRank" }o--|| "Lectors" : Lector
"_LectorToLectorRank" }o--|| "LectorRanks" : LectorRank
```

### `Amplua`

**Properties**
  - `id`: 
  - `role`: 
  - `created_at`: 
  - `updated_at`: 

### `Curators`

**Properties**
  - `id`: 
  - `updated_at`: 
  - `created_at`: 

### `GroupHeads`

**Properties**
  - `id`: 
  - `group`: 
  - `role`: 
  - `created_at`: 
  - `updated_at`: 

### `Lectors`

**Properties**
  - `id`: 
  - `last_name`: 
  - `first_name`: 
  - `surname`: 
  - `initials`: 
  - `group`: 
  - `faculity`: 
  - `created_at`: 
  - `updated_at`: 

### `LectorRanks`

**Properties**
  - `id`: 
  - `title`: 
  - `short_variant`: 

### `Students`

**Properties**
  - `id`: 
  - `group`: 
  - `sub_group`: 
  - `created_at`: 
  - `updated_at`: 

### `Tutors`

**Properties**
  - `id`: 
  - `group`: 
  - `updated_at`: 
  - `created_at`: 

### `Schedule`

**Properties**
  - `id`: 
  - `discipline`: 

### `Auditoriums`

**Properties**
  - `id`: ID университета в базе данных
  - `building`: ID корпуса
  - `number`: Номер аудитории в строковом формате(302, 302a)
  - `created_at`: Дата создания пользователя в нашей системе
  - `updated_at`: Дата обновления пользователя в нашей системе

### `Buildings`

**Properties**
  - `id`: ID университета в базе данных
  - `title`: Название корпуса
  - `short_name`: Внегласное название корпуса
  - `address`: Адрес(улица) на котором находится корпус
  - `university`: ID университета, к которому корпус привязан
  - `created_at`: Дата создания пользователя в нашей системе
  - `updated_at`: Дата обновления пользователя в нашей системе

### `Disciplines`

**Properties**
  - `id`: ID дисциплины в базе данных
  - `name`: Название дисциплины
  - `short_name`: 
  - `faculity`: ID факультета
  - `created_at`: Дата создания пользователя в нашей системе
  - `updated_at`: Дата обновления пользователя в нашей системе

### `Facilities`

**Properties**
  - `id`: ID университета в базе данных
  - `university`: ID университета
  - `created_at`: Дата создания пользователя в нашей системе
  - `updated_at`: Дата обновления пользователя в нашей системе

### `Groups`

**Properties**
  - `id`: ID группы в университете
  - `name`: 
  - `curator`: 
  - `faculity`: 
  - `year`: 
  - `created_at`: Дата создания пользователя в нашей системе
  - `updated_at`: Дата обновления пользователя в нашей системе

### `SubGroups`

**Properties**
  - `id`: 
  - `name`: 
  - `group_id`: 
  - `order`: 

### `Universities`

**Properties**
  - `id`: ID университета в базе данных
  - `name`: Название университета в сокращенном варианте
  - `full_name`: Название университета
  - `city`: Город, где университет находится
  - `study_time`: Массив, где хранятся время когда проходят учебные процессы
  - `created_at`: Дата создания пользователя в нашей системе
  - `updated_at`: Дата обновления пользователя в нашей системе

### `Weeks`

**Properties**
  - `id`: ID недели в университете
  - `title`: Название недели в кокретном университете
  - `count`: Порядок недели
  - `university`: ID университета
  - `created_at`: Дата создания пользователя в нашей системе
  - `updated_at`: Дата обновления пользователя в нашей системе

### `Devices`

**Properties**
  - `id`: 
  - `user_id`: 
  - `ip`: 
  - `device`: 
  - `os`: 

### `Metas`

**Properties**
  - `id`: 
  - `is_blocked`: 
  - `is_view_welcome_screen`: 
  - `updated_at`: 

### `Profiles`

**Properties**
  - `id`: 
  - `avatar`: Аватар пользователя
  - `tg_id`: ID пользователя в телеграм
  - `last_name`: Фамилия пользователя в телеграм
  - `first_name`: Имя пользователя в телеграм
  - `username`: Имя пользователя пользователя в телеграм
  - `lang`: Выбраный им язык
  - `is_premium`: Является ли пользователь премиум пользователем
  - `updated_at`: Дата обновления профиля пользователя в нашей системе
  - `created_at`: Дата создания профиля пользователя в нашей системе

### `Settings`

**Properties**
  - `id`: 
  - `fullscreen`: 
  - `updated_at`: 
  - `created_at`: 

### `MailingSettings`

**Properties**
  - `id`: 
  - `isPossible`: 

### `ScheduleSettings`

**Properties**
  - `id`: 
  - `short_lesson_name`: 

### `ThemeSettings`

**Properties**
  - `id`: 
  - `theme`: 
  - `schema`: 

### `Users`

**Properties**
  - `id`: ID пользователя в базе данных
  - `role`: Роль пользователя в системе
  - `updated_at`: Дата обновления пользователя в нашей системе
  - `created_at`: Дата создания пользователя в нашей системе

### `_LectorToLectorRank`
Pair relationship table between [Lectors](#Lectors) and [LectorRanks](#LectorRanks)

**Properties**
  - `A`: 
  - `B`: 