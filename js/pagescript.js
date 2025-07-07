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
    const horizontalTiles = Math.ceil(horizontalAvailableWidth / TILE_SIZE) - 1;

    // Calculate number of vertical tiles (left and right)
    const verticalAvailableHeight = containerHeight - 2 * TILE_SIZE;
    const verticalTiles = Math.ceil(verticalAvailableHeight / TILE_SIZE) - 1;

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

    contentContainer.appendChild(img);

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
    img.src = 'assets/comet.gif?cacheBust=' + new Date().getTime();
    img.style.width = `${TILE_SIZE * 2}px`; // Use scaling logic similar to stars
    img.style.height = 'auto'; // Maintain aspect ratio
    img.style.position = 'absolute';
    img.style.left = startX + 'px';
    img.style.top = startY + 'px';
    img.style.zIndex = '-1';
    img.classList.add('comet');

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