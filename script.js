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
    title: "Gen-Z Clothing Brand — Product & UX Design Overview",
    badge: "Project Overview",
    extUrl: "https://www.figma.com/proto/9QxhmIwIwpRSoKGVRpOVF9/vicky?node-id=24-3&starting-point-node-id=24%3A3&t=gP71SKR7SD5bTenF-1",
    html: `
      <div class="case-study-drawer">
        <div class="cs-callout-box">
          ⚡ <strong>Interactive Prototype Available:</strong> You can explore the full interactive Figma prototype directly in the popup viewer or open the Figma canvas. Click the <em>Figma Prototype</em> button below or in the header to launch!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Executive Summary & Impact</h3>
          <p class="cs-p">Conceptualized and engineered end-to-end UX wireframes and interactive prototypes for a high-energy Gen Z fashion e-commerce brand. Designed to maximize checkout conversion and eliminate mobile cart drop-off.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Core Problem & User Insights</h3>
          <p class="cs-p">Gen-Z shoppers (ages 18–24) reject multi-nested menus and traditional search-heavy e-commerce layouts. They demand immersive full-bleed visuals, instant visual filters, and frictionless 1-tap checkout paths.</p>
          <ul class="cs-list">
            <li><strong>Visual-First Navigation:</strong> Replaced text categories with dynamic trend story reels.</li>
            <li><strong>Zero-Friction Checkout:</strong> Reduced checkout steps from 5 screens down to 2 interactions.</li>
            <li><strong>Gen-Z Aesthetic:</strong> Dark/light high-contrast cards with micro-animations.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Key UX Results & Artifacts</h3>
          <p class="cs-p">Delivered a 100% complete mobile user journey from home feed discovery to order confirmation. Interactive prototype validated with target users for seamless mobile usability.</p>
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
          📄 <strong>Full Product Teardown PDF Available:</strong> Click the <em>View Teardown</em> button to inspect the complete slide deck, user journey mapping, and metric breakdown directly inside the pop-up viewer!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Problem Statement & Context</h3>
          <p class="cs-p">Rider drop-offs in Indian Tier 2 & Tier 3 cities stem from inconsistent GPS tracking, language barriers, and overly complex ride-booking UI screens optimized for Tier 1 tech-savvy users.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Key Friction Points Identified</h3>
          <ul class="cs-list">
            <li><strong>Pickup Location Ambiguity:</strong> Unmapped suburban pin drops cause high driver cancelation rates.</li>
            <li><strong>Cognitive Overload:</strong> Too many vehicle tiers (Mini, Prime, Auto, Bike) displayed without clear price/ETA hierarchy.</li>
            <li><strong>Network Latency:</strong> App fails gracefully on 2G/3G mobile networks common in suburban areas.</li>
          </ul>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Strategic Recommendations & Expected Impact</h3>
          <p class="cs-p">Proposed landmark-assisted pin confirmation, offline ride booking status, and regional language toggles — projected to reduce booking drop-off by 25% in target Tier 2/3 markets.</p>
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
          📄 <strong>Full Growth Strategy PDF Available:</strong> View the comprehensive 6-month product roadmap and retention funnel analysis by clicking the <em>View Teardown</em> button!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Executive Overview</h3>
          <p class="cs-p">Designed a high-impact 6-month growth roadmap for AmbitionBox aimed at transforming single-visit job seekers into recurring active community members, targeting a 25% lift in monthly active retention (D30/D90).</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Behavioral Data & Drop-off Root Cause</h3>
          <p class="cs-p">Analytics showed that 60%+ of visitors bounce after checking a single company's interview reviews. There was no habit-forming loop keeping users engaged between job changes.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Growth Core Initiatives</h3>
          <ul class="cs-list">
            <li><strong>AI Salary Insights Tracker:</strong> Personalized salary benchmark alerts based on user role and experience.</li>
            <li><strong>Company Interview Digest:</strong> Automated weekly digest featuring real interview questions for bookmarked companies.</li>
            <li><strong>Gamified Review Contributions:</strong> Unlock premium salary insights by reviewing past employers.</li>
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
          ⚡ <strong>Interactive Prototype & Process Flow Available:</strong> Click <em>Interactive Prototype</em> to test the working CodeSandbox app or <em>Flow Diagram</em> to inspect the process flow diagram in pop-up!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Product Requirements Summary</h3>
          <p class="cs-p">Authored a complete Product Requirements Document (PRD) for Chargebee introducing an AI-powered feature that parses uploaded B2B enterprise contract PDFs into draft billing subscriptions in seconds.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Problem & Value Proposition</h3>
          <p class="cs-p">B2B SaaS billing teams spend 30–45 minutes per contract manually transferring tier pricing, billing cycles, and discount terms. Manual entry causes billing errors and delays revenue recognition.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Key User Stories & Safety Guardrails</h3>
          <ul class="cs-list">
            <li><strong>Split-Screen Verification:</strong> Side-by-side contract viewer and AI extracted field editor.</li>
            <li><strong>Human-in-the-Loop Safeguard:</strong> Draft subscriptions require mandatory billing manager sign-off before activation.</li>
            <li><strong>Inconsistency Alerts:</strong> Automated validation flags missing payment terms or ambiguous renewal dates.</li>
          </ul>
        </div>
      </div>
    `
  },
  visionflow: {
    title: "VisionFlow — AI Goal Productivity App Overview",
    badge: "Project Overview",
    extUrl: "https://ai.studio/apps/7a5233f8-33cf-4464-8e07-53175fec4a41?fullscreenApplet=true",
    html: `
      <div class="case-study-drawer">
        <div class="cs-callout-box">
          ⚡ <strong>Live AI Studio Prototype & PDF Teardown Available:</strong> Click <em>AI Studio App</em> to launch the live working prototype or <em>View Teardown</em> to inspect the design deck!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Concept & Product Vision</h3>
          <p class="cs-p">VisionFlow is a goal-driven productivity mobile app built with Gemini AI that links daily task execution directly to long-term personal visions, turning abstract goals into actionable daily momentum.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Key Product Innovations</h3>
          <ul class="cs-list">
            <li><strong>Visual Vision Progression:</strong> Vision cards dynamically transform from monochrome to vibrant color as sub-tasks are completed.</li>
            <li><strong>Guilt-Free Rest Days:</strong> Includes 4 monthly streak freezes so users don't abandon the app after missing a single day.</li>
            <li><strong>Gemini Focus Engine:</strong> Analyzes user energy patterns to suggest optimal focus blocks.</li>
          </ul>
        </div>
      </div>
    `
  },
  carepulse: {
    title: "CarePulse — Cashless Hospital Discharge Automation Overview",
    badge: "Project Overview",
    extUrl: "https://www.notion.so/Fabri-Play-PM-Assignment-3bd22c71-3ac9-80fa-af21-e6c2f9790d25",
    html: `
      <div class="case-study-drawer">
        <div class="cs-callout-box">
          ⚡ <strong>Figma Flow Diagram & Notion PRD Available:</strong> Click the <em>Figma Flow</em> button to view the interactive process flow diagram in pop-up or access the full public Notion PRD!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Executive Summary</h3>
          <p class="cs-p">Designed an end-to-end B2B HealthTech PRD and workflow automation system aimed at eliminating 4–8 hour discharge delays for cashless insurance patients in Indian hospitals.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Core Operational Modules</h3>
          <ul class="cs-list">
            <li><strong>AI Claim Readiness Checklist:</strong> Pre-validates mandatory discharge summaries and billing invoices before TPA submission.</li>
            <li><strong>Insurance Control Tower:</strong> Real-time dashboard for hospital desk staff tracking claim status, TPA queries, and TAT alerts.</li>
            <li><strong>Patient Transparency Portal:</strong> Live status updates via SMS/WhatsApp reducing patient anxiety at the billing desk.</li>
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
          ⚡ <strong>Working Claude AI App & Figma Flow Available:</strong> Click <em>Claude AI App</em> to experience the functional prototype app or <em>Figma Flow</em> to view the user architecture diagram!
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">1. Executive Overview</h3>
          <p class="cs-p">Engineered a dual-pane AI workspace (Patent AI) for patent attorneys and IP analysts, replacing manual spreadsheet mapping with real-time claim element tracking and AI citation verification.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">2. Problem & Breakthrough Solution</h3>
          <p class="cs-p">Mapping patent claims against prior art takes 2+ hours per claim chart. Patent AI automates element extraction while enforcing a strict non-hallucination guardrail that halts AI generation if supporting document evidence is absent.</p>
        </div>
        <div class="cs-section">
          <h3 class="cs-h3">3. Key Impact Metrics</h3>
          <ul class="cs-list">
            <li><strong>Review Velocity:</strong> Reduced claim chart creation time from 120 mins down to under 15 mins.</li>
            <li><strong>High Accuracy:</strong> Achieved over 85% AI claim mapping acceptance rate in analyst testing.</li>
          </ul>
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
    modalExtLink.textContent = 'Open External Link ↗';

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
    const targetExtUrl = extUrl || url || '#';
    modalExtLink.href = targetExtUrl;
    modalExtLink.textContent = 'Open Link ↗';
    
    let textContainer = document.getElementById('modal-text-container');
    if (textContainer) textContainer.style.display = 'none';

    modalIframe.style.display = 'block';
    modalLoader.classList.remove('hidden');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Handle special iframe URL transformations (e.g. Figma proto -> embed)
    let processedUrl = url;
    if (url.includes('figma.com/proto/')) {
      processedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
    }

    modalIframe.src = processedUrl;

    modalIframe.onload = () => {
      modalLoader.classList.add('hidden');
    };

    // If iframe fails to trigger onload within 3s or is blocked by X-Frame-Options, ensure loader hides smoothly
    setTimeout(() => {
      modalLoader.classList.add('hidden');
    }, 3000);
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
