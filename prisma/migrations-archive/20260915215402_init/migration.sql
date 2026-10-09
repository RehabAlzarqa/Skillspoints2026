-- CreateTable
CREATE TABLE "User" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "totalPoints" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idUser" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "jobTitle" TEXT,
    "profilePicture" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "MicroCourse" (
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,
    "idMicroCourse" SERIAL NOT NULL,
    "category" TEXT,
    "videoUrl" TEXT,
    "pointsReward" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "MicroCourse_pkey" PRIMARY KEY ("idMicroCourse")
);

-- CreateTable
CREATE TABLE "Reward" (
    "idReward" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "pointsCost" INTEGER NOT NULL DEFAULT 0,
    "availableQuantity" INTEGER,
    "image" TEXT,

    CONSTRAINT "Reward_pkey" PRIMARY KEY ("idReward")
);

-- CreateTable
CREATE TABLE "MyLearning" (
    "idMyLearning" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'in progress',

    CONSTRAINT "Learning_pkey" PRIMARY KEY ("idMyLearning")
);

-- CreateTable
CREATE TABLE "MyRewards" (
    "idHistory" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "rewardId" INTEGER NOT NULL,
    "redeemedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RewardHistory_pkey" PRIMARY KEY ("idHistory")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "MicroCourse_creatorId_idx" ON "MicroCourse"("authorId");

-- CreateIndex
CREATE INDEX "MyLearning_microCourseId_idx" ON "MyLearning"("courseId");

-- CreateIndex
CREATE INDEX "MyLearning_userId_idx" ON "MyLearning"("userId");

-- CreateIndex
CREATE INDEX "RewardHistory_rewardId_idx" ON "MyRewards"("rewardId");

-- CreateIndex
CREATE INDEX "RewardHistory_userId_idx" ON "MyRewards"("userId");

-- AddForeignKey
ALTER TABLE "MicroCourse" ADD CONSTRAINT "MicroCourse_creatorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyLearning" ADD CONSTRAINT "Learning_microCourseId_fkey" FOREIGN KEY ("courseId") REFERENCES "MicroCourse"("idMicroCourse") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyLearning" ADD CONSTRAINT "Learning_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyRewards" ADD CONSTRAINT "RewardHistory_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "Reward"("idReward") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyRewards" ADD CONSTRAINT "RewardHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;
