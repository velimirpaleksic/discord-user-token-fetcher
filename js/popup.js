document.getElementById('preventForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
    const copyClipboardButton = document.querySelector('.copyClipboard');
    if (copyClipboardButton) {
        copyClipboardButton.addEventListener('click', function () {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                console.log(tabs);
                if (tabs.length && tabs[0].url.includes("discord.com")) {
                    chrome.tabs.sendMessage(tabs[0].id, { action: "openExtensionPopup" }, function (token) {
                        if (token) {
                            const tokenInput = document.querySelector('#token');
                            if (tokenInput) {
                                tokenInput.value = token;
                                tokenInput.style.display = "block";
                            }
                            copyClipboardButton.style.display = "block";
                            navigator.clipboard.writeText(token).then(function () {
                                alert('Copied to clipboard!');
                            }).catch(function (err) {
                                alert('Could\'t copy text: ' + err);
                            });
                        }
                    });
                } else {
                    alert("Only for discord.com");
                }
            });
        });
    } else {
        alert("No copy button found?")
    }
});