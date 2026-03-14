import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to: [process.env.CONTACT_TO_EMAIL!],
    subject: "New contact form message",
    replyTo: email,
    html: `<p><strong>From:</strong> ${email}</p><p>${message.replace(/\n/g, "<br>")}</p>`,
  });

  return NextResponse.json({ ok: true });
}
