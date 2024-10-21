-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "base";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "univesityStructure";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "user";

-- CreateEnum
CREATE TYPE "user"."user_amplua" AS ENUM ('amplua_undefined', 'amplua_student', 'amplua_curator', 'amplua_group_head', 'amplua_lector', 'amplua_tutor');

-- CreateEnum
CREATE TYPE "user"."user_role" AS ENUM ('role_regular', 'role_admin');

-- CreateEnum
CREATE TYPE "base"."lang" AS ENUM ('lang_ru', 'lang_en');

-- CreateTable
CREATE TABLE "user"."User" (
    "id" TEXT NOT NULL,
    "tg_id" BIGINT NOT NULL,
    "last_name" TEXT,
    "first_name" TEXT NOT NULL,
    "username" TEXT,
    "role" "user"."user_role" NOT NULL DEFAULT 'role_regular',
    "amplua" "user"."user_amplua" NOT NULL DEFAULT 'amplua_undefined',
    "lang" "base"."lang" NOT NULL,
    "is_bot" BOOLEAN NOT NULL,
    "is_premium" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_tg_id_key" ON "user"."User"("tg_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "user"."User"("username");
