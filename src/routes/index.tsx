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
        href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
});

const STRIPE_URL = "https://buy.stripe.com/3cIbJ13Eo4S80wO8Gt4wM05";

const FICTION_PROMPTS: [string, string][] = [
  ["Burned out creatively?", "Write fiction."],
  ["Feeling bored in a way you can't explain?", "Write fiction."],
  ["Tired of content that sounds like everyone else's?", "Write fiction."],
  ["Grieving something?", "Write fiction."],
  ["Anxious about the future?", "Write fiction."],
  ["Angry and don't know why?", "Write fiction."],
  ["Processing a decision you can't talk about yet?", "Write fiction."],
  ["Feeling numb?", "Write fiction."],
  ["Celebrating something you can't quite name?", "Write fiction."],
  ["Stuck in your head?", "Write fiction."],
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
        <a href="#top" className="font-sans text-xs tracking-wide">
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
        {/* TOP BAR */}
        <p className="label-eyebrow">Modern Myths · Cohort</p>

        {/* HERO */}
        <section className="mt-16">
          <p className="label-eyebrow">A 5-week cohort</p>
          <h1 className="mt-6 text-[2.5rem] sm:text-5xl leading-[1.1] tracking-tight font-normal">
            Five Stories in Five Weeks
          </h1>
          <div className="mt-6 h-px w-[60px] bg-foreground" />

          <div className="mt-10 space-y-6 text-lg leading-relaxed">
            <p>
              You're consuming more than ever. Ideas, frameworks, takes, other people's
              stories. You're processing it all — or trying to. But something isn't moving.
            </p>
            <p>Fiction is how it moves.</p>
          </div>

          <div className="mt-12 space-y-4 text-lg leading-[2]">
            {FICTION_PROMPTS.map(([q, a], i) => (
              <p key={i}>
                <em>{q}</em> {a}
              </p>
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
            Fiction is emotional metabolism.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed">
            <p>
              We consume constantly and metabolize almost nothing. The emotions that needed
              somewhere to go — the grief, the anger, the decision you're circling, the
              thing you're celebrating that nobody quite understands — they don't disappear.
              They accumulate.
            </p>
            <p>
              That's not a you problem. That's a container problem. Scrolling gives you
              input with no output. Consuming other people's stories gives you sensation
              without transformation. What you're missing isn't more content. It's a place
              for the emotion to move through.
            </p>
            <p>
              Fiction is that place. Not because you analyze it. Because it works on you
              whether you're paying attention or not. That's why people cry at books and
              feel embarrassed about it — they didn't choose to. The story found what was
              stuck and moved it. Writing fiction works the same way, only faster. You
              don't just receive the story. You build the container. And in building it,
              you find out what you've been carrying.
            </p>
          </div>
          <p className="mt-16 text-xl italic leading-relaxed text-center">
            The novel you abandoned didn't fail you. The container was wrong.
          </p>
        </section>

        <Divider />

        {/* CONTRAST BLOCK */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0 sm:divide-x sm:divide-[var(--rule)]">
          <div className="sm:pr-10">
            <h3 className="text-3xl leading-tight tracking-tight font-normal">
              Writing alone
            </h3>
            <p className="mt-4 text-base italic text-muted-foreground leading-relaxed">
              Another chapter abandoned. Another file gone quiet. Another year of meaning
              to start.
            </p>
          </div>
          <div className="sm:pl-10">
            <h3 className="text-3xl leading-tight tracking-tight font-normal">
              Writing with a container
            </h3>
            <p className="mt-4 text-base italic text-muted-foreground leading-relaxed">
              Five stories. Craft you can feel working. Your name on a cover, shipped to
              your door.
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
              {
                lead: "Each session opens with a 15-minute writing exercise.",
                rest: " Three objects plus one genre, drawn at random. The constraint kills perfectionism — you can't pre-plan a story about a kettle, a stolen watch, and a foghorn in the horror genre. You just write.",
              },
              {
                lead: "Then we study the craft concept you can already spot in the draft you just wrote.",
                rest: " Theory becomes explanatory, not aspirational, because the evidence is already on your page. You don't learn craft in the abstract. You recognize it in something you made five minutes ago.",
              },
              {
                lead: "You submit one finished story per week. I read every one.",
                rest: " Written feedback on every submission. Not notes toward a better draft — a proper read, responded to in writing.",
              },
              {
                lead: "Week 5: your five stories become a printed anthology.",
                rest: " Your name on the cover. Shipped to your door. Not polished pieces — the record of what those five weeks metabolized into.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-6">
                <span className="font-sans text-xs text-muted-foreground pt-2 tabular-nums tracking-wider" style={{ fontVariant: "small-caps" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed flex-1">
                  <em>{item.lead}</em>
                  {item.rest}
                </p>
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

        {/* IS THIS FOR YOU */}
        <section>
          <h2 className="label-eyebrow text-sm">Is this for you?</h2>
          <ul className="mt-10 space-y-10">
            {[
              {
                title: "You've been \"working on a novel\" for over a year and the file's gone quiet.",
                body: "The container is wrong. Not you.",
              },
              {
                title: "You've never written fiction but keep thinking you should.",
                body: "Four of the five who finished last year had never written a story before they enrolled.",
              },
              {
                title: "Something in your life is asking to be processed and you don't have a tool for it.",
                body: "Fiction is that tool. You'll know it's working when you finish the first one.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-5">
                <span aria-hidden className="text-foreground pt-1 text-lg">✓</span>
                <div className="flex-1">
                  <p className="text-lg leading-snug font-semibold">{item.title}</p>
                  <p className="mt-2 text-lg leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <hr className="my-10 border-0 h-px bg-[var(--rule)]" />
          <p className="text-base italic leading-relaxed text-muted-foreground">
            This isn't for anyone looking for shortcuts, templates, or a guaranteed path
            to publishing.
          </p>
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
                "Live instruction, weekly written feedback on submitted work, printed anthology shipped to your door",
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
                q: "Can I write genre fiction — romantasy, erotica, business fiction?",
                a: "Yes. The genre each week is whatever you draw. Romantasy, horror, literary, erotica — the craft concepts apply across all of them. Write what you want to write.",
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
                a: "Five weeks of live instruction, weekly written feedback on every submission, and a printed anthology shipped to your door. Comparable writing cohorts run $500–$5,000.",
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
          <div className="mt-6 space-y-6 text-lg leading-relaxed">
            <p>
              I'm Mohammad. I write Modern Myths, an essay series about the hidden
              stories shaping how people think and decide. I've written 214 short stories
              in 214 weeks — one per week, without missing one.
            </p>
            <p>
              I built this cohort after watching too many writers I respect abandon novels
              because they'd inherited the wrong container. The novel isn't the problem.
              The container is.
            </p>
            <p>
              Last year I realized I never actually taught anyone how to write fiction. I
              showed them they already knew how.
            </p>
          </div>
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
