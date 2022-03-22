const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  

  let btnOne=document.querySelector("#project-1-btn");
  let btnTwo=document.querySelector("#project-2-btn")
  let btnThree=document.querySelector("#project-3-btn");
  let btnFour=document.querySelector("#project-4-btn");
  let btnFive=document.querySelector("#project-5-btn")


let projectOne=document.querySelector(".project-box-1");
let projectTwo=document.querySelector(".project-box-2");
let projectThree=document.querySelector(".project-box-3");
let projectFour=document.querySelector(".project-box-4");
let projectFive=document.querySelector(".project-box-5");


  btnOne.style.visibility="hidden";
  btnTwo.style.visibility="hidden";
  btnThree.style.visibility="hidden";
  btnFour.style.visibility="hidden";
  btnFive.style.visibility="hidden";



counter=1;
  projectOne.addEventListener("mouseover",function(){

      btnOne.style.visibility="visible";
      
    
  })
  projectTwo.addEventListener("mouseover",function(){

    btnTwo.style.visibility="visible";
  
})
projectThree.addEventListener("mouseover",function(){

    btnThree.style.visibility="visible";
    
  
})
projectFour.addEventListener("mouseover",function(){

    btnFour.style.visibility="visible";
    
  
})
projectFive.addEventListener("mouseover",function(){

    btnFive.style.visibility="visible";
    
  
})
  projectOne.addEventListener("mouseout",function(){

    btnOne.style.visibility="hidden";
  
})

projectTwo.addEventListener("mouseout",function(){

    btnTwo.style.visibility="hidden";
  
})
projectThree.addEventListener("mouseout",function(){

    btnThree.style.visibility="hidden";
  
})

projectFour.addEventListener("mouseout",function(){

    btnFour.style.visibility="hidden";
  
})

projectFive.addEventListener("mouseout",function(){

    btnFive.style.visibility="hidden";
  
})












let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();