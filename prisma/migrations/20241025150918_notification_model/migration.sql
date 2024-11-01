-- CreateEnum
CREATE TYPE "ReadStatus" AS ENUM ('READ', 'UNREAD');

-- CreateTable
CREATE TABLE "Notification" (
    "notification_id" SERIAL NOT NULL,
    "citizen_id" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "read_status" "ReadStatus" NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("notification_id")
);

-- CreateIndex
CREATE INDEX "Notification_citizen_id_idx" ON "Notification"("citizen_id");

-- CreateIndex
CREATE INDEX "Notification_read_status_idx" ON "Notification"("read_status");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_citizen_id_fkey" FOREIGN KEY ("citizen_id") REFERENCES "Citizen"("citizen_id") ON DELETE RESTRICT ON UPDATE CASCADE;
