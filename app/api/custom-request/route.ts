import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const description = formData.get("description") as string;
  const material = formData.get("material") as string;
  const quantity = formData.get("quantity") as string;
  const color = formData.get("color") as string;
  const notes = formData.get("notes") as string;

  if (!name || !email || !description) {
    return NextResponse.redirect(new URL("/custom?error=1", req.url));
  }

  try {
    await transporter.sendMail({
      from: `"Dach3D" <${process.env.GMAIL_USER}>`,
      to: "dach3dprint@gmail.com",
      subject: `New Custom Print Request from ${name}`,
      html: `
        <h2>New Custom Print Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
          <tr><td style="padding:8px;font-weight:bold;width:160px;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Description</td><td style="padding:8px;">${description}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;">Material</td><td style="padding:8px;">${material}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Quantity</td><td style="padding:8px;">${quantity}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;">Color</td><td style="padding:8px;">${color || "Not specified"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Notes</td><td style="padding:8px;">${notes || "None"}</td></tr>
        </table>
      `,
    });

    return NextResponse.redirect(new URL("/custom/success", req.url));
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.redirect(new URL("/custom?error=1", req.url));
  }
}
