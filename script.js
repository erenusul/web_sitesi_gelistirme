document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const imageTrack = document.querySelector(".image-track");


    const scrollAmount = 200;

    prevBtn.addEventListener("click", function () {
        imageTrack.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", function () {
        imageTrack.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});