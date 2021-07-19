const handleMenu = () => {
  document.getElementById("menu").classList.toggle("menu-active");
  document.body.classList.toggle("small-body");
  window.scrollTo(0, 0);
};

const handleQuitMenu = () => {
  document.body.classList.remove("small-body");
  document.getElementById("menu").classList.remove("menu-active");
};

const a = document.getElementsByTagName("a");
document.getElementById("icon-menu").addEventListener("click", handleMenu);
for (let index = 0; index < a.length; index++) {
  a[index].addEventListener("click", handleQuitMenu);
}

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
