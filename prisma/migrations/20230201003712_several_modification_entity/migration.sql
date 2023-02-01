/*
  Warnings:

  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `url` to the `avatar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "avatar" ADD COLUMN     "url" TEXT NOT NULL;

-- DropTable
DROP TABLE "image";
