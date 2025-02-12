function setActive(element) {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

function toggleIcon(button) {
    button.classList.toggle("open");
}

function closeNavbar() {
    let navbarCollapse = document.getElementById("navbarNav");
    let navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click();
    }
}

let targetElement = document.querySelector(".float");
let scrollPosition = window.scrollY;

if (scrollPosition > 300) {
    targetElement.style.visibility = "visible"; 
    targetElement.style.opacity = "1";
} else {
    targetElement.style.visibility = "hidden";
    targetElement.style.opacity = "0";
}

document.addEventListener("scroll", function () {
    let targetElement = document.querySelector(".float");
    let scrollPosition = window.scrollY;

    if (scrollPosition > 300) {
        targetElement.style.visibility = "visible"; 
        targetElement.style.opacity = "1";
    } else {
        targetElement.style.visibility = "hidden";
        targetElement.style.opacity = "0";
    }
});


// vars
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {
    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}


window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollSpeed = 0.08; // 
    let scrollPos = 0;

    window.addEventListener("wheel", function (event) {
        event.preventDefault();
        scrollPos += event.deltaY * scrollSpeed;
        window.scrollTo({
            top: scrollPos,
            behavior: "smooth"
        });
    }, { passive: false });
});


document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", function () {
        const answer = this.nextElementSibling;
        const icon = this.querySelector(".icon");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.textContent = "+";
        } else {
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".icon").forEach(icn => icn.textContent = "+");

            answer.style.display = "block";
            icon.textContent = "-";
        }
    });
});
