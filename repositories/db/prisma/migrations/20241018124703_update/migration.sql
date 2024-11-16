/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "amplua";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "schedule";

-- CreateEnum
CREATE TYPE "amplua"."AmpluaEnum" AS ENUM ('amplua_undefined', 'amplua_student', 'amplua_curator', 'amplua_group_head', 'amplua_lector', 'amplua_tutor');

-- CreateEnum
CREATE TYPE "amplua"."GroupHeadLevels" AS ENUM ('group_head_level_primary', 'group_head_level_secondary');

-- CreateEnum
CREATE TYPE "user"."UserRoles" AS ENUM ('role_regular', 'role_admin');

-- DropTable
DROP TABLE "user"."User";

-- DropEnum
DROP TYPE "user"."user_amplua";

-- DropEnum
DROP TYPE "user"."user_role";

-- CreateTable
CREATE TABLE "amplua"."Amplua" (
    "id" TEXT NOT NULL,
    "tgID" BIGINT NOT NULL,
    "amplua" "amplua"."AmpluaEnum"[] DEFAULT ARRAY['amplua_undefined']::"amplua"."AmpluaEnum"[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Amplua_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amplua"."Curators" (
    "id" TEXT NOT NULL,
    "tgID" BIGINT NOT NULL,
    "group" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Curators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amplua"."GroupHeads" (
    "id" TEXT NOT NULL,
    "tgID" BIGINT NOT NULL,
    "group" INTEGER NOT NULL,
    "level" "amplua"."GroupHeadLevels" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupHeads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amplua"."Lectors" (
    "id" TEXT NOT NULL,
    "tgID" BIGINT NOT NULL,
    "group" INTEGER NOT NULL,
    "faculity" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user"."Student" (
    "id" TEXT NOT NULL,
    "tgID" BIGINT NOT NULL,
    "group" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amplua"."Tutors" (
    "id" TEXT NOT NULL,
    "tgID" BIGINT NOT NULL,
    "group" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tutors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "univesityStructure"."Auditoriums" (
    "id" SERIAL NOT NULL,
    "building" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Auditoriums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "univesityStructure"."Buildings" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "university" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Buildings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "univesityStructure"."Disciplines" (
    "id" SERIAL NOT NULL,
    "faculity" INTEGER,

    CONSTRAINT "Disciplines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "univesityStructure"."Facilities" (
    "id" SERIAL NOT NULL,
    "university" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Facilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "univesityStructure"."Groups" (
    "id" SERIAL NOT NULL,
    "group_year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "univesityStructure"."Univesities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Univesities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user"."Users" (
    "id" TEXT NOT NULL,
    "tg_id" BIGINT NOT NULL,
    "last_name" TEXT,
    "first_name" TEXT,
    "username" TEXT,
    "role" "user"."UserRoles" NOT NULL DEFAULT 'role_regular',
    "lang" "base"."lang" NOT NULL,
    "is_bot" BOOLEAN NOT NULL,
    "is_premium" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Amplua_tgID_key" ON "amplua"."Amplua"("tgID");

-- CreateIndex
CREATE UNIQUE INDEX "Amplua_id_tgID_key" ON "amplua"."Amplua"("id", "tgID");

-- CreateIndex
CREATE UNIQUE INDEX "Curators_tgID_key" ON "amplua"."Curators"("tgID");

-- CreateIndex
CREATE UNIQUE INDEX "Curators_group_key" ON "amplua"."Curators"("group");

-- CreateIndex
CREATE INDEX "Curators_group_idx" ON "amplua"."Curators"("group");

-- CreateIndex
CREATE UNIQUE INDEX "Curators_id_tgID_key" ON "amplua"."Curators"("id", "tgID");

-- CreateIndex
CREATE UNIQUE INDEX "GroupHeads_tgID_key" ON "amplua"."GroupHeads"("tgID");

-- CreateIndex
CREATE INDEX "GroupHeads_group_idx" ON "amplua"."GroupHeads"("group");

-- CreateIndex
CREATE UNIQUE INDEX "GroupHeads_id_tgID_key" ON "amplua"."GroupHeads"("id", "tgID");

-- CreateIndex
CREATE UNIQUE INDEX "Lectors_tgID_key" ON "amplua"."Lectors"("tgID");

-- CreateIndex
CREATE UNIQUE INDEX "Lectors_group_key" ON "amplua"."Lectors"("group");

-- CreateIndex
CREATE INDEX "Lectors_group_idx" ON "amplua"."Lectors"("group");

-- CreateIndex
CREATE INDEX "Lectors_faculity_idx" ON "amplua"."Lectors"("faculity");

-- CreateIndex
CREATE UNIQUE INDEX "Lectors_id_tgID_key" ON "amplua"."Lectors"("id", "tgID");

-- CreateIndex
CREATE UNIQUE INDEX "Student_tgID_key" ON "user"."Student"("tgID");

-- CreateIndex
CREATE INDEX "Student_group_idx" ON "user"."Student"("group");

-- CreateIndex
CREATE UNIQUE INDEX "Student_id_tgID_key" ON "user"."Student"("id", "tgID");

-- CreateIndex
CREATE UNIQUE INDEX "Tutors_tgID_key" ON "amplua"."Tutors"("tgID");

-- CreateIndex
CREATE UNIQUE INDEX "Tutors_group_key" ON "amplua"."Tutors"("group");

-- CreateIndex
CREATE INDEX "Tutors_group_idx" ON "amplua"."Tutors"("group");

-- CreateIndex
CREATE UNIQUE INDEX "Tutors_id_tgID_key" ON "amplua"."Tutors"("id", "tgID");

-- CreateIndex
CREATE INDEX "Auditoriums_building_idx" ON "univesityStructure"."Auditoriums"("building");

-- CreateIndex
CREATE INDEX "Buildings_university_idx" ON "univesityStructure"."Buildings"("university");

-- CreateIndex
CREATE INDEX "Disciplines_faculity_idx" ON "univesityStructure"."Disciplines"("faculity");

-- CreateIndex
CREATE INDEX "Facilities_university_idx" ON "univesityStructure"."Facilities"("university");

-- CreateIndex
CREATE UNIQUE INDEX "Univesities_name_key" ON "univesityStructure"."Univesities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Univesities_full_name_key" ON "univesityStructure"."Univesities"("full_name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_tg_id_key" ON "user"."Users"("tg_id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "user"."Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_tg_id_key" ON "user"."Users"("id", "tg_id");
