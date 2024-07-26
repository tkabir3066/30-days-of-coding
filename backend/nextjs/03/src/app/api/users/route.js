import { users } from "@/lib/db";

const { NextResponse } = require("next/server");

// read
export const GET = async (req, res) => {
  try {
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ message: "err", err }, { status: 500 });
  }
};

// create

export const POST = async (req, res) => {
  const { name } = await req.json();
  try {
    const newData = { name };
    newData.id = users.length + 1;
    users.push(newData);
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
};
