document.addEventListener("DOMContentLoaded", function() {
    var images = [
      "./assets/img/welcome/img1.JPG",
      "./assets/img/welcome/img2.JPG",
      "./assets/img/welcome/img3.JPG",
      "./assets/img/welcome/img4.JPG",
    ];
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