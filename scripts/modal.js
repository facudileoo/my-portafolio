document.querySelector(".view").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("modal-proyecto").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("modal-proyecto").style.display = "none";
});
