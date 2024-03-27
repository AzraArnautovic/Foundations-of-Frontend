function sortTable(colIndex) {
    var table = document.getElementById("myTable");
    var rows = Array.from(table.rows).slice(1); 
    var sortOrder = 1;

    rows.sort((a, b) => {
        var cellA = a.cells[colIndex].textContent.trim().toLowerCase();
        var cellB = b.cells[colIndex].textContent.trim().toLowerCase();
        if (cellA < cellB) return -1 * sortOrder;
        if (cellA > cellB) return 1 * sortOrder;
        return 0;
    });

    // Reverse the sort order if it's already sorted in the ascending order
    if (table.rows[1] === rows[0]) {
        rows.reverse();
    }

    // Re-append rows to the table
    rows.forEach(row => table.appendChild(row));
}
function openModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Display the modal
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}