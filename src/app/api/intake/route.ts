import { promises as fs } from "fs";
import path from "path";

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

const submissionsPath = path.join(process.cwd(), "data", "intake-submissions.json");

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

    await fs.mkdir(path.dirname(submissionsPath), { recursive: true });

    let existing: IntakePayload[] = [];

    try {
      const raw = await fs.readFile(submissionsPath, "utf8");
      existing = JSON.parse(raw) as IntakePayload[];
      if (!Array.isArray(existing)) {
        existing = [];
      }
    } catch {
      existing = [];
    }

    existing.push(submission);
    await fs.writeFile(submissionsPath, JSON.stringify(existing, null, 2), "utf8");

    console.log("DeskHire intake submission", submission);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to process intake" }, { status: 500 });
  }
}
