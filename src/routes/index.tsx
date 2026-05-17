import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Five Stories in Five Weeks — Modern Myths" },
      {
        name: "description",
        content:
          "A five-week writing cohort. Finish five short stories. Receive a printed anthology with your name on the cover.",
      },
      { property: "og:title", content: "Five Stories in Five Weeks — Modern Myths" },
      {
        property: "og:description",
        content:
          "A five-week writing cohort. Finish five short stories. Receive a printed anthology with your name on the cover.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
});

const STRIPE_URL = "https://buy.stripe.com/3cIbJ13Eo4S80wO8Gt4wM05";

const FICTION_PROMPTS = [
  "Burned out creatively? Write fiction.",
  "Feeling bored? Write fiction.",
  "Tired of doomscrolling? Write fiction.",
  "Grieving something? Write fiction.",
  "Anxious about the future? Write fiction.",
  "Angry and don't know why? Write fiction.",
  "Processing a decision? Write fiction.",
  "Feeling numb? Write fiction.",
  "Celebrating something you can't explain? Write fiction.",
  "Stuck in your head? Write fiction.",
];

function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-background border-b border-[var(--rule)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-[920px] px-6 flex items-center justify-between h-14">
        <a href="#top" className="font-serif text-base">
          Modern Myths
        </a>
        <div className="hidden sm:flex items-center gap-6 font-sans text-xs tracking-wide text-muted-foreground">
          <a href="#how-it-works" className="hover:text-foreground transition-colors">
            How it works
          </a>
          <span aria-hidden>·</span>
          <a href="#testimonials" className="hover:text-foreground transition-colors">
            Testimonials
          </a>
          <span aria-hidden>·</span>
          <a href="#faq" className="hover:text-foreground transition-colors">
            FAQ
          </a>
          <span aria-hidden>·</span>
          <a href="#enroll" className="hover:text-foreground transition-colors">
            Enroll
          </a>
        </div>
      </div>
    </nav>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <StickyNav />
      <main className="mx-auto w-full max-w-[680px] px-6 py-20 sm:py-28">
        {/* HERO */}
        <section>
          <p className="label-eyebrow">Modern Myths · Cohort</p>
          <h1 className="mt-8 text-[2.5rem] sm:text-5xl leading-[1.1] tracking-tight font-normal">
            Five stories in five weeks.
          </h1>
          <p className="mt-6 text-xl italic text-muted-foreground">
            Anthology in your hands.
          </p>

          <div className="mt-12 space-y-4 text-lg leading-[2]">
            {FICTION_PROMPTS.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <p className="mt-16 text-xl italic leading-relaxed">
            "The only time I'm not writing fiction, I'm recovering so I can write fiction."
          </p>

          <div className="mt-12">
            <a
              href={STRIPE_URL}
              className="inline-flex items-center justify-center bg-primary px-7 py-4 font-sans text-sm font-medium tracking-wide text-primary-foreground rounded-[3px] transition-opacity hover:opacity-90"
            >
              Enroll — $600
            </a>
            <p className="mt-4 font-sans text-sm text-muted-foreground">
              Enrollment closes Sunday May 31 · Capped at 10 · Starts June 2
            </p>
          </div>
        </section>

        {/* SOCIAL PROOF BAR */}
        <div className="py-20 text-center">
          <p
            className="font-sans text-xs text-muted-foreground"
            style={{ fontVariant: "small-caps", letterSpacing: "0.12em" }}
          >
            Five writers finished last year. Four had never written fiction before.
          </p>
        </div>

        {/* PREMISE */}
        <section>
          <h2 className="text-3xl leading-tight tracking-tight font-normal">
            Most writers try to finish one thing. You'll finish five.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed">
            <p>
              A novel takes years. A short story takes a week. The default narrative says
              you're not a real writer until you've finished a novel, so most people spend
              a decade in the foothills of Chapter 3 and call themselves frauds when they
              put the draft down.
            </p>
            <p>
              The default narrative is wrong. Finishing teaches what starting cannot. Five
              finished stories will tell you more about your voice than five abandoned
              novels ever could.
            </p>
          </div>
        </section>

        <Divider />

        {/* CONTRAST BLOCK */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0 sm:divide-x sm:divide-[var(--rule)]">
          <div className="sm:pr-10">
            <h3 className="text-3xl leading-tight tracking-tight font-normal">
              Writing alone
            </h3>
            <p className="mt-4 text-base italic text-muted-foreground leading-relaxed">
              Another chapter abandoned. Another file gone quiet.
            </p>
          </div>
          <div className="sm:pl-10">
            <h3 className="text-3xl leading-tight tracking-tight font-normal">
              Writing with a cohort
            </h3>
            <p className="mt-4 text-base italic text-muted-foreground leading-relaxed">
              Five stories. Your name on a cover. Shipped to your door.
            </p>
          </div>
        </section>

        <Divider />

        {/* HOW IT WORKS */}
        <section id="how-it-works">
          <h2 className="text-3xl leading-tight tracking-tight font-normal">
            How it works
          </h2>
          <ol className="mt-10 space-y-10">
            {[
              "Each session opens with a 15-minute writing exercise. Three objects plus one genre. The constraint kills perfectionism.",
              "Then we study the craft concept you can already spot in the draft you just wrote. Theory becomes explanatory, not aspirational.",
              "You submit one finished story per week. I read every one. Weekly written feedback.",
              "Week 5: your five stories are collected into a printed anthology. Your name on the cover. Shipped to you.",
            ].map((text, i) => (
              <li key={i} className="flex gap-6">
                <span className="font-sans text-sm text-muted-foreground pt-1 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed flex-1">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <Divider />

        {/* TESTIMONIALS */}
        <section id="testimonials" className="space-y-16">
          {[
            {
              quote:
                "Most fiction cohorts rehash old stuff I've seen before. But this had material I've never seen. I looked forward to Saturday.",
              name: "John Cook",
              role: "30-year writing veteran, currently publishing his own novel",
            },
            {
              quote:
                "You'll walk away feeling like you want to write every single day.",
              name: "Julie Howard",
              role: null,
            },
            {
              quote:
                "One example of what I do differently now is I think about the transformation. Without transformation, a story always falls flat.",
              name: "Ceres Chua",
              role: "finance creator",
            },
          ].map((t, i) => (
            <figure key={i}>
              <blockquote className="text-xl italic leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 font-sans text-sm text-muted-foreground">
                — {t.name}
                {t.role ? `, ${t.role}` : ""}
              </figcaption>
            </figure>
          ))}
        </section>

        <Divider />

        {/* LOGISTICS */}
        <section>
          <dl className="space-y-5">
            {[
              ["Dates", "June 2 – early July (5 weeks)"],
              ["Time", "Weekend afternoons, 60 minutes per session"],
              ["Format", "Live on Zoom, recorded for participants"],
              ["Size", "Capped at 10"],
              [
                "Included",
                "Live instruction, weekly feedback on submitted work, printed anthology shipped to your door",
              ],
              ["Price", "$600"],
              ["Enrollment closes", "Sunday May 31"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-6 py-3 border-b border-[var(--rule)]"
              >
                <dt className="label-eyebrow pt-1">{label}</dt>
                <dd className="text-base leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Divider />

        {/* WHO IT'S FOR — check rows */}
        <section>
          <ul className="space-y-8">
            {[
              "You've been \"working on a novel\" for over a year and the file's gone quiet. The container is wrong. Not you.",
              "You've never written fiction but keep thinking you should. Four of the five who finished last year had never written fiction.",
              "Something in your life is asking to be processed and you don't have a tool for it. Fiction is that tool.",
            ].map((text, i) => (
              <li key={i} className="flex gap-5 text-lg leading-relaxed">
                <span aria-hidden className="text-primary pt-0.5">✓</span>
                <p className="flex-1">{text}</p>
              </li>
            ))}
          </ul>
          <hr className="my-10 border-0 h-px bg-[var(--rule)]" />
          <p className="text-base italic leading-relaxed text-muted-foreground">
            This isn't for anyone looking for shortcuts, templates, or a guaranteed path to publishing.
          </p>
        </section>

        <Divider />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-3xl leading-tight tracking-tight font-normal">
            Questions
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {[
              {
                q: "I've never written fiction before. Will this work?",
                a: "Yes. Of the five who finished last year, four had never written fiction.",
              },
              {
                q: "Can I write genre fiction — romantasy, erotica, business-flavored stories?",
                a: "Yes. Each session we draw a genre at random for the exercise, so you'll write across romantasy, horror, literary, whatever comes up. The craft skills we practice apply to all of them. Write what you want to write.",
              },
              {
                q: "What if I miss a session?",
                a: "Every session is recorded. Submitted work gets feedback regardless of attendance.",
              },
              {
                q: "Is this for people who want to publish?",
                a: "No. This is for people who want to finish. What you do with the stories after is yours.",
              },
              {
                q: "Why is it $600?",
                a: "Five weeks of live instruction, weekly written feedback, and a printed anthology shipped to your door. Comparable writing cohorts run $500 to $5,000.",
              },
              {
                q: "What if I drop out?",
                a: "Full refund within the first week, no questions asked.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-[var(--rule)]"
              >
                <AccordionTrigger className="text-left text-lg font-normal hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <Divider />

        {/* ABOUT */}
        <section>
          <h2 className="label-eyebrow">About</h2>
          <p className="mt-6 text-lg leading-relaxed">
            I'm Mohammad. I write Modern Myths, an essay series about the hidden stories
            shaping how people think and decide. I've written 214 short stories in 214
            weeks. I built this cohort after watching too many writers I respect abandon
            novels because they'd inherited the wrong container.
          </p>
        </section>

        {/* FINAL CTA */}
        <section id="enroll" className="mt-24 border-t border-[var(--rule)] pt-16">
          <p className="text-2xl italic leading-relaxed">
            Five weeks. Five stories. One book with your name on it.
          </p>
          <div className="mt-10">
            <a
              href={STRIPE_URL}
              className="inline-flex items-center justify-center bg-primary px-7 py-4 font-sans text-sm font-medium tracking-wide text-primary-foreground rounded-[3px] transition-opacity hover:opacity-90"
            >
              Enroll — $600
            </a>
            <p className="mt-4 font-sans text-sm text-muted-foreground">
              Enrollment closes Sunday May 31 · Capped at 10 · Starts June 2
            </p>
          </div>
        </section>

        <footer className="mt-24 pt-10 border-t border-[var(--rule)] font-sans text-sm text-muted-foreground">
          Modern Myths · © 2026 · hello@modernmyths.co
        </footer>
      </main>
    </div>
  );
}

function Divider() {
  return <div className="my-20 sm:my-24 h-px bg-[var(--rule)]" />;
}
