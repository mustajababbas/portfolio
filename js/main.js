var body = $("body");

if (window.matchMedia("(max-width:991px)").matches) {
//OPEN TRIGGER
var openTrigger = $('.menu-trigger');
var openTriggerTop = openTrigger.find('.menu-trigger-bar.top');
var openTriggerMiddle = openTrigger.find('.menu-trigger-bar.middle');
var openTriggerBottom = openTrigger.find('.menu-trigger-bar.bottom');

//CLOSE TRIGGER
var closeTrigger = $('.close-trigger');
var closeTriggerLeft = closeTrigger.find('.close-trigger-bar.left');
var closeTriggerRight = closeTrigger.find('.close-trigger-bar.right');



//MENU
var menuContainer = $('.menu-container');
var innerContainer = $(".inner-container")
var menu = $('.menu');
var menuTop = $('.menu-bg.top');
var menuMiddle = $('.menu-bg.middle');
var menuBottom = $('.menu-bg.bottom');

//TL
var tlOpen = new TimelineMax({paused: true});
var tlClose = new TimelineMax({paused: true});

//OPEN TIMELINE
tlOpen.add("preOpen")
 
.to(openTriggerTop, 0.4, {
  x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn, onComplete: function() {
    closeTrigger.css('z-index','25');
  }
}, "preOpen")
.to(openTriggerMiddle, 0.4, {
  x: "+=80px", y: "-=80px", ease: Power4.easeIn,
  onComplete: function() {
    openTrigger.css('visibility','hidden');
  }
}, "preOpen")
.to(openTriggerBottom, 0.4, {
  x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn
}, "preOpen")
.add("open", "-=0.4")
.to(innerContainer, 0.2,{
zIndex:20,
},"open")
.to(menuTop, 0.8, {
  y: "0%",
  ease: Power4.easeInOut
}, "open")
.to(menuMiddle, 0.8, {
  scaleY: 1,
  ease: Power4.easeInOut
}, "open")
.to(menuBottom, 0.8, {
  y: "-114%",
  ease: Power4.easeInOut
}, "open")
.fromTo(menuContainer, 0.6, {
  y: 30, opacity: 0, visibility: 'hidden'
}, {
  y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
}, "-=0.2")
.fromTo(menu, 0.6, {
  y: 30, opacity: 0, visibility: 'hidden'
}, {
  y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
}, "-=0.2")
.add("preClose", "-=0.8")
.to(closeTriggerLeft, 0.8, {
  x: "-=100px", y: "+=100px", ease: Power4.easeOut
}, "preClose")
.to(closeTriggerRight, 0.8, {
  x: "+=100px", y: "+=100px", delay: 0.2, ease: Power4.easeOut
}, "preClose");

//CLOSE TIMELINE
tlClose.add("close")
  .to(menuTop, 0.2, {
  backgroundColor: "#6295ca", ease: Power4.easeInOut, onComplete: function() {
    closeTrigger.css('z-index','5');
 openTrigger.css('visibility','visible');
  }
}, "close")
.to(menuMiddle, 0.2, {
  backgroundColor: "#6295ca", ease: Power4.easeInOut
}, "close") 
.to(innerContainer, 0.2,{
  zIndex:-1,
  },"close")
.to(menuBottom, 0.2, {
  backgroundColor: "#6295ca", ease: Power4.easeInOut
}, "close")
.to(menuContainer,0.6, {
  y: 20,
  opacity:0,
  ease: Power4.easeOut
},"close")
  .to(menu, 0.6, {
  y: 20, opacity: 0, ease: Power4.easeOut, onComplete: function() {
    menu.css('visibility','hidden');
  }
}, "close")
.to(menuTop, 0.8, {
  y: "-113%",
  ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuMiddle, 0.8, {
  scaleY: 0,
  ease: Power4.easeInOut
}, "close", "+=0.2")
.to(menuBottom, 0.8, {
  y: "23%",
  ease: Power4.easeInOut,
  onComplete: function() {
    menuTop.css('background-color','#ffffff');
    menuMiddle.css('background-color','#ffffff');
    menuBottom.css('background-color','#ffffff');
  }
}, "close", "+=0.2")
.to(closeTriggerLeft, 0.2, {
  x: "+=100px", y: "-=100px", ease: Power4.easeIn
}, "close")
.to(closeTriggerRight, 0.2, {
  x: "-=100px", y: "-=100px", delay: 0.1, ease: Power4.easeIn
}, "close")
.to(openTriggerTop, 1, {
  x: "-=80px", y: "+=80px", delay: 0.2, ease: Power4.easeOut
}, "close")
.to(openTriggerMiddle, 1, {
  x: "-=80px", y: "+=80px", ease: Power4.easeOut
}, "close")
.to(openTriggerBottom, 1, {
  x: "-=80px", y: "+=80px", delay: 0.1, ease: Power4.easeOut
}, "close");

//EVENTS
openTrigger.on('click', function(){
  $(body).css("overflow","hidden");
  if(tlOpen.progress() < 1){
      tlOpen.play();
  } else {
      tlOpen.restart();
  }
});
       
closeTrigger.on('click', function(){
  $(body).css("overflow","auto");
  if(tlClose.progress() < 1){
    tlClose.play();
} else {
    tlClose.restart();
}
});

}


document.addEventListener("DOMContentLoaded", function(event) {
  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a");
  var projectsBox = document.querySelectorAll(".work-item .title");
  var arrowImg = document.querySelector(".custom-cursor img");
  

  var initCursor = false;



  links.forEach((linkVal, index) =>{
    linkVal.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
    });

    linkVal.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
    });

  })

  projectsBox.forEach((proVal, index) =>{
    proVal.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
      arrowImg.style.opacity = "1"
    });

    proVal.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
      arrowImg.style.opacity = "0"

    });

  })


  window.onmousemove = function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      TweenLite.to(cursor, 0.3, {
        opacity: 1
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };

  window.onmouseout = function(e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0
    });
    initCursor = false;
  };
});




let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  
  document.body.classList.add('darkmode');
  
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  
  document.body.classList.remove('darkmode');
  
  localStorage.setItem('darkMode', null);
}
 

if (darkMode === 'enabled') {
  enableDarkMode();
}


darkModeToggle.addEventListener('click', () => {

  darkMode = localStorage.getItem('darkMode'); 
  
 
  if (darkMode !== 'enabled') {
    enableDarkMode();
 
  } else {  
    disableDarkMode(); 
  }
});



document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card-wrapper")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }


  setTimeout(function(){

  

let progress = 50
let startX = 0
let active = 0
let isDown = false


const speedWheel = 0.02
const speedDrag = -0.1


const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))


const $items = document.querySelectorAll('.work-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
}


const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}
animate()


$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i/$items.length) * 100 + 10
    animate()
  })
})



const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
  isDown = false
}


// document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)


},1000)




const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
      
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    
    outer.className = "outer";
    
    const inner = document.createElement("span");
    
    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

enhance("github-link");
enhance("facebook-link");
enhance("instagram-link");
enhance("linkedin-link");
enhance("gmail-link");



// CONTACT FORM 

var currentTab = 0;
showTab(currentTab); 

function showTab(n) {

  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display = "none";
    
    document.getElementById("submitBtn").style.display = "flex";
    
    var loader = document.querySelector('.spinner');
    
    document.getElementById("contactForm").addEventListener('submit', function(event) {
       loader.style.display = "block"
          event.preventDefault();
          emailjs.sendForm('service_bigdm3j', 'template_8j5enkn', this)
              .then(function() {
                
                 document.getElementById('success').style.display = "block";
                 loader.style.display = "none";
                
              }, function() {
                 
                  document.getElementById('error').style.display = "block";
                 loader.style.display = "none";
              });
      });
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
 
  fixStepIndicator(n)
}

function nextPrev(n) {
  
  var x = document.getElementsByClassName("tab");

  if (n == 1 && !validateForm()) return false;

  x[currentTab].style.display = "none";
  
  currentTab = currentTab + n;

  if (currentTab >= x.length) {
  
    document.getElementById("contactForm").submit();
    return false;
  }

  showTab(currentTab);
}

function validateForm() {

  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  var formError = document.querySelector(".form-error")

  for (i = 0; i < y.length; i++) {
  
    if (y[i].value == "") {
  
      formError.className += " show";
     
      valid = false;
    }

    else {
  
      formError.classList.remove("show");
     
      valid = true;
    }
  }
 
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {

  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  
  x[n].className += " active";
}
