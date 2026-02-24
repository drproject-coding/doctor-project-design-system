/**
 * Dark Mode Manager
 * Centralized dark mode state management across all pages
 * Syncs dark mode preference using localStorage
 */

class DarkModeManager {
  constructor() {
    this.storageKey = 'darkMode';
    this.isDarkMode = false;
  }

  /**
   * Initialize dark mode on page load
   */
  init() {
    // Load saved preference from localStorage
    this.isDarkMode = localStorage.getItem(this.storageKey) === 'true';

    // Fall back to system preference if no saved preference
    if (localStorage.getItem(this.storageKey) === null) {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Apply dark mode if enabled
    if (this.isDarkMode) {
      this.enable(false); // false = don't save again
    }

    console.log('[DarkMode] Initialized:', this.isDarkMode ? 'Dark' : 'Light');
  }

  /**
   * Enable dark mode
   * @param {boolean} save - Whether to save to localStorage (default: true)
   */
  enable(save = true) {
    document.body.classList.add('dark-mode');
    this.isDarkMode = true;

    if (save) {
      localStorage.setItem(this.storageKey, 'true');
      console.log('[DarkMode] Enabled and saved');
    }

    // Update toggle button if it exists
    this.updateToggleButton();
  }

  /**
   * Disable dark mode
   * @param {boolean} save - Whether to save to localStorage (default: true)
   */
  disable(save = true) {
    document.body.classList.remove('dark-mode');
    this.isDarkMode = false;

    if (save) {
      localStorage.setItem(this.storageKey, 'false');
      console.log('[DarkMode] Disabled and saved');
    }

    // Update toggle button if it exists
    this.updateToggleButton();
  }

  /**
   * Toggle dark mode on/off
   */
  toggle() {
    if (this.isDarkMode) {
      this.disable();
    } else {
      this.enable();
    }
    return this.isDarkMode;
  }

  /**
   * Check if dark mode is currently enabled
   */
  isEnabled() {
    return this.isDarkMode;
  }

  /**
   * Update the toggle button state
   */
  updateToggleButton() {
    const toggleBtn = document.getElementById('darkModeToggle');
    if (toggleBtn) {
      if (this.isDarkMode) {
        toggleBtn.classList.add('active');
      } else {
        toggleBtn.classList.remove('active');
      }
    }
  }

  /**
   * Setup event listener for dark mode toggle button
   * @param {string} buttonId - ID of the toggle button (default: 'darkModeToggle')
   */
  setupToggleButton(buttonId = 'darkModeToggle') {
    const toggleBtn = document.getElementById(buttonId);
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.toggle();
      });
      console.log('[DarkMode] Toggle button attached');
    } else {
      console.warn('[DarkMode] Toggle button not found:', buttonId);
    }
  }
}

// Create global instance
const darkModeManager = new DarkModeManager();

// Auto-initialize on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    darkModeManager.init();
  });
} else {
  // DOM already loaded
  darkModeManager.init();
}

// Export for use in other scripts
window.darkModeManager = darkModeManager;
