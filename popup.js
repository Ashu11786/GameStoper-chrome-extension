document.getElementById("startButton").addEventListener("click", () => {
    const timeLimit = parseInt(document.getElementById("timeInput").value);
    if (!isNaN(timeLimit) || timeLimit > 0) {
        chrome.runtime.sendMessage({ action: 'startTimer', timeLimit }, (response) => {
            alert(response.status);
        });
    }
    else {
        alert('Please enter a valid time in minutes .');
    }
});
