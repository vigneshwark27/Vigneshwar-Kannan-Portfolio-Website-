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

/* ── PRD & CASE STUDY TEXT CONTENT FOR IN-APP POPUPS ── */
const caseStudyData = {
  genz: {
    title: "Gen-Z Clothing Brand — Product & UX Design",
    badge: "Case Study Popup",
    extUrl: "https://www.figma.com/proto/9QxhmIwIwpRSoKGVRpOVF9/vicky?node-id=24-3&starting-point-node-id=24%3A3&t=gP71SKR7SD5bTenF-1",
    html: `
      <div class="case-study-drawer">
        <div class="cs-section">
          <h3 class="cs-h3">1. Executive Overview</h3>
          <p class="cs-p">Conceptualized and designed wireframes for a high-energy Gen Z-focused fashion e-commerce platform. Integrated bold visual hierarchy, seamless product discovery, and mobile-first checkout interaction patterns.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Problem & User Research</h3>
          <p class="cs-p">Gen-Z shoppers (18–24) expect bold visuals, instant navigation, and minimal friction. Standard e-commerce templates with traditional menus lead to high bounce rates among younger audiences.</p>
          <ul class="cs-list">
            <li>Studied interaction preferences across Zara, H&M, and SHEIN mobile experiences.</li>
            <li>Identified demand for full-bleed imagery, dark/light aesthetic contrast, and 1-tap cart additions.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Solution & Interaction Design</h3>
          <p class="cs-p">Designed full wireframes and an interactive Figma prototype covering home feed, product detail pages (PDP), interactive filter modal, and a streamlined 3-step checkout.</p>
        </div>
      </div>
    `
  },
  ola: {
    title: "Ola App — UX Optimization for Tier 2/3 Cities",
    badge: "Case Study Popup",
    extUrl: "https://drive.google.com/file/d/1UO1ij-67LFEumMwNrRplr2s9BjuseMkR/view?usp=sharing",
    html: `
      <div class="case-study-drawer">
        <div class="cs-section">
          <h3 class="cs-h3">1. Background & Challenge</h3>
          <p class="cs-p">Rider drop-offs in Indian tier 2/3 cities stem from poor GPS mapping, complex multi-step ride booking screens, and language barriers for less tech-savvy users.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. User Pain Points & Research</h3>
          <ul class="cs-list">
            <li><strong>Inaccurate Pickup Pins:</strong> Unmapped streets in tier 2/3 cities cause driver miscommunication.</li>
            <li><strong>UI Overload:</strong> Too many options on the home screen overwhelm regional users.</li>
            <li><strong>Connectivity Drops:</strong> Slow mobile networks stall booking confirmation screens.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Proposed UX Solutions</h3>
          <ul class="cs-list">
            <li>Simplified 1-tap ride booking flow with landmark-assisted pickup confirmation.</li>
            <li>Offline-capable booking confirmation state and prominent regional language toggle.</li>
            <li>Redesigned driver ETA screen with high-contrast font and direct voice communication shortcut.</li>
          </ul>
        </div>
      </div>
    `
  },
  ambitionbox: {
    title: "AmbitionBox — 25% User Retention Lift Strategy",
    badge: "Growth Strategy Popup",
    extUrl: "https://drive.google.com/file/d/1gZb3Y2EqE2lltr2TbtfzZG0XfyM329Aa/view?usp=sharing",
    html: `
      <div class="case-study-drawer">
        <div class="cs-section">
          <h3 class="cs-h3">1. Executive Summary</h3>
          <p class="cs-p">Designed a 6-month growth roadmap for AmbitionBox targeting a 25% lift in returning users by implementing personalized company recommendations, salary trackers, and gamified engagement loops.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Behavioral Data & Drop-off Analysis</h3>
          <p class="cs-p">Behavioral analytics revealed that 60%+ of users visited AmbitionBox solely during active job interviews and abandoned the app after viewing 3 company reviews.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Growth & Product Initiatives</h3>
          <ul class="cs-list">
            <li><strong>Personalized Review Feed:</strong> AI recommendations based on user's current role and target companies.</li>
            <li><strong>Salary Insights Tracker:</strong> Interactive tool allowing users to benchmark pay across tech hubs.</li>
            <li><strong>Weekly Industry Digest:</strong> Automated re-engagement emails featuring trending company ratings.</li>
          </ul>
        </div>
      </div>
    `
  },
  chargebee: {
    title: "PRD — Chargebee: Contract-to-Subscription via AI",
    badge: "Public Notion PRD",
    extUrl: "https://www.notion.so/PRD-Chargebee-Contract-to-Subscription-using-AI-feature-31622c713ac980cc8b91d0c125bc9618",
    html: `
      <div class="case-study-drawer">
        <div class="cs-section">
          <h3 class="cs-h3">1. Product Requirements Summary</h3>
          <p class="cs-p">An AI feature for Chargebee that converts signed contract PDFs into draft subscriptions automatically, eliminating manual data re-entry while preserving mandatory human confirmation before billing activation.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Problem Statement</h3>
          <p class="cs-p">Sales and billing teams at B2B SaaS companies spend significant time manually re-entering contract details into subscription systems. This process is error-prone, slow, and delays go-live time-to-revenue.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Core User Stories & Backlog</h3>
          <ul class="cs-list">
            <li><strong>CR1 (Readiness Checklist):</strong> As a Billing Executive, I want the system to identify missing or inconsistent contract data so I can address issues before submission.</li>
            <li><strong>CR2 (Side-by-Side Review):</strong> As a Billing Executive, I want an inline PDF viewer next to AI-extracted fields to quickly confirm contract terms.</li>
            <li><strong>CT1 (Draft Subscription Control):</strong> Subscriptions created from contracts are saved as drafts — non-auto-activating to eliminate billing risk.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">4. Acceptance Criteria & Guardrails</h3>
          <p class="cs-p">Given a required document is missing or corrupted, the system flags it as a blocking issue. Subscriptions must never auto-activate without human confirmation.</p>
        </div>
      </div>
    `
  },
  visionflow: {
    title: "VisionFlow — AI Goal-Driven Productivity App Teardown",
    badge: "Product Teardown Popup",
    extUrl: "https://ai.studio/apps/7a5233f8-33cf-4464-8e07-53175fec4a41?fullscreenApplet=true",
    html: `
      <div class="case-study-drawer">
        <div class="cs-section">
          <h3 class="cs-h3">1. VisionFlow Concept & Architecture</h3>
          <p class="cs-p">VisionFlow is a goal-driven productivity app built with Gemini AI where every task is directly tied to a personal vision card. As tasks are completed, the vision card image evolves from black-and-white to full color.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Key Behavioral Innovations</h3>
          <ul class="cs-list">
            <li><strong>Vision-First Alignment:</strong> Eliminates meaningless todo lists by enforcing goal linkage.</li>
            <li><strong>Rest Day Management:</strong> 4 guilt-free rest days per month where streak progress is frozen instead of penalizing users.</li>
            <li><strong>Peak Focus Detection:</strong> Gemini AI analyzes completion velocity to recommend task scheduling during user's highest focus windows.</li>
          </ul>
        </div>
      </div>
    `
  },
  carepulse: {
    title: "PRD — Cashless Hospital Discharge Automation (CarePulse)",
    badge: "Public Notion PRD",
    extUrl: "https://www.notion.so/Fabri-Play-PM-Assignment-3bd22c71-3ac9-80fa-af21-e6c2f9790d25",
    html: `
      <div class="case-study-drawer">
        <div class="cs-section">
          <h3 class="cs-h3">1. Objective & Problem Statement</h3>
          <p class="cs-p">Cashless hospital discharge in India suffers from 4–8 hour operational delays post medical clearance due to missing claim documentation, opaque TPA status, and manual coordination between insurance ops, doctors, and billing.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Core Product Capabilities</h3>
          <ul class="cs-list">
            <li><strong>Claim Readiness & AI Validation Checklist:</strong> Rules-driven checklist surfacing missing claim documents before submission to TPA.</li>
            <li><strong>Insurance Claim Control Tower:</strong> Centralized real-time dashboard monitoring claim status, owner, TAT breach alerts, and TPA queries.</li>
            <li><strong>Patient Communication Layer:</strong> Controlled WhatsApp/SMS status updates informing patients of expected discharge clearance times.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. User Stories & Acceptance Criteria</h3>
          <ul class="cs-list">
            <li><strong>CR1:</strong> As an Insurance Executive, I want the system to flag incomplete claim fields so I can resolve blockers before submission.</li>
            <li><strong>CT1:</strong> As an Operations Executive, I want a control tower dashboard displaying claim owner, status, and pending TPA queries.</li>
            <li><strong>AC1:</strong> Given missing documents, system marks claim status as BLOCKED until resolved by executive.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">4. Impact & Guardrail Metrics</h3>
          <p class="cs-p">Targeting a 60% reduction in median discharge delay post medical clearance; zero drop in claim submission accuracy.</p>
        </div>
      </div>
    `
  },
  claimchart: {
    title: "PRD — ClaimChart AI: Patent Analysis & Litigation Workspace",
    badge: "Public Notion PRD",
    extUrl: "https://www.notion.so/Lumenci-Assignment-3a622c71-3ac9-80dab62ee34f268402a2",
    html: `
      <div class="case-study-drawer">
        <div class="cs-section">
          <h3 class="cs-h3">1. Executive Product Overview</h3>
          <p class="cs-p">A dual-pane AI assistant for patent analysts that replaces manual spreadsheet claim chart mapping with an interactive claim element tracking panel and diagnostic critique chat engine.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Problem Statement</h3>
          <p class="cs-p">Patent analysts spend 2+ hours manually reviewing claim charts against technical PDFs. Manual workflows suffer from inconsistent legal terminology, missing dependent claim citations, and context-switching friction.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Core Features & Non-Hallucination Guardrail</h3>
          <ul class="cs-list">
            <li><strong>Dual-Pane Workspace:</strong> Active AI critique stream on left; persistent claim element status panel (1.a to 2.a) on right.</li>
            <li><strong>Automated Diagnostic Engine:</strong> Auto-detects Weak Reasoning, Missing Mappings, or Citation Gaps with confidence scores (High/Medium/Low).</li>
            <li><strong>Strict Non-Hallucination Halt:</strong> When supporting evidence is missing, AI halts and marks status as <em>Pending Evidence</em>, requesting technical uploads.</li>
            <li><strong>Litigation-Ready Export:</strong> Formatted Word (.docx) export ready for court filing.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">4. Measured Velocity Impact</h3>
          <p class="cs-p">Reduced claim chart review time from ~2 hours to &lt; 15 minutes per 7-element chart with &gt; 85% AI suggestion acceptance rate.</p>
        </div>
      </div>
    `
  }
};

/* ── MODAL ENGINE (IN-APP DRAWER & IFRAME PREVIEW) ── */
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

  // Open In-App Pop-up Text Block
  window.openCaseStudyText = function(key) {
    const data = caseStudyData[key];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalBadge.textContent = data.badge;
    modalExtLink.href = data.extUrl || '#';

    modalIframe.style.display = 'none';
    modalLoader.classList.add('hidden');
    
    let textContainer = document.getElementById('modal-text-container');
    if (!textContainer) {
      textContainer = document.createElement('div');
      textContainer.id = 'modal-text-container';
      modalBody.appendChild(textContainer);
    }
    textContainer.style.display = 'block';
    textContainer.innerHTML = data.html;

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Open In-App PDF / Figma / Web Prototype Pop-up Viewer
  window.openModal = function(type, title, url, extUrl) {
    modalTitle.textContent = title || 'Project Preview';
    modalBadge.textContent = type || 'Preview';
    modalExtLink.href = extUrl || url || '#';
    
    const textContainer = document.getElementById('modal-text-container');
    if (textContainer) textContainer.style.display = 'none';
    
    modalIframe.style.display = 'block';
    modalLoader.classList.remove('hidden');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    modalIframe.src = url;

    modalIframe.onload = () => {
      modalLoader.classList.add('hidden');
    };
  };

  // Close Modal Function
  window.closeModal = function() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    
    setTimeout(() => {
      modalIframe.src = 'about:blank';
      modalLoader.classList.remove('hidden');
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
