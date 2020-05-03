function getURLParam(info) {
    if (!info) return;

    console.log(info);

    const unblockTime = document.getElementById("lbUnblockTime");
    if (info.unblockTime && unblockTime) {
        unblockTime.innerText = info.unblockTime;
    }

    const msg = document.getElementById("msg");
    if (info.msg && info.msg != "%00" && msg) {
        msg.innerHTML = decodeURIComponent(info.msg);
    }

    const blockedURL = document.getElementById("lbBlockedURL");
    if (info.blockedURL && blockedURL) {
        if (info.blockedURL.length > 60) {
            blockedURL.innerText = info.blockedURL.substring(0, 57) + "...";
        } else {
            blockedURL.innerText = info.blockedURL;
        }
    }

    const blockedURLLink = document.getElementById("lbBlockedURLLink");
    if (info.blockedURL && blockedURLLink) {
        blockedURLLink.setAttribute("href", info.blockedURL);
    }
};

browser.runtime.sendMessage({ type: "blocked", page: "SF" }).then(getURLParam);