document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navigation Menu
  const nav = document.querySelector("nav");
  const scrollBtn = document.querySelector(".scroll-button a");

  if (nav && scrollBtn) {
    // Show/hide sticky navigation and scroll button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
      } else {
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
      }
    });
  }

  // Side Navigation Menu
  const body = document.querySelector("body");
  const navBar = document.querySelector(".navbar");
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const navLinks = document.querySelectorAll(".menu li a");

  if (menuBtn && cancelBtn && navBar && body && navLinks.length > 0) {
    // Function to open the side navigation
    const openNavMenu = () => {
      navBar.classList.add("active");
      menuBtn.style.opacity = "0";
      menuBtn.style.pointerEvents = "none";
      body.style.overflow = "hidden";
      if (scrollBtn) {
        scrollBtn.style.pointerEvents = "none";
      }
    };

    // Function to close the side navigation
    const closeNavMenu = () => {
      navBar.classList.remove("active");
      menuBtn.style.opacity = "1";
      menuBtn.style.pointerEvents = "auto";
      body.style.overflow = "auto";
      if (scrollBtn) {
        scrollBtn.style.pointerEvents = "auto";
      }
    };

    // Open side navigation when menu button is clicked
    menuBtn.addEventListener('click', openNavMenu);

    // Close side navigation when cancel button is clicked
    cancelBtn.addEventListener('click', closeNavMenu);

    // Close side navigation when any menu link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', closeNavMenu);
    });
  }

  // Download CV Functionality
  const downloadBtn = document.querySelector('.about .button a'); // Button with download link
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default action

      const filePath = this.getAttribute('href');

      const anchor = document.createElement('a');
      anchor.href = filePath;
      anchor.download = filePath.split('/').pop(); // Automatically name the downloaded file
      document.body.appendChild(anchor);

      anchor.click(); // Programmatically click the anchor to trigger the download

      document.body.removeChild(anchor); // Clean up the DOM
    });
  }
});
