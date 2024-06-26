/****MERGE THIS INTO A FOLDER WITH NAV BAR*****/
// Get the profile picture and dropdown menu elements
const profilePic = document.getElementById('profile-pic');
const dropdownMenu = document.getElementById('dropdown-menu');

// Function to toggle the visibility of the dropdown menu
function toggleDropdown() {
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
}

// Add a click event listener to the profile picture
profilePic.addEventListener('click', toggleDropdown);

// Add a click event listener to the document to close the dropdown menu when clicking outside the profile container
document.addEventListener('click', function(event) {
    if (!profilePic.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});
