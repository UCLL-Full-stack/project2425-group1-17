/*
  Warnings:

  - You are about to drop the column `calendarId` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `calendarId` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the `Calendar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ClientToEmployee` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "role" AS ENUM ('ADMIN', 'EMPLOYEE', 'CLIENT');

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_calendarId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_calendarId_fkey";

-- DropForeignKey
ALTER TABLE "_ClientToEmployee" DROP CONSTRAINT "_ClientToEmployee_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClientToEmployee" DROP CONSTRAINT "_ClientToEmployee_B_fkey";

-- DropIndex
DROP INDEX "Employee_calendarId_key";

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "calendarId",
ADD COLUMN     "clientId" INTEGER,
ADD COLUMN     "employeeId" INTEGER;

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "calendarId",
ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "Calendar";

-- DropTable
DROP TABLE "_ClientToEmployee";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientOnEmployee" (
    "employeeId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "ClientOnEmployee_pkey" PRIMARY KEY ("employeeId","clientId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Client_userId_key" ON "Client"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_userId_key" ON "Employee"("userId");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientOnEmployee" ADD CONSTRAINT "ClientOnEmployee_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientOnEmployee" ADD CONSTRAINT "ClientOnEmployee_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
