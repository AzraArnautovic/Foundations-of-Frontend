

document.addEventListener('DOMContentLoaded', function () {
    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.querySelector('#spapp').innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    }

    // Event listener for hashchange
    window.addEventListener('hashchange', function () {
        const hash = window.location.hash.substring(1);
        if (hash === 'view_more') {
            loadPage('/html/view_more.html');
        }
    });

    // Initial load based on hash
    if (window.location.hash === '#view_more') {
        loadPage('/html/view_more.html');
    }
});


