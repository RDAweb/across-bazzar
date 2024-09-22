function setViewport() {
    var viewportMeta = document.querySelector("meta[name='viewport']");

    // Check the device type
    if (window.innerWidth <= 600) {
      // Mobile devices
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=0.4");
    } else if (window.innerWidth <= 1024) {
      // Tablet devices
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=0.4");
    } else {
      // Desktop devices
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=0.4");
    }
    // Check the device type
    if (window.innerWidth <= 1900) {
      // Mobile devices
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=0.4");
    } else if (window.innerWidth <= 1948) {
      // Tablet devices
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=0.4");
    } else {
      // Desktop devices
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=0.4");
    }
  }
    
    let currentIndex = 0;
  let slides = document.querySelectorAll('.slides img');
  const totalSlides = slides.length;
  
  function moveSlides(direction) {
      currentIndex += direction;
  
      if (currentIndex >= totalSlides) {
          currentIndex = 0;
      } else if (currentIndex < 0) {
          currentIndex = totalSlides - 4;
      }
  
      // Move the slides by changing the transform property
      document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  function autoSlide() {
      currentIndex++;
      if (currentIndex >= totalSlides) {
          currentIndex = 0;
      }
  
      document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  // Auto-slide every 3 seconds
  setInterval(autoSlide, 4000);
  
  document.getElementById("electronics-options").addEventListener("change", function() {
    const selectedValue = this.value;
    if (selectedValue) {
        const targetDiv = document.getElementById(selectedValue);
        targetDiv.scrollIntoView();
    }
});


// Show the button when scrolling down
window.onscroll = function() {
  const topBtn = document.getElementById("goToTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      topBtn.style.display = "block"; // Show the button
  } else {
      topBtn.style.display = "none"; // Hide the button
  }
};

// Scroll smoothly to the top when button is clicked
document.getElementById("goToTopBtn").addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});
