/*
  Warnings:

  - You are about to drop the column `avatar` on the `avatar` table. All the data in the column will be lost.
  - Added the required column `file` to the `avatar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "avatar" DROP COLUMN "avatar",
ADD COLUMN     "file" TEXT NOT NULL;
