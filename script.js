document.addEventListener("DOMContentLoaded", function () {
  const indexClosed = document.getElementById("index-closed-inner");
  const indexOpened = document.getElementById("index-opened");

  const openButton = indexClosed.querySelector(".fechar-collapse");
  const closeButton = indexOpened.querySelector(".fechar-collapse1");

  openButton.addEventListener("click", function () {
    indexClosed.parentNode.classList.add("hidden"); // Altere esta linha
    indexOpened.classList.remove("hidden");
  });

  closeButton.addEventListener("click", function () {
    indexClosed.parentNode.classList.remove("hidden"); // Altere esta linha
    indexOpened.classList.add("hidden");
  });
});
