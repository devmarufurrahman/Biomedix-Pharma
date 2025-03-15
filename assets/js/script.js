document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });

    // Sticky navbar
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    window.onscroll = function () {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("navbar-fixed");
      } else {
        navbar.classList.remove("navbar-fixed");
      }
    };

    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.add("open");
    });

    closeMenu.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
    });

    // Counter animation
    const counters = document.querySelectorAll(".counter-value");
    const speed = 200;

    counters.forEach((counter) => {
      const animate = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.innerText);
        const increment = Math.max(1, Math.trunc(target / speed));

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(animate, 1);
        } else {
          counter.innerText = target;
        }
      };

      animate();
    });

    // Parallax effect
    document.addEventListener("mousemove", function (e) {
      const parallaxElements = document.querySelectorAll(".parallax");
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      parallaxElements.forEach((el) => {
        const strength = 20;
        const x = strength * (0.5 - mouseX);
        const y = strength * (0.5 - mouseY);

        el.style.setProperty("--parallax-y", `${y}px`);
        el.style.setProperty("--parallax-x", `${x}px`);
      });
    });

    // Cursor glow effect
    const cursorGlow = document.getElementById("cursor-glow");

    document.addEventListener("mousemove", function (e) {
      cursorGlow.style.display = "block";
      cursorGlow.style.left = e.clientX + "px";
      cursorGlow.style.top = e.clientY + "px";
    });

    // Hide cursor glow when mouse leaves the window
    document.addEventListener("mouseleave", function () {
      cursorGlow.style.display = "none";
    });

    // Card 3D effect
    const cards = document.querySelectorAll(".card-3d");

    cards.forEach((card) => {
      card.addEventListener("mousemove", function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      });

      card.addEventListener("mouseleave", function () {
        card.style.transform =
          "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
      });
    });
  });