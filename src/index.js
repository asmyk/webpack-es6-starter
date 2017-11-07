import mainStyle from "./main.css";
import "normalize.css";

/**
 * Place your app here
 */

document.addEventListener('DOMContentLoaded', function () {
    let rootEl = document.getElementById("rootElement");
    rootEl.classList.add(mainStyle.batman);

    setTimeout(function () {
        rootEl.classList.add(mainStyle.visible);
    }, 1250);
});