document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".rotator img");
  let currentImageIndex = 0;

  function rotateImages() {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add("active");
  }

  setInterval(rotateImages, 3000);

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert("Thank you for your message!");
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
});
