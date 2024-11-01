-- CreateTable
CREATE TABLE "Officer" (
    "officer_id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "subdivision_id" INTEGER NOT NULL,
    "district_id" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Officer_pkey" PRIMARY KEY ("officer_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Officer_email_key" ON "Officer"("email");

-- AddForeignKey
ALTER TABLE "Officer" ADD CONSTRAINT "Officer_subdivision_id_fkey" FOREIGN KEY ("subdivision_id") REFERENCES "Subdivision"("subdivision_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Officer" ADD CONSTRAINT "Officer_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "District"("district_id") ON DELETE RESTRICT ON UPDATE CASCADE;
