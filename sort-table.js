let currentSortColumn = -1;
let sortDirection = 'asc';
const rarityOrder = ['common', 'rare', 'epic', 'legendary'];

function sortItemsMobile() {
    const columnSelect = document.getElementById('mobileSort');
    const directionButton = document.getElementById('mobileSortDirectionToggle');

    if (!columnSelect || !directionButton) {
        return;
    }

    currentSortColumn = Number(columnSelect.value);
    directionButton.textContent = sortDirection === 'asc' ? 'Ascending' : 'Descending';
    sortTable(currentSortColumn, sortDirection);
}

function toggleSortDirection() {
    sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    const directionButton = document.getElementById('mobileSortDirectionToggle');
    if (directionButton) {
        directionButton.textContent = sortDirection === 'asc' ? 'Ascending' : 'Descending';
    }

    const columnSelect = document.getElementById('mobileSort');
    if (columnSelect) {
        sortTable(Number(columnSelect.value), sortDirection);
    }
}

function sortTable(columnIndex, explicitDirection) {
    const table = document.getElementById('dataTable');
    const tbody = document.getElementById('tableBody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    if (explicitDirection !== undefined) {
        sortDirection = explicitDirection;
        currentSortColumn = columnIndex;
    } else if (currentSortColumn === columnIndex) {
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

        if (columnIndex === 6) {
            const aRarity = rarityOrder.indexOf(aValue.toLowerCase());
            const bRarity = rarityOrder.indexOf(bValue.toLowerCase());
            const rarityComparison = aRarity - bRarity;
            return sortDirection === 'asc' ? rarityComparison : -rarityComparison;
        }

        // Try to convert to numbers for numeric comparison
        const aNum = parseFloat(aValue.replace(/,/g, ''));
        const bNum = parseFloat(bValue.replace(/,/g, ''));

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
    rows.forEach(row => {
        tbody.appendChild(row);
        const card = document.querySelector(`[data-card-index="${row.dataset.itemIndex}"]`);
        if (card) {
            document.getElementById('cardGrid').appendChild(card);
        }
    });
}