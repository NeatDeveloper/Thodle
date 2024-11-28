/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user"."Users";

-- CreateTable
CREATE TABLE "user"."devices" (
    "id" TEXT NOT NULL,
    "tgID" BIGINT NOT NULL,
    "ip" TEXT,
    "device" TEXT,
    "os" TEXT,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user"."users" (
    "id" TEXT NOT NULL,
    "avatar" TEXT,
    "tg_id" BIGINT NOT NULL,
    "last_name" TEXT,
    "first_name" TEXT,
    "username" TEXT,
    "role" "user"."UserRoles" NOT NULL DEFAULT 'role_regular',
    "lang" TEXT NOT NULL,
    "is_premium" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "devices_tgID_key" ON "user"."devices"("tgID");

-- CreateIndex
CREATE INDEX "devices_id_tgID_idx" ON "user"."devices"("id", "tgID");

-- CreateIndex
CREATE UNIQUE INDEX "users_tg_id_key" ON "user"."users"("tg_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "user"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_tg_id_key" ON "user"."users"("id", "tg_id");
