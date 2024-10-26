document.querySelector(".no-copy")
.addEventListener("copy", e => {
  e.clipboardData.setData("text/plain", "No Copying!");
  e.preventDefault();
}); // doesn't work against extension (but works without it)

document.addEventListener("selectionchange", e => {
    window.getSelection().empty();
    alert("Protected content");
});
