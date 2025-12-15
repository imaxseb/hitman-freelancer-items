let currentSortColumn = -1;
let sortDirection = 'asc';

function sortTable(columnIndex) {
    const table = document.getElementById('dataTable');
    const tbody = document.getElementById('tableBody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Update sort direction
    if (currentSortColumn === columnIndex) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortDirection = 'asc';
        currentSortColumn = columnIndex;
    }

    // Update header classes
    const headers = table.querySelectorAll('th');
    headers.forEach((header, index) => {
        header.classList.remove('sort-asc', 'sort-desc');
        if (index === columnIndex) {
            header.classList.add(sortDirection === 'asc' ? 'sort-asc' : 'sort-desc');
        }
    });

    // Sort rows
    rows.sort((a, b) => {
        let aValue = a.cells[columnIndex].textContent.trim();
        let bValue = b.cells[columnIndex].textContent.trim();

        // Try to convert to numbers for numeric comparison
        const aNum = parseFloat(aValue);
        const bNum = parseFloat(bValue);

        if (!isNaN(aNum) && !isNaN(bNum)) {
            return sortDirection === 'asc' ? aNum - bNum : bNum - aNum;
        }

        // String comparison
        if (sortDirection === 'asc') {
            return aValue.localeCompare(bValue);
        } else {
            return bValue.localeCompare(aValue);
        }
    });

    // Reattach sorted rows
    rows.forEach(row => tbody.appendChild(row));
}