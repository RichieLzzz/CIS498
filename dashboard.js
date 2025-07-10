/* ---------- Self-executing function to handle dark-mode toggle ---------- */
(() => {
    const STORAGE_KEY = 'bb-theme';
    const body        = document.body;
    const root        = document.documentElement;
    const toggleBtn   = document.getElementById('switch-view');
  
/* ---------- 1 Bootstrapping – decide which mode to apply on first load ---------- */
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedPref         = localStorage.getItem(STORAGE_KEY);
    let   isDark            = savedPref ? savedPref === 'dark' : systemPrefersDark;
  
// Ensure body has at least one background class before we begin.

    if (!body.classList.contains('view-day') && !body.classList.contains('view-night')) {
      body.classList.add('view-day');
    }
  
    applyTheme(isDark);
  
/* ---------- 2 Wire up the toggle button ---------- */
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        isDark = !isDark;
        applyTheme(isDark);
        localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
      });
    } else {
      console.warn('[darkmode.js] Button with id="switch-view" not found.');
    }
  
/* ---------- 3 Helper – apply or remove classes ---------- */
    function applyTheme(dark) {
      root.classList.toggle('dark', dark);
      body.classList.toggle('view-night', dark);
      body.classList.toggle('view-day', !dark);
    }
  })();
  