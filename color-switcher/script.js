(function () {
  const colorField = document.querySelector(".color-field");
  const switcher = document.querySelector(".switcher");

  function getColorValue() {
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    return `rgb(${red},${blue},${green})`;
  }

  switcher.addEventListener("click", function () {
    let color = getColorValue();
    document.body.style.background = color;
    colorField.value = color;
  });
})();

let report = students.map((item) => {
    return `<h2>${item.name} (class-${item.class})</h2> 
          <p> ${item.marks.subject} - ${item.marks.mark} </p>`;
  })
  .join("");
document.querySelector("#demo").innerHTML = report;
