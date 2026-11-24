/*
  Warnings:

  - You are about to drop the column `one_staging` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `two_staging` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "one_staging",
DROP COLUMN "two_staging";
