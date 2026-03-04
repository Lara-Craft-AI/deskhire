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

async function sendTelegramNotification(payload: IntakePayload): Promise<{ ok: boolean; error?: string }> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_NOTIFY_CHAT_ID;
  const threadId = process.env.TELEGRAM_NOTIFY_THREAD_ID;

  if (!botToken || !chatId) {
    return { ok: false, error: `Missing env vars: botToken=${!!botToken}, chatId=${!!chatId}` };
  }

  const hireTypes = payload.hireTypeInterest?.join(", ") || "Not specified";
  const message = [
    "🚀 New DeskHire Lead",
    "",
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Company: ${payload.companyName}`,
    payload.companyWebsite ? `Website: ${payload.companyWebsite}` : null,
    payload.industry ? `Industry: ${payload.industry}` : null,
    payload.roleToAutomate ? `\nRole to automate:\n${payload.roleToAutomate}` : null,
    payload.currentTools ? `Tools: ${payload.currentTools}` : null,
    `Hire type interest: ${hireTypes}`,
    payload.additionalNotes ? `\nNotes:\n${payload.additionalNotes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const body: Record<string, string> = {
    chat_id: chatId,
    text: message,
  };
  if (threadId) {
    body.message_thread_id = threadId;
  }

  const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const result = await res.json();
  if (!result.ok) {
    return { ok: false, error: JSON.stringify(result) };
  }
  return { ok: true };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as IntakePayload;

    if (!payload.fullName || !payload.email || !payload.companyName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const tgResult = await sendTelegramNotification(payload);

    return NextResponse.json({ ok: true, telegram: tgResult });
  } catch (err) {
    return NextResponse.json({ error: "Failed to process intake", details: String(err) }, { status: 500 });
  }
}
