export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 shadow-sm backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              ClientPath CRM Lite
            </p>
            <p className="text-sm text-[var(--muted)]">A landing page demo for small service businesses</p>
          </div>
          <a
            href="#lead-form"
            className="hidden rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:inline-flex"
          >
            Book a free consultation
          </a>
        </header>

        <div className="grid flex-1 items-center gap-16 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-sm text-[var(--muted)] shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              Personal trainer landing page concept
            </div>

            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Train smarter. Feel stronger. Stay consistent.
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                Lose fat, build strength, and finally stick to a plan that fits your life.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                Get personalized coaching, structured workouts, and accountable support from a personal trainer who helps busy people build real progress without wasting time on random workouts.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Enquire now
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-3.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-strong)]"
              >
                See how it works
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { value: "1:1", label: "personalized coaching" },
                { value: "4-12", label: "week training plans" },
                { value: "24/7", label: "message support" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-[var(--border)] bg-white/75 p-4 shadow-sm">
                  <p className="text-2xl font-semibold text-[var(--foreground)]">{item.value}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-[0_30px_80px_rgba(23,32,51,0.1)]">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--accent-soft)] blur-2xl" />
            <div className="space-y-4 rounded-[1.5rem] border border-dashed border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Example coach
              </p>
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">
                Coach Marcus Reid
              </h2>
              <p className="text-sm leading-6 text-[var(--muted)]">
                Strength and fat-loss coaching for busy professionals who want a clear plan, better energy, and measurable results.
              </p>
              <div className="grid gap-3 pt-2 text-sm">
                {[
                  "Custom workouts built around your schedule",
                  "Simple nutrition guidance without extreme diets",
                  "Progress tracking so you know what is working",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white px-4 py-3 text-[var(--foreground)] shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 pb-6 sm:px-10 lg:grid-cols-3 lg:px-12">
        {[
          {
            title: "You are doing everything but not seeing change",
            text: "Random workouts, inconsistent routines, and no clear progression can make fitness feel frustrating and slow.",
          },
          {
            title: "Busy schedules kill momentum",
            text: "Without structure and support, it becomes easy to skip sessions, lose focus, and restart from zero.",
          },
          {
            title: "You want results without guesswork",
            text: "Most people do better when the plan, coaching, and accountability are all organized in one place.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">The problem</p>
            <h2 className="mt-3 text-xl font-semibold text-[var(--foreground)]">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
        <div className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">What you get</p>
            <h2 className="text-3xl font-semibold text-[var(--foreground)]">Coaching that gives structure, clarity, and accountability.</h2>
            <p className="text-base leading-7 text-[var(--muted)]">
              The goal is simple: make it easier to stay on track and easier to see progress. This landing page can be adapted for gyms, PT studios, yoga coaches, or any service business that needs more enquiries.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "A plan tailored to your goals and schedule",
              "Weekly check-ins to keep momentum high",
              "Progress tracking so you can see change",
              "Friendly support without the fluff",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 text-sm leading-6 text-[var(--foreground)] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-12" id="benefits">
        <div className="mb-6 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Benefits</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--foreground)]">Outcomes people actually want</h2>
          <p className="mt-3 text-base leading-7 text-[var(--muted)]">
            This section focuses on the practical wins a visitor cares about when choosing a trainer.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Feel more confident", text: "Build habits that make you feel better in your body and more comfortable showing up consistently." },
            { title: "Get stronger faster", text: "Use a clear training plan that helps you progress without second-guessing every session." },
            { title: "Stay accountable", text: "Keep moving forward with check-ins and support that make it harder to drift off track." },
          ].map((item) => (
            <article key={item.title} className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-12" id="process">
        <div className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">How it works</p>
            <h2 className="text-3xl font-semibold text-[var(--foreground)]">A simple 3-step process</h2>
            <p className="text-base leading-7 text-[var(--muted)]">
              The structure is intentionally simple so it can be reused for other niches later.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { step: "01", title: "Submit an enquiry", text: "Tell us your goals, schedule, and what kind of support you need." },
              { step: "02", title: "Book a quick call", text: "We discuss your current routine and whether the coaching style is a fit." },
              { step: "03", title: "Start training", text: "You get a clear plan, support, and accountability from day one." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--foreground)] text-sm font-semibold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-12" id="testimonials">
        <div className="mb-6 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Social proof</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--foreground)]">Placeholder testimonials for now</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              quote: "I finally had a plan I could stick to, and the check-ins kept me honest.",
              name: "Alyssa, 34",
            },
            {
              quote: "The workouts fit around my work schedule, which made consistency realistic.",
              name: "David, 41",
            },
            {
              quote: "It felt like having a coach in my corner instead of trying to figure everything out alone.",
              name: "Priya, 29",
            },
          ].map((item) => (
            <figure key={item.name} className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
              <blockquote className="text-base leading-7 text-[var(--foreground)]">&quot;{item.quote}&quot;</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-[var(--muted)]">{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-12" id="lead-form">
        <div className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--foreground)] p-6 text-white shadow-[0_30px_80px_rgba(23,32,51,0.18)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-soft)]">Lead form placeholder</p>
            <h2 className="text-3xl font-semibold">Ready to get started?</h2>
            <p className="max-w-xl text-base leading-7 text-white/80">
              This area is reserved for the enquiry form in the next phase. For now, it shows where a visitor would leave their details and book a consultation.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-white/90"
            >
              Send an enquiry
            </a>
          </div>
          <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            {[
              "Name",
              "Email",
              "Phone",
              "Training goal",
              "Preferred contact method",
              "Message",
            ].map((field) => (
              <div key={field} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/75">
                {field}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 pb-16 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm lg:flex lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Final CTA</p>
            <h2 className="text-3xl font-semibold text-[var(--foreground)]">If you want structured coaching, this is the place to start.</h2>
            <p className="text-base leading-7 text-[var(--muted)]">
              This demo landing page is intentionally reusable, so the same structure can be adapted for other service businesses later.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <a href="#lead-form" className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
              Enquire now
            </a>
            <a href="#top" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-strong)]">
              Back to top
            </a>
          </div>
        </div>
        <footer className="flex flex-col gap-2 px-1 pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Coach Marcus Reid</p>
          <p>Strength coaching for busy people</p>
        </footer>
      </section>
    </main>
  );
}
