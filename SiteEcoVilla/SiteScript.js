let slideIndex = [1, 1];

function showAllCurrent() {
  let i;
  let j;
  let NrSlideshowBoxes = document.getElementsByClassName("slideshow_box");
  for (i = 1; i < NrSlideshowBoxes.length; i++) {
    let slides = document
      .getElementById("slideshowBox" + i)
      .getElementsByClassName("slides_box")[0]
      .getElementsByTagName("img");
    for (j = 0; j < slides.length; j++) {
      slides[j].style.display = "none";
    }
    slides[0].style.display = "block";
  }
}

function showCurrent(idS) {
  let slides = document
    .getElementById("slideshowBox" + idS)
    .getElementsByClassName("slides_box")[0]
    .getElementsByTagName("img");
  let j;
  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  slides[slideIndex[idS] - 1].style.display = "block";
}

function plusSlides(n, idS) {
  slideIndex[idS] += n;
  showSlide(idS);
}

function showSlide(idS) {
  let i;
  let slides = document
    .getElementById("slideshowBox" + idS)
    .getElementsByClassName("slides_box")[0]
    .getElementsByTagName("img");
  if (slideIndex[idS] > slides.length) {
    slideIndex[idS] = 1;
  }
  if (slideIndex[idS] < 1) {
    slideIndex[idS] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[idS] - 1].style.display = "block";
}

function OpenSlideshowWindow(idS) {
  slideIndex[0] = slideIndex[idS];
  let slideshowBox = document.getElementById("slideshowBox0");
  let slideshowWindow = document.getElementById("slideshowWindow");
  let slides_box = document
    .getElementById("slideshowBox" + idS)
    .getElementsByClassName("slides_box")[0]
    .cloneNode(true);
  slideshowBox.appendChild(slides_box);
  showCurrent(0);
  slideshowWindow.style.display = "flex";

  document.addEventListener("keydown", CSWEscape);

  document.addEventListener("click", CSWClick);
}

function CSWEscape(event) {
  if (event.code == "Escape") {
    CloseSlideshowWindow();
  }
}

function CSWClick(event) {
  if (event.target.id == "slideshowWindow") {
    CloseSlideshowWindow();
  }
}

function CloseSlideshowWindow() {
  document.removeEventListener("keydown", CSWEscape);
  document.removeEventListener("click", CSWClick);
  let slideshowWindow = document.getElementById("slideshowWindow");
  let slides_box = document
    .getElementById("slideshowBox0")
    .getElementsByClassName("slides_box")[0];
  slides_box.remove();
  slideshowWindow.style.display = "none";
}