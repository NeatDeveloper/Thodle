/*
  Warnings:

  - The primary key for the `devices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tgID` on the `devices` table. All the data in the column will be lost.
  - The `id` column on the `devices` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `user_id` to the `devices` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "user"."devices_id_tgID_idx";

-- DropIndex
DROP INDEX "user"."devices_tgID_key";

-- AlterTable
ALTER TABLE "user"."devices" DROP CONSTRAINT "devices_pkey",
DROP COLUMN "tgID",
ADD COLUMN     "user_id" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "devices_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE INDEX "devices_user_id_idx" ON "user"."devices"("user_id");
