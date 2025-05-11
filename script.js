document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navbar links
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Automatic image slider for the gallery
    const gallery = document.querySelector(".gallery");
    if (gallery) {
        let scrollAmount = 0;
        setInterval(() => {
            if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
                scrollAmount = 0;
            } else {
                scrollAmount += 300;
            }
            gallery.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }, 3000);
    }

    // Toggle dark mode (optional feature)
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px 15px";
    toggleButton.style.background = "black";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
