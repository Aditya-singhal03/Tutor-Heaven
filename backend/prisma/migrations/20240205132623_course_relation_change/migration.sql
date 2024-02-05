-- DropForeignKey
ALTER TABLE "Content" DROP CONSTRAINT "Content_courseId_fkey";

-- AlterTable
ALTER TABLE "Content" ALTER COLUMN "courseId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
