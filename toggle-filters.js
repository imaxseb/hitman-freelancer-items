function toggleFilters() {
    const filtersDiv = document.getElementById('filtersDiv');
    filtersDiv.classList.toggle('collapsed');
}

function toggleFilter(button) {
    button.classList.toggle('active');
    filterTable();
}