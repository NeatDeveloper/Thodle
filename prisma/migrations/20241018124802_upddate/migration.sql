/*
  Warnings:

  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user"."Student";

-- CreateTable
CREATE TABLE "amplua"."Student" (
    "id" TEXT NOT NULL,
    "tgID" BIGINT NOT NULL,
    "group" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_tgID_key" ON "amplua"."Student"("tgID");

-- CreateIndex
CREATE INDEX "Student_group_idx" ON "amplua"."Student"("group");

-- CreateIndex
CREATE UNIQUE INDEX "Student_id_tgID_key" ON "amplua"."Student"("id", "tgID");
