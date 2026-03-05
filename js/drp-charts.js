/* ============================================================
   DOCTORPROJECT DESIGN SYSTEM — CHART HELPER
   Pre-configured Chart.js theme matching DoctorProject's brutalist
   design language. Drop-in replacement for raw Chart() calls.

   Requires: Chart.js 4.x  (https://www.chartjs.org/)

   Usage:
     const chart = BruCharts.bar('#myCanvas', {
       labels: ['Jan','Feb','Mar'],
       datasets: [{ label: 'Sales', data: [10,20,30] }]
     });
   ============================================================ */

const BruCharts = (() => {
  'use strict';

  /* ── Palette ── */
  const PALETTE = [
    '#AE7AFF',  // DoctorProject purple
    '#98E9AB',  // Mint / success
    '#E99898',  // Pink / danger
    '#FAE8A4',  // Yellow / warning
    '#FF6C01',  // Orange
    '#17a2b8',  // Cyan / info
    '#6f42c1',  // Indigo
    '#20c997',  // Teal
    '#fd7e14',  // Deep orange
    '#6c757d',  // Grey
  ];

  /* ── Dark mode detection ── */
  function isDark() {
    return document.body.classList.contains('dark-mode');
  }

  /* ── Adaptive colors ── */
  function themeColors() {
    const dark = isDark();
    return {
      grid:    dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
      text:    dark ? '#CCCAC4'  : '#5F646D',
      title:   dark ? '#F2F2F2'  : '#282828',
      border:  dark ? 'rgba(255, 255, 255, 0.15)' : '#282828',
      surface: dark ? '#1E1E1E'  : '#FEFCFA',
      tooltip: {
        bg:     dark ? '#282828' : '#FEFCFA',
        text:   dark ? '#F2F2F2' : '#282828',
        border: dark ? 'rgba(255, 255, 255, 0.2)' : '#282828',
      },
    };
  }

  /* ── Base options (brutalist defaults) ── */
  function baseOptions(overrides = {}) {
    const c = themeColors();
    return deepMerge({
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          display: false, // Use .drp-chart-legend instead
        },
        tooltip: {
          backgroundColor: c.tooltip.bg,
          titleColor: c.tooltip.text,
          bodyColor: c.tooltip.text,
          borderColor: c.tooltip.border,
          borderWidth: 1,
          padding: 12,
          cornerRadius: 0,
          titleFont: { weight: '600' },
          bodyFont: { weight: '400' },
        },
      },
      scales: {
        x: {
          grid: { color: c.grid, drawBorder: false },
          ticks: { color: c.text, font: { size: 11 } },
          border: { display: false },
        },
        y: {
          grid: { color: c.grid, drawBorder: false },
          ticks: { color: c.text, font: { size: 11 } },
          border: { display: false },
        },
      },
    }, overrides);
  }

  /* ── No-axis options (for pie, doughnut, radar, polar) ── */
  function noAxisOptions(overrides = {}) {
    const c = themeColors();
    return deepMerge({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: c.tooltip.bg,
          titleColor: c.tooltip.text,
          bodyColor: c.tooltip.text,
          borderColor: c.tooltip.border,
          borderWidth: 1,
          padding: 12,
          cornerRadius: 0,
        },
      },
    }, overrides);
  }

  /* ── Apply palette to datasets ── */
  function colorize(datasets, type) {
    return datasets.map((ds, i) => {
      const color = ds.backgroundColor || ds.borderColor || PALETTE[i % PALETTE.length];

      if (type === 'line') {
        return Object.assign({
          borderColor: color,
          backgroundColor: hexToRgba(color, 0.15),
          borderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointBorderWidth: 2,
          pointBackgroundColor: color,
          tension: 0.4,
          fill: true,
        }, ds);
      }

      if (type === 'bar') {
        return Object.assign({
          backgroundColor: color,
          borderColor: themeColors().border,
          borderWidth: 1,
          borderSkipped: false,
        }, ds);
      }

      if (type === 'doughnut' || type === 'pie' || type === 'polarArea') {
        const bgColors = ds.backgroundColor || PALETTE.slice(0, ds.data?.length || 5);
        return Object.assign({
          backgroundColor: bgColors,
          borderColor: isDark() ? '#282828' : '#FEFCFA',
          borderWidth: 3,
          hoverOffset: 8,
        }, ds);
      }

      if (type === 'radar') {
        return Object.assign({
          borderColor: color,
          backgroundColor: hexToRgba(color, 0.2),
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: color,
        }, ds);
      }

      return ds;
    });
  }

  /* ── Resolve canvas element ── */
  function getCtx(el) {
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) throw new Error('BruCharts: Canvas element not found');
    return el.getContext('2d');
  }

  /* ── Factory methods ── */

  function bar(el, data, options = {}) {
    return new Chart(getCtx(el), {
      type: 'bar',
      data: { labels: data.labels, datasets: colorize(data.datasets, 'bar') },
      options: baseOptions(options),
    });
  }

  function line(el, data, options = {}) {
    return new Chart(getCtx(el), {
      type: 'line',
      data: { labels: data.labels, datasets: colorize(data.datasets, 'line') },
      options: baseOptions(options),
    });
  }

  function doughnut(el, data, options = {}) {
    const defaults = { cutout: '60%' };
    return new Chart(getCtx(el), {
      type: 'doughnut',
      data: { labels: data.labels, datasets: colorize(data.datasets, 'doughnut') },
      options: noAxisOptions(deepMerge(defaults, options)),
    });
  }

  function pie(el, data, options = {}) {
    return new Chart(getCtx(el), {
      type: 'pie',
      data: { labels: data.labels, datasets: colorize(data.datasets, 'pie') },
      options: noAxisOptions(options),
    });
  }

  function polarArea(el, data, options = {}) {
    const c = themeColors();
    const defaults = {
      scales: {
        r: {
          grid: { color: c.grid },
          ticks: { display: false },
          pointLabels: { color: c.text, font: { size: 11 } },
        },
      },
    };
    return new Chart(getCtx(el), {
      type: 'polarArea',
      data: {
        labels: data.labels,
        datasets: colorize(data.datasets, 'polarArea'),
      },
      options: noAxisOptions(deepMerge(defaults, options)),
    });
  }

  function radar(el, data, options = {}) {
    const c = themeColors();
    const defaults = {
      scales: {
        r: {
          grid: { color: c.grid },
          angleLines: { color: c.grid },
          ticks: { display: false },
          pointLabels: { color: c.text, font: { size: 11 } },
        },
      },
    };
    return new Chart(getCtx(el), {
      type: 'radar',
      data: { labels: data.labels, datasets: colorize(data.datasets, 'radar') },
      options: noAxisOptions(deepMerge(defaults, options)),
    });
  }

  /* ── Mixed chart (e.g. bar + line overlay) ── */
  function mixed(el, data, options = {}) {
    const datasets = data.datasets.map((ds, i) => {
      const type = ds.type || 'bar';
      const colored = colorize([ds], type)[0];
      return Object.assign({ type }, colored);
    });
    return new Chart(getCtx(el), {
      type: 'bar',
      data: { labels: data.labels, datasets },
      options: baseOptions(options),
    });
  }

  /* ── Horizontal bar ── */
  function horizontalBar(el, data, options = {}) {
    const defaults = { indexAxis: 'y' };
    return new Chart(getCtx(el), {
      type: 'bar',
      data: { labels: data.labels, datasets: colorize(data.datasets, 'bar') },
      options: baseOptions(deepMerge(defaults, options)),
    });
  }

  /* ── Currency formatter for axes ── */
  function currencyTicks(prefix = '$') {
    return {
      callback: function(value) {
        return prefix + value.toLocaleString();
      },
    };
  }

  /* ── Build custom legend HTML ── */
  function buildLegend(items, options = {}) {
    const round = options.round || false;
    return items.map(item =>
      `<div class="drp-chart-legend__item">` +
        `<span class="drp-chart-legend__dot${round ? ' drp-chart-legend__dot--round' : ''}" style="background:${item.color}"></span>` +
        `${item.label}` +
      `</div>`
    ).join('');
  }

  /* ── Utility: deep merge ── */
  function deepMerge(target, source) {
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach(key => {
        if (isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] });
          } else {
            output[key] = deepMerge(target[key], source[key]);
          }
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }

  function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  }

  /* ── Utility: hex to rgba ── */
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  /* ── Public API ── */
  return {
    PALETTE,
    themeColors,
    bar,
    line,
    doughnut,
    pie,
    polarArea,
    radar,
    mixed,
    horizontalBar,
    currencyTicks,
    buildLegend,
  };
})();
