import { NextResponse } from "next/server";

type IntakePayload = {
  fullName: string;
  email: string;
  companyName: string;
  companyWebsite?: string;
  industry?: string;
  roleToAutomate?: string;
  currentTools?: string;
  additionalNotes?: string;
  hireTypeInterest?: string[];
};

async function sendTelegramNotification(payload: IntakePayload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_NOTIFY_CHAT_ID;
  const threadId = process.env.TELEGRAM_NOTIFY_THREAD_ID;

  if (!botToken || !chatId) return;

  const hireTypes = payload.hireTypeInterest?.join(", ") || "Not specified";
  const message = [
    "🚀 *New DeskHire Lead*",
    "",
    `*Name:* ${payload.fullName}`,
    `*Email:* ${payload.email}`,
    `*Company:* ${payload.companyName}`,
    payload.companyWebsite ? `*Website:* ${payload.companyWebsite}` : null,
    payload.industry ? `*Industry:* ${payload.industry}` : null,
    payload.roleToAutomate ? `\n*Role to automate:*\n${payload.roleToAutomate}` : null,
    payload.currentTools ? `*Tools:* ${payload.currentTools}` : null,
    `*Hire type interest:* ${hireTypes}`,
    payload.additionalNotes ? `\n*Notes:*\n${payload.additionalNotes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const body: Record<string, string> = {
    chat_id: chatId,
    text: message,
    parse_mode: "Markdown",
  };
  if (threadId) {
    body.message_thread_id = threadId;
  }

  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as IntakePayload;

    if (!payload.fullName || !payload.email || !payload.companyName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send Telegram notification (fire and forget — don't block the response)
    sendTelegramNotification(payload).catch((err) =>
      console.error("Telegram notification failed:", err)
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to process intake" }, { status: 500 });
  }
}
