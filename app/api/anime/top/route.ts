import redis from "@/lib/redis";
import { NextResponse } from "next/server";

const JIKAN_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url.toString());
    const queryString = searchParams.toString();
    const cacheKey = `anime:top${queryString}`;

    const cached = await redis.get(cacheKey);
    if (cached) {
      return NextResponse.json(JSON.parse(cached));
    }

    const response = await fetch(`${JIKAN_API_URL}/top/anime?${queryString}`, {
      next: { revalidate: 60 },
    });

    if (response.status === 429) {
      return NextResponse.json({ data: [], pagination: {}, rateLimited: true });
    }

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    await redis.set(cacheKey, JSON.stringify(data), "EX", 60);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching top anime:", error);
    return NextResponse.json({ data: [], pagination: {} });
  }
}
