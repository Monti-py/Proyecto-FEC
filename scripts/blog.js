let slideIndices = {
    slideshow1: 1,
    slideshow2: 2,
    slideshow3: 3,
};

document.addEventListener("DOMContentLoaded", () => {
    mostrarSlide(slideIndices.slideshow1, "slideshow1");
    mostrarSlide(slideIndices.slideshow2, "slideshow2");
    mostrarSlide(slideIndices.slideshow3, "slideshow3");
});

function moverSlide(n, slideshowId) {
    slideIndices[slideshowId] += n;
    mostrarSlide(slideIndices[slideshowId], slideshowId);
}

function slideActual(n, slideshowId) {
    slideIndices[slideshowId] = n;
    mostrarSlide(slideIndices[slideshowId], slideshowId);
}


function mostrarSlide(n, slideshowId) {
    let i;
    let slideshow = document.getElementById(slideshowId);
    let slides = slideshow.getElementsByClassName("slide-item");
    let dots = slideshow.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndices[slideshowId] = 1;
    }
    if (n < 1) {
        slideIndices[slideshowId] = slides.length;
    }

for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

   slides[slideIndices[slideshowId] - 1].style.display = "block";
    dots[slideIndices[slideshowId] - 1].className += " active";
}
