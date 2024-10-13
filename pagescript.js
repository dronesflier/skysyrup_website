document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('pixel-art-container');
    const borders = {
      top: document.querySelector('.border.top'),
      bottom: document.querySelector('.border.bottom'),
      left: document.querySelector('.border.left'),
      right: document.querySelector('.border.right')
    };
    
    const TILE_SIZE = 32; // Size of your tile in pixels
  
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
      const adjustedWidth = 2 * TILE_SIZE + horizontalTiles * TILE_SIZE;
      const adjustedHeight = 2 * TILE_SIZE + verticalTiles * TILE_SIZE;
  
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
        
        // Assign the correct background image based on border type
        if (type === 'horizontal') {
          tile.style.backgroundImage = `url('tiles/${borderElement.classList.contains('top') ? 'top-border' : 'bottom-border'}.png')`;
        } else if (type === 'vertical') {
          tile.style.backgroundImage = `url('tiles/${borderElement.classList.contains('left') ? 'left-border' : 'right-border'}.png')`;
        }
  
        borderElement.appendChild(tile);
      }
  
      // Adjust the size of the border container based on tile count
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
      return function(...args) {
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
  
    // Recalculate on window resize with debounce
    window.addEventListener('resize', debounce(calculateTiles, 100));
  });


function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}