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
