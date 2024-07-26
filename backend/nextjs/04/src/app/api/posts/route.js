import { NextResponse } from "next/server";

const DATA_URL = "https://jsonplaceholder.typicode.com/posts";
const API_KEY = process.env.API_KEY;

export async function GET() {
  try {
    const res = await fetch(DATA_URL);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ message: "error", err });
  }
}

// create

export async function POST(request) {
  try {
    const { body, userId, title } = await request.json();
    const res = await fetch(DATA_URL, {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
      headers: {
        "Content-type": "application/json",

        // if api is require an API_KEY ensure this header is correctly formatted "Authorization":

        // "API-key": API_KEY,
      },
    });

    if (res.status === 201) {
      const newPost = await res.json();
      return NextResponse.json(newPost);
    } else {
      console.error("Post req is failed with status: ", res.status);
      return NextResponse.error("Post Request failed");
    }
  } catch (err) {
    console.error("Post request error ", err);
    return NextResponse.error("Post Request failed");
  }
}

// update

export async function PUT(request) {
  try {
    const { userId, title, id, body } = await request.json();

    const res = await fetch(`${DATA_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        userId,
        id,
        title,
        body,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.status === 200) {
      const updatedPost = await res.json();
      return NextResponse.json(updatedPost);
    } else {
      return NextResponse.json("PUT request failure");
    }
  } catch (err) {
    return NextResponse.json({ message: "PUT request failure", err });
  }
}

//delete

export async function DELETE(request) {
  try {
    const { id } = await request.json(); //assuming you are deleting this post
    const res = await fetch(`${DATA_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    return NextResponse.json({ message: "Data is Deleted" });
  } catch (err) {
    return NextResponse.json({ message: "Data not found" });
  }
}
