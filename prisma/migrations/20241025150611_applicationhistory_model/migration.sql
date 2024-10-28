-- CreateTable
CREATE TABLE "ApplicationStatusHistory" (
    "status_history_id" SERIAL NOT NULL,
    "application_id" INTEGER NOT NULL,
    "status" "ApplicationStatus" NOT NULL,
    "updated_by" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "remarks" TEXT,

    CONSTRAINT "ApplicationStatusHistory_pkey" PRIMARY KEY ("status_history_id")
);

-- CreateIndex
CREATE INDEX "ApplicationStatusHistory_application_id_idx" ON "ApplicationStatusHistory"("application_id");

-- CreateIndex
CREATE INDEX "ApplicationStatusHistory_status_idx" ON "ApplicationStatusHistory"("status");

-- AddForeignKey
ALTER TABLE "ApplicationStatusHistory" ADD CONSTRAINT "ApplicationStatusHistory_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "Application"("application_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApplicationStatusHistory" ADD CONSTRAINT "ApplicationStatusHistory_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "Officer"("officer_id") ON DELETE RESTRICT ON UPDATE CASCADE;
