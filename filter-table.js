function filterTable() {
    // Get all active filter buttons for each category
    const selectedSections = Array.from(document.querySelectorAll('.filter-button[data-filter="section"].active')).map(btn => btn.getAttribute('data-value'));
    const selectedTypes = Array.from(document.querySelectorAll('.filter-button[data-filter="type"].active')).map(btn => btn.getAttribute('data-value'));
    const selectedSubtypes = Array.from(document.querySelectorAll('.filter-button[data-filter="subtype"].active')).map(btn => btn.getAttribute('data-value'));
    const selectedSilenced = Array.from(document.querySelectorAll('.filter-button[data-filter="silenced"].active')).map(btn => btn.getAttribute('data-value'));
    const selectedPiercing = Array.from(document.querySelectorAll('.filter-button[data-filter="piercing"].active')).map(btn => btn.getAttribute('data-value'));
    const selectedConceals = Array.from(document.querySelectorAll('.filter-button[data-filter="conceal"].active')).map(btn => btn.getAttribute('data-value'));
    const selectedPrestiges = Array.from(document.querySelectorAll('.filter-button[data-filter="prestige"].active')).map(btn => btn.getAttribute('data-value'));
    const selectedRarities = Array.from(document.querySelectorAll('.filter-button[data-filter="rarity"].active')).map(btn => btn.getAttribute('data-value'));
    const selectedCapacities = Array.from(document.querySelectorAll('.filter-button[data-filter="capacity"].active')).map(btn => btn.getAttribute('data-value'));

    const rows = document.querySelectorAll('#tableBody tr');
    const noResults = document.getElementById('noResults');
    let visibleCount = 0;

    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        const section = cells[1].textContent.trim();
        const type = cells[2].textContent.trim();
        const subtype = cells[3].textContent.trim().split(", ");
        const conceal = cells[4].textContent.trim();
        const prestige = cells[5].textContent.trim();
        const rarity = cells[6].textContent.trim();
        const capacity = cells[7].textContent.trim();

        const matchesSection = selectedSections.length === 0 || selectedSections.includes(section);
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(type);
        const matchesSubtype = selectedSubtypes.length === 0 || selectedSubtypes.some(st => subtype.includes(st));
        const matchsSilenced = selectedSilenced.length === 0 || subtype.some(s => selectedSilenced.includes(s));
        const matchPiercing = selectedPiercing.length === 0 || subtype.some(p => selectedPiercing.includes(p));
        const matchesConceal = selectedConceals.length === 0 || selectedConceals.includes(conceal);
        const matchesPrestige = selectedPrestiges.length === 0 || selectedPrestiges.includes(prestige);
        const matchesRarity = selectedRarities.length === 0 || selectedRarities.includes(rarity);
        const matchesCapacity = selectedCapacities.length === 0 || selectedCapacities.includes(capacity);

        if (matchesSection && matchesType && matchesSubtype && matchsSilenced && matchPiercing && matchesRarity && matchesConceal && matchesPrestige && matchesCapacity) {
            row.classList.remove('hidden');
            visibleCount++;
        } else {
            row.classList.add('hidden');
        }
    });

    // Show/hide "no results" message
    if (visibleCount === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}