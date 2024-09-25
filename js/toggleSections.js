const donateBtn = document.getElementById("donate-btn");
const historyBtn = document.getElementById("history-btn");
const historyMein = document.getElementById("history-main");
const donateMain = document.getElementById("donation-main");
const footer = document.getElementById("footer");

donateBtn.addEventListener("click", () => {
    donateBtn.classList.add("bg-customGreen", "hover:bg-customGreen");
    historyBtn.classList.remove("bg-customGreen", "hover:bg-customGreen");

    donateMain.classList.remove("hidden");
    historyMein.classList.add("hidden");
    footer.classList.remove("hidden");
});

historyBtn.addEventListener("click", () => {
    historyBtn.classList.add("bg-customGreen", "hover:bg-customGreen");
    donateBtn.classList.remove("bg-customGreen", "hover:bg-customGreen");

    historyMein.classList.remove("hidden");
    donateMain.classList.add("hidden");
    footer.classList.add("hidden");
});
