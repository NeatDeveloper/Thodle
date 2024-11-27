-- CreateTable
CREATE TABLE "user"."mailing_profiles" (
    "id" TEXT NOT NULL,
    "tgID" BIGINT NOT NULL,
    "can_send" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "mailing_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mailing_profiles_tgID_key" ON "user"."mailing_profiles"("tgID");

-- CreateIndex
CREATE INDEX "mailing_profiles_id_tgID_idx" ON "user"."mailing_profiles"("id", "tgID");

-- CreateIndex
CREATE UNIQUE INDEX "mailing_profiles_id_tgID_key" ON "user"."mailing_profiles"("id", "tgID");
