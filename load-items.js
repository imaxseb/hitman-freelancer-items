document.addEventListener('DOMContentLoaded', async () => {
    const tableBody = document.getElementById('tableBody');

    try {
        const response = await fetch('freelancer_items.csv');
        if (!response.ok) {
            throw new Error(`Failed to load CSV: ${response.status}`);
        }

        const csvText = await response.text();
        const items = parseCsv(csvText).sort((a, b) => a.Item.localeCompare(b.Item));

        tableBody.replaceChildren(...items.map(item => createTableRow([
            item.Item,
            item.Section,
            item.Type,
            item['Sub-Type'],
            item.Concealable,
            item.Prestige,
            item.Rarity,
            item.Capacity,
            item.Price
        ])));
    } catch (error) {
        console.error('Unable to load freelancer items from CSV:', error);
        tableBody.replaceChildren(createTableRow(['Error loading item data', '', '', '', '', '', '', '', '']));
    }

    initializeResponsiveItems();
});

function parseCsv(csvText) {
    const rows = [];
    let currentValue = '';
    let currentRow = [];
    let inQuotes = false;

    for (let i = 0; i < csvText.length; i++) {
        const char = csvText[i];
        const next = csvText[i + 1];

        if (char === '"') {
            if (inQuotes && next === '"') {
                currentValue += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
            continue;
        }

        if (char === ',' && !inQuotes) {
            currentRow.push(currentValue);
            currentValue = '';
            continue;
        }

        if ((char === '\n' || char === '\r') && !inQuotes) {
            if (char === '\r' && next === '\n') {
                i++;
            }
            currentRow.push(currentValue);
            if (currentRow.some(cell => cell !== '')) {
                rows.push(currentRow);
            }
            currentRow = [];
            currentValue = '';
            continue;
        }

        currentValue += char;
    }

    if (currentValue.length > 0 || currentRow.length > 0) {
        currentRow.push(currentValue);
        if (currentRow.some(cell => cell !== '')) {
            rows.push(currentRow);
        }
    }

    const [headers, ...dataRows] = rows;
    return dataRows.map(row => {
        const item = {};
        headers.forEach((header, index) => {
            item[header.trim()] = row[index] ? row[index].trim() : '';
        });
        return item;
    });
}

function createTableRow(values) {
    const row = document.createElement('tr');
    row.innerHTML = values.map((value, index) => {
        const content = index === 6
            ? `<span class="rarity-${value.toLowerCase()}">${escapeHtml(value)}</span>`
            : index === 8
                ? escapeHtml(formatPrice(value))
            : escapeHtml(value);
        return `<td>${content}</td>`;
    }).join('');
    return row;
}

function formatPrice(value) {
    const numericValue = Number(String(value).replace(/,/g, '').trim());
    return Number.isFinite(numericValue) ? numericValue.toLocaleString('en-US') : value;
}