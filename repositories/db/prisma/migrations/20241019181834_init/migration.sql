/*
  Warnings:

  - Added the required column `updated_at` to the `Disciplines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `faculity` to the `Groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Weeks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "univesityStructure"."Buildings" ADD COLUMN     "non_verbal_name" TEXT;

-- AlterTable
ALTER TABLE "univesityStructure"."Disciplines" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "univesityStructure"."Groups" ADD COLUMN     "faculity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "univesityStructure"."Weeks" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "Groups_faculity_idx" ON "univesityStructure"."Groups"("faculity");
