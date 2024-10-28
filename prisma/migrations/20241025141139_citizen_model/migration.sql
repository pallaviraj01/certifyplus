-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CITIZEN', 'ADMIN', 'SUPER_ADMIN');

-- CreateTable
CREATE TABLE "Citizen" (
    "citizen_id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "aadhaar_number" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL,
    "login_attempts" INTEGER NOT NULL DEFAULT 0,
    "last_login" TIMESTAMP(3),

    CONSTRAINT "Citizen_pkey" PRIMARY KEY ("citizen_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Citizen_email_key" ON "Citizen"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Citizen_phone_number_key" ON "Citizen"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Citizen_aadhaar_number_key" ON "Citizen"("aadhaar_number");

-- CreateIndex
CREATE INDEX "Citizen_email_idx" ON "Citizen"("email");

-- CreateIndex
CREATE INDEX "Citizen_aadhaar_number_idx" ON "Citizen"("aadhaar_number");

-- CreateIndex
CREATE INDEX "Citizen_phone_number_idx" ON "Citizen"("phone_number");
