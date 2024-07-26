import { users } from "@/lib/db";
import { NextResponse } from "next/server";

//read
export const GET = async (req) => {
  try {
    const url = req.url;
    const splittedUrl = url.split("users/");
    const id = splittedUrl[1];
    // console.log(url); //http://localhost:3000/api/users/1
    // console.log(splittedUrl); //[ 'http://localhost:3000/api/', '1' ]
    // console.log(id);

    const singleData = users.filter((user) => user.id.toString() === id);
    if (singleData.length === 0) {
      return NextResponse.json({ message: "Data not Found" }, { status: 500 });
    } else {
      return NextResponse.json({ message: "Ok", singleData });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "Data not Found", err },
      { status: 500 }
    );
  }
};

//delete

export const DELETE = async (req, res) => {
  try {
    const id = req.url.split("users/")[1];
    const userIndex = users.findIndex((user) => user.id.toString() === id);

    if (userIndex === -1) {
      return NextResponse.json({ message: "error", error: "User not found" });
    }

    //remove the user from the users array

    users.splice(userIndex, 1);
    console.log(users);

    return NextResponse.json({ message: "User deleted successfully " });
  } catch (err) {
    return NextResponse.json(
      { message: "Data not Found", err },
      { status: 500 }
    );
  }
};

//update

export const PUT = async (req) => {
  try {
    const id = req.url.split("users/")[1];
    const { name } = await req.json();

    const user = users.find((user) => user.id.toString() === id);
    user.name = name;

    // console.log(user);
    // console.log(users);

    return NextResponse.json({ message: "User updated successfully" });
  } catch (err) {
    return NextResponse.json({ message: "error", err });
  }
};
