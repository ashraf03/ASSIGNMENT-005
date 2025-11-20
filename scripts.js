let coins = 80;
const callValues = document.querySelectorAll("#call");
const callingDec = document.getElementById('calling-dec');
const clearHistoryBtn = document.getElementById("clearHistory");
const historyList = document.getElementById("historyList");

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
        console.log(callingDec)
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

clearHistoryBtn.addEventListener('click', function() {
    historyList.innerHTML = "";
    // console.log("click")
});

const copyButtons = document.querySelectorAll(".btn-copy");
const copyCount = document.getElementById("copy_in");
copyButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      let value = parseInt(copyCount.innerText);
        
        // Get parent card
        const card = btn.closest(".emergency_all");

        // Get service name and number
        const serviceName = card.querySelector("#serviceName").innerText;
        const number = card.querySelector("#emergency_number").innerText;

        // Make text to copy
        const textToCopy = `${serviceName} - ${number}`;

        // Copy to clipboard
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert(`Copied: ${textToCopy}`);
            })
            .catch(err => {
                console.log("Copy failed!", err);
            });

            value++;

            copyCount.innerText = value;

            console.log(copyCount);
    });
});


