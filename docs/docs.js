/* Docs-only JS — copy-to-clipboard and sidebar nav toggle */

document.addEventListener('DOMContentLoaded', () => {
  // Copy-to-clipboard for code blocks
  document.querySelectorAll('.docs-code').forEach(block => {
    const btn = document.createElement('button');
    btn.className = 'docs-copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', () => {
      const text = block.textContent.replace(/Copy(ed!)?$/, '').trim();
      navigator.clipboard.writeText(text);
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
    });
    block.style.position = 'relative';
    block.appendChild(btn);
  });

  // Dark mode toggle wiring
  const toggle = document.getElementById('darkModeToggle');
  if (toggle && window.darkModeManager) {
    toggle.addEventListener('click', () => darkModeManager.toggle());
  }

  // Sidebar mobile toggle
  const menuBtn = document.querySelector('.topbar-menu-btn');
  const sidebar = document.querySelector('.sidebar');
  const backdrop = document.querySelector('.sidebar-backdrop');
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar--overlay');
      if (backdrop) backdrop.classList.toggle('active');
    });
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        sidebar.classList.remove('sidebar--overlay');
        backdrop.classList.remove('active');
      });
    }
  }
});
