// document.addEventListener("DOMContentLoaded", () => {
//   var tl = gsap.timeline();

//   tl.from(".menu-1", {
//     duration: 1,
//     y: 50,
//     opacity: 0,
//     delay: 0.5,
//     ease: "power3.out",
//   })
//     .from(
//       ".menu-2",
//       {
//         duration: 1,
//         y: 50,
//         opacity: 0,
//         ease: "power3.out",
//       },
//       "-=0.8"
//     )
//     .from(
//       ".menu-3",
//       {
//         duration: 1,
//         y: 50,
//         opacity: 0,
//         ease: "power3.out",
//       },
//       "-=0.8"
//     )
//     .from(
//       ".menu-4",
//       {
//         duration: 1,
//         y: 50,
//         opacity: 0,
//         ease: "power3.out",
//       },
//       "-=0.8"
//     )
//     .from(
//       ".menu-5",
//       {
//         duration: 1,
//         y: 50,
//         opacity: 0,
//         ease: "power3.out",
//       },
//       "-=0.8"
//     )
//     .from(
//       ".container-item div",
//       {
//         duration: 1,
//         y: 300,
//         opacity: 0,
//         stagger: { each: 0.2 },
//         ease: "power3.out",
//       },
//       "-=0.8"
//     )
//     .from(
//       ".container-item img",
//       {
//         duration: 1,
//         y: 300,
//         opacity: 0,
//         ease: "power3.out",
//       },
//       "-=0.8"
//     )
//     .from(
//       ".bg-hero",
//       {
//         duration: 1,
//         y: 300,
//         opacity: 0,
//         ease: "power3.out",
//       },
//       "-=0.8"
//     );

//   gsap.registerPlugin(ScrollTrigger);

//   gsap.from("#section-01 div", {
//     duration: 1,
//     y: 300,
//     opacity: 0,
//     stagger: { each: 0.2 },
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: "#section-01",
//     },
//   });

//   gsap.from("#section-02 div", {
//     duration: 1,
//     y: 300,
//     opacity: 0,
//     stagger: { each: 0.2 },
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: "#section-02",
//     },
//   });
// });

// AOS
Aos.init();

// Animação - Scroll

export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

// Scroll suave
function initScroll() {
  const internLinks = document.querySelectorAll(".js-menu a[href^='#']");

  internLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// initScroll();

// Animation numbers
const numbers = document.querySelectorAll("[data-number]");

if (numbers.length > 0) {
  const startNumberAnimation = (element) => {
    const number = +element.innerText;
    const numberDivision = number / 90;
    const animationRuntimeMS = 80;
    let dynamicNumber = 0;

    element.innerText = dynamicNumber;

    const animateNumbers = setInterval(() => {
      if (dynamicNumber < number) {
        dynamicNumber += numberDivision;
        element.innerText = Math.floor(dynamicNumber);
      } else {
        element.innerText = number;
        clearInterval(animateNumbers);
      }
    }, Math.random() * animationRuntimeMS);
  };

  numbers.forEach((number) => {
    startNumberAnimation(number);
  });
}
