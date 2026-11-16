/*
  Warnings:

  - You are about to drop the column `oneLocal` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `twoLocal` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "oneLocal",
DROP COLUMN "twoLocal";
