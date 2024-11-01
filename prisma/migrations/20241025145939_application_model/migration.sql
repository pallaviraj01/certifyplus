-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('SUBMITTED', 'UNDER_REVIEW', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateTable
CREATE TABLE "Application" (
    "application_id" SERIAL NOT NULL,
    "citizen_id" INTEGER NOT NULL,
    "certificate_type_id" INTEGER NOT NULL,
    "officer_id" INTEGER,
    "subdivision_id" INTEGER NOT NULL,
    "submission_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "current_status" "ApplicationStatus" NOT NULL,
    "priority" "Priority" NOT NULL,
    "remarks" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("application_id")
);

-- CreateIndex
CREATE INDEX "Application_citizen_id_idx" ON "Application"("citizen_id");

-- CreateIndex
CREATE INDEX "Application_certificate_type_id_idx" ON "Application"("certificate_type_id");

-- CreateIndex
CREATE INDEX "Application_current_status_priority_idx" ON "Application"("current_status", "priority");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_citizen_id_fkey" FOREIGN KEY ("citizen_id") REFERENCES "Citizen"("citizen_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_officer_id_fkey" FOREIGN KEY ("officer_id") REFERENCES "Officer"("officer_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_subdivision_id_fkey" FOREIGN KEY ("subdivision_id") REFERENCES "Subdivision"("subdivision_id") ON DELETE RESTRICT ON UPDATE CASCADE;
