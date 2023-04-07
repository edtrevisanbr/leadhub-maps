document.addEventListener("DOMContentLoaded", function () {
  const indexClosed = document.getElementById("index-closed");
  const indexOpened = document.getElementById("index-opened");

  const openButton = indexClosed.querySelector(".fechar-collapse");
  const closeButton = indexOpened.querySelector(".fechar-collapse1");

  openButton.addEventListener("click", function () {
    indexClosed.style.display = "none";
    indexOpened.style.display = "flex";
  });

  closeButton.addEventListener("click", function () {
    indexClosed.style.display = "flex";
    indexOpened.style.display = "none";
  });
});
