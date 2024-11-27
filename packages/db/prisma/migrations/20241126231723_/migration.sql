/*
  Warnings:

  - You are about to drop the column `is_bot` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user"."Users" DROP COLUMN "is_bot";
