/* ==========================================
   MarketBoost - Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /*==========================
        Sticky Navbar
    ==========================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            navbar.classList.add("shadow");
            navbar.style.padding = "12px 0";
            navbar.style.background = "#ffffff";
        } else {
            navbar.classList.remove("shadow");
            navbar.style.padding = "18px 0";
        }

    });

    /*==========================
        Smooth Scrolling
    ==========================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*==========================
        Active Navigation
    ==========================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*==========================
        Counter Animation
    ==========================*/

    const counters = document.querySelectorAll(".counter");

    const speed = 200;

    const startCounter = () => {

        counters.forEach(counter => {

            const update = () => {

                const target = +counter.getAttribute("data-target");

                const count = +counter.innerText;

                const increment = target / speed;

                if (count < target) {

                    counter.innerHTML = Math.ceil(count + increment)+ "+";

                    setTimeout(update, 15);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

    };

    let counterStarted = false;

    const statsSection = document.querySelector(".stats");

if (statsSection) {

    window.addEventListener("scroll", () => {

        const trigger = statsSection.offsetTop - window.innerHeight + 100;

        if (window.scrollY > trigger && !counterStarted) {

            startCounter();
            counterStarted = true;

        }

    });

}
});
/*=========================================
    Back To Top Button
=========================================*/

// Create Button

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

// Show & Hide

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

// Scroll Top

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
      Scroll Reveal Animation
=========================================*/

const revealElements = document.querySelectorAll(

".card, .service-card, .client-box, section h2, section p"

);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active-reveal");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();



/*=========================================
      Portfolio Hover Effect
=========================================*/

const portfolioCards = document.querySelectorAll(".card");

portfolioCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


/*=========================================
      Button Ripple Effect
=========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=diameter+"px";

circle.style.left=e.clientX-this.offsetLeft-radius+"px";

circle.style.top=e.clientY-this.offsetTop-radius+"px";

circle.classList.add("ripple");

const ripple=this.querySelector(".ripple");

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});


/*=========================================
      Page Loader
=========================================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});