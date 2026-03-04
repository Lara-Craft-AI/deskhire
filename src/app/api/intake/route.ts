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

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as IntakePayload;

    if (!payload.fullName || !payload.email || !payload.companyName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const submission = {
      ...payload,
      submittedAt: new Date().toISOString()
    };

    console.log("DeskHire intake submission", submission);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to process intake" }, { status: 500 });
  }
}
