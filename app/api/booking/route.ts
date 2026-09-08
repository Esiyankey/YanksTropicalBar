import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, phone, date, guests, eventType } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const lines = [
    `Event type: ${eventType}`,
    `Date: ${date}`,
    guests ? `Guests: ${guests}` : null,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
  ].filter((line) => line !== null);

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Booking from ${name}`,
      text: `You have a new booking request.\n\n${lines.join("\n")}`,
    });
    return NextResponse.json(
      { message: "Booking submitted successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to submit booking." },
      { status: 500 },
    );
  }
}
