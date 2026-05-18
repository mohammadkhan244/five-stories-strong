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
        href: "https://fonts.googleapis.com/css2?family=Gilda+Display&family=Josefin+Sans:wght@300;400;500&display=swap",
      },
    ],
  }),
});

const STRIPE_URL = "https://buy.stripe.com/3cIbJ13Eo4S80wO8Gt4wM05";
const ACCENT = "#C2772F";

function Mark() {
  return (
    <span aria-hidden style={{ color: ACCENT }} className="font-sans font-400 tracking-tight">
      //
    </span>
  );
}

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
          ? "bg-background border-b"
          : "bg-transparent border-b border-transparent"
      }`}
      style={scrolled ? { borderBottomColor: "#E8E4DC" } : undefined}
    >
      <div className="mx-auto w-full max-w-[920px] px-6 flex items-center justify-between h-14">
        <a href="#top" className="flex items-center gap-2 font-sans text-xs tracking-wide font-light">
          <Mark />
          <span>Modern Myths</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 font-sans text-xs tracking-wide text-muted-foreground font-light">
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
          <span aria-hidden>·</span>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
          <span aria-hidden>·</span>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          <span aria-hidden>·</span>
          <a href="#enroll" className="hover:text-foreground transition-colors">Enroll</a>
        </div>
      </div>
    </nav>
  );
}

function CTA() {
  return (
    <a
      href={STRIPE_URL}
      className="inline-flex items-center justify-center px-7 py-4 font-sans text-sm font-medium tracking-wide rounded-[3px] transition-opacity hover:opacity-90"
      style={{ backgroundColor: "#1A1A1A", color: "#FAF8F4" }}
    >
      Enroll — $600
    </a>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <StickyNav />
      <main className="mx-auto w-full max-w-[680px] px-6 py-20 sm:py-28">
        {/* TOP BAR */}
        <p className="flex items-center gap-2 font-sans text-xs tracking-wide font-light text-muted-foreground">
          <Mark />
          <span style={{ fontVariant: "small-caps", letterSpacing: "0.14em" }}>
            Modern Myths · Cohort
          </span>
        </p>

        {/* HERO */}
        <section className="mt-16">
          <p className="label-eyebrow">A 5-week cohort</p>
          <h1 className="mt-6 text-[2.5rem] sm:text-5xl leading-[1.1] tracking-tight font-normal">
            Five Stories in Five Weeks
          </h1>
          <div className="mt-6 h-px w-[60px]" style={{ backgroundColor: ACCENT }} />

          <div className="mt-10 space-y-6 text-lg leading-relaxed">
            <p>
              Last year, when I ran this cohort with marketers, finance professionals,
              environmental scientists, and one seasoned fiction writer, I realized I
              never taught them how to actually write a short story.
            </p>
            <p>
              I just made it easy for them to realize they already know how to write a
              good one.
            </p>
          </div>

          <div className="mt-12">
            <CTA />
            <p className="mt-4 font-sans text-sm text-muted-foreground font-light">
              Enrollment closes Sunday May 31 · Capped at 10 · Starts June 2
            </p>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <div className="py-20 text-center">
          <p
            className="font-sans text-xs text-muted-foreground font-light"
            style={{ fontVariant: "small-caps", letterSpacing: "0.12em" }}
          >
            Five people finished last year. Four had never written fiction before.
          </p>
        </div>

        {/* PREMISE */}
        <section>
          <h2 className="text-3xl leading-tight tracking-tight font-normal">
            Most writers try to finish one story. You'll finish five.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed">
            <p>A novel takes years. A short story takes a week.</p>
            <p>
              You believe "I'm not a real writer until I've finished a novel," so you
              spend a decade in the foothills of Chapter 3, conclude you're a fraud, and
              quit writing entirely.
            </p>
            <p>It's not your fault.</p>
            <p>
              You are a writer. The starting point was wrong. Five finished stories will
              teach you more about how you actually write than five abandoned novels
              ever could.
            </p>
            <p>
              That's the case for short stories. It's a good case. It's also not the
              real reason this cohort exists.
            </p>
          </div>
          <p className="mt-10 text-base italic text-muted-foreground">
            (We'll get to that.)
          </p>
        </section>

        <Divider />

        {/* CONTRAST */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0 sm:divide-x" style={{ ['--tw-divide-opacity' as any]: 1 }}>
          <div className="sm:pr-10" style={{ borderColor: "#E8E4DC" }}>
            <h3 className="text-3xl leading-tight tracking-tight font-normal">
              You, writing alone
            </h3>
            <p className="mt-4 text-base italic text-muted-foreground leading-relaxed">
              Another chapter abandoned. Another file gone quiet. Another year of
              meaning to start.
            </p>
          </div>
          <div className="sm:pl-10" style={{ borderColor: "#E8E4DC" }}>
            <h3 className="text-3xl leading-tight tracking-tight font-normal">
              You, writing with a cohort
            </h3>
            <p className="mt-4 text-base italic text-muted-foreground leading-relaxed">
              Five stories. A real read on every one. Your name on a cover, shipped to
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
              "Each session opens with a 15-minute writing exercise. Three objects, one genre, drawn at random. You can't pre-plan a story about a kettle, a stolen watch, and a foghorn in horror. So you don't plan. You write.",
              "Then we study the craft so you can spot it in the draft you just wrote. Practice first, theory second.",
              "You submit one finished story a week. I read every one and write back.",
              "Week 5: your five stories become a printed anthology. Your name on the cover. Shipped to your door.",
            ].map((text, i) => (
              <li key={i} className="flex gap-6">
                <span
                  className="font-sans text-xs pt-2 tabular-nums tracking-wider font-light"
                  style={{ color: ACCENT, fontVariant: "small-caps" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed flex-1">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <Divider />

        {/* TESTIMONIALS */}
        <section id="testimonials">
          <h2 className="text-3xl leading-tight tracking-tight font-normal">
            What past participants said
          </h2>
          <div className="mt-12 space-y-16">
            <figure>
              <blockquote className="text-xl italic leading-relaxed">
                "Most fiction cohorts rehash old stuff I've seen before. But this had
                material I've never seen. I looked forward to Saturday."
              </blockquote>
              <figcaption className="mt-4 font-sans text-sm text-muted-foreground font-light">
                —{" "}
                <a
                  href="https://substack.com/@theoriginaljohnthewordsmith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-link"
                >
                  John Cook
                </a>
                , 30-year writing veteran, currently publishing his own novel
              </figcaption>
            </figure>
            <figure>
              <blockquote className="text-xl italic leading-relaxed">
                "You'll walk away feeling like you want to write every single day."
              </blockquote>
              <figcaption className="mt-4 font-sans text-sm text-muted-foreground font-light">
                — Julie Howard
              </figcaption>
            </figure>
            <figure>
              <blockquote className="text-xl italic leading-relaxed">
                "One example of what I do differently now is I think about the
                transformation. Without transformation, a story always falls flat."
              </blockquote>
              <figcaption className="mt-4 font-sans text-sm text-muted-foreground font-light">
                —{" "}
                <a
                  href="https://www.themoneymindsetlab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-link"
                >
                  Ceres Chua
                </a>
                , finance creator
              </figcaption>
            </figure>
          </div>
        </section>

        <Divider />

        {/* LOGISTICS */}
        <section>
          <dl className="space-y-5">
            {[
              ["Dates", "June 6 to July 4 (5 weeks)"],
              ["Time", "Saturdays, 1–2pm EST"],
              ["Office hours", "Wednesdays, 7–8pm EST"],
              ["Format", "Live on Google Meet, recorded for participants"],
              ["Cohort size", "Capped at 10"],
              [
                "Included",
                "Live instruction, weekly office hours, written feedback on every submission, printed anthology shipped to your door",
              ],
              ["Price", "$600"],
              ["Enrollment closes", "Sunday May 31"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 py-3 border-b"
                style={{ borderColor: "#E8E4DC" }}
              >
                <dt className="label-eyebrow pt-1">{label}</dt>
                <dd className="text-base leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* THE TURN — no header, extra whitespace */}
        <div
          className="mt-40 sm:mt-56 pt-20 border-t"
          style={{ borderColor: "#E8E4DC" }}
        >
          <section className="space-y-7 text-[1.15rem] sm:text-xl leading-[1.75]">
            <p>
              So you've read this far, and you probably feel like you understand what
              this is now.
            </p>
            <p>That feeling is the real reason this cohort exists.</p>
            <p>
              We read nonfiction and mistake it for understanding. The essay, the
              framework, the take — it goes from our eyes to our brain, it makes sense,
              we move on, and we believe we've absorbed it. We haven't.
            </p>
            <p>
              We've digested it the way we digest a McMuffin. It goes right through,
              every time.
            </p>
            <p>
              We write essays and posts online and think that means we understand it.
              That's better. It's still digesting.
            </p>
            <p>
              We never metabolize what we learn. It never gets into the bloodstream and
              becomes part of how we think.
            </p>
            <p>
              Fiction is how you metabolize what you learn. And it's involuntary — you
              don't get to decide how it happens. It just does. It's why people cry at
              books and feel embarrassed about it. They didn't choose to be moved.
            </p>
            <p>
              You put the thing you can't think your way through into a character and
              watch what they do with it, and something moves that the essay and the
              journal and the framework never could.
            </p>
            <p>
              That's what you'd actually be buying. Not five stories. Not a course.
              Five weeks where the things you've been consuming finally have somewhere
              to go.
            </p>
          </section>
          <p className="mt-24 sm:mt-28 mb-20 text-xl italic leading-relaxed text-center">
            The only time I'm not writing fiction, I'm recovering so I can write fiction.
          </p>
        </div>

        <Divider />

        {/* IS THIS FOR YOU */}
        <section>
          <h2 className="label-eyebrow text-sm">Is this for you?</h2>
          <ul className="mt-10 space-y-10">
            {[
              {
                title:
                  "You've been \"working on a novel\" for over a year and the file's gone quiet.",
                body:
                  "It's not your fault. The starting point was wrong. Keep writing.",
              },
              {
                title: "You've never written fiction but keep thinking you should.",
                body:
                  "Four of the five who finished last year hadn't written a story before they enrolled.",
              },
              {
                title: "You consume constantly and none of it seems to land.",
                body: "That's the thing this cohort is for.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-5">
                <span
                  aria-hidden
                  className="pt-1 font-sans text-lg leading-none"
                  style={{ color: ACCENT }}
                >
                  //
                </span>
                <div className="flex-1">
                  <p className="text-xl leading-snug">{item.title}</p>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <hr className="my-10 border-0 h-px" style={{ backgroundColor: "#E8E4DC" }} />
          <p className="text-base italic leading-relaxed text-muted-foreground">
            This isn't for anyone looking for shortcuts, templates, or a guaranteed path
            to publishing.
          </p>
        </section>

        <Divider />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-3xl leading-tight tracking-tight font-normal">
            Questions
          </h2>
          <Accordion type="single" collapsible className="mt-8 faq-accent">
            {[
              {
                q: "I've never written fiction before. Will this work?",
                a: "Yes. Of the five who finished last year, four had never written fiction.",
              },
              {
                q: "Can I write genre fiction — romantasy, business fiction, poetry?",
                a: "Yes. The genre each week is whatever you draw. Romantasy, horror, literary, poetry, business fiction — the craft applies across all of them. Write what you want to write.",
              },
              {
                q: "What if I miss a session?",
                a: "Every session is recorded. Submitted work gets feedback regardless of attendance, and there are weekly office hours.",
              },
              {
                q: "Is this for people who want to publish?",
                a: "No. This is for people who want to finish. What you do with the stories after is yours.",
              },
              {
                q: "Why is it $600?",
                a: "Five weeks of live instruction, weekly office hours, written feedback on every submission, and a printed anthology shipped to your door. Comparable writing cohorts run $500 to $5,000.",
              },
              {
                q: "What if I drop out?",
                a: "Full refund within the first week, no questions asked.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b"
                style={{ borderColor: "#E8E4DC" }}
              >
                <AccordionTrigger className="text-left text-lg font-normal hover:no-underline py-5 font-serif">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground pb-5 font-serif">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <Divider />

        {/* ABOUT */}
        <section>
          <h2 className="text-3xl leading-tight tracking-tight font-normal">About</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed">
            <p>
              I'm Mohammad. I write Modern Myths, an essay series about the stories we
              mistake for reality. I've written one short story a week since February
              17th, 2020 — 214 and counting, without missing one.
            </p>
            <p>
              I couldn't write for months once. My mind was blank and I hated the idea
              of even opening a page. Then I started writing one story a week, for no
              reason, and the rest of my writing came back the next week.
            </p>
            <p>I built this cohort to put other people inside that, on purpose.</p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="enroll"
          className="mt-24 border-t pt-16 text-center"
          style={{ borderColor: "#E8E4DC" }}
        >
          <p className="text-2xl leading-relaxed">
            Five weeks. Five stories. One book with your name on it.
          </p>
          <div className="mt-10">
            <CTA />
            <p className="mt-4 font-sans text-sm text-muted-foreground font-light">
              Enrollment closes Sunday May 31 · Capped at 10 · Starts June 2
            </p>
          </div>
        </section>

        <footer
          className="mt-24 pt-10 border-t font-sans text-sm text-muted-foreground font-light flex items-center gap-2"
          style={{ borderColor: "#E8E4DC" }}
        >
          <Mark />
          <span>Modern Myths · © 2026 · hello@modernmyths.co</span>
        </footer>
      </main>
    </div>
  );
}

function Divider() {
  return <div className="my-20 sm:my-24 h-px" style={{ backgroundColor: "#E8E4DC" }} />;
}
