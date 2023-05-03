let pwField = document.querySelector(".pwField");
let pwLength = document.querySelector(".pwLength");
let pwLengthDisplay = document.querySelector(".pwLengthDisplay");
let pwButton = document.querySelector(".pwButton");

let pwLengthValue = pwLength.value;

let uppercaseArray = [];
let lowercaseArray = [];
let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let charArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "<",
  ">",
  "/",
  "?",
];

for (let i = 97; i < 123; i++) {
  let letter = String.fromCharCode(i);
  lowercaseArray.push(letter);
  uppercaseArray.push(letter.toUpperCase());
}

pwLength.addEventListener("input", (e) => {
  pwLengthValue = e.target.value;
  pwLengthDisplay.innerHTML = pwLengthValue;
});

function generatePassword() {
  let numbers = document.querySelector(".numbers").checked;
  let lowercase = document.querySelector(".lowercase").checked;
  let uppercase = document.querySelector(".uppercase").checked;
  let specialChars = document.querySelector(".specialChars").checked;

  console.log(numbers, lowercase, uppercase, specialChars);

  let pwSourceArray = [
    ...(uppercase ? uppercaseArray : []),
    ...(lowercase ? lowercaseArray : []),
    ...(numbers ? numberArray : []),
    ...(specialChars ? charArray : []),
  ];

  if (pwSourceArray.length === 0) {
    pwField.value = "";
    return;
  }

  let password = "";

  for (let i = 0; i < pwLengthValue; i++) {
    let randomIndex = Math.floor(Math.random() * pwSourceArray.length);
    password += pwSourceArray[randomIndex];
  }
  pwField.value = password;
}
pwButton.addEventListener("click", () => generatePassword());
