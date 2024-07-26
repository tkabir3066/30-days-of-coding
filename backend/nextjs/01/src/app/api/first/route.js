// export async function GET() {
//   return new Response("Hello World");
// }

//=== NextResponse ===//
// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ name: "Tutul da Boss" });
// }

//=== Response ===//
export async function GET() {
  return Response.json({ name: "Tutul" }, { status: 201 });
}
