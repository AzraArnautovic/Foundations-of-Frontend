// JavaScript for sorting table rows

// Function to sort table rows by column index
function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("tr");
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[columnIndex];
            y = rows[i + 1].getElementsByTagName("td")[columnIndex];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

// Event listeners to trigger sorting when column headers are clicked
document.getElementById("sortID").addEventListener("click", function() {
    sortTable(0);
});
document.getElementById("sortName").addEventListener("click", function() {
    sortTable(1);
});
// Repeat for other columns as needed


function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active")
}