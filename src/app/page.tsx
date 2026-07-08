export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-12">
      <section className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)] shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            Phase 0 baseline for ClientPath CRM Lite
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              A clean starting point for capturing and converting enquiries.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
              This Next.js app is the foundation for a lightweight lead
              conversion system for small service businesses. The landing page,
              dashboard, and lead workflow will grow from here.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#what-is-included"
              className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              What is included
            </a>
            <a
              href="#project-structure"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-strong)]"
            >
              View structure
            </a>
          </div>
        </div>

        <aside className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-[0_20px_60px_rgba(23,32,51,0.08)]">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            MVP Goal
          </p>
          <p className="mt-4 text-2xl font-semibold leading-9">
            Get the core app running locally with a polished homepage and clean
            repository structure.
          </p>
          <dl className="mt-6 grid gap-4 text-sm text-[var(--muted)]">
            <div className="rounded-2xl bg-[var(--surface)] p-4">
              <dt className="font-medium text-[var(--foreground)]">
                Frontend stack
              </dt>
              <dd className="mt-1">Next.js, Tailwind CSS, TypeScript</dd>
            </div>
            <div className="rounded-2xl bg-[var(--surface)] p-4">
              <dt className="font-medium text-[var(--foreground)]">
                Baseline scope
              </dt>
              <dd className="mt-1">
                Homepage placeholder, docs, env template, and project folders
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section
        id="what-is-included"
        className="grid gap-4 py-10 sm:grid-cols-3"
      >
        {[
          {
            title: "Landing page placeholder",
            description:
              "A branded homepage that gives the project a real first screen instead of the default starter.",
          },
          {
            title: "Clean folder structure",
            description:
              "Folders for components, lib, types, docs, and Supabase are ready for the next phases.",
          },
          {
            title: "Project docs",
            description:
              "A README and phase-specific setup notes are in place so the build can keep moving smoothly.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <section
        id="project-structure"
        className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-sm lg:grid-cols-[0.85fr_1.15fr]"
      >
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Next step
          </p>
          <h2 className="text-2xl font-semibold">
            This baseline is ready for lead capture and dashboard work.
          </h2>
          <p className="text-sm leading-6 text-[var(--muted)]">
            The current phase keeps things intentionally simple so the team can
            move quickly into the enquiry form, Supabase schema, and admin
            screens.
          </p>
        </div>

        <div className="grid gap-3 text-sm">
          {[
            "app/",
            "components/",
            "lib/",
            "types/",
            "docs/",
            "supabase/",
          ].map((folder) => (
            <div
              key={folder}
              className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
            >
              <span className="font-medium text-[var(--foreground)]">
                {folder}
              </span>
              <span className="text-[var(--muted)]">ready</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
