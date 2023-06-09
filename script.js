document.addEventListener("DOMContentLoaded", function() {
    
  if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
    document.querySelector(".doctorBox").style.backgroundPosition = "-50px 0px";
  }
  
    var images = [
      "./assets/img/welcome/img1.JPG",
      "./assets/img/welcome/img2.JPG",
      "./assets/img/welcome/img3.JPG",
      "./assets/img/welcome/img4.JPG",
    ];

    if(window.innerWidth<=500){
      var images = [
        "./assets/img/welcome/img1sub.JPG",
        "./assets/img/welcome/img2.JPG",
        "./assets/img/welcome/img3.JPG",
        "./assets/img/welcome/img4.JPG",
      ];

      document.querySelector(".focusRightImg").src = './assets/img/focusMobile.JPG';

      document.querySelector(".map").width = "350";

    }

    var index = 0;
    var layers = document.querySelectorAll(".welcomeBoxTransistion");

    layers[index].style.backgroundImage = "url(" + images[index] + ")";
    layers[index].style.opacity = 1;
    index = (index + 1) % images.length;
    
    setInterval(function() {
            layers[index % 2].style.backgroundImage = "url(" + images[index] + ")";
            layers[index % 2].style.opacity = 1;
            layers[(index+1) % 2].style.opacity = 0;
            index = (index + 1) % images.length;
      }, 3000);       

  });


  document.addEventListener("DOMContentLoaded", function() {
    var fadeInElements = document.querySelectorAll(".fadeBox");
    
    function fadeIn() {
      fadeInElements.forEach(function(element) {
        var elementTop = element.getBoundingClientRect().top;
        var elementBottom = element.getBoundingClientRect().bottom;
        var isVisible = (elementTop < window.innerHeight && elementBottom >= 0);
        
        if (isVisible) {
          element.classList.add("active");
        }
      });
    }
    
    window.addEventListener("scroll", fadeIn);
    window.addEventListener("resize", fadeIn);
    
    fadeIn();
  });
  

function redirecionarWpp(){
  window.open("https://api.whatsapp.com/send?phone=5531987917321", "_blank");
}
function redirecionarInsta(){
  window.open("https://instagram.com", "_blank");
}

function sectionScroll(event) {
  event.preventDefault();
  
  const secaoAlvo = document.querySelector(event.target.getAttribute('href'));
  
  secaoAlvo.scrollIntoView({ behavior: 'smooth' });
}
