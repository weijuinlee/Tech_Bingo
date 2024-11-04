function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const themeIcon = document.getElementById("theme-icon");
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
}

function markAsFound(element) {
    if (element.classList.contains("marked")) {
        alert("This item has already been marked.");
        return;
    }

    const name = prompt("Enter the name of the person who matches this description:");

    if (name) {
        element.classList.add("marked"); 
        element.style.backgroundColor = "#34d399"; 
        element.style.color = "#fff"; 
        element.textContent = `${element.textContent}\n- ${name}`; 
    }
}
