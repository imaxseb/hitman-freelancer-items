function initializeResponsiveItems() {
    const tableRows = Array.from(document.querySelectorAll('#tableBody tr'));
    const cardGrid = document.getElementById('cardGrid');
    const columnNames = ['Item', 'Section', 'Type', 'Sub-Type', 'Concealable', 'Prestige', 'Rarity', 'Capacity', 'Price'];

    tableRows.forEach((row, index) => {
        const cells = Array.from(row.cells);
        const values = cells.map(cell => cell.textContent.trim());
        row.dataset.itemIndex = index;
        const card = document.createElement('article');
        card.className = 'item-card';
        card.classList.add(`rarity-${values[6].toLowerCase()}`);
        card.dataset.cardIndex = index;
        card.innerHTML = `<dl>${values.map((value, index) => `<div><dt>${columnNames[index]}</dt><dd>${index === 6 ? cells[index].innerHTML : escapeHtml(value)}</dd></div>`).join('')}</dl>`;
        cardGrid.appendChild(card);
    });

    document.getElementById('myInput').addEventListener('input', filterTable);
    filterTable();
}

function escapeHtml(value) {
    const element = document.createElement('div');
    element.textContent = value;
    return element.innerHTML;
}