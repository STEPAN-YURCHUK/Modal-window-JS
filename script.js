window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");

    more.addEventListener("click", function () {
        overlay.style.display = "block";
        this.classList.add("more-splach");
        document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", function () {
        overlay.style.display = "none";
        more.classList.remove("more-splach");
        document.body.style.overflow = "";
    });
});
