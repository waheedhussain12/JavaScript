let myInput = document.querySelector("#myInput");
myInput.addEventListener("focus", myFocusFunction);
myInput.addEventListener("blur", myBlurFunction);
// there two status in forms
// focus and blur
// focus means yu can type on input field
// blur means yu can not type on input
// myInput.addEventListener("change", function () {
//   // change event show us what user typing
//   // once user type than show us
//   // get value
//   console.log(this.value);
// });
// myInput.addEventListener("input", function () {
//   // input event show us like live value
//   // anything user typing using input Event we can access
//   // get value
//   console.log(this.value);
// });
function myFocusFunction() {
  myInput.style.background = "orange";
}
function myBlurFunction() {
  myInput.style.background = "white";
}
