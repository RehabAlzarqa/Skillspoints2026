/*
  Warnings:

  - You are about to drop the column `new` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `newid` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "new",
DROP COLUMN "newid";
