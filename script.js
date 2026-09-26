/* ==========================================================================
   VIGNESHWAR KANNAN — PORTFOLIO SCRIPT (ZERO-LAG POPUPS & IN-APP READERS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCategoryFilters();
  initModalEngine();
});

/* ── NAVBAR SCROLL LOGIC ── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ── CATEGORY FILTERING ── */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* ── SITES THAT BLOCK IFRAME EMBEDDING (X-Frame-Options / CSP frame-ancestors) ── */
/* These services cannot be embedded — we show a rich modal fallback panel instead */
const BLOCKED_EMBED_PATTERNS = [
  'csb.app',
  'codesandbox.io',
  'ai.studio',
  'claude.ai',
  'notion.so',
  'notion.com',
  'figma.com/proto',
  'figma.com/design',
  'figma.com/board',
];

function isEmbedBlocked(url) {
  if (!url) return false;
  // Figma published sites (figma.site) ARE embeddable; Figma editor/proto URLs are NOT
  if (url.includes('figma.site')) return false;
  return BLOCKED_EMBED_PATTERNS.some(pattern => url.includes(pattern));
}

/* ── PRD & CASE STUDY TEXT CONTENT FOR IN-APP POPUPS ── */
const caseStudyData = {
  genz: {
    title: "Gen-Z Clothing Brand — Product & UX Design Overview",
    badge: "Project Overview",
    extUrl: "https://www.figma.com/proto/9QxhmIwIwpRSoKGVRpOVF9/vicky?node-id=24-3&starting-point-node-id=24%3A3&t=gP71SKR7SD5bTenF-1",
    html: `
      <div class="case-study-drawer">
        <div class="cs-callout-box">
          ⚡ <strong>Interactive Prototype Available:</strong> Click the <em>"Open in Figma"</em> button above to explore the full interactive prototype directly in a new tab, or click the <em>Figma Prototype</em> card button!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Executive Summary & Design Scope</h3>
          <p class="cs-p">Designed a complete end-to-end product design system for a Gen-Z fashion e-commerce brand — covering user research, wireframes, high-fidelity mockups, and a fully interactive Figma prototype spanning every critical user touchpoint from discovery to post-purchase confirmation.</p>
          <p class="cs-p">The challenge: Gen-Z's attention span is 8 seconds. Every design decision was made to eliminate hesitation and accelerate the path from product discovery to purchase.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Target User & Behavioral Insights</h3>
          <ul class="cs-list">
            <li><strong>Target Audience:</strong> Ages 18–24 — mobile-first, visual-first, trend-chasing, high bounce tolerance.</li>
            <li><strong>Key Pain Points Identified:</strong> Traditional e-commerce menus are text-heavy, categories are rigid, checkout flows are 6+ steps on mobile.</li>
            <li><strong>Inspiration Benchmark:</strong> Studied interaction flows from SHEIN, H&M, and Zara mobile apps — extracted what converts and what causes cart abandonment.</li>
            <li><strong>UX Audit Finding:</strong> 72% of Gen-Z users abandon a checkout if it requires more than 3 taps after "Add to Cart".</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Core Design Decisions & Interaction Patterns</h3>
          <ul class="cs-list">
            <li><strong>Visual-First Navigation:</strong> Replaced text categories with full-bleed "Trend Story" image feeds that swipe like Instagram Reels.</li>
            <li><strong>Zero-Friction Checkout:</strong> Reduced checkout from 5 screens to 2 interactions — "Confirm & Pay" with pre-saved address and UPI in one tap.</li>
            <li><strong>Dark/Light Micro-Contrast:</strong> High-contrast cards with gold accent on dark canvas creates a premium brand perception while maintaining accessibility.</li>
            <li><strong>1-Tap Cart Add:</strong> Swipe-up gesture on product cards adds to cart without navigating away from the feed.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">4. Deliverables & Key Results</h3>
          <ul class="cs-list">
            <li><strong>100% E2E Mobile Journey:</strong> Home feed → Product search → PDP → Cart → Checkout → Order confirmation — all screens designed.</li>
            <li><strong>Interactive Figma Prototype:</strong> Fully clickable prototype with transitions, micro-animations, and swipe gestures validated.</li>
            <li><strong>0-Friction Checkout Flow:</strong> Checkout journey designed to complete in under 30 seconds from cart to confirmation.</li>
          </ul>
        </div>
      </div>
    `
  },
  ola: {
    title: "Ola App — UX Optimization Teardown Overview",
    badge: "Project Overview",
    extUrl: "https://drive.google.com/file/d/1UO1ij-67LFEumMwNrRplr2s9BjuseMkR/view?usp=sharing",
    html: `
      <div class="case-study-drawer">
        <div class="cs-callout-box">
          📄 <strong>Full Product Teardown PDF Available:</strong> Click <em>"Open Link ↗"</em> above or the <em>View Teardown</em> button to inspect the complete slide deck with detailed user journey maps, competitive analysis, and metric projections!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Problem Statement & Market Context</h3>
          <p class="cs-p">India's ride-hailing market has 80% of its next-wave users in Tier 2 & Tier 3 cities — but Ola's UX was built for Tier 1 tech-savvy smartphone users. This teardown identifies structural friction points causing booking drop-offs in smaller cities and proposes data-backed product fixes.</p>
          <p class="cs-p"><strong>Drop-off hypothesis:</strong> Ola loses ~35% of potential ride completions in Tier 2/3 cities due to address ambiguity, UI complexity, and connectivity failures — before the ride even begins.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Key Friction Points Identified (UX Audit)</h3>
          <ul class="cs-list">
            <li><strong>Pickup Location Ambiguity:</strong> GPS pin drops land on wrong streets in unmapped suburban areas; drivers call to confirm and cancel when they can't locate users.</li>
            <li><strong>Cognitive Overload at Booking Screen:</strong> 6 vehicle options (Mini, Auto, Prime, SUV, Rentals, Outstation) displayed simultaneously overwhelms users with limited digital literacy.</li>
            <li><strong>Network Latency Failures:</strong> The booking confirmation screen requires a live connection — on 2G/3G networks common in Tier 3 cities, the screen freezes and users re-attempt, creating duplicate booking errors.</li>
            <li><strong>No Regional Language Support:</strong> Core booking flow is English-only; a major barrier in Tamil Nadu, Bengal, and UP markets.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Proposed UX Solutions & Feature Recommendations</h3>
          <ul class="cs-list">
            <li><strong>Landmark-Assisted Pickup Confirmation:</strong> Let users tag a nearby landmark (temple, school, market) alongside the GPS pin — driver sees both and can navigate without calling.</li>
            <li><strong>Progressive Disclosure for Vehicle Selection:</strong> Show only the most relevant 2 vehicle types first (Auto, Mini) with an expandable "More Options" toggle.</li>
            <li><strong>Offline Booking Confirmation State:</strong> Queue the booking request and show a "Booking Confirmed — Waiting for Connection" status rather than failing silently.</li>
            <li><strong>One-Tap Regional Language Toggle:</strong> Auto-detect device language and switch the entire booking flow accordingly.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">4. Projected Impact & Success Metrics</h3>
          <ul class="cs-list">
            <li><strong>Booking Drop-off Reduction:</strong> Projected 25% improvement in booking completion rate in Tier 2/3 markets.</li>
            <li><strong>Driver Cancellation Rate:</strong> Landmark-assisted pickup expected to reduce driver cancellations by ~18%.</li>
            <li><strong>Success Metric (North Star):</strong> Successful ride completion rate for first-time Tier 2/3 users within 48 hours of app install.</li>
          </ul>
        </div>
      </div>
    `
  },
  ambitionbox: {
    title: "AmbitionBox — 25% Retention Strategy Overview",
    badge: "Project Overview",
    extUrl: "https://drive.google.com/file/d/1gZb3Y2EqE2lltr2TbtfzZG0XfyM329Aa/view?usp=sharing",
    html: `
      <div class="case-study-drawer">
        <div class="cs-callout-box">
          📄 <strong>Full Growth Strategy PDF Available:</strong> Click <em>"Open Link ↗"</em> above or the <em>View Teardown</em> button to explore the complete 6-month retention roadmap, funnel data, and feature specifications!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Executive Overview & Business Problem</h3>
          <p class="cs-p">AmbitionBox is India's #1 employer review platform with 50M+ monthly visits — but 60%+ of users visit only during active job hunts and disappear after reading 2–3 company reviews. This project defines a 6-month data-driven retention strategy to transform single-visit job seekers into a habitual career intelligence community.</p>
          <p class="cs-p"><strong>Business impact of the problem:</strong> Low return visits reduce ad revenue, weaken company data freshness, and eliminate the network effects that make AmbitionBox defensible against LinkedIn and Glassdoor.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Behavioral Data & Root Cause Analysis</h3>
          <ul class="cs-list">
            <li><strong>D30 Retention:</strong> Only ~18% of users return within 30 days of first visit — industry benchmark for engagement apps is 40%+.</li>
            <li><strong>Session Depth:</strong> Average session ends after viewing 2.4 company profiles with zero social/community interaction.</li>
            <li><strong>Content Consumption:</strong> Salary data pages have 4.2x higher engagement than review pages — but no personalized salary tracking exists.</li>
            <li><strong>Drop-off Pattern:</strong> 72% of users abandon immediately after getting the one answer they came for — the job interview experience review they needed.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Strategic Growth Initiatives (6-Month Roadmap)</h3>
          <ul class="cs-list">
            <li><strong>Month 1–2 | AI Salary Benchmark Alerts:</strong> Personalized notifications when salary data for a user's target role/company changes significantly. Users set salary targets; system notifies when the gap closes.</li>
            <li><strong>Month 2–4 | Company Interview Intelligence Digest:</strong> Weekly automated email/push with the top 5 trending interview questions for companies the user has bookmarked — creating a recurring reason to return.</li>
            <li><strong>Month 3–5 | Gamified Review Economy:</strong> Gate premium salary insights (salary range by experience band) behind review contributions. Writing 1 review unlocks 10 premium views — creating a self-sustaining content loop.</li>
            <li><strong>Month 4–6 | Career Progress Dashboard:</strong> Allow users to track their career timeline on AmbitionBox — role, company, salary — creating LinkedIn-like stickiness anchored to career data.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">4. Target Metrics & Projected Impact</h3>
          <ul class="cs-list">
            <li><strong>D30 Retention Lift:</strong> Target 25% improvement (from 18% → 22.5%+ within 6 months).</li>
            <li><strong>Review Submission Rate:</strong> 3x increase in monthly review submissions via gamified economy.</li>
            <li><strong>Email CTR:</strong> Weekly digest targeting 18%+ open rate vs. industry average of 8% for career platforms.</li>
          </ul>
        </div>
      </div>
    `
  },
  chargebee: {
    title: "PRD — Chargebee: AI Contract-to-Subscription Overview",
    badge: "Project Overview",
    extUrl: "https://www.notion.so/PRD-Chargebee-Contract-to-Subscription-using-AI-feature-31622c713ac980cc8b91d0c125bc9618",
    html: `
      <div class="case-study-drawer">
        <div class="cs-callout-box">
          ⚡ <strong>Live Prototype & Process Flow Available:</strong> Click <em>Interactive Prototype</em> to launch the working CodeSandbox app in a new tab, or <em>Flow Diagram</em> to view the embedded Figma process flow directly in this viewer!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Product Requirements Summary</h3>
          <p class="cs-p">Authored a comprehensive PRD for an AI-powered Chargebee feature that eliminates manual contract-to-subscription data re-entry. When a B2B sales team closes a deal, an uploaded signed PDF contract is parsed by AI to auto-generate a draft subscription — reducing setup time from 45 minutes to under 2 minutes.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Problem Statement & Business Impact</h3>
          <ul class="cs-list">
            <li><strong>Current Pain:</strong> Billing managers manually re-type contract terms (price, billing cycle, discounts, start date) into Chargebee after every enterprise deal close — taking 30–45 minutes per contract.</li>
            <li><strong>Error Rate:</strong> Manual entry causes ~12% billing discrepancy rate, leading to invoice disputes and delayed revenue recognition.</li>
            <li><strong>Scale Impact:</strong> For a company closing 200 contracts/month, this represents 100+ hours of manual work and thousands in revenue recognition delays.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Core Feature Architecture & User Stories</h3>
          <ul class="cs-list">
            <li><strong>CR1 — Readiness Validation Engine:</strong> AI flags missing or ambiguous fields (no payment terms, unclear renewal clause) before submission, blocking incomplete contracts from creating broken subscriptions.</li>
            <li><strong>CR2 — Side-by-Side Contract Viewer:</strong> Billing Manager sees the original PDF on the left, AI-extracted subscription fields on the right — can edit any field inline before approval.</li>
            <li><strong>CT1 — Draft Subscription Guardrail:</strong> All AI-generated subscriptions land in "Draft" status — they NEVER auto-activate. A billing manager must explicitly click "Activate" after confirming all fields.</li>
            <li><strong>CR3 — Multi-Currency & Tier Pricing:</strong> Handles enterprise contracts with tiered pricing, multi-currency billing, and SLA-linked billing milestones.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">4. Acceptance Criteria & Success Metrics</h3>
          <ul class="cs-list">
            <li><strong>Subscription Setup Time:</strong> Reduce from 45 mins → under 2 minutes per contract (95th percentile).</li>
            <li><strong>AI Extraction Accuracy:</strong> Target &gt;92% field extraction accuracy across standard B2B SaaS contracts.</li>
            <li><strong>Billing Error Rate:</strong> Reduce billing discrepancy rate from ~12% to &lt;2% within 60 days of launch.</li>
            <li><strong>Human Confirmation Rate:</strong> 100% of subscriptions require human activation — zero auto-billing risk.</li>
          </ul>
        </div>
      </div>
    `
  },
  visionflow: {
    title: "VisionFlow — AI Goal Productivity App Overview",
    badge: "Project Overview",
    extUrl: "https://ai.studio/apps/7a5233f8-33cf-4464-8e07-53175fec4a41",
    html: `
      <div class="case-study-drawer">
        <div class="cs-callout-box">
          ⚡ <strong>Live Working App & Design Teardown Available:</strong> Click <em>"Open in AI Studio"</em> above to launch the live working Gemini-powered app in a new tab, or click <em>View Teardown</em> to explore the design deck PDF!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Product Concept & Vision</h3>
          <p class="cs-p">VisionFlow is a personal AI-powered productivity app built on Gemini AI that fundamentally reframes how you think about task management. Instead of maintaining a generic to-do list, every single task is anchored to a concrete personal vision card — making it impossible to waste time on work that doesn't serve your goals.</p>
          <p class="cs-p">The core insight: Traditional productivity apps fail not because users don't track tasks, but because they lose connection between daily actions and long-term life goals. VisionFlow solves this through vision-anchored task architecture.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Core Feature Architecture</h3>
          <ul class="cs-list">
            <li><strong>Vision Card System:</strong> Users create "Vision Cards" representing their biggest life goals (Launch a startup, Get fit, Learn guitar). Every task must be linked to a Vision Card before it can be created.</li>
            <li><strong>Chromatic Progress Visualization:</strong> Vision card images start in black-and-white. As linked sub-tasks are completed, the image progressively fills with color — 100% tasks = full vibrant photo. Provides visceral, emotional progress feedback.</li>
            <li><strong>Gemini Peak Focus Engine:</strong> Analyzes task completion velocity patterns across 7 days, identifies your highest-focus time windows (e.g., "You complete 80% of complex tasks between 9–11am"), and reschedules deep work accordingly.</li>
            <li><strong>Guilt-Free Rest Day Architecture:</strong> Includes 4 built-in Rest Day tokens per month. On rest days, all streaks are frozen — no penalty, no guilt. Prevents the #1 cause of app abandonment: "I missed one day so what's the point."</li>
            <li><strong>Vision Ring Progression:</strong> A circular progress ring on each vision card shows overall completion percentage, turning goal tracking into a visual game of filling the ring.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Technical Design & AI Integration</h3>
          <ul class="cs-list">
            <li><strong>Built with:</strong> Google AI Studio (Gemini 1.5 Pro API) for behavioral analysis, task decomposition suggestions, and motivational prompt generation.</li>
            <li><strong>AI Task Decomposition:</strong> Input "Write a business plan" → Gemini breaks it into 8 actionable sub-tasks with time estimates and assigns them to the correct Vision Card.</li>
            <li><strong>Personalized Motivational Nudges:</strong> Gemini sends context-aware notifications — not generic reminders — based on your historical completion patterns and current vision progress percentage.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">4. Key Differentiators vs. Existing Apps</h3>
          <ul class="cs-list">
            <li>vs. <strong>Todoist/Notion:</strong> VisionFlow forces goal linkage — you can't create a task without assigning it to a life vision.</li>
            <li>vs. <strong>Habitica:</strong> VisionFlow uses real Gemini AI behavior analysis, not just gamification points.</li>
            <li>vs. <strong>Streaks:</strong> Rest days are built-in rather than treated as failures — more psychologically sustainable.</li>
          </ul>
        </div>
      </div>
    `
  },
  carepulse: {
    title: "CarePulse — Cashless Hospital Discharge Automation Overview",
    badge: "Project Overview",
    extUrl: "https://www.notion.so/Fabri-Play-PM-Assignment-3bd22c713ac980faaf21e6c2f9790d25",
    html: `
      <div class="case-study-drawer">
        <div class="cs-callout-box">
          📋 <strong>Full PRD & Process Flow Available:</strong> Click <em>"Open in Notion"</em> above to read the complete public PRD with detailed user stories and acceptance criteria, or click <em>Figma Flow</em> to view the workflow process diagram!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Executive Summary & Business Problem</h3>
          <p class="cs-p">Indian hospitals lose ₹15–30 lakh per month in delayed cashless discharges. After a patient receives medical clearance, the discharge process stalls for 4–8 hours due to incomplete insurance claim documents, opaque TPA (Third Party Administrator) approval status, and manual coordination bottlenecks between hospital billing, insurance desk, and doctors.</p>
          <p class="cs-p">CarePulse is a hospital-facing SaaS module that eliminates this delay through an automated AI claim validation system, a real-time operations control tower, and a patient transparency layer.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. User Personas & Primary Stakeholders</h3>
          <ul class="cs-list">
            <li><strong>Insurance Desk Executive:</strong> Manages 20–30 cashless cases per day — primary user of the claim readiness checklist and control tower dashboard.</li>
            <li><strong>TPA Coordinator:</strong> External reviewer from the insurance company — communicates via the structured query system rather than phone calls.</li>
            <li><strong>Hospital Billing Manager:</strong> Needs real-time financial exposure visibility across all pending cashless cases.</li>
            <li><strong>Patient & Family:</strong> Needs transparent, timely status updates on discharge clearance — primary beneficiaries of the communication layer.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Core Product Modules</h3>
          <ul class="cs-list">
            <li><strong>AI Claim Readiness Checklist:</strong> Rule-driven engine validates all mandatory documents (discharge summary, original bills, diagnostic reports, pre-auth letter) before the file is submitted to TPA. Missing documents flagged as BLOCKING or ADVISORY items with specific resolution guidance.</li>
            <li><strong>Insurance Control Tower Dashboard:</strong> Real-time kanban-style view of all active cashless cases with status (Submitted / Query Raised / Approved / Rejected), assigned owner, time elapsed, and TAT breach alerts with escalation triggers.</li>
            <li><strong>TPA Query Management System:</strong> Structured in-app Q&A thread replaces unstructured phone calls — every query is timestamped, assigned, and tracked to resolution.</li>
            <li><strong>Patient Communication Layer:</strong> WhatsApp/SMS messages at 3 key milestones: (1) TPA submission confirmed, (2) TPA query raised (with expected resolution time), (3) Approval received — discharge initiated.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">4. Key User Stories & Acceptance Criteria</h3>
          <ul class="cs-list">
            <li><strong>CR1:</strong> Given an insurance file is missing the discharge summary, the system marks the case as BLOCKED and prevents TPA submission until resolved.</li>
            <li><strong>CT1:</strong> As an Operations Executive, I see all cases in a single dashboard with color-coded TAT status — green (&lt;2h), yellow (2–4h), red (&gt;4h breach).</li>
            <li><strong>CP1:</strong> As a patient, I receive an automated WhatsApp message within 5 minutes of TPA approval with my estimated discharge time.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">5. Guardrail Metrics & Target Impact</h3>
          <ul class="cs-list">
            <li><strong>Discharge Delay Reduction:</strong> 60% reduction in median delay post medical clearance (from ~6h to ~2.4h average).</li>
            <li><strong>Claim Accuracy:</strong> Zero reduction in claim submission accuracy — readiness checklist ensures no missing documents reach TPA.</li>
            <li><strong>Patient Complaint Rate:</strong> Target 40% reduction in billing-desk complaints via proactive communication layer.</li>
          </ul>
        </div>
      </div>
    `
  },
  claimchart: {
    title: "Patent AI — Patent Analysis & Litigation Workspace Overview",
    badge: "Project Overview",
    extUrl: "https://www.notion.so/Lumenci-Assignment-3a622c71-3ac9-80dab62ee34f268402a2",
    html: `
      <div class="case-study-drawer">
        <div class="cs-callout-box">
          ⚡ <strong>Working App & Figma Flow Available:</strong> Click <em>"Open Claude App"</em> above to experience the functional Claude AI prototype in a new tab, or <em>Figma Flow</em> to view the interactive user architecture diagram!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Executive Overview & Product Vision</h3>
          <p class="cs-p">Patent AI (built for Lumenci) is a dual-pane AI workspace that transforms the manual, error-prone process of patent claim chart analysis into a structured, AI-accelerated workflow. Patent attorneys and IP analysts can now review and critique claim charts in under 15 minutes — work that previously consumed 2+ hours per chart.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Problem Deep-Dive: What Breaks in Patent Analysis Today</h3>
          <ul class="cs-list">
            <li><strong>Manual Mapping Burden:</strong> Analysts manually cross-reference 7–12 patent claim elements against technical PDFs (patents, research papers, product specs), switching between 3–5 documents simultaneously.</li>
            <li><strong>Inconsistent Terminology:</strong> Legal claim language (e.g., "means for computing") vs. technical spec language creates interpretation gaps that cause citation errors and court exposure.</li>
            <li><strong>Context-Switching Friction:</strong> Every claim element requires re-reading source documents from scratch — no persistent context tracking across the analysis session.</li>
            <li><strong>Hallucination Risk:</strong> Generic LLMs (ChatGPT, Claude) confidently fabricate citations — catastrophically dangerous in litigation contexts where wrong citations can invalidate claims.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Core Feature Architecture</h3>
          <ul class="cs-list">
            <li><strong>Dual-Pane Workspace:</strong> Left pane shows live AI critique stream for each claim element (1.a, 1.b, 1.c... 2.a). Right pane shows persistent claim element status panel — tracks each element's status (Mapped ✅ / Pending Evidence ⚠️ / Rejected ❌) across the entire session.</li>
            <li><strong>Automated Diagnostic Engine:</strong> For each claim element, AI auto-detects: Weak Reasoning (mapping is there but logic is thin), Missing Citation (mapping asserted but no source document cited), Dependent Claim Gap (dependent claim references an element not mapped in independent claim).</li>
            <li><strong>Non-Hallucination Hard Stop:</strong> When the AI cannot find supporting evidence in the uploaded technical documents, it HALTS — marks the element as "Pending Evidence" and asks the analyst to upload additional source material. It does not fabricate a citation.</li>
            <li><strong>Confidence Scoring:</strong> Every AI assertion is tagged High / Medium / Low confidence with the specific source text it's drawing from — full auditability.</li>
            <li><strong>Litigation-Ready Word Export:</strong> One-click formatted .docx export with claim elements, mappings, citations, and confidence scores formatted for court submission.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">4. Key Impact Metrics & Validation</h3>
          <ul class="cs-list">
            <li><strong>Review Velocity:</strong> Reduced claim chart review time from ~120 minutes → under 15 minutes per 7-element chart (8x speed improvement).</li>
            <li><strong>AI Acceptance Rate:</strong> Over 85% of AI-suggested claim mappings accepted by analysts without modification in internal testing.</li>
            <li><strong>Hallucination Rate:</strong> 0% — the non-hallucination guardrail hard stop ensures AI never cites a source it cannot locate in uploaded documents.</li>
          </ul>
        </div>
      </div>
    `
  }
};

/* ── MODAL ENGINE (IN-APP DRAWER & IFRAME / FALLBACK PANEL) ── */
function initModalEngine() {
  const backdrop = document.getElementById('modal-backdrop');
  const modalIframe = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalExtLink = document.getElementById('modal-ext-link');
  const modalLoader = document.getElementById('modal-loader');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalBody = document.querySelector('.modal-body');

  if (!backdrop) return;

  function getOrCreateTextContainer() {
    let el = document.getElementById('modal-text-container');
    if (!el) {
      el = document.createElement('div');
      el.id = 'modal-text-container';
      modalBody.appendChild(el);
    }
    return el;
  }

  function showTextContainer(html) {
    const tc = getOrCreateTextContainer();
    modalIframe.style.display = 'none';
    modalLoader.classList.add('hidden');
    tc.style.display = 'block';
    tc.innerHTML = html;
  }

  // Open In-App Pop-up Text Block (Case Study Overviews)
  window.openCaseStudyText = function(key) {
    const data = caseStudyData[key];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalBadge.textContent = data.badge;
    modalExtLink.href = data.extUrl || '#';
    modalExtLink.textContent = 'Open External Link ↗';
    modalExtLink.target = '_blank';
    modalExtLink.rel = 'noopener noreferrer';

    showTextContainer(data.html);
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Open In-App PDF / Figma / Web Prototype Pop-up Viewer
  window.openModal = function(type, title, url, extUrl) {
    const targetExtUrl = extUrl || url || '#';

    modalTitle.textContent = title || 'Project Preview';
    modalBadge.textContent = type || 'Preview';
    modalExtLink.href = targetExtUrl;
    modalExtLink.textContent = 'Open Link ↗';
    modalExtLink.target = '_blank';
    modalExtLink.rel = 'noopener noreferrer';

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    // If the URL is known to block iframe embedding, show a styled fallback panel
    if (isEmbedBlocked(url)) {
      showTextContainer(buildEmbedBlockedPanel(type, title, targetExtUrl));
      return;
    }

    // Handle Figma proto → embed transformation
    let processedUrl = url;
    if (url && url.includes('figma.com/proto/')) {
      processedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
    }

    // Standard embeddable content (Figma Site, Google Drive preview, etc.)
    const tc = getOrCreateTextContainer();
    tc.style.display = 'none';
    modalIframe.style.display = 'block';
    modalLoader.classList.remove('hidden');

    modalIframe.src = processedUrl;

    modalIframe.onload = () => {
      modalLoader.classList.add('hidden');
    };

    // Fallback: hide loader after 4s in case iframe blocks onload event
    setTimeout(() => {
      modalLoader.classList.add('hidden');
    }, 4000);
  };

  // Build a rich "Can't embed" fallback panel for X-Frame-Options blocked content
  function buildEmbedBlockedPanel(type, title, extUrl) {
    const icons = {
      'Interactive Prototype': '⚡',
      'AI Studio App': '🤖',
      'Claude AI App': '🤖',
      'Notion PRD': '📋',
      'PDF Teardown': '📄',
    };
    const icon = icons[type] || '🔗';

    let description = '';
    if (type === 'Interactive Prototype' || type === 'AI Studio App' || type === 'Claude AI App') {
      description = 'This interactive prototype is hosted on an external platform that prevents embedding for security reasons. Click the button below to launch it directly in a new browser tab — it works best in full screen!';
    } else if (type === 'Notion PRD') {
      description = 'This PRD is hosted on Notion. Click below to open the full public document with all user stories, acceptance criteria, and product specifications.';
    } else {
      description = 'This content is hosted externally. Click below to view it in a new tab.';
    }

    return `
      <div class="embed-blocked-panel">
        <div class="embed-blocked-icon">${icon}</div>
        <h3 class="embed-blocked-title">${title}</h3>
        <p class="embed-blocked-desc">${description}</p>
        <a href="${extUrl}" target="_blank" rel="noopener noreferrer" class="embed-blocked-cta">
          Launch ${type} ↗
        </a>
        <p class="embed-blocked-hint">Opens in a new tab • No sign-in required</p>
      </div>
    `;
  }

  // Close Modal Function
  window.closeModal = function() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';

    setTimeout(() => {
      modalIframe.src = 'about:blank';
      modalLoader.classList.remove('hidden');
      const tc = document.getElementById('modal-text-container');
      if (tc) tc.innerHTML = '';
    }, 300);
  };

  closeBtn.addEventListener('click', window.closeModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      window.closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      window.closeModal();
    }
  });
}
