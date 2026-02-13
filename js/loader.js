
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("page-loader");
    const titleElement = document.getElementById("page-title");

    if (loader && titleElement) {
        // Dynamic Title based on document.title (Optional)
        const currentTitle = document.title.split('|')[0].trim() || "TeamWork Solutions";
        titleElement.innerText = currentTitle;
    }

    if (loader) {
        // Visual fade out
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.visibility = "hidden";
            }, 800); // Wait for transition
        }, 2000); // Display time
    }
});
