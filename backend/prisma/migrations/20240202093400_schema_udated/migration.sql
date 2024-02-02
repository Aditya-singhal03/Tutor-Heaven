/*
  Warnings:

  - Added the required column `url` to the `VideoMetaData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VideoMetaData" ADD COLUMN     "url" TEXT NOT NULL;
