/*
  Warnings:

  - Added the required column `modeloEntrevistaId` to the `Entrevista` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `entrevista` ADD COLUMN `modeloEntrevistaId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Entrevista` ADD CONSTRAINT `Entrevista_modeloEntrevistaId_fkey` FOREIGN KEY (`modeloEntrevistaId`) REFERENCES `ModeloEntrevista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
