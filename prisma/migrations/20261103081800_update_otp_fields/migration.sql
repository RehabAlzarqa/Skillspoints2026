/*
  Warnings:

  - The primary key for the `Token` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `attempts` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `purpose` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `usedAt` on the `Token` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[token]` on the table `Token` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_userId_fkey";

-- DropIndex
DROP INDEX "Token_userId_purpose_idx";

-- AlterTable
ALTER TABLE "Token" DROP CONSTRAINT "Token_pkey",
DROP COLUMN "attempts",
DROP COLUMN "expiresAt",
DROP COLUMN "id",
DROP COLUMN "purpose",
DROP COLUMN "usedAt",
ADD CONSTRAINT "Token_pkey" PRIMARY KEY ("userId");

-- CreateTable
CREATE TABLE "OTP" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "otpCode" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "expiryTime" TIMESTAMPTZ(6) NOT NULL,
    "attemptCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "OTP_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Token_token_key" ON "Token"("token");
