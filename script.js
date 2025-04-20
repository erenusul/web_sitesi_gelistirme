document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".image-track");
    const scrollbar = document.querySelector(".custom-scrollbar");
    const thumb = document.querySelector(".scrollbar-thumb");

    function updateThumbPosition() {
        const scrollPercentage = track.scrollLeft / (track.scrollWidth - track.clientWidth);
        thumb.style.left = scrollPercentage * (scrollbar.clientWidth - thumb.clientWidth) + "px";
    }

    track.addEventListener("scroll", updateThumbPosition);

    let isDragging = false;
    let startX;

    thumb.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX - thumb.offsetLeft;
        document.body.style.userSelect = "none";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let newX = e.clientX - startX;
        newX = Math.max(0, Math.min(newX, scrollbar.clientWidth - thumb.clientWidth));
        thumb.style.left = newX + "px";

        const scrollPercentage = newX / (scrollbar.clientWidth - thumb.clientWidth);
        track.scrollLeft = scrollPercentage * (track.scrollWidth - track.clientWidth);
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.userSelect = "auto";
    });

    updateThumbPosition();
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("mode-toggle");
    const body = document.body;


    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Light Mode";
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


