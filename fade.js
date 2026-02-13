document.addEventListener("DOMContentLoaded", () => {

  const connectSection = document.querySelector("#connect");

  if (!connectSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        connectSection.classList.add("active");  // aktivoi fade
      } else {
        connectSection.classList.remove("active"); // palauttaa valkoiseksi kun scrollaa pois
      }
    });
  }, {
    threshold: 0.1  // triggeröi kun 10% osiossa näkyvissä
  });

  observer.observe(connectSection);

});