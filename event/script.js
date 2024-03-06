const images = Array.from({length: 30}, (_, i) => `/Asset/${i + 1}.jpg`);


  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  
  
  function generateRandomImage() {
    const randomImage = getRandomImage();
    const imageElement = document.getElementById('randomImage');
    imageElement.classList.remove('loaded'); // Remove the 'loaded' class to trigger the fade-in animation
    imageElement.onload = function() {
      imageElement.classList.add('loaded'); // Add the 'loaded' class to trigger the fade-in animation
    };
    imageElement.src = randomImage;
  }


  // Assuming each grid item has a class of "gallery-item"
const galleryItems = document.querySelectorAll('.gallery-item');

// Add a click event listener to each grid item
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    
  });
});