// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Change the icon based on the current mode
    const themeIcon = document.getElementById("theme-icon");
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
}

// Function to mark an item as found and add the person’s name
function markAsFound(element) {
    // Check if the item is already marked
    if (element.classList.contains("marked")) {
        alert("This item has already been marked.");
        return;
    }

    // Prompt the user for the person's name
    const name = prompt("Enter the name of the person who matches this description:");

    // If a name was entered, mark the item and display the name
    if (name) {
        element.classList.add("marked"); // Apply the 'marked' style to turn it green
        element.style.backgroundColor = "#34d399"; // Ensure it's green
        element.style.color = "#fff"; // White text for contrast
        element.textContent = `${element.textContent}\n- ${name}`; // Append name to the text
    }
}
