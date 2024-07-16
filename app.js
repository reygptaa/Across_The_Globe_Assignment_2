
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".page");
    let currentSectionIndex = 0;

    const options = {
        threshold: 0.2 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            const sectionIndex = Array.from(sections).indexOf(entry.target);
            if (entry.isIntersecting) {
                animateSection(entry.target);
                currentSectionIndex = sectionIndex;
            } else {
                resetSection(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    function animateSection(section) {
        for (let i = 1; i <= 19; i++) {
            const image = section.querySelector(`.image-${i}`);
            if (image && !image.classList.contains('active')) {
                image.classList.add('active');
            }
        }
    }

    function resetSection(section) {
        for (let i = 1; i <= 19; i++) {
            const image = section.querySelector(`.image-${i}`);
            if (image && image.classList.contains('active')) {
                image.classList.remove('active');
            }
        }
    }

    function handleScroll(delta) {
        const nextSectionIndex = currentSectionIndex + delta;
        if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
            sections[nextSectionIndex].scrollIntoView({ behavior: "smooth" });
        }
    }

    window.addEventListener("wheel", function (event) {
        event.preventDefault(); 
        const delta = Math.sign(event.deltaY);
        handleScroll(delta);
    });

    let startY = 0;
    let endY = 0;
    window.addEventListener("touchstart", function (event) {
        startY = event.touches[0].clientY;
    });

    window.addEventListener("touchend", function (event) {
        endY = event.changedTouches[0].clientY;
        const delta = startY - endY;
        if (delta > 50) {
            handleScroll(1);
        } else if (delta < -50) {
            handleScroll(-1);
        }
    });

    animateSection(sections[0]);
});

window.addEventListener('DOMContentLoaded', () => {
    let opaquePath = document.querySelector('.transrgwht');
    let path = document.querySelector(".transrg");

    if (opaquePath && path) {
        let svgLength = path.getTotalLength();
        opaquePath.style.strokeDasharray = svgLength; 

        window.addEventListener('scroll', () => {
            let scrollPosition = window.scrollY || window.pageYOffset;
            let documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            let scrollPercentage = (scrollPosition / documentHeight) * 100;
            let currentDash = svgLength * ((scrollPercentage / 100));
            let part = svgLength / 7;
            const firstText = document.querySelector('.first-text');
            const secondText = document.querySelector('.second-text');
            const thirdText = document.querySelector('.third-text');

            if (currentDash < part) {
                document.querySelector('#transring').style.backgroundColor = '#7d41b3';
                firstText.textContent='Our app has';
                secondText.textContent='25M+ Downloads';
                thirdText.textContent='on app store & google playstore';
                firstText.classList.remove('transition-text');
                secondText.classList.remove('transition-text');
                thirdText.classList.remove('transition-text');
            }

            if (currentDash >= part) {
                document.querySelector('.dotsfill2').style.opacity = '1';
                document.querySelector('#transring').style.backgroundColor = '#4d27cb'
                
                firstText.textContent='The Next Big';
                secondText.textContent='Blockchain';
                thirdText.textContent='Revolution';
                firstText.classList.add('transition-text');
                secondText.classList.add('transition-text');
                thirdText.classList.add('transition-text');
            }
            else {
                document.querySelector('.dotsfill2').style.opacity = '0';
            }
            if (currentDash >= part * 2) {
                document.querySelector('.dotsfill3').style.opacity = '1';
                document.querySelector('#transring').style.backgroundColor = '#0c0f35'
                firstText.textContent='powered by advance';
                secondText.textContent='NASA';
                thirdText.textContent='algorithms';
                firstText.classList.add('transition-text');
                secondText.classList.add('transition-text');
                thirdText.classList.add('transition-text');
            }
            else {
                document.querySelector('.dotsfill3').style.opacity = '0';
            }
            if (currentDash >= part * 3) {
                document.querySelector('.dotsfill4').style.opacity = '1';
                document.querySelector('#transring').style.backgroundColor = '#15253a'
                firstText.textContent='Redefining';
                secondText.textContent='UX strategy';
                thirdText.textContent='and UI design';
            }
            else {
                document.querySelector('.dotsfill4').style.opacity = '0';
            }
            if (currentDash >= part * 4) {
                document.querySelector('.dotsfill5').style.opacity = '1';
                document.querySelector('#transring').style.backgroundColor = '#104595'
                firstText.textContent='check out';
                secondText.textContent='Social Media';
                thirdText.textContent='to waste your time';
            }
            else {
                document.querySelector('.dotsfill5').style.opacity = '0';
            }
            if (currentDash >= part * 5) {
                document.querySelector('.dotsfill6').style.opacity = '1';
                document.querySelector('#transring').style.backgroundColor = '#2ecede'
                firstText.textContent='Developing ERP solution for';
                secondText.textContent='Everyone';
                thirdText.textContent='in the industry';
            }
            else {
                document.querySelector('.dotsfill6').style.opacity = '0';
            }
            if (currentDash >= part * 6) {
                document.querySelector('.dotsfill7').style.opacity = '1';
                document.querySelector('#transring').style.backgroundColor = '#007544'
                firstText.textContent='Biggest Classified';
                secondText.textContent='East Asia';
                thirdText.textContent='Countries';
            }
            else {
                document.querySelector('.dotsfill7').style.opacity = '0';
            }

            // Update stroke dash array
            opaquePath.style.strokeDasharray = currentDash + ' ' + svgLength;
        });
    } else {
        console.error('One or both of the elements (opaquePath or path) are null or undefined.');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".page");
    let isScrolling = false;
    let currentSectionIndex = 0;

    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return;
        isScrolling = true;
        currentSectionIndex = index;
        const scrollTo = sections[index].offsetTop;
        window.scrollTo({
            top: scrollTo,
            behavior: "instant" 
        });
        setTimeout(() => { isScrolling = false; }, 100); 
    }

    function getNextSectionIndex(delta) {
        if (delta > 0) {
            return currentSectionIndex < sections.length - 1 ? currentSectionIndex + 1 : sections.length - 1;
        } else {
            return currentSectionIndex > 0 ? currentSectionIndex - 1 : 0;
        }
    }

    function handleScroll(delta) {
        if (isScrolling) return;
        const nextSectionIndex = getNextSectionIndex(delta);
        scrollToSection(nextSectionIndex);
    }

    window.addEventListener("wheel", function (event) {
        if (event.cancelable) {
            event.preventDefault();
        }
        const delta = Math.sign(event.deltaY);
        handleScroll(delta);
    });

    let startY = 0;
    let endY = 0;
    window.addEventListener("touchstart", function (event) {
        startY = event.touches[0].clientY;
    });

    window.addEventListener("touchend", function (event) {
        endY = event.changedTouches[0].clientY;
        if (startY > endY) {
            // Scrolling down
            handleScroll(1);
        } else if (startY < endY) {
            handleScroll(-1);
        }
    });

    scrollToSection(currentSectionIndex);
});

$(document).ready(function() {
    let carousel = $('#carousel');

    function initOwlCarousel() {
        carousel.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 2000
        });
    }

    function destroyOwlCarousel() {
        if (carousel.hasClass('owl-loaded')) {
            carousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded owl-dots owl-nav owl-theme');
        }
    }

    $(window).resize(function() {
        let windowWidth = $(window).width();
        let thresholdWidth = 900;

        if (windowWidth <= thresholdWidth) {
            initOwlCarousel();
        } else {
            destroyOwlCarousel();
        }
    });

    $(window).resize(); 
});
