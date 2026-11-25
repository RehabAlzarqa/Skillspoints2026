/*
  Warnings:

  - A unique constraint covering the columns `[userId,courseId]` on the table `MyLearning` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MyLearning_userId_courseId_key" ON "MyLearning"("userId", "courseId");
