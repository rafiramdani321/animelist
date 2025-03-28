import { NextResponse } from "next/server";

const JIKAN_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url.toString());

    const queryString = searchParams.toString();
    const response = await fetch(`${JIKAN_API_URL}/schedules?${queryString}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching schedule anime:", error);
    return NextResponse.json({ data: [], pagination: {} });
  }
}
