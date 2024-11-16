/*
  Warnings:

  - Added the required column `first_name` to the `Lectors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `initials` to the `Lectors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Lectors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Lectors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Auditoriums` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Buildings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Disciplines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `study_time` to the `Univesities` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `lang` on the `Users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "univesityStructure"."WeekCount" AS ENUM ('week_count_first', 'week_count_second');

-- CreateEnum
CREATE TYPE "base"."Lang" AS ENUM ('lang_ru', 'lang_en');

-- CreateEnum
CREATE TYPE "base"."LessonType" AS ENUM ('lesson_type_lecture', 'lesson_type_practice');

-- AlterTable
ALTER TABLE "amplua"."Lectors" ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "initials" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "surname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "univesityStructure"."Auditoriums" ADD COLUMN     "number" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "univesityStructure"."Buildings" ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "univesityStructure"."Disciplines" ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "univesityStructure"."Univesities" ADD COLUMN     "study_time" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "user"."Users" DROP COLUMN "lang",
ADD COLUMN     "lang" "base"."Lang" NOT NULL;

-- DropEnum
DROP TYPE "base"."lang";

-- CreateTable
CREATE TABLE "amplua"."LectorRanks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "short_variant" TEXT NOT NULL,
    "lectorId" TEXT NOT NULL,

    CONSTRAINT "LectorRanks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedule"."Schedule" (
    "id" SERIAL NOT NULL,
    "week" INTEGER,
    "discipline" INTEGER NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "univesityStructure"."Weeks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "count" "univesityStructure"."WeekCount" NOT NULL,
    "university" INTEGER,

    CONSTRAINT "Weeks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LectorRanks_title_key" ON "amplua"."LectorRanks"("title");

-- CreateIndex
CREATE UNIQUE INDEX "LectorRanks_short_variant_key" ON "amplua"."LectorRanks"("short_variant");

-- CreateIndex
CREATE INDEX "LectorRanks_lectorId_idx" ON "amplua"."LectorRanks"("lectorId");

-- CreateIndex
CREATE INDEX "Schedule_week_idx" ON "schedule"."Schedule"("week");

-- CreateIndex
CREATE INDEX "Schedule_discipline_idx" ON "schedule"."Schedule"("discipline");

-- CreateIndex
CREATE INDEX "Weeks_university_idx" ON "univesityStructure"."Weeks"("university");
