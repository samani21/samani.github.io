document.addEventListener("DOMContentLoaded", function () {
    const startYear = 2021;
    const currentYear = new Date().getFullYear();
    const yearsSince = currentYear - startYear;
    document.getElementById("year-count").textContent = yearsSince;
    document.getElementById("year-count1").textContent = yearsSince;
});