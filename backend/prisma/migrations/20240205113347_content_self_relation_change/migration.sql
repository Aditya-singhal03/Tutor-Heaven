-- DropForeignKey
ALTER TABLE "Content" DROP CONSTRAINT "Content_parentId_fkey";

-- AlterTable
ALTER TABLE "Content" ALTER COLUMN "parentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Content"("id") ON DELETE SET NULL ON UPDATE CASCADE;
