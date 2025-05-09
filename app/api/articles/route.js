import prisma from "@/lib/prisma.js";
import { NextResponse } from "next/server";

export async function GET() {
  const articles = await prisma.article.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(articles);
}

export async function POST(req) {
  const data = await req.json();
  const article = await prisma.article.create({
    data: {
      title: data.title,
      content: data.content,
    },
  });
  return NextResponse.json(article, { status: 201 });
}
