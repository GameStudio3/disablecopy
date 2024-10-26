document.querySelector(".no-copy")
.addEventListener("copy", e => {
  e.clipboardData.setData("text/plain", "No Copying!");
  e.preventDefault();
});