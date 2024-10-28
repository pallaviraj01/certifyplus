-- CreateTable
CREATE TABLE "Admin" (
    "admin_id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,
    "officer_id" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("admin_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE INDEX "Admin_email_idx" ON "Admin"("email");

-- CreateIndex
CREATE INDEX "Admin_officer_id_idx" ON "Admin"("officer_id");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_officer_id_fkey" FOREIGN KEY ("officer_id") REFERENCES "Officer"("officer_id") ON DELETE RESTRICT ON UPDATE CASCADE;
