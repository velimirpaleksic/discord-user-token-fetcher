var s = document.createElement('script');
s.src = chrome.runtime.getURL('js/web-script.js');
s.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(s);

// Function to retrieve a cookie by name
function getCookie(name) {
	const cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].trim();
		const [cookieName, cookieValue] = cookie.split('=');
		if (cookieName === name) {
			return cookieValue;
		}
	}
	return null;
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action === "openExtensionPopup") {
        const token = getCookie("discordUserToken");
        sendResponse(token);
	}
});