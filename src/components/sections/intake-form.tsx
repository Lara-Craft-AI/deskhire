"use client";

import { FormEvent, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success" | "error";

const hireOptions = ["Admin", "Content", "Sales", "Compliance", "Ops", "Custom"];

const initialForm = {
  fullName: "",
  email: "",
  companyName: "",
  companyWebsite: "",
  industry: "Insurance",
  roleToAutomate: "",
  currentTools: "",
  additionalNotes: "",
  hireTypeInterest: [] as string[]
};

export function IntakeForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  const canSubmit = useMemo(
    () => form.fullName.trim() && form.email.trim() && form.companyName.trim(),
    [form.companyName, form.email, form.fullName]
  );

  const toggleHireType = (value: string) => {
    setForm((prev) => {
      const exists = prev.hireTypeInterest.includes(value);

      return {
        ...prev,
        hireTypeInterest: exists
          ? prev.hireTypeInterest.filter((item) => item !== value)
          : [...prev.hireTypeInterest, value]
      };
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            required
            value={form.fullName}
            onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name *</Label>
          <Input
            id="companyName"
            required
            value={form.companyName}
            onChange={(event) => setForm((prev) => ({ ...prev, companyName: event.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="companyWebsite">Company Website</Label>
          <Input
            id="companyWebsite"
            value={form.companyWebsite}
            onChange={(event) => setForm((prev) => ({ ...prev, companyWebsite: event.target.value }))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Select
          id="industry"
          value={form.industry}
          onChange={(event) => setForm((prev) => ({ ...prev, industry: event.target.value }))}
        >
          <option>Insurance</option>
          <option>Accounting</option>
          <option>Real Estate</option>
          <option>Legal</option>
          <option>Other</option>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="roleToAutomate">What role do you want to automate?</Label>
        <Textarea
          id="roleToAutomate"
          placeholder="Example: Replace a junior admin who manages my inbox, schedules appointments, and follows up with leads."
          value={form.roleToAutomate}
          onChange={(event) => setForm((prev) => ({ ...prev, roleToAutomate: event.target.value }))}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentTools">What tools do you currently use?</Label>
        <Input
          id="currentTools"
          placeholder="Gmail, Salesforce, QuickBooks, etc."
          value={form.currentTools}
          onChange={(event) => setForm((prev) => ({ ...prev, currentTools: event.target.value }))}
        />
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-foreground">Hire Type Interest</legend>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {hireOptions.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm"
            >
              <Checkbox
                checked={form.hireTypeInterest.includes(option)}
                onChange={() => toggleHireType(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="additionalNotes">Anything else we should know?</Label>
        <Textarea
          id="additionalNotes"
          value={form.additionalNotes}
          onChange={(event) => setForm((prev) => ({ ...prev, additionalNotes: event.target.value }))}
        />
      </div>

      <div className="space-y-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={!canSubmit || status === "submitting"}>
          {status === "submitting" ? "Submitting..." : "Get Your Free Consult"}
        </Button>
        <p className="text-sm text-muted-foreground">No payment required. We&apos;ll email you within 24 hours.</p>
        {status === "success" && (
          <p className="text-sm font-medium text-emerald-700">Thanks. We received your intake and will follow up soon.</p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-600">Submission failed. Please try again.</p>
        )}
      </div>
    </form>
  );
}
