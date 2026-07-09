# ClientPath Lead Conversion System Ã¢â‚¬â€ Implementation Plan

## Project Overview

Build a reusable lead conversion system for small service businesses.

The system should help a business capture enquiries from a landing page, store them in a database, manage them in a dashboard, track lead status, and support faster follow-up.

This project is intended to serve three purposes:

1. Strengthen the developer portfolio / resume.
2. Become part of ClientPath Studio's portfolio.
3. Potentially become a monetizable productized service for small businesses.

---

## Core Product Definition

### Simple explanation

A visitor submits their contact details through a landing page or enquiry form. The business owner logs into a dashboard to view, manage, and follow up with those leads.

### Business value

This is not just a form. The goal is to help businesses:

- Capture more enquiries.
- Avoid losing leads in DMs, WhatsApp, or email.
- Follow up faster.
- Track lead status.
- See simple lead and conversion analytics.
- Improve their chance of converting enquiries into booked calls or paying customers.

---

## Recommended MVP Name

**ClientPath CRM Lite**

---

## Recommended Tech Stack

Use a simple, modern, low-cost stack:

- **Frontend:** Next.js
- **Styling:** Tailwind CSS
- **Database:** Supabase Postgres
- **Auth:** Supabase Auth
- **Hosting:** Vercel
- **Optional AI later:** OpenAI API or similar LLM API
- **Optional automation later:** n8n, email provider, WhatsApp link generation

Do not over-engineer the first version.

---

## MVP Scope

The first working version should include:

- Public landing page
- Lead enquiry form
- Supabase database
- Admin login
- Leads dashboard
- Lead detail page
- Lead status tracking
- Lead notes
- Basic analytics
- WhatsApp-ready follow-up message template
- Deployment instructions

---

## Out of Scope for MVP

Do not build these in the first pass unless all MVP phases are complete:

- Payment integration
- Multi-business SaaS billing
- Complex role-based permissions
- Fully automated WhatsApp API sending
- Advanced AI agent workflows
- Complex marketing attribution
- Full CRM replacement
- Native mobile app
- Complex email campaign builder

---

## Product Flow

```text
Visitor lands on page
Ã¢â€ â€œ
Visitor reads offer and submits enquiry form
Ã¢â€ â€œ
Lead is saved into Supabase
Ã¢â€ â€œ
Business owner receives/stores the lead
Ã¢â€ â€œ
Business owner logs into dashboard
Ã¢â€ â€œ
Business owner views lead details
Ã¢â€ â€œ
Business owner updates lead status
Ã¢â€ â€œ
Business owner uses follow-up helper
Ã¢â€ â€œ
Lead becomes booked / won / lost
```

---

## Suggested Lead Status Pipeline

```text
New Ã¢â€ â€™ Contacted Ã¢â€ â€™ Follow-up Ã¢â€ â€™ Consultation Booked Ã¢â€ â€™ Won Ã¢â€ â€™ Lost
```

---

## Suggested Folder Structure

Adjust based on the actual framework version, but keep the project organized.

```text
clientpath-crm-lite/
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ app/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ page.tsx
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ login/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ dashboard/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ leads/
Ã¢â€â€š   Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ page.tsx
Ã¢â€â€š   Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ [id]/
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ analytics/
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ components/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ LeadForm.tsx
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ LeadCard.tsx
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ LeadStatusBadge.tsx
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ DashboardStats.tsx
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ FollowUpMessageBox.tsx
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ Navbar.tsx
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ lib/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ supabaseClient.ts
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ leadUtils.ts
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ followUpTemplates.ts
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ types/
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ lead.ts
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ supabase/
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ schema.sql
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ docs/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ setup.md
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ deployment.md
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ handoff.md
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ .env.example
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ README.md
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ package.json
```

---

## Database Design

### `leads` table

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  service_interest text,
  goal text,
  message text,
  preferred_contact_method text,
  source text,
  status text not null default 'new',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
```

### `lead_notes` table

```sql
create table lead_notes (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id) on delete cascade,
  note text not null,
  created_at timestamp with time zone default now()
);
```

### `business_settings` table

```sql
create table business_settings (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  owner_name text,
  contact_email text,
  whatsapp_number text,
  primary_service text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
```

---

# Phase 0 Ã¢â‚¬â€ Project Setup and Baseline

## Goal

Create the initial project structure and make sure the app can run locally.

## Build Checklist

- [ ] Create a new GitHub repository named `clientpath-crm-lite`.
- [x] Initialize a Next.js project.
- [x] Install and configure Tailwind CSS.
- [x] Create a clean homepage placeholder.
- [x] Create basic folder structure: `components`, `lib`, `types`, `docs`, `supabase`.
- [x] Add `.env.example` file.
- [x] Add initial `README.md`.
- [x] Add basic project description to README.
- [x] Confirm app runs locally with `npm run dev`.
- [x] Commit initial project setup.

## Testing Checklist

- [x] Run `npm install` successfully.
- [x] Run `npm run dev` successfully.
- [ ] Open local development URL in browser.
- [x] Confirm homepage loads without error.
- [x] Confirm no TypeScript errors.
- [x] Confirm no obvious console errors.
- [x] Confirm Git repo is initialized and first commit is created.

## Phase Completion Criteria

- [x] App runs locally.
- [x] Project structure is clean.
- [x] README exists.
- [x] `.env.example` exists.
- [x] Code is committed.

---

# Phase 1 — Product Skeleton and Landing Page

## Goal

Build the first public-facing landing page for a demo service business, starting with a personal trainer use case.

## Build Checklist

- [x] Create a polished landing page layout.
- [x] Add hero section with clear offer promise.
- [x] Add problem/pain point section.
- [x] Add service benefits section.
- [x] Add simple process section.
- [x] Add testimonials placeholder section.
- [x] Add lead form section placeholder.
- [x] Add final CTA section.
- [x] Make page mobile-responsive.
- [x] Use realistic personal trainer demo copy.
- [x] Keep branding flexible so it can be reused for other businesses later.

## Suggested Landing Page Sections

- [x] Hero: headline, subheadline, CTA.
- [x] Pain points: what the visitor is struggling with.
- [x] Offer: what the trainer/service provider helps with.
- [x] Benefits: outcomes the visitor wants.
- [x] How it works: 3-step process.
- [x] Social proof: placeholder testimonials.
- [x] Lead form CTA: apply / enquire / book consultation.
- [x] Footer: simple business details.

## Testing Checklist

- [x] Check page on desktop viewport.
- [x] Check page on mobile viewport.
- [x] Check CTA buttons scroll to the form section or correct destination.
- [x] Confirm layout does not break at common widths: 375px, 768px, 1024px, 1440px.
- [x] Confirm text is readable and spacing is clean.
- [x] Confirm no broken internal links.
- [x] Run lint/type check if available.

## Phase Completion Criteria

- [x] Landing page looks professional enough for portfolio use.
- [x] Page is mobile-friendly.
- [x] CTA flow is clear.
- [x] Code is committed.

---

# Phase 2 Ã¢â‚¬â€ Supabase Setup and Database Schema

## Goal

Connect the app to Supabase and create the required database tables.

## Build Checklist

- [ ] Create a Supabase project.
- [ ] Add Supabase URL and anon key to `.env.local`.
- [ ] Update `.env.example` with required environment variable names.
- [ ] Create `lib/supabaseClient.ts`.
- [ ] Add `supabase/schema.sql` with table definitions.
- [ ] Create `leads` table.
- [ ] Create `lead_notes` table.
- [ ] Create `business_settings` table.
- [ ] Decide initial Row Level Security approach.
- [ ] Add basic seed/demo business settings if useful.
- [ ] Document Supabase setup steps in `docs/setup.md`.

## Suggested Environment Variables

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Use the service role key only on the server side if needed. Never expose it publicly.

## Testing Checklist

- [ ] Confirm Supabase project exists.
- [ ] Confirm all required tables exist.
- [ ] Confirm app can connect to Supabase.
- [ ] Insert a test lead manually in Supabase.
- [ ] Read test lead from the app or a simple test function.
- [ ] Confirm environment variables are not committed.
- [ ] Confirm `.env.example` contains placeholder values only.
- [ ] Confirm database schema is saved in the repo.

## Phase Completion Criteria

- [ ] Supabase connection works.
- [ ] Tables are created.
- [ ] Schema is documented.
- [ ] Environment setup is documented.
- [ ] Code is committed.

---

# Phase 3 Ã¢â‚¬â€ Lead Capture Form

## Goal

Build a working enquiry form that saves visitor submissions into Supabase.

## Build Checklist

- [ ] Create reusable `LeadForm` component.
- [ ] Add form fields: name, email, phone, service interest, goal, preferred contact method, message.
- [ ] Add hidden or selectable lead source field.
- [ ] Add basic client-side validation.
- [ ] Add server-side validation if using server actions or API route.
- [ ] Save submitted lead into Supabase.
- [ ] Show loading state during submission.
- [ ] Show success message after submission.
- [ ] Show friendly error message if submission fails.
- [ ] Clear form after successful submission.
- [ ] Add spam prevention placeholder for later, such as honeypot field.

## Recommended Required Fields

- [ ] Name
- [ ] Phone or email
- [ ] Service interest or goal

Do not make too many fields required. The form should be easy to submit.

## Testing Checklist

- [ ] Submit form with valid details.
- [ ] Confirm new lead appears in Supabase.
- [ ] Submit form without name and confirm validation appears.
- [ ] Submit form without contact details and confirm validation appears.
- [ ] Submit form with optional fields empty and confirm it still works if allowed.
- [ ] Confirm duplicate submissions do not crash the app.
- [ ] Confirm loading and success states work.
- [ ] Confirm failed Supabase submission shows a usable error.
- [ ] Test form on mobile.
- [ ] Run lint/type check.

## Phase Completion Criteria

- [ ] Visitors can submit leads.
- [ ] Leads are stored in Supabase.
- [ ] Form is user-friendly.
- [ ] Code is committed.

---

# Phase 4 Ã¢â‚¬â€ Admin Authentication

## Goal

Add a simple protected admin area so the business owner can log in and view leads.

## Build Checklist

- [ ] Enable Supabase Auth.
- [ ] Create login page.
- [ ] Add email/password login or magic link login.
- [ ] Create protected dashboard route.
- [ ] Redirect unauthenticated users to login.
- [ ] Add logout button.
- [ ] Add basic authenticated layout for dashboard pages.
- [ ] Document how to create the first admin user.

## Testing Checklist

- [ ] Visit dashboard while logged out and confirm redirect to login.
- [ ] Log in with valid credentials.
- [ ] Confirm dashboard becomes accessible after login.
- [ ] Try invalid credentials and confirm friendly error.
- [ ] Click logout and confirm session ends.
- [ ] Try dashboard again after logout and confirm redirect.
- [ ] Test auth flow on desktop and mobile.
- [ ] Confirm no private dashboard data appears to logged-out users.
- [ ] Run lint/type check.

## Phase Completion Criteria

- [ ] Admin login works.
- [ ] Dashboard is protected.
- [ ] Logout works.
- [ ] Auth setup is documented.
- [ ] Code is committed.

---

# Phase 5 Ã¢â‚¬â€ Leads Dashboard

## Goal

Build the main dashboard where the business owner can view submitted leads.

## Build Checklist

- [ ] Create dashboard homepage.
- [ ] Fetch leads from Supabase.
- [ ] Display leads in a clean table or card layout.
- [ ] Show key fields: name, contact, service interest, status, source, created date.
- [ ] Add status badge.
- [ ] Add search/filter by name, status, or source.
- [ ] Add sorting by newest first.
- [ ] Add empty state when no leads exist.
- [ ] Add link to individual lead detail page.
- [ ] Add responsive mobile layout.

## Suggested Dashboard Metrics

- [ ] Total leads
- [ ] New leads
- [ ] Contacted leads
- [ ] Booked consultations
- [ ] Won leads

## Testing Checklist

- [ ] Confirm dashboard loads existing leads from Supabase.
- [ ] Confirm newest leads appear first.
- [ ] Confirm status badges render correctly.
- [ ] Confirm search works.
- [ ] Confirm status filter works.
- [ ] Confirm empty state works with no leads.
- [ ] Confirm lead detail links work.
- [ ] Confirm dashboard is readable on mobile.
- [ ] Confirm only authenticated users can access dashboard.
- [ ] Run lint/type check.

## Phase Completion Criteria

- [ ] Business owner can view all leads.
- [ ] Leads are readable and organized.
- [ ] Dashboard is protected.
- [ ] Code is committed.

---

# Phase 6 Ã¢â‚¬â€ Lead Detail Page, Status Updates, and Notes

## Goal

Allow the business owner to inspect one lead, update its status, and add notes.

## Build Checklist

- [ ] Create individual lead detail page.
- [ ] Display full lead information.
- [ ] Add editable lead status dropdown.
- [ ] Save status updates to Supabase.
- [ ] Update `updated_at` when status changes.
- [ ] Add lead notes section.
- [ ] Allow user to add notes.
- [ ] Fetch and display notes in chronological order.
- [ ] Add basic validation for empty notes.
- [ ] Add success/error states for status and note updates.

## Testing Checklist

- [ ] Open a lead detail page from dashboard.
- [ ] Confirm all lead fields display correctly.
- [ ] Change status and confirm it saves.
- [ ] Refresh page and confirm status persists.
- [ ] Add a note and confirm it saves.
- [ ] Refresh page and confirm note persists.
- [ ] Try adding empty note and confirm validation appears.
- [ ] Confirm notes are linked to the correct lead.
- [ ] Confirm unauthenticated users cannot access lead detail page.
- [ ] Run lint/type check.

## Phase Completion Criteria

- [ ] Lead detail page works.
- [ ] Status updates work.
- [ ] Notes work.
- [ ] Code is committed.

---

# Phase 7 Ã¢â‚¬â€ Follow-Up Message Helper

## Goal

Make the product more valuable than a basic form by helping the business owner follow up quickly.

Start with template-based messages before adding AI.

## Build Checklist

- [ ] Create `followUpTemplates.ts`.
- [ ] Add reusable WhatsApp follow-up templates.
- [ ] Generate message using lead name, goal, and service interest.
- [ ] Display generated message on lead detail page.
- [ ] Add copy-to-clipboard button.
- [ ] Add WhatsApp link if phone number exists.
- [ ] Add fallback message if some lead fields are missing.
- [ ] Add manual edit box if useful.

## Example Template

```text
Hi {name}, thanks for reaching out. Saw that you're interested in {service_interest} and your main goal is {goal}. Happy to learn more and see if this is a good fit. Are you available for a quick call this week?
```

## Testing Checklist

- [ ] Generate follow-up message for a complete lead profile.
- [ ] Generate follow-up message when goal is missing.
- [ ] Generate follow-up message when service interest is missing.
- [ ] Confirm copy-to-clipboard works.
- [ ] Confirm WhatsApp link opens correctly when phone exists.
- [ ] Confirm app does not break if phone number is missing.
- [ ] Test on mobile.
- [ ] Run lint/type check.

## Phase Completion Criteria

- [ ] Follow-up message helper works.
- [ ] Message is practical and client-ready.
- [ ] WhatsApp flow works where possible.
- [ ] Code is committed.

---

# Phase 8 Ã¢â‚¬â€ Basic Analytics

## Goal

Add simple metrics that help the business owner understand lead flow and conversion.

## Build Checklist

- [ ] Create analytics page.
- [ ] Show total leads.
- [ ] Show leads this month.
- [ ] Show new leads count.
- [ ] Show contacted leads count.
- [ ] Show consultation booked count.
- [ ] Show won leads count.
- [ ] Show basic conversion rate: won leads / total leads.
- [ ] Show lead source breakdown if source data exists.
- [ ] Add simple visual cards or charts.
- [ ] Add fallback state when there is not enough data.

## Suggested Metrics

```text
Total leads
Leads this month
New leads
Booked consultations
Won leads
Lead-to-booking rate
Lead-to-won rate
Top lead source
```

## Testing Checklist

- [ ] Confirm analytics page loads for authenticated users.
- [ ] Confirm metrics match Supabase data.
- [ ] Test with zero leads.
- [ ] Test with mixed lead statuses.
- [ ] Test with different lead sources.
- [ ] Confirm calculations do not divide by zero.
- [ ] Confirm metrics are readable on mobile.
- [ ] Run lint/type check.

## Phase Completion Criteria

- [ ] Analytics page works.
- [ ] Metrics are accurate.
- [ ] Empty states work.
- [ ] Code is committed.

---

# Phase 9 Ã¢â‚¬â€ Notification Basics

## Goal

Make it harder for the business owner to miss a new lead.

Start simple. Avoid complex automation in the first version.

## Build Checklist

- [ ] Decide notification method for MVP.
- [ ] Option A: simple email notification.
- [ ] Option B: dashboard-only notification state.
- [ ] Option C: n8n webhook trigger.
- [ ] Add notification documentation.
- [ ] Add a `new lead submitted` event path if needed.
- [ ] Add basic email notification if using email provider.
- [ ] Include lead name, contact, goal, and dashboard link in notification.
- [ ] Ensure notification failure does not block lead submission.

## Recommended MVP Approach

Use one of these:

1. Skip automated notification first and rely on dashboard.
2. Add email notification using a simple provider.
3. Add n8n webhook later.

For first completion, option 1 is acceptable. For sellable version, option 2 or 3 is better.

## Testing Checklist

- [ ] Submit a lead and confirm lead is still saved.
- [ ] If email notification is enabled, confirm email is received.
- [ ] If notification fails, confirm lead submission still succeeds.
- [ ] Confirm no private API keys are exposed in frontend.
- [ ] Confirm notification content is useful.
- [ ] Run lint/type check.

## Phase Completion Criteria

- [ ] Notification approach is implemented or explicitly documented as deferred.
- [ ] Lead submission remains stable.
- [ ] Code is committed.

---

# Phase 10 Ã¢â‚¬â€ Business Settings and Reusability

## Goal

Make the system easier to adapt for different clients or niches.

## Build Checklist

- [ ] Add business settings page.
- [ ] Allow business name to be edited.
- [ ] Allow owner name to be edited.
- [ ] Allow contact email to be edited.
- [ ] Allow WhatsApp number to be edited.
- [ ] Allow primary service to be edited.
- [ ] Use business settings in follow-up templates.
- [ ] Use business settings in dashboard branding where appropriate.
- [ ] Document how to customize for a new client.

## Testing Checklist

- [ ] Update business name and confirm it saves.
- [ ] Update WhatsApp number and confirm it saves.
- [ ] Confirm settings persist after refresh.
- [ ] Confirm follow-up message uses updated business details if applicable.
- [ ] Confirm empty settings do not crash the app.
- [ ] Confirm settings page is protected.
- [ ] Run lint/type check.

## Phase Completion Criteria

- [ ] Business settings can be edited.
- [ ] System is more reusable across clients.
- [ ] Customization process is documented.
- [ ] Code is committed.

---

# Phase 11 Ã¢â‚¬â€ Embed Form Version

## Goal

Create a version of the lead form that can theoretically be embedded into an existing client website.

This phase is optional for the first portfolio MVP, but valuable for future monetization.

## Build Checklist

- [ ] Create standalone form page route, such as `/embed/lead-form`.
- [ ] Keep page minimal with only the form.
- [ ] Make the form responsive inside small containers.
- [ ] Avoid unnecessary navigation/header/footer in embed route.
- [ ] Add documentation for iframe embedding.
- [ ] Add allowed origin notes if needed.
- [ ] Test iframe embed in a simple HTML page.
- [ ] Add clear warning that not all website builders support custom embeds equally.

## Example Embed Concept

```html
<iframe
  src="https://your-domain.com/embed/lead-form"
  width="100%"
  height="700"
  style="border:0;"
></iframe>
```

## Testing Checklist

- [ ] Open embed route directly.
- [ ] Confirm form submits successfully from embed route.
- [ ] Confirm form layout works at narrow widths.
- [ ] Test iframe embed in a plain HTML file.
- [ ] Confirm successful embedded submission appears in dashboard.
- [ ] Confirm no dashboard navigation appears inside iframe.
- [ ] Run lint/type check.

## Phase Completion Criteria

- [ ] Embed form route works.
- [ ] Form can be embedded in a basic external page.
- [ ] Documentation is added.
- [ ] Code is committed.

---

# Phase 12 Ã¢â‚¬â€ UI Polish and Portfolio Readiness

## Goal

Make the project good enough to show on a resume, GitHub, and ClientPath Studio portfolio.

## Build Checklist

- [ ] Improve visual design consistency.
- [ ] Ensure spacing, typography, buttons, and cards look polished.
- [ ] Add loading states.
- [ ] Add empty states.
- [ ] Add error states.
- [ ] Add basic 404 page.
- [ ] Add favicon and basic metadata.
- [ ] Add screenshots for README.
- [ ] Add demo use case explanation.
- [ ] Add portfolio write-up.
- [ ] Add limitations section.
- [ ] Add future improvements section.

## Testing Checklist

- [ ] Test all main pages manually.
- [ ] Test on mobile and desktop.
- [ ] Confirm no obvious UI breakage.
- [ ] Confirm all buttons have clear behavior.
- [ ] Confirm forms show useful feedback.
- [ ] Confirm README accurately reflects the app.
- [ ] Run lint/type check.
- [ ] Build production version successfully.

## Phase Completion Criteria

- [ ] Project looks portfolio-ready.
- [ ] README is strong.
- [ ] Screenshots are included or planned.
- [ ] Code is committed.

---

# Phase 13 Ã¢â‚¬â€ Deployment

## Goal

Deploy the system publicly so it can be shown as a live demo.

## Build Checklist

- [ ] Create Vercel project.
- [ ] Connect GitHub repo to Vercel.
- [ ] Add required environment variables in Vercel.
- [ ] Deploy app.
- [ ] Confirm public landing page works.
- [ ] Confirm form submission works in production.
- [ ] Confirm admin login works in production.
- [ ] Confirm dashboard reads production Supabase data.
- [ ] Add production URL to README.
- [ ] Add deployment notes to `docs/deployment.md`.

## Testing Checklist

- [ ] Open production landing page.
- [ ] Submit a test lead in production.
- [ ] Confirm test lead appears in Supabase.
- [ ] Log into production dashboard.
- [ ] Update lead status in production.
- [ ] Add lead note in production.
- [ ] Test follow-up message helper in production.
- [ ] Test on mobile.
- [ ] Confirm no environment variables are visible publicly.
- [ ] Confirm production build has no critical errors.

## Phase Completion Criteria

- [ ] Live demo is deployed.
- [ ] Core flow works in production.
- [ ] Deployment docs are complete.
- [ ] Code is committed.

---

# Phase 14 Ã¢â‚¬â€ Documentation and AI Agent Handoff

## Goal

Make the project easy for another AI agent or developer to continue.

## Build Checklist

- [ ] Update README with project overview.
- [ ] Add local setup instructions.
- [ ] Add Supabase setup instructions.
- [ ] Add deployment instructions.
- [ ] Add database schema explanation.
- [ ] Add main user flows.
- [ ] Add known limitations.
- [ ] Add future roadmap.
- [ ] Add `docs/handoff.md`.
- [ ] Add current project status section.
- [ ] Add troubleshooting notes.

## Suggested README Sections

- [ ] Project overview
- [ ] Demo link
- [ ] Screenshots
- [ ] Features
- [ ] Tech stack
- [ ] Local setup
- [ ] Environment variables
- [ ] Database setup
- [ ] Usage flow
- [ ] Testing
- [ ] Future improvements

## Testing Checklist

- [ ] Follow README setup from scratch where possible.
- [ ] Confirm another developer/agent can understand the current app state.
- [ ] Confirm docs do not contain real secrets.
- [ ] Confirm schema file matches actual Supabase tables.
- [ ] Confirm deployment notes are accurate.
- [ ] Confirm roadmap is realistic.

## Phase Completion Criteria

- [ ] Documentation is clear.
- [ ] Handoff file exists.
- [ ] Project is easy to continue.
- [ ] Code is committed.

---

# Phase 15 Ã¢â‚¬â€ Optional AI Follow-Up Generator

## Goal

Upgrade the template-based follow-up helper into an AI-assisted reply generator.

This should only be done after the non-AI follow-up helper works.

## Build Checklist

- [ ] Add server-side API route for AI message generation.
- [ ] Add environment variable for AI API key.
- [ ] Write system prompt for generating concise follow-up messages.
- [ ] Include lead context: name, goal, service interest, message, preferred contact method.
- [ ] Add tone options: friendly, professional, direct.
- [ ] Add generated output preview.
- [ ] Add copy-to-clipboard.
- [ ] Add fallback to template if AI request fails.
- [ ] Add basic rate limiting or guardrails if needed.
- [ ] Ensure AI API key is never exposed to frontend.

## Suggested AI Prompt Behavior

The AI should generate a short WhatsApp or email reply that:

- Sounds human.
- Is concise.
- Mentions the lead's goal where available.
- Encourages a next step.
- Does not overpromise results.
- Does not sound spammy.

## Testing Checklist

- [ ] Generate AI message for complete lead.
- [ ] Generate AI message for incomplete lead.
- [ ] Test each tone option.
- [ ] Confirm output is concise and usable.
- [ ] Confirm fallback template works if AI fails.
- [ ] Confirm API key is server-side only.
- [ ] Confirm no sensitive data is logged unnecessarily.
- [ ] Run lint/type check.

## Phase Completion Criteria

- [ ] AI follow-up generator works.
- [ ] Template fallback exists.
- [ ] Feature is safe and useful.
- [ ] Code is committed.

---

# Phase 16 Ã¢â‚¬â€ Optional n8n Automation

## Goal

Connect the system to simple automation workflows that make it more sellable.

## Build Checklist

- [ ] Create webhook trigger for new lead.
- [ ] Send lead data to n8n webhook.
- [ ] Create n8n workflow to receive lead.
- [ ] Add email notification step.
- [ ] Add Google Sheets backup step if useful.
- [ ] Add notification failure handling.
- [ ] Document n8n setup.
- [ ] Keep webhook URL secret where possible.

## Possible n8n Workflows

- [ ] New lead email notification.
- [ ] Add lead to Google Sheet backup.
- [ ] Send Slack/Telegram notification.
- [ ] Create follow-up reminder.
- [ ] Send daily lead summary.

## Testing Checklist

- [ ] Submit test lead.
- [ ] Confirm n8n receives webhook.
- [ ] Confirm email notification sends.
- [ ] Confirm Google Sheets backup works if enabled.
- [ ] Confirm failed n8n call does not block lead submission.
- [ ] Confirm workflow documentation is clear.

## Phase Completion Criteria

- [ ] Basic automation workflow works.
- [ ] Workflow is documented.
- [ ] Core app remains stable.
- [ ] Code is committed.

---

# Final MVP Definition of Done

The MVP is complete when all of the following are true:

- [ ] Public landing page exists.
- [ ] Lead form works.
- [ ] Leads save into Supabase.
- [ ] Admin login works.
- [ ] Dashboard is protected.
- [ ] Business owner can view leads.
- [ ] Business owner can update lead status.
- [ ] Business owner can add lead notes.
- [ ] Follow-up message helper works.
- [ ] Basic analytics exist.
- [ ] App is mobile-friendly.
- [ ] App is deployed.
- [ ] README is complete.
- [ ] Setup and deployment docs exist.
- [ ] Project is ready to show in portfolio.

---

# Commercial Positioning

Do not position this as a Google Forms replacement.

Position it as:

```text
A simple lead conversion system for small service businesses.
It captures enquiries, organizes them in a dashboard, and helps the owner follow up faster so fewer leads go cold.
```

---

# Portfolio Description

Use this short description in resume or portfolio:

```text
Built a full-stack lead conversion CRM for small service businesses using Next.js, Supabase, and Vercel. The system includes a public landing page, lead capture form, protected admin dashboard, lead status tracking, notes, analytics, and follow-up message support to help businesses manage enquiries more effectively.
```

---

# Future Roadmap

After MVP, possible improvements:

- [ ] Multi-client support.
- [ ] Proper tenant separation.
- [ ] Client-specific landing page templates.
- [ ] Email notifications.
- [ ] WhatsApp deep-link follow-up.
- [ ] AI follow-up generator.
- [ ] n8n automation workflows.
- [ ] Google Sheets backup.
- [ ] Lead import/export.
- [ ] Calendar booking integration.
- [ ] Payment link integration.
- [ ] Monthly performance report.
- [ ] Client admin settings.
- [ ] Embed widget for existing websites.
- [ ] Simple subscription billing.

---

# AI Agent Instructions

When an AI agent works on this project:

- [ ] Read this implementation plan first.
- [ ] Check which phase was last completed.
- [ ] Inspect the current codebase before making changes.
- [ ] Do not rebuild working features unnecessarily.
- [ ] Keep changes scoped to the active phase.
- [ ] Update checklists when tasks are complete.
- [ ] Run relevant tests before marking a phase complete.
- [ ] Commit changes after each completed phase.
- [ ] Update README/docs if implementation differs from this plan.
- [ ] Avoid adding large new features before MVP is complete.

---

# Suggested Git Commit Style

Use clear phase-based commits:

```text
git commit -m "Phase 0: initialize project structure"
git commit -m "Phase 1: build landing page skeleton"
git commit -m "Phase 2: add Supabase schema and client"
git commit -m "Phase 3: implement lead capture form"
git commit -m "Phase 4: add admin authentication"
git commit -m "Phase 5: build leads dashboard"
```

---

# Immediate Next Step

Start with Phase 0.

Do not add AI, automation, payments, or complex SaaS features yet.

First target:

```text
Landing page Ã¢â€ â€™ lead form Ã¢â€ â€™ Supabase database Ã¢â€ â€™ protected dashboard Ã¢â€ â€™ lead status tracking
```
