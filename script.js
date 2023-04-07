document.addEventListener("DOMContentLoaded", function () {
  const indexClosed = document.getElementById("index-closed-inner");
  const indexOpened = document.getElementById("index-opened");

  const openButton = indexClosed.querySelector(".fechar-collapse");
  const closeButton = indexOpened.querySelector(".fechar-collapse1");

  openButton.addEventListener("click", function () {
    indexClosed.closest("#index-closed").classList.add("hidden");
    indexOpened.classList.remove("hidden");
  });

  closeButton.addEventListener("click", function () {
    indexClosed.closest("#index-closed").classList.remove("hidden");
    indexOpened.classList.add("hidden");
  });
});
