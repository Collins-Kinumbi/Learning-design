const accordons = document.querySelectorAll(".accordion");
// console.log(accordons);

accordons.forEach((accordon) => {
  accordon.addEventListener("click", (e) => {
    // console.log("click");
    // console.log(e);
    if (e.target.localName === "svg") {
      // console.log("svg");
      accordon.classList.toggle("open");
    }
  });
});
