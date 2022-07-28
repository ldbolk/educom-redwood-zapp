-- CreateTable
CREATE TABLE "Medewerker" (
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
    "roles" TEXT NOT NULL DEFAULT 'admin'
);

-- CreateTable
CREATE TABLE "Klant" (
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
CREATE UNIQUE INDEX "Medewerker_email_key" ON "Medewerker"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Klant_email_key" ON "Klant"("email");
