document.querySelector(".no-copy")
.addEventListener("copy", e => {
  e.clipboardData.setData("text/plain", "No Copying!");
  e.preventDefault();
}); // doesn't work against extension (but works without it)

$(".no-copy").addEventListener("copy", e => {
    e.clipboardData.setData("text/plain", "No Copying!");
    e.preventDefault();
});

