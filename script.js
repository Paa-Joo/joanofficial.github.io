// Check if the screen size changes
window.addEventListener('resize', function() {
    var header = document.querySelector('header');
    var h1 = document.querySelector('h1');
  
    // Get the current screen size
    var width = window.innerWidth;
  
    // Adjust the header and h1 styles based on the screen size
    if (width < 600) {
      header.style.backgroundSize = 'contain';
      h1.style.fontSize = '24px';
    } else {
      header.style.backgroundSize = 'cover';
      h1.style.fontSize = '36px';
    }
  });
  