document.getElementById("showPopupBtn").addEventListener("click", function() {
    const loadingSpinner = document.getElementById("loadingSpinner");
    const popup = document.getElementById("popup");

    loadingSpinner.style.display = "block";
    setTimeout(function() {
        loadingSpinner.style.display = "none";
        popup.classList.add("active");
    }, 2000);
});
