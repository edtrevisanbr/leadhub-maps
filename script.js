    document.addEventListener("DOMContentLoaded", function () {
      const indexClosed = document.getElementById("index-closed-inner");
      const indexOpened = document.getElementById("index-opened");

      const openButton = indexClosed.querySelector(".fechar-collapse");
      const closeButton = indexOpened.querySelector(".fechar-collapse1");

      openButton.addEventListener("click", function () {
        indexClosed.closest("#index-closed").style.display = "none";
        indexOpened.style.display = "block";
      });

      closeButton.addEventListener("click", function () {
        indexClosed.closest("#index-closed").style.display = "block";
        indexOpened.style.display = "none";
      });
    });