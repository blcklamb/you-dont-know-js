-- AlterTable
ALTER TABLE "curriculum" ADD CONSTRAINT "curriculum_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "part" ADD CONSTRAINT "part_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "referenceLink" TEXT;

-- AlterTable
ALTER TABLE "week" ADD CONSTRAINT "week_pkey" PRIMARY KEY ("id");
