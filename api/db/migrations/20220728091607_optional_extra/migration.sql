-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Taken" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taak" TEXT NOT NULL,
    "extra" TEXT
);
INSERT INTO "new_Taken" ("extra", "id", "taak") SELECT "extra", "id", "taak" FROM "Taken";
DROP TABLE "Taken";
ALTER TABLE "new_Taken" RENAME TO "Taken";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
