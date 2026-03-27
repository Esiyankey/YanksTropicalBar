import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Client Message: ${subject}`,
      text: ` ${message} .This message was sent on ${new Date().toISOString()} from ${name}. Contact email: ${email}`,
    });
    return NextResponse.json(
      { message: "Contact Message submitted successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to submit contact message." },
      { status: 500 },
    );
  }
}
