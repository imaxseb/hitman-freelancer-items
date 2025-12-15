function toggleAllFilters(filterType) {
    const buttons = document.querySelectorAll(`.filter-button[data-filter="${filterType}"]`);

    const activeButtons = document.querySelectorAll(`.filter-button[data-filter="${filterType}"].active`);

    if (activeButtons.length > 0) {
        buttons.forEach(btn => btn.classList.remove('active'));
    } else {
        buttons.forEach(btn => btn.classList.add('active'));
    }

    filterTable();

}