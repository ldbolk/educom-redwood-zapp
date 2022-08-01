-- CreateTable
CREATE TABLE "vasteTaken" (
    "klantId" INTEGER NOT NULL,
    "taakId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("klantId", "taakId"),
    CONSTRAINT "vasteTaken_klantId_fkey" FOREIGN KEY ("klantId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vasteTaken_taakId_fkey" FOREIGN KEY ("taakId") REFERENCES "Taken" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
