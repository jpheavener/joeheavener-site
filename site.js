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

const pageTitle = document.title.toLowerCase();

document.querySelectorAll(".navbar a").forEach(link => {
    const linkText = link.textContent.toLowerCase();

    if (
        pageTitle.includes(linkText) ||
        (pageTitle.includes("joe heavener") && linkText === "home") ||
        (pageTitle.includes("data") && linkText === "data") ||
        (pageTitle.includes("real estate") && linkText === "real estate") ||
        (pageTitle.includes("worship") && linkText === "worship") ||
        (pageTitle.includes("hijet") && linkText === "hijet") ||
        (pageTitle.includes("lego") && linkText === "lego") ||
        (pageTitle.includes("metallurgy") && linkText === "metallurgy")
    ) {
        link.classList.add("active");
    }
});
