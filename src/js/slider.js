const carousels = document.querySelectorAll(".infinite-carousel");

carousels.forEach((carousel) => {
  const carouselInner = carousel.querySelector("#inner-carousel");
  const carouselContent = Array.from(carouselInner.children);
  const totalItems = carouselContent.length;

  carouselContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    carouselInner.appendChild(duplicatedItem);
  });

  const newWidth = 100 * totalItems;
  carouselInner.classList.add = !w - 96;
});
