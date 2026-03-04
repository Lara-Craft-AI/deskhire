"use client";

import { useState } from "react";

import {
  Briefcase,
  CalendarClock,
  Check,
  CircleDollarSign,
  Clock3,
  HardDriveDownload,
  Lock,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  UserRoundCog,
  Workflow,
  X
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { IntakeForm } from "@/components/sections/intake-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const comparisonRows = [
  ["Annual cost", "$50,000—$150,000", "$8,000/yr + API usage"],
  ["Hours per week", "40 (minus PTO, sick days, meetings)", "168. Every week. Forever."],
  ["Ramp-up", "2-4 weeks of onboarding", "48 hours"],
  ["2 AM coverage", "Not a chance", "Already working"],
  ["Consistency", "Monday energy != Friday energy", "Identical quality, every time"],
  ["Gets sick", "Yes", "No"],
  ["Needs managing", "Yes", "Minimal—we handle most of it"],
  ["Scale to 2x", "Hire another person", "Costs $0 extra"],
  ["You own everything", "They quit, tribal knowledge leaves", "Every file, every config, forever"]
];

const includedCards = [
  {
    title: "Memory that sticks",
    description:
      "Most AI setups constantly forget things. We've figured out the memory architecture that makes it stick—your hire remembers clients, cases, preferences, and how you operate.",
    icon: HardDriveDownload
  },
  {
    title: "Pre-installed tool stack",
    description:
      "Email, calendar, CRM integration, document generation—ready to go. We add domain-specific tools during your build.",
    icon: Workflow
  },
  {
    title: "Custom persona & voice",
    description:
      "Every hire gets a tailored personality, communication style, and decision-making framework. It speaks like your brand.",
    icon: UserRoundCog
  },
  {
    title: "Expert support",
    description:
      "Your hire is backed by our team of AI specialists. When it hits something it can't solve, we handle it directly.",
    icon: Briefcase
  }
];

const securityItems = [
  {
    title: "Isolated infrastructure",
    description: "Dedicated server per client",
    icon: Lock
  },
  {
    title: "Encrypted everything",
    description: "At rest and in transit",
    icon: ShieldCheck
  },
  {
    title: "Managed firewalls",
    description: "Locked down to only needed services",
    icon: Network
  },
  {
    title: "Automated backups",
    description: "Daily with point-in-time recovery",
    icon: HardDriveDownload
  },
  {
    title: "Permission-scoped access",
    description: "Least-privilege, audited",
    icon: Check
  },
  {
    title: "24/7 monitoring",
    description: "We fix it before you notice",
    icon: CalendarClock
  }
];

const roleCards = [
  {
    title: "Admin Hire",
    description:
      "Replace your office admin. Email triage, scheduling, client follow-ups, data entry. The desk work that eats 20 hours a week."
  },
  {
    title: "Content Hire",
    description:
      "Replace your content writer. Blog posts, social media, newsletters, marketing emails. Publishes while you sleep."
  },
  {
    title: "Sales Hire",
    description:
      "Replace your SDR. Lead follow-up within minutes, personalized outreach, CRM updates, meeting booking."
  },
  {
    title: "Compliance Hire",
    description:
      "Replace your compliance clerk. Document prep, filing deadlines, regulatory updates, audit trail maintenance."
  },
  {
    title: "Ops Hire",
    description:
      "Replace your operations manager. Invoicing, vendor follow-ups, internal handoffs, reporting."
  },
  {
    title: "Custom Hire",
    description:
      "Replace... whoever. Tell us the role. If a human does it on a computer, we can probably build a hire for it."
  }
];

const processSteps = [
  {
    title: "Tell us the role",
    description:
      "Free consult—fill out the intake form. What does the person do today? What tools do they use? What does 'good' look like?"
  },
  {
    title: "We scope your hire",
    description:
      "We map your workflows, identify what to automate first, and send you a build plan within 48 hours."
  },
  {
    title: "We build it",
    description:
      "$2,000 setup. We configure the AI, install skills, connect your tools, test everything, and deploy."
  },
  {
    title: "You start using it",
    description: "Your hire goes live. You talk to it like a teammate. It does the work."
  },
  {
    title: "We keep making it better",
    description:
      "$500/mo. We monitor, fix issues, and push improvements from everything we learn across every client."
  }
];

const optionColumns = [
  {
    title: "Option 1: DIY",
    bullets: [
      "Full control",
      "You configure everything",
      "You debug every issue",
      "It never improves unless you improve it"
    ],
    footer: "Great if you're technical and have unlimited time."
  },
  {
    title: "Option 2: Generic \"Managed AI\"",
    bullets: [
      "Someone else runs the server",
      "Generic config, not built for your business",
      "\"Maintenance\" = keeps the lights on",
      "No one is actively making it better"
    ],
    footer: "A server with training wheels."
  },
  {
    title: "Option 3: DeskHire",
    bullets: [
      "Custom-built for your exact workflows",
      "We handle setup, hosting, and maintenance",
      "We actively improve it every month",
      "Production-quality from day one"
    ],
    footer: "You get the employee. We do everything else.",
    featured: true
  }
];

const faqs = [
  {
    question: "How is this different from just using ChatGPT?",
    answer:
      "Same difference as having a word processor vs having a secretary. ChatGPT is a tool you use. Your DeskHire is a worker that uses tools—connected to your email, your CRM, your calendar, doing actual work autonomously."
  },
  {
    question: "Is the consult really free?",
    answer:
      "Yes. We review your workflows, ask discovery questions, and send you a concrete scope plan—no charge, no commitment."
  },
  {
    question: "What do I need to provide?",
    answer:
      "Answers to our intake questions, access to the tools you want automated (email, CRM, etc.), and about 30 minutes for the initial scope call. We handle everything else."
  },
  {
    question: "How fast can my hire be live?",
    answer: "Most go live within one week of scope approval. Some within 48 hours."
  },
  {
    question: "What does the $500/mo cover?",
    answer:
      "Hosting, monitoring, bug fixes, skill updates, and active improvement. We don't just keep the lights on—we make your hire better every month."
  },
  {
    question: "Can I cancel?",
    answer:
      "Month-to-month. No contract. If you leave, we hand over every file, every config, every piece of the system. Zero lock-in."
  },
  {
    question: "Is my data safe?",
    answer:
      "Your hire runs on isolated infrastructure. Nothing is shared between clients. You own your data, your configs, and your system."
  }
];

function SectionHeader({
  title,
  subtitle,
  centered = true
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto mb-10 max-w-3xl text-center md:mb-12" : "mb-10 max-w-3xl md:mb-12"}>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 md:py-3">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-foreground">
          DeskHire
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#comparison" className="transition-colors hover:text-foreground">
            Comparison
          </a>
          <a href="#roles" className="transition-colors hover:text-foreground">
            Roles
          </a>
          <a href="#process" className="transition-colors hover:text-foreground">
            Process
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            FAQ
          </a>
        </nav>
        <Button asChild size="sm" className="hidden md:inline-flex">
          <a href="#consult">Free Consult</a>
        </Button>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="border-t border-border/80 bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="#comparison" className="transition-colors hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
              Comparison
            </a>
            <a href="#roles" className="transition-colors hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
              Roles
            </a>
            <a href="#process" className="transition-colors hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
              Process
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <Button asChild size="sm" className="mt-2 w-fit">
              <a href="#consult" onClick={() => setIsMenuOpen(false)}>
                Free Consult
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-24 md:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(100,116,139,0.25) 1px, transparent 0)",
          backgroundSize: "24px 24px"
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_58%)]"
      />
      <Reveal className="mx-auto max-w-5xl text-center">
        <p className="mb-5 inline-flex rounded-full border border-border bg-card px-4 py-1 text-sm text-muted-foreground">
          Your AI Desk Hire
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent [text-shadow:0_8px_28px_rgba(56,189,248,0.2)]">
            Your next hire doesn&apos;t need a salary
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-lg text-muted-foreground md:text-xl">
          We build you a managed AI employee. It works 24/7, costs 90% less than a human, and gets better every single month
          because we keep training it.
        </p>
        <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Not a chatbot. Not a template. A custom-built digital worker that knows your business, uses your tools, and does
          the actual job—while our team monitors, tunes, and improves it behind the scenes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#consult">Free Consult</a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#consult">$2,000 setup  |  $500/mo  |  no contract</a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section id="problem" className="border-y border-border/70 bg-white/80 px-6 py-16 md:py-20">
      <Reveal className="mx-auto max-w-4xl">
        <SectionHeader title="You know AI can do this work. So why hasn't it?" centered={false} />
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Because there&apos;s a brutal gap between &quot;AI can handle follow-ups&quot; and actually having an AI that handles your
            follow-ups—in your voice, connected to your CRM, every single day without you touching it.
          </p>
          <p>
            Getting there means configuring prompts, wiring up APIs, building memory systems, setting up servers, debugging at
            2 AM when something breaks, and iterating for weeks until the output is actually good.
          </p>
          <p>Most people start, get 60% of the way there, and give up.</p>
          <p>We do all of it. The whole 100%.</p>
          <p>
            You tell us what the role is. We build the entire system, deploy it, and then—here&apos;s the part nobody else does
            we keep improving it every month.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export function ComparisonSection() {
  return (
    <section id="comparison" className="px-6 py-16 md:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeader title="The math is absurd" subtitle="A real comparison. No asterisks." />
        <div className="grid gap-4 rounded-2xl border border-border bg-card/90 p-4 shadow-sm md:p-6">
          <div className="grid grid-cols-1 gap-4 rounded-xl bg-secondary/50 p-4 text-sm font-semibold md:grid-cols-[1.3fr_1fr_1fr] md:text-base">
            <div>Category</div>
            <div>Human Employee</div>
            <div className="text-primary">Your AI Desk Hire</div>
          </div>
          {comparisonRows.map((row) => (
            <div
              key={row[0]}
              className="grid grid-cols-1 gap-3 rounded-xl border border-border/70 bg-white p-4 text-sm md:grid-cols-[1.3fr_1fr_1fr] md:text-base"
            >
              <p className="font-semibold text-foreground">{row[0]}</p>
              <p className="text-muted-foreground">{row[1]}</p>
              <p className="font-medium text-foreground">{row[2]}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function MonthlyImprovementSection() {
  return (
    <section id="improvements" className="px-6 py-16 md:py-20">
      <Reveal className="mx-auto max-w-4xl rounded-2xl border border-blue-200 bg-blue-50/70 p-8 md:p-10">
        <SectionHeader title="The part that makes this unfair" centered={false} />
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            A normal AI setup is frozen in time. You configure it once, it does that thing, and it never gets better unless
            you put in more work.
          </p>
          <p>
            Your DeskHire has a team behind it. Every month, we actively improve your system. Not just &quot;keep it running&quot;—
            genuinely make it better. New techniques we discover, better prompting strategies, smarter memory architectures,
            workflow optimizations from managing AI employees across dozens of clients.
          </p>
          <p>Your AI employee is getting better every month whether you do anything or not.</p>
        </div>
      </Reveal>
    </section>
  );
}

export function IncludedSection() {
  return (
    <section id="included" className="px-6 py-16 md:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeader title="What you get that a vanilla AI setup doesn't" />
        <div className="grid gap-5 md:grid-cols-2">
          {includedCards.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 90}>
              <Card className="h-full border-border/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <item.icon className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed md:text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function SecuritySection() {
  return (
    <section id="security" className="border-y border-border/70 bg-white/80 px-6 py-16 md:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeader title="Built secure from day one" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityItems.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 80}>
              <Card>
                <CardHeader>
                  <item.icon className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function RolesSection() {
  return (
    <section id="roles" className="px-6 py-16 md:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeader title="Who do you want to hire?" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roleCards.map((role, index) => (
            <Reveal key={role.title} delayMs={index * 80}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed md:text-base">{role.description}</CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="px-6 py-16 md:py-20">
      <Reveal className="mx-auto max-w-5xl">
        <SectionHeader title="From intake to employee in days" />
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delayMs={index * 90}>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                    {index + 1}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed md:text-base">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function OptionsSection() {
  return (
    <section id="options" className="border-y border-border/70 bg-white/80 px-6 py-16 md:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeader title="Three ways to run AI. Only one you actually want." />
        <div className="grid gap-5 lg:grid-cols-3">
          {optionColumns.map((column, index) => (
            <Reveal key={column.title} delayMs={index * 90}>
              <Card className={column.featured ? "border-primary bg-primary/5 shadow-[0_20px_40px_-24px_hsl(var(--primary))]" : ""}>
                <CardHeader>
                  <CardTitle>{column.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {column.bullets.map((bullet, bulletIndex) => (
                    <div key={`${bullet}-${bulletIndex}`} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{bullet}</span>
                    </div>
                  ))}
                  <p className="pt-2 text-sm font-medium text-foreground">{column.footer}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function ConsultSection() {
  return (
    <section id="consult" className="px-6 py-16 md:py-20">
      <Reveal className="mx-auto max-w-4xl">
        <SectionHeader
          title="Start here—Free Consult"
          subtitle="Tell us about the role and we'll follow up within 24 hours."
        />
        <Card>
          <CardContent className="p-6 md:p-8">
            <IntakeForm />
          </CardContent>
        </Card>
      </Reveal>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="px-6 py-16 md:py-20">
      <Reveal className="mx-auto max-w-4xl">
        <SectionHeader title="Questions" />
        <Accordion className="space-y-3">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-white/80 px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-foreground">DeskHire</p>
          <p>Your AI Desk Hire.</p>
        </div>
        <p>Copyright 2026</p>
        <div className="flex items-center gap-4">
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Terms of Service
          </a>
        </div>
        <a href="mailto:hello@deskhire.ai" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
          <Mail className="h-4 w-4" />
          hello@deskhire.ai
        </a>
      </div>
    </footer>
  );
}

export function TrustBar() {
  return (
    <section className="px-6 pb-4">
      <Reveal className="mx-auto max-w-6xl rounded-xl border border-border/80 bg-white/90 p-4 text-center text-sm text-muted-foreground md:text-base">
        Built for insurance agents, accountants, and real estate teams that need trustworthy automation—not experiments.
      </Reveal>
    </section>
  );
}

export function ValueStrip() {
  return (
    <section className="px-6 pb-6">
      <Reveal className="mx-auto grid max-w-6xl gap-4 rounded-2xl border border-border bg-card p-5 md:grid-cols-3">
        <div className="flex items-center gap-3 rounded-lg border border-border/70 bg-background p-3">
          <CircleDollarSign className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">90% lower cost than a full-time hire.</p>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-border/70 bg-background p-3">
          <Clock3 className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">24/7 execution with consistent quality.</p>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-border/70 bg-background p-3">
          <Briefcase className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">Custom-built for your real workflows.</p>
        </div>
      </Reveal>
    </section>
  );
}
