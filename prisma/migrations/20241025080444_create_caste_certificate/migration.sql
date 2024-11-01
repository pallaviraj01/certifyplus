-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'THIRD_GENDER');

-- CreateEnum
CREATE TYPE "CertificateStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'EXPIRED');

-- CreateTable
CREATE TABLE "CasteCertificate" (
    "id" SERIAL NOT NULL,
    "applicantName" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "husbandName" TEXT,
    "gender" "Gender" NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "subDivision" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "wardNo" TEXT NOT NULL,
    "villageTown" TEXT NOT NULL,
    "postOffice" TEXT NOT NULL,
    "policeStation" TEXT NOT NULL,
    "pinCode" TEXT NOT NULL,
    "aadhaarNumber" TEXT NOT NULL,
    "residenceType" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "selfDeclaration" TEXT NOT NULL,
    "certificateNumber" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiryDate" TIMESTAMP(3),
    "status" "CertificateStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CasteCertificate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CasteCertificate_certificateNumber_key" ON "CasteCertificate"("certificateNumber");
