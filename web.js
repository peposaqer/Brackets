
let nums = document.querySelectorAll(".num");
let section = document.querySelector(".about");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

$(".nav").addClass("active");
$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 40){
      $(".nav").addClass("active");
    }
    else{
      $(".nav").removeClass("active");
    }
  });
});

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 100;
  
      if(this.isDeleting) {
        typeSpeed /= 1;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = 1000;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 0.1;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }


  const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

  loader.classList.add('fondu-out');

})


jQuery(document).ready(function ($) {
  $('.hero').slick({
  dots: true,
      infinite: true,
      speed: 500,
      fade: !0,
      cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
      autoplay: true,
  autoplaySpeed: 8000,
      draggable: false,
  arrows: false,
  responsive: [
    {
  breakpoint: 1024,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1,
      infinite: true
            }
      },
      {
  breakpoint: 768,
  settings: {
      draggable: true,
            }
  },
  {
  breakpoint: 600,
  settings: {
      slidesToShow: 1,
      draggable: true,
  slidesToScroll: 1
          }
  },
  {
  breakpoint: 480,
  settings: {
      slidesToShow: 1,
      draggable: true,
  slidesToScroll: 1
            }
  }

    ]
  });
});		


function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 4){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 11){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 40){
    text = "Please Enter More Than 40 Characters";
    error_message.innerHTML = text;
    return false;
  }
  $("form").hide(2000);
  $(".show").show(2000);
  return true;
}

(function($) {
  $(".input_field").children().on("focus", function() {
    $(this).parent("div").css("border-bottom" , "3px solid #C47CC4");
    $(this).parent("div").children("i").css("color" , "#C47CC4");
  });
  $(".input_field").children().on("focusout", function() {
    $(this).parent("div").css("border-bottom" , "3px solid #e0e0e0");
    $(this).parent("div").children("i").css("color" , "#000");
  });
})(jQuery);

$("#myBtn").hide();
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    // mybutton.style.display = "block";
    $("#myBtn").show(500);
  } else {
    // mybutton.style.display = "none";
    $("#myBtn").hide(500);
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}







onload = function startAnimation() {
  var frames = document.getElementById("animation").children;
  var frameCount = frames.length;
  var i = 0,
    j = 0;
  var interval = setInterval(function() {
    frames[i % frameCount].style.display = "none";
    frames[++i % frameCount].style.display = "block";
    j++;
    if (j === 1400) {
      clearInterval(interval);

    }
  }, 700);
}