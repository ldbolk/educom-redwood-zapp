/*
  Warnings:

  - You are about to drop the `Klant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Medewerker` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Klant";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Medewerker";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "naam" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME,
    "adres" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "woonplaats" TEXT NOT NULL,
    "roles" TEXT NOT NULL DEFAULT 'klant'
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
