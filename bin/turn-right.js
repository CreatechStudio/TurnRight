class TurnRight extends HTMLElement {
    get url() {
        return this._formatUrl(this.getAttribute("url"));
    }

    set url(url) {
        return this.setAttribute("url", this._formatUrl(url));
    }

    get wait() {
        return this.getAttribute("wait");
    }

    set wait(wait) {
        this.setAttribute("wait", wait);
    }

    get pass() {
        return this.getAttribute("pass");
    }

    set pass(pass) {
        this.setAttribute("pass", pass);
    }



    constructor() {
        super();
        this._ifWait = function () {
            const wait = this.wait;
            if (wait == null) return true;
            if (typeof wait === "boolean") {
                return wait;
            } else {
                return wait.toString() === "true";
            }
        }
        this._ifPass = function () {
            const pass = this.pass;
            if (pass == null) return false;
            if (typeof pass === "boolean") {
                return pass;
            } else {
                return pass.toString() === "true";
            }
        }
        this._formatUrl = function (url) {
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                return "https://" + url;
            }
            return url;
        }
    }

    turnRight() {
        location.href = this.url;
    }
}
function turnRight(index = 0) {
    const tr = document.getElementsByTagName("turn-right")[index];
    if (tr != null && !tr._ifPass()) {
        tr.turnRight();
    }
}
window.customElements.define("turn-right", TurnRight);
window.onload = function () {
    const trs = document.getElementsByTagName("turn-right");
    for (let i = 0; i < trs.length; i++) {
        const tr = trs[i];
        if (!tr._ifWait() && !tr._ifPass()) {
            tr.turnRight();
            break;
        }
    }
};