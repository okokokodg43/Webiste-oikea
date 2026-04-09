document.addEventListener("DOMContentLoaded", () => {

  const connectSection = document.querySelector("#connect");

  if (!connectSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        connectSection.classList.add("active");  
      } else {
        connectSection.classList.remove("active"); 
      }
    });
  }, {
    threshold: 0.1 
  });

  observer.observe(connectSection);

});