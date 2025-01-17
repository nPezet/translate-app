-- CreateTable
CREATE TABLE "Words" (
    "id" SERIAL NOT NULL,
    "english" TEXT NOT NULL,
    "french" TEXT NOT NULL,

    CONSTRAINT "Words_pkey" PRIMARY KEY ("id")
);
