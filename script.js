window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${currentSection}`) {
            a.classList.add('active');
        }
    });
});

document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        const offsetTop = targetSection.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth' // Smooth scrolling behavior
        });

        // Highlight the clicked button
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,  // Enables infinite loop
    autoplay: {
      delay: 2500,  // Auto-scroll delay in milliseconds
      disableOnInteraction: false,  // Continue auto-scroll after interaction
    },
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 1,
    //       spaceBetween: 10
    //     },
    //     // when window width is >= 480px
    //     610: {
    //       slidesPerView: 1,
    //       spaceBetween: 20
    //     },
    //     // when window width is >= 768px
    //     810: {
    //       slidesPerView: 2,
    //       spaceBetween: 30
    //     },
    //     // when window width is >= 1024px
    //     1050: {
    //       slidesPerView: 2,
    //       spaceBetween: 30
    //     }
    //   }
  });