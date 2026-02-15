/**
 * Interactive Manual Features
 * Adds 3 modes to each section: Live Preview, Guided Tour, Contextual Help
 */

(function() {
  'use strict';

  // ═══ BPA URL Mapping ═══
  // Maps section paths to BPA page URLs
  const BPA_BASE = 'https://bpa.cuba.eregistrations.org';

  const SECTION_URLS = {
    '02-entry-page':       '/services',
    '03-services':         '/services',
    '04-registrations':    '/services',  // within a service
    '05-guide':            '/services',
    '06-determinants':     '/services',
    '07-applicant-form':   '/services',
    '08-documents':        '/services',
    '09-payment':          '/services',
    '10-send-file':        '/services',
    '11-useful-functions': '/services',
    '12-custom-classes':   '/services',
    '13-bot-builder':      '/services',
    '14-roles':            '/services',
    '15-certificates':     '/services',
    '16-tables':           '/tables',
    '17-settings':         '/settings',
    '01-user-dashboard':   '/',
    '03-operators-processing': '/',
    '01-public-part':      '/',
    '02-create-groups-records': '/',
    '03-management':       '/',
    '04-special-features': '/',
    '05-user-rights':      '/',
    '01-statistics':       '/',
  };

  // ═══ Tour Steps per Section ═══
  const TOUR_STEPS = {
    '03-services': [
      { title: 'Services Page', text: 'This is the main services list. All configured services appear here grouped by category.', highlight: 'header' },
      { title: 'Add Button', text: 'Click "Add" to create a new service. A slider will open where you enter the service name.', highlight: 'add-btn' },
      { title: 'Import Button', text: 'Click "Import" to import a service configuration from another instance. This is a new feature.', highlight: 'import-btn' },
      { title: 'Service Groups', text: 'Services are organized into groups (categories). Each group shows its service count.', highlight: 'groups' },
      { title: 'Version Number', text: 'Each service shows its current version number, incremented with each publish.', highlight: 'version' },
      { title: 'Active Toggle', text: 'Toggle to activate/deactivate a service for public access.', highlight: 'toggle' },
    ],
    '06-determinants': [
      { title: 'Determinants', text: 'Determinants are filters that adapt the application form to each applicant\'s situation.' },
      { title: '7 Types', text: 'The platform now supports 7 determinant types: Text, Select, Numeric, Boolean, Date, Classification, and Grid.' },
      { title: 'Text Operators', text: 'Text determinants support: EQUAL, NOT_EQUAL, CONTAINS, STARTS_WITH, ENDS_WITH.' },
      { title: 'Classification', text: 'NEW: Classification determinants evaluate catalog values with ALL/ANY/NONE multi-select logic.' },
      { title: 'Effects System', text: 'NEW: The Effects system extends determinants beyond show/hide to activate/deactivate/enable/disable.' },
    ],
    '17-settings': [
      { title: 'Instance Settings', text: 'Configure global instance settings: logo, favicon, footer, theme, and languages.' },
      { title: 'Service Settings', text: 'Each service has its own settings for pages, buttons, fields, and publishing options.' },
      { title: 'New Toggles', text: 'New settings have been added for e-signature, micro-publish, and form version control.' },
    ],
  };

  // ═══ State ═══
  let currentPanel = null; // 'preview' | 'tour' | 'help' | null
  let tourStep = 0;
  let tourSteps = [];

  // ═══ Get current section ID ═══
  function getSectionId() {
    const path = window.location.pathname;
    const match = path.match(/(\d{2}-[a-z-]+)\/?$/);
    return match ? match[1] : null;
  }

  function getBpaUrl() {
    const sid = getSectionId();
    if (!sid) return BPA_BASE + '/services';
    return BPA_BASE + (SECTION_URLS[sid] || '/services');
  }

  // ═══ Create Toolbar ═══
  function createToolbar() {
    const sid = getSectionId();
    if (!sid) return; // Don't add to home page

    const article = document.querySelector('article.md-content__inner');
    if (!article) return;

    // Don't add twice
    if (document.getElementById('interactive-toolbar')) return;

    const toolbar = document.createElement('div');
    toolbar.id = 'interactive-toolbar';
    toolbar.innerHTML = `
      <div class="it-bar">
        <button class="it-btn it-btn-live" onclick="window.__manual.togglePreview()" title="Open live BPA preview">
          <span class="it-icon">📺</span> Live Preview
        </button>
        <button class="it-btn it-btn-help" onclick="window.__manual.openInBPA()" title="Open this help inside the BPA">
          <span class="it-icon">🔗</span> Open in BPA
        </button>
      </div>
    `;

    // Insert after first h1
    const h1 = article.querySelector('h1');
    if (h1 && h1.nextSibling) {
      h1.parentNode.insertBefore(toolbar, h1.nextSibling);
    } else {
      article.prepend(toolbar);
    }
  }

  // ═══ Feature 1: Live Preview (iframe) ═══
  function togglePreview() {
    if (currentPanel === 'preview') {
      closePanel();
      return;
    }
    closePanel();
    currentPanel = 'preview';

    const url = getBpaUrl();
    const overlay = document.createElement('div');
    overlay.id = 'live-panel';
    overlay.innerHTML = `
      <div class="lp-container">
        <div class="lp-header">
          <span class="lp-title">📺 Live BPA Preview</span>
          <span class="lp-url">${url}</span>
          <div class="lp-actions">
            <a href="${url}" target="_blank" class="lp-btn" title="Open in new tab">↗</a>
            <button class="lp-btn" onclick="window.__manual.closePanel()" title="Close">✕</button>
          </div>
        </div>
        <div class="lp-body">
          <iframe src="${url}" class="lp-iframe" allow="clipboard-write"></iframe>
          <div class="lp-login-hint" id="lp-hint">
            <p><strong>Login required</strong></p>
            <p>If you see a login page, sign in with your BPA credentials. The preview will load automatically after login.</p>
            <button class="lp-btn" onclick="document.getElementById('lp-hint').style.display='none'">Got it</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    document.body.classList.add('panel-open');

    // Hide hint after 5 seconds
    setTimeout(() => {
      const hint = document.getElementById('lp-hint');
      if (hint) hint.style.opacity = '0.3';
    }, 5000);
  }

  // ═══ Feature 2: Guided Tour ═══
  function startTour() {
    if (currentPanel === 'tour') {
      closePanel();
      return;
    }
    closePanel();
    currentPanel = 'tour';
    tourStep = 0;

    const sid = getSectionId();
    tourSteps = TOUR_STEPS[sid] || [
      { title: 'Section Overview', text: 'This section documents a part of the eRegistrations platform. Read through the content and check the change markers (Modified, New, Verify) for updates.' },
      { title: 'Original Screenshots', text: 'Click "Original Manual Screenshots" to see the images from the previous manual version.' },
      { title: 'Live Preview', text: 'Use the Live Preview button to see the current BPA interface alongside this documentation.' },
    ];

    showTourStep();
  }

  function showTourStep() {
    // Remove existing tour overlay
    const existing = document.getElementById('tour-overlay');
    if (existing) existing.remove();

    if (tourStep >= tourSteps.length) {
      closePanel();
      return;
    }

    const step = tourSteps[tourStep];
    const overlay = document.createElement('div');
    overlay.id = 'tour-overlay';
    overlay.innerHTML = `
      <div class="tour-card">
        <div class="tour-header">
          <span class="tour-counter">${tourStep + 1} / ${tourSteps.length}</span>
          <button class="tour-close" onclick="window.__manual.closePanel()">✕</button>
        </div>
        <h3 class="tour-title">${step.title}</h3>
        <p class="tour-text">${step.text}</p>
        <div class="tour-nav">
          ${tourStep > 0 ? '<button class="tour-btn" onclick="window.__manual.prevTour()">← Back</button>' : '<span></span>'}
          <button class="tour-btn tour-btn-primary" onclick="window.__manual.nextTour()">
            ${tourStep < tourSteps.length - 1 ? 'Next →' : 'Finish ✓'}
          </button>
        </div>
        <div class="tour-progress">
          ${tourSteps.map((_, i) => `<span class="tour-dot ${i === tourStep ? 'active' : i < tourStep ? 'done' : ''}"></span>`).join('')}
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  function nextTour() {
    tourStep++;
    showTourStep();
  }

  function prevTour() {
    tourStep = Math.max(0, tourStep - 1);
    showTourStep();
  }

  // ═══ Feature 3: Open in BPA (contextual help) ═══
  function openInBPA() {
    const sid = getSectionId();
    const manualUrl = window.location.href;
    const bpaUrl = getBpaUrl();

    // Create a bookmarklet-style helper page
    const overlay = document.createElement('div');
    overlay.id = 'help-panel';
    overlay.className = 'help-modal';
    overlay.innerHTML = `
      <div class="help-content">
        <div class="help-header">
          <h3>🔗 Use This Manual Inside the BPA</h3>
          <button class="lp-btn" onclick="window.__manual.closePanel()">✕</button>
        </div>
        <div class="help-body">
          <div class="help-option">
            <h4>Option A: Side-by-side windows</h4>
            <p>Open the BPA and this manual in two browser windows, side by side.</p>
            <button class="help-btn" onclick="window.open('${bpaUrl}', '_blank', 'width=800,height=900,left=0,top=0'); window.resizeTo(800, 900); window.moveTo(800, 0);">
              ↗ Open BPA in new window
            </button>
          </div>

          <div class="help-option">
            <h4>Option B: BPA with help sidebar</h4>
            <p>Drag this button to your bookmarks bar. Click it when you're in the BPA to open the manual as a sidebar.</p>
            <a class="help-bookmarklet" href="javascript:void((function(){var d=document,s=d.createElement('div');s.id='ereg-help';s.style.cssText='position:fixed;top:0;right:0;width:420px;height:100vh;z-index:99999;box-shadow:-4px 0 20px rgba(0,0,0,0.3);background:white;';s.innerHTML='<div style=&quot;display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:%230057b8;color:white;font:600 13px sans-serif&quot;><span>📖 eRegistrations Manual</span><button onclick=&quot;this.closest(%23ereg-help%23).remove()&quot; style=&quot;background:none;border:none;color:white;font-size:18px;cursor:pointer&quot;>✕</button></div><iframe src=&quot;${manualUrl}&quot; style=&quot;width:100%;height:calc(100vh - 40px);border:none&quot;></iframe>';d.body.appendChild(s);d.body.style.marginRight='420px';})())">
              📖 eReg Manual Helper
            </a>
            <p class="help-hint">↑ Drag this to your bookmarks bar</p>
          </div>

          <div class="help-option">
            <h4>Option C: Direct link to BPA page</h4>
            <p>Go directly to the BPA page related to this section:</p>
            <a href="${bpaUrl}" target="_blank" class="help-btn">
              Open ${bpaUrl} →
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    currentPanel = 'help';
  }

  // ═══ Close any open panel ═══
  function closePanel() {
    ['live-panel', 'tour-overlay', 'help-panel'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
    document.body.classList.remove('panel-open');
    currentPanel = null;
  }

  // ═══ Public API ═══
  window.__manual = {
    togglePreview,
    startTour,
    openInBPA,
    closePanel,
    nextTour,
    prevTour,
  };

  // ═══ Init on page navigation (MkDocs instant loading) ═══
  function init() {
    // Small delay to let MkDocs render
    setTimeout(createToolbar, 100);
  }

  // Handle MkDocs instant navigation
  if (typeof document$ !== 'undefined') {
    document$.subscribe(init);
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  // Also listen for popstate (back/forward)
  window.addEventListener('popstate', () => setTimeout(init, 200));

})();
