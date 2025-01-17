import TestTranslateForm from "@/components/molecules/TestTranslateForm";
import { WordData } from "@/utils/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fetchData(): Promise<WordData[]> {
  const productsCount = await prisma.words.count();
  const skip = Math.floor(Math.random() * productsCount);

  return await prisma.words.findMany({
      take: 5,
      skip: skip,
  });
}

export default async function TranslationPage() {
  const initialWordData = await fetchData();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <TestTranslateForm words={initialWordData} />
    </div>
  );
}
