import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    if (!data.englishWord || !data.frenchWord) {
      console.log("Missing param");
      return NextResponse.json(
        { error: "Missing one of the parameters: englishWord and frenchWord" },
        { status: 400 }
      );
    }

    const word = await prisma.words.create({
      data: {
        english: data.englishWord,
        french: data.frenchWord,
      },
    });
    console.log("Word successfully created", word);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
