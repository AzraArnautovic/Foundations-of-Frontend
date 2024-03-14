document.addEventListener('DOMContentLoaded', function() {
    var recipesBtn = document.getElementById('recipesBtn');
    var submenu = document.getElementById('submenu');

    recipesBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up

        submenu.classList.toggle('show'); // Toggle the 'show' class to display/hide the submenu
    });

    // Close the submenu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!submenu.contains(event.target) && !recipesBtn.contains(event.target)) {
            submenu.classList.remove('show');
        }
    });
});
