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
    const galleryImages = document.querySelectorAll(".image-track img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-lightbox");

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });


    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const overlayText = document.querySelector('.overlay-text');

    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        let scaleValue = Math.max(0.5, 1 - scrollTop / 600);
        overlayText.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a.fade-link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popupMessage");
    const detail = document.getElementById("popupDetail");


    popup.classList.add("show");


    setTimeout(() => {
        if (!detail.classList.contains("visible")) {
            popup.classList.remove("show");
        }
    }, 10000);


    popup.addEventListener("click", () => {
        if (detail.style.display === "block") {
            detail.style.display = "none";
            detail.classList.remove("visible");
        } else {
            detail.style.display = "block";
            detail.classList.add("visible");
        }
    });
});

const closeBtn = document.getElementById("popupClose");

document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.getElementById("popupClose");
    const popup = document.getElementById("popupMessage");

    closeBtn.addEventListener("click", function () {
        popup.classList.remove("show");
    });
});
