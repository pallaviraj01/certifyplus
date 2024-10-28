-- CreateTable
CREATE TABLE "District" (
    "district_id" SERIAL NOT NULL,
    "district_name" TEXT NOT NULL,
    "state_name" TEXT NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("district_id")
);

-- CreateTable
CREATE TABLE "Subdivision" (
    "subdivision_id" SERIAL NOT NULL,
    "subdivision_name" TEXT NOT NULL,
    "district_id" INTEGER NOT NULL,

    CONSTRAINT "Subdivision_pkey" PRIMARY KEY ("subdivision_id")
);

-- CreateIndex
CREATE INDEX "Subdivision_subdivision_id_idx" ON "Subdivision"("subdivision_id");

-- CreateIndex
CREATE INDEX "Subdivision_subdivision_name_idx" ON "Subdivision"("subdivision_name");

-- AddForeignKey
ALTER TABLE "Subdivision" ADD CONSTRAINT "Subdivision_district_id_fkey" FOREIGN KEY ("district_id") REFERENCES "District"("district_id") ON DELETE RESTRICT ON UPDATE CASCADE;
