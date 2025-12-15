function clearFilters() {
    const buttons = document.querySelectorAll('.filter-button.active')

    buttons.forEach(button => {
        button.classList.remove('active')
    })

    filterTable()
}