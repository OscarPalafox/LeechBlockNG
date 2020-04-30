function getURLParam(info) {
    if (!info) return;

    const text = !info.args ? "Shouldn't you be working?" : decodeURIComponent(info.args);
    document.getElementById("msg").innerHTML = text;
};

browser.runtime.sendMessage({ type: "blocked" }).then(getURLParam);