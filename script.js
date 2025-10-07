// Scroll animation for case cards
const reveals = document.querySelectorAll(".case-card");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal", "active");
    }
  }
});
