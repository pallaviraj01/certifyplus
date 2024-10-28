-- CreateTable
CREATE TABLE "CertificateType" (
    "certificate_type_id" SERIAL NOT NULL,
    "certificate_name" TEXT NOT NULL,
    "description" TEXT,
    "required_documents" TEXT[],
    "processing_time" INTEGER NOT NULL,

    CONSTRAINT "CertificateType_pkey" PRIMARY KEY ("certificate_type_id")
);

-- CreateTable
CREATE TABLE "_ApplicationToCertificateType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "CertificateType_certificate_name_idx" ON "CertificateType"("certificate_name");

-- CreateIndex
CREATE UNIQUE INDEX "_ApplicationToCertificateType_AB_unique" ON "_ApplicationToCertificateType"("A", "B");

-- CreateIndex
CREATE INDEX "_ApplicationToCertificateType_B_index" ON "_ApplicationToCertificateType"("B");

-- AddForeignKey
ALTER TABLE "_ApplicationToCertificateType" ADD CONSTRAINT "_ApplicationToCertificateType_A_fkey" FOREIGN KEY ("A") REFERENCES "Application"("application_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ApplicationToCertificateType" ADD CONSTRAINT "_ApplicationToCertificateType_B_fkey" FOREIGN KEY ("B") REFERENCES "CertificateType"("certificate_type_id") ON DELETE CASCADE ON UPDATE CASCADE;
