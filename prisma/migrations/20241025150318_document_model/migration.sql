-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('PROOF_OF_IDENTITY', 'PROOF_OF_RESIDENCE', 'INCOME_PROOF', 'BIRTH_CERTIFICATE', 'OTHER');

-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('PENDING', 'VERIFIED', 'REJECTED');

-- CreateTable
CREATE TABLE "Document" (
    "document_id" SERIAL NOT NULL,
    "application_id" INTEGER NOT NULL,
    "document_type" "DocumentType" NOT NULL,
    "document_path" TEXT NOT NULL,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verified_status" "VerificationStatus" NOT NULL,
    "verified_by" INTEGER,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("document_id")
);

-- CreateIndex
CREATE INDEX "Document_application_id_idx" ON "Document"("application_id");

-- CreateIndex
CREATE INDEX "Document_verified_status_idx" ON "Document"("verified_status");

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "Application"("application_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_verified_by_fkey" FOREIGN KEY ("verified_by") REFERENCES "Officer"("officer_id") ON DELETE SET NULL ON UPDATE CASCADE;
