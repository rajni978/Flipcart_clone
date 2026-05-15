
const slider = document.getElementById("slider");

let index = 0;

function autoSlide(){

 index++;

 if(index > 2){
   index = 0;
 }

 slider.style.transform = `translateX(-${index * 34}%)`;

}

setInterval(autoSlide,3000);

const arrivalSlider = document.getElementById("arrivalSlider");

function slideRight(){
   arrivalSlider.scrollLeft += 300;
}

function slideLeft(){
   arrivalSlider.scrollLeft -= 300;
}

