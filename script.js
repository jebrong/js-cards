const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeOpen();
    tab.classList.add("open");
  });
});

const removeOpen = () =>
  tabs.forEach((tab) => {
    tab.classList.remove("open");
  });
