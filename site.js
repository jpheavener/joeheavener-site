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

const hoverSound = document.getElementById("hoverSound");
let audioEnabled = localStorage.getItem("audioEnabled") === "true";

document.addEventListener("click", () => {
    audioEnabled = true;
    localStorage.setItem("audioEnabled", "true");

    hoverSound.play().then(() => {
        hoverSound.pause();
        hoverSound.currentTime = 0;
    }).catch(() => {});
}, { once: true });

document.querySelectorAll("a, button").forEach(item => {
    item.addEventListener("mouseenter", () => {
        if (!audioEnabled) return;

        const soundClone = hoverSound.cloneNode(true);
        soundClone.volume = 0.2;
        soundClone.play().catch(() => {});
    });
});
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar a").forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("active");
    }
});
