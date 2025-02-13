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

//getting product name value
const anchorTags = document.querySelectorAll('.product_name_data');
anchorTags.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
       event.preventDefault();

      const dataNameValue = this.getAttribute('data-product_name');
    //   console.log(dataNameValue)

      const hiddenInput = document.getElementById('product_hidden');
      hiddenInput.value = dataNameValue;

    });
  });



//order form
var ord_button = document.getElementById("order_btn");

ord_button.addEventListener("click", (function(event) {
    event.preventDefault(); // Prevent form submission

    // console.log("testing")

    // Fetch input values
    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();

    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let district = document.getElementById("district").value;
    let city = document.getElementById("city").value.trim();
    let street = document.getElementById("street").value.trim();
    let postal = document.getElementById("postal").value.trim();

    let quantity = document.getElementById("quantity").value.trim();

    let product_name = document.getElementById("product_hidden").value.trim();
    let unit_value = document.getElementById("unit").value.trim();
    // console.log(product_name)

    // console.log("name: "+name+", mobile:"+mobile+", state:"+state+", city:"+city+", street:"+street+", postal:"+postal+", quantity:"+quantity+", Email:"+email+", country:"+country)

    error_found =true;
    let name_span = document.getElementById('name_error');
    let regex = /^[A-Za-z\s]*$/;
    //name error
    if(name === "")
    {
        name_span.textContent = 'Name field is required.';
        error_found =true;
        return false;
    }
    else if(!regex.test(name))
    {
        name_span.textContent = 'Only alphabets are allowed.';
        error_found =true;
        return false;
    }
    else{
        name_span.textContent = '';
        error_found=false;
    }

    //mobile error
    let mobile_span = document.getElementById('mobile_error');
    let numeric_regex = /^\d+$/;
    if(mobile === "")
    {
        mobile_span.textContent = 'Mobile field is required.';
        error_found =true;
        return false;
    }
    else if(!numeric_regex.test(mobile))
    {
        mobile_span.textContent = 'Only numeric values are allowed.';
        error_found =true;
        return false;
    }
    else if(!/^\d{10}$/.test(mobile))
    {
        mobile_span.textContent ='Enter 10 digit valid mobile number.';
        error_found =true;
        return false;
    }
    else{
        mobile_span.textContent = '';
        error_found=false;
    }


    //email error
    let email_span = document.getElementById('email_error');
    if(email!="" && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
    {
        email_span.textContent ='Enter a valid email.';
        error_found =true;
        return false;
    }
    else{
        email_span.textContent = '';
        error_found=false;
    }


    //state error
    let state_span = document.getElementById('state_error');
    if(state === "")
    {
        state_span.textContent ='Please select a state.';
        error_found =true;
        return false;
    }
    else{
        state_span.textContent = '';
        error_found=false;
    }

    //district error
    let district_span = document.getElementById('district_error');
    if(district==="")
    {
        district_span.textContent ='District field is required.';
        error_found =true;
        return false;
    }
    else if(!regex.test(district))
    {
        district_span.textContent ='Only alphabets are allowed.';
        error_found =true;
        return false;
    }
    else{
        district_span.textContent = '';
        error_found=false;
    }

    //city error
    let city_span = document.getElementById('city_error');
    if(city==="")
    {
        city_span.textContent ='City field is required.';
        error_found =true;
        return false;
    }
    else if(!regex.test(city))
    {
        city_span.textContent ='Only alphabets are allowed.';
        error_found =true;
        return false;
    }
    else{
        city_span.textContent = '';
        error_found=false;
    }
    

    //street error
    let street_span = document.getElementById('street_error');
    if(street==="")
    {
        street_span.textContent ='Street address is required.';
        error_found =true;
        return false;
    }
    else{
        street_span.textContent = '';
        error_found=false;
    }

    //postal code error
    let postal_code_span = document.getElementById('postal_code_error');
    // let numeric_regex = /^\d+$/;
    if(postal==="")
    {
        postal_code_span.textContent ='Postal Code is required.';
        error_found =true;
        return false;
    }
    else if(!numeric_regex.test(postal))
    {
        postal_code_span.textContent ='Only numeric values are allowed.';
        error_found =true;
        return false;
    }
    else if(!/^\d{6}$/.test(postal))
    {
        postal_code_span.textContent ='Enter a 6 digit valid postal code.';
        error_found =true;
        return false;
    }
    else{
        postal_code_span.textContent = '';
        error_found=false;
    }


    //quantity error
    let quantity_span = document.getElementById('quantity_error');
    if(quantity==="")
    {
        quantity_span.textContent ='Quantity is required.';
        error_found =true;
        return false;
    }
    else if(!numeric_regex.test(quantity))
    {
        quantity_span.textContent ='Only numeric values are allowed';
        error_found =true;
        return false;
    }
    else if(quantity<=0)
    {
        quantity_span.textContent ='Quantity should be greater than 0.';
        error_found =true;
        return false;
    }
    else{
        quantity_span.textContent = '';
        error_found=false;
    }


    // console.log(error_found)
    if(error_found===false)
    {
        const message = encodeURIComponent("Hello "+name+",\nThank you for your order! We’re excited to serve you. Here are the details of your purchase: \n\n*Order Details :*\nName: "+name+"\nMobile: "+mobile+"\nEmail: "+email+"\nCountry: "+country+"\nState: "+state+"\nSistrict: "+district+"\nCity: "+city+"\nStreet Address: "+street+"\nPostal Code: "+postal+"\nProduct Name: "+product_name+"\nQuantity: "+quantity+" "+unit_value+" \n\nThank you for shopping with us! \nIf you have any questions or need further assistance, feel free to reach out to us.");
        const dynamicPath1 = `https://wa.me/918888371472?text=${message}`;
        ord_button.href = dynamicPath1;

        // console.log(dynamicPath1);
        window.open(dynamicPath1, "_blank");
    }

}));