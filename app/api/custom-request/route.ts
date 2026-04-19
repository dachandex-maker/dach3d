import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const description = formData.get("description");

  if (!name || !email || !description) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // TODO: send email notification or save to database
  console.log("Custom print request received:", { name, email, description });

  return NextResponse.redirect(
    new URL("/custom/success", req.url)
  );
}
