class TurnRight extends HTMLElement {
    get url() {
        return this.formatUrl(this.getAttribute("url"));
    }

    set url(url) {
        return this.setAttribute("url", this.formatUrl(url));
    }

    get wait() {
        return this.getAttribute("wait");
    }

    set wait(wait) {
        this.setAttribute("wait", wait);
    }

    ifWait() {
        if (typeof this.wait === "boolean") {
            return this.wait;
        } else {
            return this.wait.toString() === "true";
        }
    }

    constructor() {
        super();
    }

    formatUrl(url) {
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            return "https://" + url;
        }
        return url;
    }

    turnRight() {
        location.href = this.url;
    }
}
function turnRight(index = 0) {
    const tr = document.getElementsByTagName("turn-right")[index];
    if (tr != null) {
        tr.turnRight();
    }
}
window.customElements.define("turn-right", TurnRight);
window.onload = function () {
    const trs = document.getElementsByTagName("turn-right");
    for (let i = 0; i < trs.length; i++) {
        const tr = trs[i];
        if (!tr.ifWait()) {
            tr.turnRight();
            break;
        }
    }
};