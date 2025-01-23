import TestTranslateForm from "@/components/molecules/TestTranslateForm";
import { WordData } from "@/utils/types";
import { PrismaClient } from "@prisma/client";
import { connection } from "next/server";

const prisma = new PrismaClient();

async function fetchData(): Promise<WordData[]> {
  await connection();
  const productsCount = await prisma.words.count();
  const skip = Math.floor(Math.random() * productsCount);

  return await prisma.words.findMany({
    take: 10,
    skip: skip,
  });
}

export default async function TranslationPage() {
  const initialWordData = await fetchData();

  return (
    <div className="flex flex-col h-svh p-5 pt-14 text-center">
      <TestTranslateForm words={initialWordData} />
    </div>
  );
}
