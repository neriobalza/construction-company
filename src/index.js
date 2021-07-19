const handleMenu = () => {
  document.getElementById("menu").classList.toggle("menu-active");
  document.body.classList.toggle("small-body");
  window.scrollTo(0, 0);
};

document.getElementById("icon-menu").addEventListener("click", handleMenu);
// const handleCarousel = () => {
//   const carouselItems = document.getElementsByClassName("carousel__item");
//   console.log(carouselPos);
//   if (carouselPos === 0) {
//     console.log("1");
//     carouselItems[carouselPos].classList.remove("now");
//     carouselItems[carouselPos].classList.add("post");
//     carouselItems[carouselPos + 1].classList.remove("post");
//     carouselItems[carouselItems.length - 1].classList.add("now");
//     carouselPos++;
//   } else if (carouselPos < carouselItems.length - 1) {
//     console.log("2");
//     // carouselItems[carouselPos].classList.remove("now");
//     // carouselItems[carouselPos].classList.add("post");
//     // carouselItems[carouselPos + 1].classList.remove("post");
//     // carouselItems[carouselPos - 1].classList.add("now");
//     carouselPos++;
//   } else if (carouselPos === carouselItems.length - 1) {
//     console.log("3");
//     carouselPos = 0;
//   }
// };
// setInterval(handleCarousel, 1000);
