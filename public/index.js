var images = [
    "../public/img/banner-1.png",
    "../public/img/banner-2.png",
    "../public/img/banner-3.png"
  ];
  
  var currentImage = 0;

  setInterval(changeBackgroundImage, 5000);

  function changeBackgroundImage() {
    var heroSection = document.querySelector(".hero-section");
    currentImage++;
    if (currentImage >= images.length) {
      currentImage = 0;
    }
    heroSection.style.backgroundImage = "url('" + images[currentImage] + "')";
  }


  const navbarToggler = document.querySelector('.Navbar-toggler');
  const navbarMenu = document.querySelector('.Navbar-text');
  
  navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });

  

  
  