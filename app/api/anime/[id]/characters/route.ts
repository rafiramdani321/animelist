import redis from "@/lib/redis";
import { NextResponse } from "next/server";

const JIKAN_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET(
  _req: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  const cacheKey = `anime:characters:${id}`;

  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached));
    }

    const response = await fetch(`${JIKAN_API_URL}/anime/${id}/characters`, {
      next: { revalidate: 60 },
    });

    if (response.status === 429) {
      return NextResponse.json({ data: null, rateLimited: true });
    }

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    await redis.set(cacheKey, JSON.stringify(data), "EX", 60);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching anime characters:", error);
    return NextResponse.json({
      status: 404,
      message: "data not found",
    });
  }
}
