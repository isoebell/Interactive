// Get all grid items
const gridItems = document.querySelectorAll('.grid-item');

// Loop through each grid item
gridItems.forEach(gridItem => {
  // Get the corresponding image and caption
  const image = gridItem.querySelector('img');
  const caption = gridItem.querySelector('.caption');
  
  // Set the width of the caption to be equal to the width of the image
  caption.style.width = `${image.clientWidth}px`;
});
