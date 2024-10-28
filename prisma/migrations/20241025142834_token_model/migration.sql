-- CreateTable
CREATE TABLE "Token" (
    "token_id" SERIAL NOT NULL,
    "citizen_id" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "is_valid" BOOLEAN NOT NULL DEFAULT true,
    "ip_address" TEXT,
    "device_info" TEXT,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("token_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Token_token_key" ON "Token"("token");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_citizen_id_fkey" FOREIGN KEY ("citizen_id") REFERENCES "Citizen"("citizen_id") ON DELETE RESTRICT ON UPDATE CASCADE;
