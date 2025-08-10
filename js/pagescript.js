document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('pixel-art-container');
  const borders = {
    top: document.querySelector('.border.top'),
    bottom: document.querySelector('.border.bottom'),
    left: document.querySelector('.border.left'),
    right: document.querySelector('.border.right')
  };

  const TILE_SIZE = 32;
  var adjustedHeight;
  var adjustedWidth;

  function calculateTiles() {
    // Calculate available width and height for borders
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Calculate number of horizontal tiles (top and bottom)
    const horizontalAvailableWidth = containerWidth - 2 * TILE_SIZE;
    const horizontalTiles = Math.floor(horizontalAvailableWidth / TILE_SIZE); // FIX: use floor, no -1

    // Calculate number of vertical tiles (left and right)
    const verticalAvailableHeight = containerHeight - 2 * TILE_SIZE;
    const verticalTiles = Math.floor(verticalAvailableHeight / TILE_SIZE); // FIX: use floor, no -1

    // Update top and bottom borders
    updateBorder(borders.top, horizontalTiles, 'horizontal');
    updateBorder(borders.bottom, horizontalTiles, 'horizontal');

    // Update left and right borders
    updateBorder(borders.left, verticalTiles, 'vertical');
    updateBorder(borders.right, verticalTiles, 'vertical');

    // Adjust container size to fit tiles exactly
    adjustedWidth = 2 * TILE_SIZE + horizontalTiles * TILE_SIZE;
    adjustedHeight = 2 * TILE_SIZE + verticalTiles * TILE_SIZE;

    container.style.width = `${adjustedWidth}px`;
    container.style.height = `${adjustedHeight}px`;

    // Center the container
    container.style.position = 'absolute';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';

  }

  function updateBorder(borderElement, count, type) {
    // Clear existing tiles
    borderElement.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');

      if (type === 'horizontal') {
        tile.style.backgroundImage = `url('tiles/${borderElement.classList.contains('top') ? 'top-border' : 'bottom-border'}.png')`;
      } else if (type === 'vertical') {
        tile.style.backgroundImage = `url('tiles/${borderElement.classList.contains('left') ? 'left-border' : 'right-border'}.png')`;
      }
      tile.style.zIndex = '1000';
      borderElement.appendChild(tile);
    }

    if (type === 'horizontal') {
      borderElement.style.display = 'flex';
      borderElement.style.flexDirection = 'row';
      borderElement.style.height = `${TILE_SIZE}px`;
      borderElement.style.width = `${count * TILE_SIZE}px`;
    } else if (type === 'vertical') {
      borderElement.style.display = 'flex';
      borderElement.style.flexDirection = 'column';
      borderElement.style.width = `${TILE_SIZE}px`;
      borderElement.style.height = `${count * TILE_SIZE}px`;
    }
  }

  // Debounce function to limit how often a function can run
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func.apply(this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initial calculation
  calculateTiles();


  function placeStar() {
    const contentContainer = document.querySelector('.content-container');
    const containerWidth = contentContainer.scrollWidth;
    const containerHeight = contentContainer.scrollHeight;

    const x = Math.floor(Math.random() * (containerWidth - 64) + 32);
    const y = Math.floor(Math.random() * (containerHeight - 64) + 32);

    const img = document.createElement('img');
    img.src = 'assets/star.png';
    img.style.width = `${TILE_SIZE / 3}px`;
    img.style.height = `${TILE_SIZE / 3}px`;
    img.style.position = 'absolute';
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    img.style.zIndex = '-1'; // Changed from '-1' to '0'
    img.style.opacity = Math.random() < 0.5 ? '0' : '1';

    const contentContainerEl = document.querySelector('.content-container');
    contentContainerEl.appendChild(img);

    setInterval(() => {
      img.style.opacity = Math.random() < 0.5 ? '0' : '1';
    }, Math.random() * 20000 + 3000); 
  }

  function placeComet() {
    const contentContainer = document.querySelector('.content-container');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Comet starting position (random along the top edge)
    const startX = Math.floor(Math.random() * (windowWidth - 64) + 32);
    const startY = Math.floor(Math.random() * (windowHeight - 64) + 32);

    const img = document.createElement('img');
    img.src = 'assets/comet.gif';
    img.style.width = `${TILE_SIZE * 2}px`; // Use scaling logic similar to stars
    img.style.height = 'auto'; // Maintain aspect ratio
    img.style.position = 'absolute';
    img.style.left = startX + 'px';
    img.style.top = startY + 'px';
    img.style.zIndex = '-1';
    img.classList.add('comet');

    img.onload = () => {
      img.src = img.src;
    };

    contentContainer.appendChild(img);

    const duration = 800;

    // Remove the comet after the animation is complete
    setTimeout(() => {
      img.remove();
    }, duration);
  }

  setInterval(() => {
    placeComet();
  }, Math.floor(Math.random() * 10000) + 200);

  function placeStars(amount) {
    for (let i = 0; i < amount; i++) {
      placeStar();
    }
  }

  placeStars(16);


  window.addEventListener('resize', debounce(calculateTiles, 100));

  // ============================
  // 3DS Status Box (right side)
  // ============================
  function fmtBytes(n) {
    if (typeof n !== 'number' || isNaN(n)) return String(n);
    const units = ['B','KB','MB','GB','TB'];
    let i = 0; let val = n;
    while (val >= 1024 && i < units.length - 1) { val /= 1024; i++; }
    return `${val.toFixed(val < 10 ? 2 : val < 100 ? 1 : 0)} ${units[i]}`;
  }
  function fmtDuration(ms) {
    if (typeof ms !== 'number' || isNaN(ms)) return String(ms);
    let s = Math.floor(ms / 1000);
    const d = Math.floor(s / 86400); s -= d * 86400;
    const h = Math.floor(s / 3600); s -= h * 3600;
    const m = Math.floor(s / 60); s -= m * 60;
    const parts = [];
    if (d) parts.push(`${d}d`);
    if (h || parts.length) parts.push(`${h}h`);
    if (m || parts.length) parts.push(`${m}m`);
    parts.push(`${s}s`);
    return parts.join(' ');
  }
  const modelMap = {
    0: '3DS', 1: '3DS XL', 2: '2DS', 3: 'New 3DS', 4: 'New 3DS XL', 5: 'New 2DS XL'
  };
  const chargeMap = { 0: 'discharging', 1: 'charging', 2: 'charged' };

  function renderStatusBox() {
    const contentContainer = document.querySelector('.content-container');
    if (!contentContainer) return;
    if (document.querySelector('.statusbox')) return; // already added

    const box = document.createElement('aside');
    box.className = 'statusbox';
    box.innerHTML = `
      <div class="statusbox-header">
        <img src="assets/nintendo-3ds-svgrepo-com.svg" alt="New Nintendo 3DS">
        <div class="statusbox-title">3DS status</div>
      </div>
      <ul class="sysinfo-list" id="sysinfo-list">
        <li class="muted">Loading live info…</li>
      </ul>
      <div class="muted"><a href="/sysinfo/" target="_blank" rel="noopener" style="color:#4d4d80;text-decoration:none;">/sysinfo/</a></div>
    `;
    contentContainer.appendChild(box);

    // Fetch and populate
    fetch('/sysinfo/', { cache: 'no-store' })
      .then(r => r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)))
      .then(data => {
        const list = box.querySelector('#sysinfo-list');
        if (!list) return;
        const items = [];
        const batteryPct = typeof data.batterylevel === 'number' ? `${data.batterylevel}%` : '?';
        const charge = chargeMap[data.chargestate] ?? `state ${data.chargestate}`;
        const wifi = typeof data.wifi_status === 'number' ? `${data.wifi_status}/3` : '?';
        const uptime = fmtDuration(data.uptime_ms);
        const model = modelMap[data.model] ?? `model ${data.model}`;
        const sdTotal = fmtBytes(data.sd_total_bytes);
        const sdFree = fmtBytes(data.sd_free_bytes);
        const sdUsedPct = (typeof data.sd_total_bytes === 'number' && data.sd_total_bytes > 0)
          ? Math.round(100 - (data.sd_free_bytes / data.sd_total_bytes) * 100)
          : undefined;
        const heapFree = fmtBytes(data.heap_free_bytes);
        const heapUsed = fmtBytes(data.heap_used_bytes);
        const linearFree = fmtBytes(data.linearspacefree);
        const lid = data.lid_state === 1 ? 'open' : data.lid_state === 0 ? 'closed' : String(data.lid_state);

        items.push(`<li><span>Battery</span><span>${batteryPct} (${charge})</span></li>`);
        items.push(`<li><span>Wi‑Fi</span><span>${wifi}</span></li>`);
        items.push(`<li><span>Uptime</span><span>${uptime}</span></li>`);
        items.push(`<li><span>Model</span><span>${model}</span></li>`);
        items.push(`<li><span>SD</span><span>${sdFree} free / ${sdTotal}${sdUsedPct!=null?` (${sdUsedPct}%)`:''}</span></li>`);
        items.push(`<li><span>Heap</span><span>${heapUsed} used, ${heapFree} free</span></li>`);
        items.push(`<li><span>Linear</span><span>${linearFree} free</span></li>`);
        items.push(`<li><span>Lid</span><span>${lid}</span></li>`);

        list.innerHTML = items.join('');
      })
      .catch(() => {
        const list = box.querySelector('#sysinfo-list');
        if (list) list.innerHTML = '<li class="muted">Live info unavailable.</li>';
      });
  }

  renderStatusBox();
});


function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}