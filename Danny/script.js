
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const trigger = window.innerHeight - 100;
      if (top < trigger) el.classList.add("active");
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// Lightbox
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}