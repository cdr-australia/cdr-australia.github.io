/*==================================================
    CDRAustralia.Org
    Main JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*==========================================
        MOBILE MENU
    ==========================================*/

    const menuBtn = document.getElementById("mobile-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", function () {

            mobileMenu.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (mobileMenu.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");

            } else {

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            }

        });

        /* Close mobile menu when any link is clicked */

        mobileMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");

            });

        });

    }


    /*==========================================
        BACK TO TOP BUTTON
    ==========================================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", function () {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }


    /*==========================================
        HEADER SHADOW
    ==========================================*/

    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            header.style.boxShadow = "0 12px 35px rgba(0,0,0,.12)";

        } else {

            header.style.boxShadow = "0 5px 25px rgba(0,0,0,.08)";

        }

    });


    /*==========================================
        ACTIVE MENU
    ==========================================*/

    const currentPage = window.location.href;

    document.querySelectorAll("#navbar a").forEach(function (link) {

        if (currentPage.indexOf(link.href) !== -1) {

            link.classList.add("active");

        }

    });


    /*==========================================
        HERO ANIMATION
    ==========================================*/

    const heroText = document.querySelector(".hero-text");

    if (heroText) {

        heroText.animate([

            {
                opacity: 0,
                transform: "translateY(40px)"
            },

            {
                opacity: 1,
                transform: "translateY(0)"
            }

        ], {

            duration: 900,
            easing: "ease-out",
            fill: "forwards"

        });

    }


    /*==========================================
        SIMPLE FADE-IN ON SCROLL
    ==========================================*/

    const animatedItems = document.querySelectorAll(

        ".service-card, .step, .stat, .hero-card, .contact-form, .info-box"

    );

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    animatedItems.forEach(function (item) {

        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "all .6s ease";

        observer.observe(item);

    });


    /*==========================================
        CONTACT FORM DEMO
    ==========================================*/

    const form = document.querySelector(".contact-form form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert(
                "Thank you for contacting CDRAustralia.Org.\n\nOur team will contact you shortly."
            );

            form.reset();

        });

    }

});


/*==========================================
    OPTIONAL COUNTER ANIMATION
==========================================*/

const counters = document.querySelectorAll(".stat h2");

function runCounter(counter) {

    const target = parseInt(counter.textContent.replace(/\D/g, ""));

    if (!target) return;

    let count = 0;

    const speed = Math.max(20, target / 100);

    const timer = setInterval(function () {

        count += speed;

        if (count >= target) {

            counter.textContent = target + (counter.textContent.includes("%") ? "%" :
                counter.textContent.includes("+") ? "+" : "");

            clearInterval(timer);

        } else {

            counter.textContent = Math.floor(count) +
                (counter.textContent.includes("%") ? "%" :
                counter.textContent.includes("+") ? "+" : "");

        }

    }, 20);

}

const statObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            runCounter(entry.target);

            statObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(function (counter) {

    statObserver.observe(counter);

});