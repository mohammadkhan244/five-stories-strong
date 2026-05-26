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
const RULE = "#B8A87E";

function Mark() {
  return (
    <span aria-hidden style={{ color: ACCENT }} className="font-sans font-normal tracking-tight">
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
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200"
      style={
        scrolled
          ? { backgroundColor: "#DBCEB4", borderBottom: `1px solid ${RULE}` }
          : { backgroundColor: "transparent", borderBottom: "1px solid transparent" }
      }
    >
      <div className="mx-auto w-full max-w-[920px] px-6 flex items-center justify-between h-14">
        <a href="#top" className="flex items-center gap-2 font-sans text-xs tracking-wide font-light">
          <Mark />
          <span>Modern Myths</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 font-sans text-xs tracking-wide font-light">
          <a href="#how-it-works" className="hover:opacity-70 transition-opacity">How it works</a>
          <span aria-hidden>·</span>
          <a href="#testimonials" className="hover:opacity-70 transition-opacity">Testimonials</a>
          <span aria-hidden>·</span>
          <a href="#faq" className="hover:opacity-70 transition-opacity">FAQ</a>
          <span aria-hidden>·</span>
          <a href="#enroll" className="hover:opacity-70 transition-opacity">Enroll</a>
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
      style={{ backgroundColor: "#1F1B16", color: "#FAF5EA" }}
    >
      Enroll — $600
    </a>
  );
}

function Divider() {
  return <div className="my-20 sm:my-24 h-px" style={{ backgroundColor: RULE }} />;
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <StickyNav />
      <main className="mx-auto w-full max-w-[680px] px-6 py-20 sm:py-28">
        {/* TOP BAR */}
        <p className="flex items-center gap-2 font-sans text-xs tracking-wide font-light">
          <Mark />
          <span style={{ fontVariant: "small-caps", letterSpacing: "0.14em" }}>
            Modern Myths · Cohort
          </span>
        </p>

        {/* HERO */}
        <section className="mt-16">
          <p
            className="font-sans"
            style={{
              color: "#1F1B16",
              fontVariant: "small-caps",
              letterSpacing: "0.18em",
              fontWeight: 500,
              fontSize: "0.95rem",
              lineHeight: 1.3,
            }}
          >
            For people who consume more than they create
          </p>
          <p
            className="mt-2 font-sans"
            style={{
              color: "#1F1B16",
              fontVariant: "small-caps",
              letterSpacing: "0.14em",
              fontWeight: 300,
              fontSize: "0.75rem",
              opacity: 0.75,
            }}
          >
            A 5-week cohort
          </p>
          <h1 className="mt-6 text-[2.5rem] sm:text-5xl leading-[1.1] tracking-tight font-normal">
            Five Stories in Five Weeks
          </h1>
          <div className="mt-6 h-px w-[60px]" style={{ backgroundColor: ACCENT }} />

          <div className="mt-10 space-y-6 text-lg leading-relaxed">
            <p>
              Last year, when I ran this cohort with marketers, finance professionals, environmental scientists, and one seasoned fiction writer,  I realized that I never taught them how to actually write a short story.
            </p>
            <p>
              I just made it easy for them to realize they already know how to write a good one.
            </p>
          </div>

          <div className="mt-12">
            <CTA />
            <p className="mt-4 font-sans text-sm font-light">
              Enrollment closes Sunday May 31 · Capped at 10 · Starts June 6
            </p>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <div className="py-20 text-center">
          <p
            className="font-sans text-xs font-light"
            style={{ fontVariant: "small-caps", letterSpacing: "0.12em" }}
          >
            Five people finished last year. Four had never written fiction before.
          </p>
        </div>

        {/* PREMISE */}
        <section>
          <h2 className="text-3xl leading-tight tracking-tight font-normal">
            Where most writers try to finish one story. You'll finish five.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed">
            <p>A novel takes years. A short story takes a week.</p>
            <p>
              You believe that “I’m not a real writer until I’ve finished a novel”, so you spend a decade in the foothills of Chapter 3 and conclude you’re a fraud and quit writing entirely.
            </p>
            <p>It’s not your fault.</p>
            <p>
              You are a writer, just that the starting point was wrong. Five finished stories will teach you more about how you actually write than five abandoned novels ever could.
            </p>
            <p>
              That's the case for short stories. It's a good case, but it's also not the real reason this cohort exists.
            </p>
            <p>(We'll get to that later)</p>
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
              "Each session opens with a 15-minute random writing exercise. Like three objects, one genre, drawn at random. You can't pre-plan a story about a kettle, a stolen watch, and a foghorn in horror. So you don't plan. You write.",
              "Then we study the craft so you can already spot it in the draft you just wrote. Practice first, theory second.",
              "You submit one finished story a week. I read every one. And give feedback..",
              "Week 5: your five stories become a printed anthology. Your name on the cover. Shipped to your door.",
            ].map((text, i) => (
              <li key={i} className="flex gap-6">
                <span
                  className="font-sans text-xs pt-2 tabular-nums tracking-wider font-light"
                  style={{ color: "#8A4F18", fontVariant: "small-caps" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed flex-1">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <Divider />

        {/* WHERE TO GO INSTEAD */}
        <section>
          <h2 className="text-3xl leading-tight tracking-tight font-normal">
            This might not be for you. If so, here's where I'd send you.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed">
            <p>
              If you want the closest thing to an MFA workshop without the MFA, go to{" "}
              <a
                href="https://www.writerstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                The Writers Studio
              </a>
              . Philip Schultz built it in 1987 and their method — borrowing voices to find your own — is genuinely deep. Ten weeks, a written critique on your work every single week. If you want to be taught, rigorously, over a real arc, they're spectacular at it. The tradeoff is time and commitment: it's a long, serious haul, and you finish with sharper craft, not a finished body of work.
            </p>
            <p>
              If you want a broad foundation from a name you can trust, go to{" "}
              <a
                href="https://www.writingclasses.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                Gotham Writers
              </a>
              . Their Fiction I has given thousands of people their first real grounding in how fiction actually works. It's the best generalist on-ramp there is. The tradeoff is that it's a generalist on-ramp — bigger groups, fundamentals, one or two stories, no artifact at the end.
            </p>
            <p>
              If you want prestige and you're willing to earn your spot, apply to the{" "}
              <a
                href="https://kenyonreview.org/event/summer-online-writers-workshops/"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                Kenyon Review
              </a>{" "}
              workshop. It's one of the best weeks of literary instruction in the country, taught by people whose names are in Best American. The tradeoff is obvious: you have to apply and be selected, it's one intensive week, and it costs accordingly.
            </p>
            <p>
              I mean all of that. Those are great programs. I'd send the right person to any of them tomorrow.
            </p>
          </div>

          <p className="my-16 text-xl sm:text-2xl leading-relaxed">
            Here's the only thing none of them do. You walk out of all three a better writer. You walk out of none of them holding a book with five of your finished stories in it and your name on the cover.
          </p>

          <p className="text-lg leading-relaxed">
            That's not better or worse. It's a different promise. They make you sharper. This makes you finished. If sharper is what you need, go — genuinely, go. If you're tired of being someone who hasn't finished anything, stay.
          </p>
        </section>

        <Divider />


        {/* TESTIMONIALS */}
        <section id="testimonials">
          <h2 className="text-3xl leading-tight tracking-tight font-normal">
            Here’s what past students have said
          </h2>
          <div className="mt-12 space-y-16">
            <figure>
              <blockquote className="text-xl italic leading-relaxed">
                "Most fiction cohorts rehash old stuff I've seen before. But this had material I've never seen. I looked forward to Saturday."
              </blockquote>
              <figcaption className="mt-4 font-sans text-sm font-light">
                —{" "}
                <a
                  href="https://substack.com/@theoriginaljohnthewordsmith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-link"
                >
                  John Cook, 30-year writing veteran, currently publishing his own novel
                </a>
              </figcaption>
            </figure>
            <figure>
              <blockquote className="text-xl italic leading-relaxed">
                "You'll walk away feeling like you want to write every single day."
              </blockquote>
              <figcaption className="mt-4 font-sans text-sm font-light">
                — Julie Howard
              </figcaption>
            </figure>
            <figure>
              <blockquote className="text-xl italic leading-relaxed">
                "One example of what I do differently now is I think about the transformation. Without transformation, a story always falls flat."
              </blockquote>
              <figcaption className="mt-4 font-sans text-sm font-light">
                —{" "}
                <a
                  href="https://www.themoneymindsetlab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-link"
                >
                  Ceres Chua, finance creator
                </a>
              </figcaption>
            </figure>
          </div>
        </section>

        <Divider />

        {/* LOGISTICS */}
        <section>
          <dl className="space-y-5">
            {[
              ["Dates", "June 6 – early July (5 weeks)"],
              [
                "Time",
                "Every Saturday, 1-2pm EST.\nOffice Hours: Every Wednesday 7-8pm EST",
              ],
              ["Format", "Live on Google Meets, recorded for participants"],
              ["Cohort Size", "Capped at 10"],
              [
                "Included",
                "Live instruction, weekly written feedback on submitted work, printed anthology shipped to your door",
              ],
              ["Price", "$600"],
              ["Enrollment closes", "Sunday May 31"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 py-3 border-b"
                style={{ borderColor: RULE }}
              >
                <dt className="label-eyebrow pt-1">{label}</dt>
                <dd className="text-base leading-relaxed whitespace-pre-line">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* THE TURN — no header, extra whitespace */}
        <div
          className="mt-40 sm:mt-56 pt-20 border-t"
          style={{ borderColor: RULE }}
        >
          <section className="space-y-7 text-[1.15rem] sm:text-xl leading-[1.75]">
            <p>
              So you’ve read this far, and you probably feel like you understand what this is now.
            </p>
            <p>That feeling is the real reason this cohort exists.</p>
            <p>We read nonfiction and mistake it for understanding.</p>
            <p>
              The essay, the framework, the take, and it goes in our eyes to our brain, and it makes sense. We move on, and we believe we've absorbed it. But we haven't.
            </p>
            <p>
              We’ve digested it the way we digest a McMuffin. Goes right through you each time.
            </p>
            <p>We write essays or posts online and think we are starting to understand it.</p>
            <p className="pt-6">
              But we never metabolize what we learn. It never gets into the bloodstream and becomes part of how we think.
              <br />
              Fiction is how you metabolize what you learn.
            </p>
            <p>
              And it’s involuntary. You don’t get to decide how it happens, it just does. It’s why people cry at books and feel embarrassed about it. They didn’t choose to get impacted this way.
            </p>
            <p>
              You put the thing you can't think your way through into a character and watch what they do with it, and something moves that the essay and the journal and the framework never could.
            </p>
            <p>That's what you'd actually be buying.</p>
            <p>
              Not five stories. Not a course.
              <br />
              Five weeks where the things you've been consuming in your mind finally have somewhere to go.
            </p>
            <p>
              A way to process what’s in your head in a way other writing styles cannot.
            </p>
          </section>
        </div>

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
                style={{ borderColor: RULE }}
              >
                <AccordionTrigger className="text-left text-lg font-normal hover:no-underline py-5 font-serif">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed pb-5 font-serif">
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
              I'm Mohammad. I write Modern Myths, an essay series about the stories we mistake for reality. I've written short stories since Feb 17th, 2020 (214 strong).
            </p>
            <p>
              I couldn't write for months. My mind was blank and I hated the idea of even pulling up a page. Then I started writing one story a week just because, and the rest of my writing came back the next week.
            </p>
            <p>I built this cohort to put other people inside that, on purpose.</p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="enroll"
          className="mt-24 border-t pt-16 text-center"
          style={{ borderColor: RULE }}
        >
          <p className="text-2xl leading-relaxed">
            Five weeks. Five stories. One book with your name on it.
          </p>
          <p className="mt-12 text-base sm:text-lg italic leading-relaxed">
            This isn't for anyone looking for shortcuts, templates, or a guaranteed path to publishing.
          </p>
          <div className="mt-12">
            <CTA />
            <p className="mt-4 font-sans text-sm font-light">
              Enrollment closes Sunday May 31 · Capped at 10 · Starts June 6
            </p>
          </div>
        </section>

        <footer
          className="mt-24 pt-10 border-t font-sans text-sm font-light flex items-center gap-2"
          style={{ borderColor: RULE }}
        >
          <Mark />
          <span>Modern Myths · © 2026 · hello@modernmyths.co</span>
        </footer>
      </main>
    </div>
  );
}
