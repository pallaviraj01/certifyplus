-- CreateTable
CREATE TABLE "ResourceAllocation" (
    "resource_allocation_id" SERIAL NOT NULL,
    "subdivision_id" INTEGER NOT NULL,
    "allocated_officers" INTEGER NOT NULL,
    "allocated_resources" TEXT[],
    "allocation_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResourceAllocation_pkey" PRIMARY KEY ("resource_allocation_id")
);

-- CreateIndex
CREATE INDEX "ResourceAllocation_subdivision_id_idx" ON "ResourceAllocation"("subdivision_id");

-- AddForeignKey
ALTER TABLE "ResourceAllocation" ADD CONSTRAINT "ResourceAllocation_subdivision_id_fkey" FOREIGN KEY ("subdivision_id") REFERENCES "Subdivision"("subdivision_id") ON DELETE RESTRICT ON UPDATE CASCADE;
