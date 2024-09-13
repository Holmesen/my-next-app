import * as api from "@/app/lib/unsplash";
import { NextRequest, NextResponse } from "next/server";

type HandlerFunction = (params: any) => Promise<any>;

const handlers: Record<string, HandlerFunction> = {
  fetchSearchPhotos: api.fetchSearchPhotos,
  fetchPhotoById: api.fetchPhotoById,
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fn = searchParams.get("fn");

  if (!fn) {
    return NextResponse.json({ error: "fn is required" }, { status: 400 });
  }

  const handler = handlers[fn];

  if (!handler) {
    return NextResponse.json({ error: "Invalid function" }, { status: 400 });
  }

  try {
    const params = searchParams.get("params");
    const parsedParams = params ? JSON.parse(params) : {};
    const result = await handler(parsedParams);
    return NextResponse.json({ data: result });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}