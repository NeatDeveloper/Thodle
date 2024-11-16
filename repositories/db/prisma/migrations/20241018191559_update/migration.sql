/*
  Warnings:

  - You are about to drop the column `week` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the `Univesities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "schedule"."Schedule_week_idx";

-- AlterTable
ALTER TABLE "schedule"."Schedule" DROP COLUMN "week";

-- DropTable
DROP TABLE "univesityStructure"."Univesities";

-- CreateTable
CREATE TABLE "univesityStructure"."Universities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "study_time" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Universities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Universities_name_key" ON "univesityStructure"."Universities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Universities_full_name_key" ON "univesityStructure"."Universities"("full_name");
