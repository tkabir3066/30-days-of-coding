import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ name: "This is home api route" }, { status: 200 });
}
