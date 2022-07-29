-- CreateTable
CREATE TABLE "Bezoek" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "klantId" INTEGER NOT NULL,
    "medewerkerId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Bezoek_klantId_fkey" FOREIGN KEY ("klantId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bezoek_medewerkerId_fkey" FOREIGN KEY ("medewerkerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_BezoekToTaken" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_BezoekToTaken_A_fkey" FOREIGN KEY ("A") REFERENCES "Bezoek" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BezoekToTaken_B_fkey" FOREIGN KEY ("B") REFERENCES "Taken" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_BezoekToTaken_AB_unique" ON "_BezoekToTaken"("A", "B");

-- CreateIndex
CREATE INDEX "_BezoekToTaken_B_index" ON "_BezoekToTaken"("B");
