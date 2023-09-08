var slideIndex = 0;
var slideshowInterval;

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = 4; // Change this to the correct number of slides minus 1
  } else if (slideIndex > 4) { // Change this to the correct number of slides minus 1
    slideIndex = 0;
  }
  showSlides(slideIndex);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function toggleInfo(n) {
  var info = document.getElementsByClassName("info")[n];
  var arrow = document.getElementsByClassName("arrow")[n];

  if (info.style.display === "block") {
    info.style.display = "none";
    arrow.innerHTML = "V";
  } else {
    info.style.display = "block";
    arrow.innerHTML = ""; // Remove the arrow content
  }
}

function pauseRotation() {
  clearInterval(slideshowInterval);
}

function resumeRotation() {
  slideshowInterval = setInterval(function() {
    plusSlides(1);
  }, 5000); // Change the time interval as needed (in milliseconds)
}

// Automatic slideshow
slideshowInterval = setInterval(function() {
  plusSlides(1);
}, 1000); // Change the time interval as needed (in milliseconds)

// Start rotating immediately when the page loads
plusSlides(1);





/*-----------------------------------FAQS__________________________________*/

// Get all the plus-minus elements
function toggleFaq(element) {
    var answer = element.parentElement.nextElementSibling;
    var plusMinus = element;

    if (answer.style.display === 'block' ) {
        answer.style.display = 'none';
        plusMinus.textContent = '+'; // Change to plus icon
    } else {
        answer.style.display = 'block';
        plusMinus.textContent = '-'; // Change to minus icon
    }
}



function GetToKnow() {
  alert('Get To Know Us!');
}
  
