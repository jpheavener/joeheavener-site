// DARK MODE

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.documentElement.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    document.documentElement.classList.add("dark-mode");
}


// HOVER SOUND

const hoverSound = document.getElementById("hoverSound");
let audioEnabled = false;

document.addEventListener("click", () => {
    audioEnabled = true;

    if (hoverSound) {
        hoverSound.play().then(() => {
            hoverSound.pause();
            hoverSound.currentTime = 0;
        }).catch(() => {});
    }
}, { once: true });

document.querySelectorAll("a, button").forEach(item => {
    item.addEventListener("mouseenter", () => {
        if (!audioEnabled || !hoverSound) return;

        const soundClone = hoverSound.cloneNode(true);
        soundClone.volume = 0.2;
        soundClone.play().catch(() => {});
    });
});


// ACTIVE NAVIGATION

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar a").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});
alert("site.js is loading");
