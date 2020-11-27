let mobileNumber = "";
let sumbitBtn = document.getElementById("submit-btn");
let errorMessage = document.getElementById("error");

let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");

let dropDown = document.getElementById("country-code");
let dropDownOptions = document.getElementById("counteries");
let codeOptions = document.getElementsByClassName("option-code");

function enterNumber(num) {
  mobileNumber = document.getElementById("mobile-number").value += num;
}

function deleteLastNumber() {
  let fullNumber = mobileNumber;
  let updatedNumber = fullNumber.substring(0, fullNumber.length - 1);
  mobileNumber = document.getElementById("mobile-number").value = updatedNumber;
}

sumbitBtn.addEventListener("click", () => {
  mobileNumber.length != 10
    ? (errorMessage.innerHTML = "Please Enter Valid Mobile Number")
    : (document.getElementById("confirm-modal").style.display = "grid");
  setTimeout(() => {
    errorMessage.innerHTML = "";
  }, 3000);
});

yesBtn.addEventListener("click", () => {
  document.getElementById("confirm-modal").style.display = "none";
  document.getElementById("success-modal").style.display = "grid";
  document.getElementById("number").innerHTML = document.getElementById("country-code").textContent + " " + mobileNumber;
});

noBtn.addEventListener("click", () => {
  document.getElementById("confirm-modal").style.display = "none";
});

dropDown.addEventListener("click", () => {
  dropDownOptions.style.cssText = "display: flex; flex-direction: column";
});

for (let i = 0; i < codeOptions.length; i++) {
  codeOptions[i].addEventListener("click", () => {
    dropDownOptions.style.display = "none";
    dropDown.textContent = codeOptions[i].textContent;
  });
}
