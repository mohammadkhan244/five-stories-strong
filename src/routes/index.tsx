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
          "For writers who stopped trusting their own thinking. Five stories, five weeks. A printed anthology with your name on the cover.",
      },
      {
        property: "og:image",
        content: "https://imgur.com/a/JMsZmil",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:description",
        content:
          "For writers who stopped trusting their own thinking. Five stories, five weeks. A printed anthology with your name on the cover.",
      },
      {
        name: "twitter:image",
        content: "https://imgur.com/a/JMsZmil",
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

const STRIPE_URL = "https://buy.stripe.com/7sY4gz3Eo98ogvM5uh4wM07";
const ACCENT = "#C2772F";
const LINK = "#8B4513";
const RULE = "#B8A87E";
const KRAFT_BASE = "#DBCEB4";
const KRAFT_MID = "#D4C5A6";
const KRAFT_DEEP = "#CFBE9C";

function Band({
  bg,
  children,
  className = "",
  id,
}: {
  bg: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} style={{ backgroundColor: bg }} className={className}>
      <div className="mx-auto w-full max-w-[680px] px-6">{children}</div>
    </div>
  );
}

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
          <a href="#how-it-works" style={{ color: LINK }} className="hover:opacity-70 transition-opacity">How it works</a>
          <span aria-hidden>·</span>
          <a href="#faq" style={{ color: LINK }} className="hover:opacity-70 transition-opacity">FAQ</a>
          <span aria-hidden>·</span>
          <a href="#enroll" style={{ color: LINK }} className="hover:opacity-70 transition-opacity">Enroll</a>
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
    <div id="top" className="min-h-screen text-foreground" style={{ backgroundColor: KRAFT_BASE }}>
      <main className="pt-6 sm:pt-8">
        {/* BAND 1: TOP BAR + HERO + SOCIAL PROOF — Base */}
        <Band bg={KRAFT_BASE}>
          <p className="flex items-center gap-2 font-sans text-xs tracking-wide font-light">
            <Mark />
            <span style={{ fontVariant: "small-caps", letterSpacing: "0.14em" }}>
              Modern Myths · Cohort
            </span>
          </p>

          <section className="mt-6 sm:mt-8">
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
              For writers who stopped trusting their own thinking.
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
              Write Five Stories<br />in Five Weeks
            </h1>
            <div className="mt-6 h-px w-[60px]" style={{ backgroundColor: ACCENT }} />

            <p className="mt-8 font-serif italic text-xl sm:text-2xl leading-snug">
              A printed anthology of your work in five weeks. Living proof that what you think is worth saying.
            </p>

            <div className="mt-10">
              <a
                href={STRIPE_URL}
                className="inline-flex items-center justify-center px-7 py-4 font-sans text-sm font-medium tracking-wide rounded-[3px] transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#1F1B16", color: "#FAF5EA" }}
              >
                Take Your Seat — $600
              </a>
              <p className="mt-4 font-sans text-sm font-light">
                Enrollment open · Capped at 10 · Starts Saturday, August 1
              </p>
            </div>

            <div className="mt-12 space-y-6 text-lg leading-relaxed">
              <p>
                Last year I ran this with marketers, engineers, and finance professionals. I never taught them how to write fiction. I just made it easy for them to realize they already knew how.
              </p>
            </div>

          </section>

          <div className="py-20 text-center">
            <p
              className="font-sans text-xs font-light"
              style={{ fontVariant: "small-caps", letterSpacing: "0.12em" }}
            >
              Five people finished last year. Four had never written fiction before.
            </p>
          </div>
        </Band>

        {/* BAND 1.5: WHO'S IN THE ROOM — Dark ink */}
        <Band bg="#1F1B16" className="py-20 sm:py-24">
          <section>
            <h2 className="text-3xl leading-tight tracking-tight font-normal text-center" style={{ color: "#FAF5EA" }}>
              Who's already in the room
            </h2>
          </section>
        </Band>
        <div style={{ backgroundColor: "#1F1B16" }} className="overflow-hidden">
          <div className="ticker-track flex whitespace-nowrap text-lg leading-relaxed" style={{ color: "#FAF5EA" }}>
            {(() => {
              const items = [
                "A People Ops leader who performs community theater on weekends",
                "A software engineer who can't stop noticing things nobody's named yet",
                "A writer with thirty years of drafts and one question he can't answer",
                "A man trying to build a map where none exists",
              ];
              const loop = [...items, ...items];
              return loop.map((t, i) => (
                <span key={i} className="flex items-center">
                  <span className="px-8">{t}</span>
                  <span aria-hidden style={{ color: ACCENT }}>·</span>
                </span>
              ));
            })()}
          </div>
        </div>
        <Band bg="#1F1B16" className="pt-6 pb-20 sm:pb-24">
          <p className="text-sm text-center" style={{ color: "#FAF5EA", opacity: 0.7 }}>6 spots remaining.</p>
        </Band>



        {/* BAND 2: PREMISE — Mid */}
        <Band bg={KRAFT_MID} className="py-20 sm:py-24">
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
        </Band>

        {/* BAND 3: HOW IT WORKS — Base */}
        <Band bg={KRAFT_BASE} className="py-20 sm:py-24">
          <section id="how-it-works">
            <h2 className="text-3xl leading-tight tracking-tight font-normal">
              How it works
            </h2>
            <ol className="mt-10 space-y-10">
              {[
                <>
                  Each episode opens with one creativity game — six different exercises including 3 nouns + 1 genre, metaphor games, random Wikipedia topics, and more. Hit generate, set the 15-minute timer, write. You leave every episode with a rough draft already on the page.{" "}
                  <a
                    href="https://creativity-games.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#8B4000", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Try the creativity games →
                  </a>
                </>,
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
        </Band>

        {/* BAND 3b: EPISODE CURRICULUM — Mid */}
        <Band bg={KRAFT_MID} className="py-20 sm:py-24">
          <section>
            <h2 className="text-3xl leading-tight tracking-tight font-normal">
              What you'll learn across five episodes.
            </h2>
            <Accordion type="single" collapsible className="mt-8 faq-accent">
              {[
                {
                  title: "Episode 1: The part every story messes up",
                  body: (
                    <p>
                      How do you end the story? Most writers rush it, avoid it, or explain it. This episode is about the one move that makes an ending feel inevitable instead of finished.
                    </p>
                  ),
                },
                {
                  title: "Episode 2: Show, don't tell. (You've been lied to.)",
                  body: (
                    <>
                      <p>
                        You shouldn't show all the time. But you shouldn't tell either. So do you know when to show and when to tell?
                      </p>
                      <p className="mt-4">Here's an exercise: Is this showing or telling?</p>
                      <p className="mt-4 italic">Houston flinched when he saw the dog.</p>
                      <p className="mt-4">If you're unsure, this episode is for you.</p>
                      <p className="mt-4">(Psst — it's telling.)</p>
                    </>
                  ),
                },
                {
                  title: "Episode 3: The character mistake that makes readers stop caring",
                  body: (
                    <p>
                      Character arcs and what makes a good character. Most writers focus on what the character does. This episode is about what the character wants — and why that's different.
                    </p>
                  ),
                },
                {
                  title: "Episode 4: How to build a story without the reader noticing",
                  body: (
                    <p>
                      Scene vs. story structure. The best stories hide their skeleton. This episode teaches you how to build the frame so the reader only sees what moves.
                    </p>
                  ),
                },
                {
                  title: "Episode 5: Why finishing five short stories is how you write a novel",
                  body: (
                    <p>
                      Depth through dialogue. And why everything you practiced in episodes 1–4 is the foundation for anything longer you want to write next.
                    </p>
                  ),
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`ep-${i}`}
                  className="border-b"
                  style={{ borderColor: RULE }}
                >
                  <AccordionTrigger className="text-left text-lg font-normal hover:no-underline py-5 font-serif">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed pb-6 pt-2 font-serif">
                    {item.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </Band>

        {/* BAND 4: WHERE TO GO INSTEAD — Base */}
        <Band bg={KRAFT_BASE} className="py-20 sm:py-24">

          <section>
            <h2 className="text-3xl leading-tight tracking-tight font-normal">
              Don't buy. Instead, read this:
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed">
              <p>
                <a
                  href="https://www.writerstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: LINK, textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  <strong>The Writers Studio</strong>
                </a>{" "}
                is the closest thing to an MFA workshop without the MFA. Philip Schultz built it in 1987. Ten weeks. Written critique every single week. They teach by having you borrow other writers' voices until you find your own, and that method works. You finish sharper. You don't finish a body of work.
              </p>
              <p>
                <a
                  href="https://www.writingclasses.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: LINK, textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  <strong>Gotham Writers</strong>
                </a>{" "}
                is the broadest on-ramp. Their Fiction I has given thousands of people their first real grounding in how stories actually function. If you've never been taught fiction before, this is a safe place to start. Bigger groups. Fundamentals. One or two stories. No book at the end.
              </p>
              <p>
                <a
                  href="https://kenyonreview.org/event/summer-online-writers-workshops/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: LINK, textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  <strong>Kenyon Review</strong>
                </a>{" "}
                is the prestige play. One of the best weeks of literary instruction in the country, taught by writers whose names show up in Best American. You have to apply. You have to get in. You pay accordingly.
              </p>
              <p>
                <a
                  href="https://www.nycmidnight.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: LINK, textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  <strong>NYC Midnight</strong>
                </a>{" "}
                runs multiple challenges a year. 100 words in 24 hours, 250 in 48, all the way up to 2,000-word stories in eight days. Every writer draws a genre, an object, an action. Same forcing function we use in here. Just no room, no instructor, and 32,000 writers in a forum doing it alongside you.
              </p>
              <p>These are awesome programs and are worthwhile if that's what you're looking for.</p>
            </div>

            <div className="mt-16 space-y-6 text-lg leading-relaxed">
              <p>Here's what none of them do.</p>
              <p>You walk out of all four a better writer. You walk out of none of them holding a book with five of your finished stories in it and your name on the cover.</p>
              <p>They make you sharper. An anthology makes you finished.</p>
              <p>If sharper is what you need, try those courses.</p>
              <p>If you're tired of being someone who hasn't finished anything, stay.</p>
              <figure className="my-8 py-5 px-6" style={{ backgroundColor: KRAFT_DEEP, borderLeft: `3px solid ${ACCENT}` }}>
                <blockquote className="text-xl italic leading-relaxed">
                  "Most fiction cohorts rehash old stuff I've seen before. But this had material I've never seen. I looked forward to Saturday."
                </blockquote>
                <figcaption className="mt-4 font-sans text-sm font-light">
                  —{" "}
                  <a
                    href="https://substack.com/@theoriginaljohnthewordsmith"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: LINK, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    John Cook
                  </a>
                  , 30-year writing veteran, currently publishing his own novel
                </figcaption>
              </figure>
            </div>
          </section>
        </Band>

        {/* BAND 6: LOGISTICS — Mid */}
        <Band bg={KRAFT_MID} className="py-20 sm:py-24">
          <section>
            <dl className="space-y-5">
              {[
                ["Dates", "August 1 – August 29, 2026 (5 weeks)"],
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
                ["Enrollment closes", "Until all 10 seats are filled"],
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
        </Band>

        {/* BAND 7: THE TURN — Deep */}
        <Band bg={KRAFT_DEEP} className="pt-40 sm:pt-56 pb-20 sm:pb-24">
          <div className="pt-20 border-t" style={{ borderColor: RULE }}>
            <section className="space-y-10 text-[1.15rem] sm:text-xl leading-[1.75]">
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
              <figure className="my-8 py-5 px-6" style={{ backgroundColor: KRAFT_BASE, borderLeft: `3px solid ${ACCENT}` }}>
                <blockquote className="text-xl italic leading-relaxed">
                  "You'll walk away feeling like you want to write every single day."
                </blockquote>
                <figcaption className="mt-4 font-sans text-sm font-light">
                  — Julie Howard
                </figcaption>
              </figure>
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
              <figure className="my-8 py-5 px-6" style={{ backgroundColor: KRAFT_BASE, borderLeft: `3px solid ${ACCENT}` }}>
                <blockquote className="text-xl italic leading-relaxed">
                  "One example of what I do differently now is I think about the transformation. Without transformation, a story always falls flat."
                </blockquote>
                <figcaption className="mt-4 font-sans text-sm font-light">
                  —{" "}
                  <a
                    href="https://www.themoneymindsetlab.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: LINK, textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    Ceres Chua
                  </a>
                  , finance creator
                </figcaption>
              </figure>
            </section>
          </div>
        </Band>

        {/* BAND 8: FAQ + ABOUT — Base */}
        <Band bg={KRAFT_BASE} className="py-20 sm:py-24">
          <section id="faq">
            <h2 className="text-3xl leading-tight tracking-tight font-normal">
              Read These Before You Hesitate
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
                  q: "What if I miss an episode?",
                  a: "Every episode is recorded. Submitted work gets feedback regardless of attendance, and there are weekly office hours.",
                },
                {
                  q: "Is this for people who want to publish?",
                  a: "No. This is for people who want to finish. What you do with the stories after is yours.",
                },
                {
                  q: "Why is it $600?",
                  a: "Five weeks of live instruction, weekly office hours, written feedback on every submission, and a printed anthology shipped to your door.",
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
        </Band>

        {/* BAND 9: FINAL CTA — Mid */}
        <Band bg={KRAFT_MID} className="py-20 sm:py-24">
          <section
            id="enroll"
            className="border-t pt-16 text-center"
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
                Enrollment open · Capped at 10 · Starts Saturday, August 1
              </p>
            </div>
          </section>
        </Band>

        {/* FOOTER — Base */}
        <Band bg={KRAFT_BASE} className="pt-10 pb-20">
          <footer
            className="pt-10 border-t font-sans text-sm font-light flex items-center gap-2"
            style={{ borderColor: RULE }}
          >
            <Mark />
            <span>Modern Myths · © 2026 · hello@modernmyths.co</span>
          </footer>
        </Band>
      </main>
    </div>
  );
}
