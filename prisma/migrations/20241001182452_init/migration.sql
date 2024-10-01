-- CreateEnum
CREATE TYPE "Species" AS ENUM ('dog', 'cat');

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "petName" TEXT NOT NULL,
    "species" "Species" NOT NULL,
    "weight" INTEGER NOT NULL,
    "percentOfWeight" INTEGER NOT NULL,
    "breed" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3),
    "neutered" BOOLEAN,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);
