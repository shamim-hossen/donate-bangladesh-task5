function addToHistory(amount, title) {
    const historyDev = document.getElementById("history-div");

    const div = `
    <div class="border-2 border-gray-400 rounded-lg p-4 mb-5">
        <h1 class="text-xl mb-2">${amount} Taka is Donated <span class="text-2xl font-semibold">"${title}"</span></h1>
        <p class=" p-2 font-semibold rounded-lg">
            Date : ${new Date()}
        </p>
    </div>
    `;
    historyDev.innerHTML += div;
}

function donate(btn, input, total, heading) {
    document.getElementById(btn).addEventListener("click", () => {
        const headingText = document.getElementById(heading).innerText;
        const balance = document.getElementById("total-amount");
        const donateValue = document.getElementById(input);
        const totalDonation = document.getElementById(total);

        const balanceNum = parseFloat(balance.innerText);
        const donateAmount = parseFloat(donateValue.value);

        if (
            !isNaN(donateAmount) &&
            donateAmount <= balanceNum &&
            donateAmount > 0
        ) {
            const newBalance = balanceNum - donateAmount;
            balance.innerHTML = newBalance;

            const newTotalDonation =
                parseFloat(totalDonation.innerText) + donateAmount;
            totalDonation.innerHTML = newTotalDonation;

            addToHistory(donateAmount, headingText);
            my_modal_1.showModal();
        } else {
            alert("Enter Valid Amount");
        }

        donateValue.value = "";
    });
}

donate("donate-btn-1", "donate-input-1", "total-donate-1", "hading-1");
donate("donate-btn-2", "donate-input-2", "total-donate-2", "hading-2");
donate("donate-btn-3", "donate-input-3", "total-donate-3", "hading-3");
