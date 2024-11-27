/*
  Warnings:

  - You are about to drop the `mailing_profiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user"."mailing_profiles";

-- CreateTable
CREATE TABLE "user"."mailing_settings" (
    "id" TEXT NOT NULL,
    "can_i_send" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "mailing_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user"."settings" (
    "id" TEXT NOT NULL,
    "tgID" BIGINT NOT NULL,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "settings_tgID_key" ON "user"."settings"("tgID");

-- CreateIndex
CREATE UNIQUE INDEX "settings_id_tgID_key" ON "user"."settings"("id", "tgID");
