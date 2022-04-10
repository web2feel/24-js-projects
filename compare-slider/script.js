const slider = document.querySelector("#slider");
const image = document.querySelectorAll(".image")[0];
const divider = document.querySelector(".divider");

image.classList.add("active");

slider.addEventListener("mousemove", function (e) {
  let clientX = e.clientX;
  let box = e.target.getBoundingClientRect();
  let mousePos = Math.ceil(clientX - box.left);
  let percent = mousePos * (100 / box.width);

  image.style.clipPath = `inset(0 0 0 ${percent}%)`;
  divider.style.left = `${percent}%`;
});
