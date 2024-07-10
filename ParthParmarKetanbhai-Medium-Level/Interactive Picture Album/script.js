document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const loadMoreButton = document.getElementById("load-more");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("caption");
  const close = document.querySelector(".close");
  let itemsToShow = 6;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      galleryItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.classList.add("fade-in");
          item.classList.remove("hidden");
        } else {
          item.classList.remove("fade-in");
          item.classList.add("hidden");
        }
      });
      updateItemsVisibility();
    });
  });

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      lightbox.classList.remove("hidden");
      lightboxImg.src = item.querySelector("img").src;
      caption.innerHTML = item.querySelector("img").alt;
    });
  });

  close.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
    }
  });

  const updateItemsVisibility = () => {
    let visibleItems = 0;
    galleryItems.forEach((item) => {
      if (item.classList.contains("fade-in") && visibleItems < itemsToShow) {
        item.classList.remove("hidden");
        visibleItems++;
      } else {
        item.classList.add("hidden");
      }
    });
  };

  loadMoreButton.addEventListener("click", () => {
    itemsToShow += 6;
    updateItemsVisibility();
  });

  updateItemsVisibility();
});
