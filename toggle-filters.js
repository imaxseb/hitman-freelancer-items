function toggleFilters() {
    const filtersDiv = document.getElementById('filtersDiv');
    const isCollapsed = filtersDiv.classList.toggle('collapsed');

    if (!isCollapsed) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function toggleFilter(button) {
    button.classList.toggle('active');
    filterTable();
}