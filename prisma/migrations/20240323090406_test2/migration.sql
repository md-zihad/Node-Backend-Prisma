/*
  Warnings:

  - Added the required column `address` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `address` VARCHAR(100) NOT NULL;
