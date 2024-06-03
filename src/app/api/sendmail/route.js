// pages/api/send.js
import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req, res) {
  const { Name, Email, Message } = await req.json();
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: Email,
    to: process.env.USER,
    subject: `Contact form submission from ${Name}`,
    html: `<h1>From: ${Email}</h1> <br/> <p>Message:${Message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json("Message sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json("Failed to send email");
  }
}
