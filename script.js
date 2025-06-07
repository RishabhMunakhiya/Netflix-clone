// Navbar CSS property in Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Profile section redirecting
const profileIcon = document.querySelector(".profile-icon");
profileIcon.addEventListener("click", () => {
  window.location.href = "profile-details.html";
});

//home directing 
const homeIcon = document.querySelector("#home");
homeIcon.addEventListener("click", () => {
  window.location.href = "index.html";
});

//tvshow directing
const tvshowsIcon = document.querySelector("#tvshow");
tvshowsIcon.addEventListener("click", () => {
  window.location.href = "Tvshows.html";
});

// Movie card
const movieCard = document.querySelectorAll(".content-card");
movieCard.forEach((card) => {
  card.addEventListener("mouseEnter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
