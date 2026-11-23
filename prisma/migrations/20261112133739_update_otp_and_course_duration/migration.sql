BEGIN;

-- Add the course duration.
ALTER TABLE "MicroCourse"
ADD COLUMN "durationMinutes" INTEGER;

-- Keep only the most recent OTP for each email.
WITH "rankedOtps" AS (
  SELECT
    "id",
    ROW_NUMBER() OVER (
      PARTITION BY "userEmail"
      ORDER BY "expiryTime" DESC, "id" DESC
    ) AS "rowNumber"
  FROM "OTP"
)
DELETE FROM "OTP"
USING "rankedOtps"
WHERE "OTP"."id" = "rankedOtps"."id"
  AND "rankedOtps"."rowNumber" > 1;

-- Rename the existing columns without losing their values.
ALTER TABLE "OTP"
RENAME COLUMN "otpCode" TO "otpHashed";

ALTER TABLE "OTP"
RENAME COLUMN "userEmail" TO "email";

ALTER TABLE "OTP"
RENAME COLUMN "expiryTime" TO "expiresAt";

-- Add the creation date.
ALTER TABLE "OTP"
ADD COLUMN "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Use email as the primary key instead of the UUID.
ALTER TABLE "OTP"
DROP CONSTRAINT "OTP_pkey";

ALTER TABLE "OTP"
DROP COLUMN "id";

ALTER TABLE "OTP"
ADD CONSTRAINT "OTP_pkey" PRIMARY KEY ("email");

COMMIT;