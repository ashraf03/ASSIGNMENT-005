let coins = 80;
const callValues = document.querySelectorAll("#call");
const callingDec = document.getElementById('calling-dec');
const clearHistoryBtn = document.getElementById("clearHistory");

callValues.forEach(callValue => {
    callValue.addEventListener("click", function() {

        // find parent card
        const card = callValue.closest(".emergency_all");

        // find elements inside card
        const serviceNameEl = card.querySelector("#serviceName");
        const numberEl = card.querySelector("#emergency_number");

        if (!serviceNameEl || !numberEl) {
            console.error("Elements not found inside card");
            return;
        }

        const serviceName = serviceNameEl.innerHTML;
        const number = numberEl.innerHTML;

        if (coins <= 20) {
            alert(serviceName + " " + number);
            return;
        }

        coins -= 20;
        callingDec.innerHTML = coins;

         // Generate time
        const time = new Date().toLocaleTimeString();

        // Create history item
        const historyItem = document.createElement("div");
        historyItem.classList.add("flex", "justify-between", "mt-2", "p-2", "border-b");

        historyItem.innerHTML = `
            <div>
                <h1>${serviceName}</h1>
                <p>${number}</p>
            </div>
            <div>
                <span>${time}</span>
            </div>
        `;

        // Add to history list
        historyList.prepend(historyItem);
    });

});

