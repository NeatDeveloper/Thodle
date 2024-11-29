-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "amplua";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "base";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "schedule";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "university";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "user";

-- CreateEnum
CREATE TYPE "amplua"."AmpluaEnum" AS ENUM ('amplua_role_undefined', 'amplua_role_student', 'amplua_role_curator', 'amplua_role_group_head', 'amplua_role_lector', 'amplua_role_tutor');

-- CreateEnum
CREATE TYPE "amplua"."GroupHeadLevels" AS ENUM ('group_head_level_primary', 'group_head_level_secondary');

-- CreateEnum
CREATE TYPE "university"."WeekCount" AS ENUM ('week_count_first', 'week_count_second');

-- CreateEnum
CREATE TYPE "user"."UserRoles" AS ENUM ('role_regular', 'role_increase', 'role_supervisor', 'role_admin');

-- CreateEnum
CREATE TYPE "university"."LessonType" AS ENUM ('lesson_type_lecture', 'lesson_type_practice', 'lesson_type_additional');

-- CreateTable
CREATE TABLE "amplua"."Amplua" (
    "id" TEXT NOT NULL,
    "role" "amplua"."AmpluaEnum"[] DEFAULT ARRAY['amplua_role_undefined']::"amplua"."AmpluaEnum"[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Amplua_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amplua"."Curators" (
    "id" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Curators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amplua"."GroupHeads" (
    "id" TEXT NOT NULL,
    "group" INTEGER,
    "role" "amplua"."GroupHeadLevels" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupHeads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amplua"."Lectors" (
    "id" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "initials" TEXT NOT NULL,
    "group" INTEGER NOT NULL,
    "faculity" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amplua"."LectorRanks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "short_variant" TEXT NOT NULL,

    CONSTRAINT "LectorRanks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amplua"."Student" (
    "id" TEXT NOT NULL,
    "group" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amplua"."Tutors" (
    "id" TEXT NOT NULL,
    "group" INTEGER,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tutors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedule"."Schedule" (
    "id" SERIAL NOT NULL,
    "discipline" INTEGER NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "university"."Auditoriums" (
    "id" SERIAL NOT NULL,
    "building" INTEGER NOT NULL,
    "number" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Auditoriums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "university"."Buildings" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "non_verbal_name" TEXT,
    "address" TEXT NOT NULL,
    "university" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Buildings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "university"."Disciplines" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "faculity" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Disciplines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "university"."Facilities" (
    "id" SERIAL NOT NULL,
    "university" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Facilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "university"."Weeks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "count" "university"."WeekCount" NOT NULL,
    "university" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Weeks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "university"."Groups" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "curator" TEXT,
    "faculity" INTEGER NOT NULL,
    "group_year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "university"."Universities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "study_time" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Universities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user"."Devices" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "ip" TEXT,
    "device" TEXT,
    "os" TEXT,

    CONSTRAINT "Devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user"."Profiles" (
    "id" TEXT NOT NULL,
    "avatar" TEXT,
    "avatar_updated_at" TIMESTAMP(3) NOT NULL,
    "tg_id" BIGINT NOT NULL,
    "last_name" TEXT,
    "first_name" TEXT,
    "username" TEXT,
    "lang" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user"."Settings" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user"."MailingSettings" (
    "id" TEXT NOT NULL,
    "can_i_send" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "MailingSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user"."Users" (
    "id" TEXT NOT NULL,
    "role" "user"."UserRoles" NOT NULL DEFAULT 'role_regular',
    "is_premium" BOOLEAN NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amplua"."_LectorToLectorRank" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "GroupHeads_group_idx" ON "amplua"."GroupHeads"("group");

-- CreateIndex
CREATE UNIQUE INDEX "Lectors_group_key" ON "amplua"."Lectors"("group");

-- CreateIndex
CREATE INDEX "Lectors_group_idx" ON "amplua"."Lectors"("group");

-- CreateIndex
CREATE INDEX "Lectors_faculity_idx" ON "amplua"."Lectors"("faculity");

-- CreateIndex
CREATE UNIQUE INDEX "LectorRanks_title_key" ON "amplua"."LectorRanks"("title");

-- CreateIndex
CREATE UNIQUE INDEX "LectorRanks_short_variant_key" ON "amplua"."LectorRanks"("short_variant");

-- CreateIndex
CREATE INDEX "Student_group_idx" ON "amplua"."Student"("group");

-- CreateIndex
CREATE UNIQUE INDEX "Tutors_group_key" ON "amplua"."Tutors"("group");

-- CreateIndex
CREATE INDEX "Tutors_group_idx" ON "amplua"."Tutors"("group");

-- CreateIndex
CREATE INDEX "Schedule_discipline_idx" ON "schedule"."Schedule"("discipline");

-- CreateIndex
CREATE INDEX "Auditoriums_building_idx" ON "university"."Auditoriums"("building");

-- CreateIndex
CREATE INDEX "Buildings_university_idx" ON "university"."Buildings"("university");

-- CreateIndex
CREATE INDEX "Disciplines_faculity_idx" ON "university"."Disciplines"("faculity");

-- CreateIndex
CREATE INDEX "Facilities_university_idx" ON "university"."Facilities"("university");

-- CreateIndex
CREATE INDEX "Weeks_university_idx" ON "university"."Weeks"("university");

-- CreateIndex
CREATE UNIQUE INDEX "Groups_name_key" ON "university"."Groups"("name");

-- CreateIndex
CREATE INDEX "Groups_faculity_idx" ON "university"."Groups"("faculity");

-- CreateIndex
CREATE INDEX "Groups_curator_idx" ON "university"."Groups"("curator");

-- CreateIndex
CREATE UNIQUE INDEX "Universities_name_key" ON "university"."Universities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Universities_full_name_key" ON "university"."Universities"("full_name");

-- CreateIndex
CREATE INDEX "Devices_user_id_idx" ON "user"."Devices"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Profiles_tg_id_key" ON "user"."Profiles"("tg_id");

-- CreateIndex
CREATE UNIQUE INDEX "Profiles_username_key" ON "user"."Profiles"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_LectorToLectorRank_AB_unique" ON "amplua"."_LectorToLectorRank"("A", "B");

-- CreateIndex
CREATE INDEX "_LectorToLectorRank_B_index" ON "amplua"."_LectorToLectorRank"("B");
