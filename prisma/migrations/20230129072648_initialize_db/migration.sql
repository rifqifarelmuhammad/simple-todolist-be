-- CreateTable
CREATE TABLE "todolist" (
    "id" SERIAL NOT NULL,
    "uId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isFinished" BOOLEAN NOT NULL,

    CONSTRAINT "todolist_pkey" PRIMARY KEY ("id")
);
