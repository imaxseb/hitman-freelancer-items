function selectObjective(objective) {
    const allFilterButtons = document.querySelectorAll('.filter-button');
    allFilterButtons.forEach(btn => btn.classList.remove('active'));

    if (objective === 'are') {
        const arButton = document.querySelector('.filter-button[data-filter="type"][data-value="Assault Rifle"]');
        if (arButton) {
            arButton.classList.add('active');
        }

        const epicButton = document.querySelector('.filter-button[data-filter="rarity"][data-value="Epic"]');
        if (epicButton) {
            epicButton.classList.add('active');
        }

        const legButton = document.querySelector('.filter-button[data-filter="rarity"][data-value="Legendary"]');
        if (legButton) {
            legButton.classList.add('active');
        }
    }

    if (objective === 'cke') {
        const grenadeButton = document.querySelector('.filter-button[data-filter="type"][data-value="Grenade"]');
        if (grenadeButton) {
            grenadeButton.classList.add('active');
        }

        const impactButton = document.querySelector('.filter-button[data-filter="type"][data-value="Impact"]');
        if (impactButton) {
            impactButton.classList.add('active');
        }

        const proxButton = document.querySelector('.filter-button[data-filter="type"][data-value="Proximity"]');
        if (proxButton) {
            proxButton.classList.add('active');
        }

        const remoteButton = document.querySelector('.filter-button[data-filter="type"][data-value="Remote"]');
        if (remoteButton) {
            remoteButton.classList.add('active');
        }

        const expButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Explosive"]');
        if (expButton) {
            expButton.classList.add('active');
        }

        const fragButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Fragmentation"]');
        if (fragButton) {
            fragButton.classList.add('active');
        }
    }

    if (objective === 'ckf') {
        const pierceButton = document.querySelector('.filter-button[data-filter="piercing"][data-value="Piercing"]');
        if (pierceButton) {
            pierceButton.classList.add('active');
        }
    }

    if (objective === 'hkl') {
        const arButton = document.querySelector('.filter-button[data-filter="type"][data-value="Assault Rifle"]');
        if (arButton) {
            arButton.classList.add('active');
        }

        const pistolButton = document.querySelector('.filter-button[data-filter="type"][data-value="Pistol"]');
        if (pistolButton) {
            pistolButton.classList.add('active');
        }

        const shButton = document.querySelector('.filter-button[data-filter="type"][data-value="Shotgun"]');
        if (shButton) {
            shButton.classList.add('active');
        }

        const smgButton = document.querySelector('.filter-button[data-filter="type"][data-value="SMG"]');
        if (smgButton) {
            smgButton.classList.add('active');
        }

        const snButton = document.querySelector('.filter-button[data-filter="type"][data-value="Sniper Rifle"]');
        if (snButton) {
            snButton.classList.add('active');
        }

        const legButton = document.querySelector('.filter-button[data-filter="rarity"][data-value="Legendary"]');
        if (legButton) {
            legButton.classList.add('active');
        }
    }

    if (objective === 'ik') {
        const icepickButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Ice Pick"]');
        if (icepickButton) {
            icepickButton.classList.add('active');
        }
    }

    if (objective === 'kak') {
        const katButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Katana"]');
        if (katButton) {
            katButton.classList.add('active');
        }
    }

    if (objective === 'mke') {
        const meleeButton = document.querySelector('.filter-button[data-filter="type"][data-value="Melee"]');
        if (meleeButton) {
            meleeButton.classList.add('active');
        }

        const lethalButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Lethal"]');
        if (lethalButton) {
            lethalButton.classList.add('active');
        }

        const epicButton = document.querySelector('.filter-button[data-filter="rarity"][data-value="Epic"]');
        if (epicButton) {
            epicButton.classList.add('active');
        }

        const legButton = document.querySelector('.filter-button[data-filter="rarity"][data-value="Legendary"]');
        if (legButton) {
            legButton.classList.add('active');
        }
    }

    if (objective === 'ose') {
        const grenadeButton = document.querySelector('.filter-button[data-filter="type"][data-value="Grenade"]');
        if (grenadeButton) {
            grenadeButton.classList.add('active');
        }

        const impactButton = document.querySelector('.filter-button[data-filter="type"][data-value="Impact"]');
        if (impactButton) {
            impactButton.classList.add('active');
        }

        const proxButton = document.querySelector('.filter-button[data-filter="type"][data-value="Proximity"]');
        if (proxButton) {
            proxButton.classList.add('active');
        }

        const remoteButton = document.querySelector('.filter-button[data-filter="type"][data-value="Remote"]');
        if (remoteButton) {
            remoteButton.classList.add('active');
        }

        const expButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Explosive"]');
        if (expButton) {
            expButton.classList.add('active');
        }

        const fragButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Fragmentation"]');
        if (fragButton) {
            fragButton.classList.add('active');
        }
    }

    if (objective === 'suk') {
        const shuButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Shuriken"]');
        if (shuButton) {
            shuButton.classList.add('active');
        }
    }

    if (objective === 'upk') {
        const pistolButton = document.querySelector('.filter-button[data-filter="type"][data-value="Pistol"]');
        if (pistolButton) {
            pistolButton.classList.add('active');
        }

        const unsilenButton = document.querySelector('.filter-button[data-filter="silenced"][data-value="Unsilenced"]');
        if (unsilenButton) {
            unsilenButton.classList.add('active');
        }

        const epicButton = document.querySelector('.filter-button[data-filter="rarity"][data-value="Epic"]');
        if (epicButton) {
            epicButton.classList.add('active');
        }

        const legButton = document.querySelector('.filter-button[data-filter="rarity"][data-value="Legendary"]');
        if (legButton) {
            legButton.classList.add('active');
        }
    }

    if (objective === 'ar') {
        const arButton = document.querySelector('.filter-button[data-filter="type"][data-value="Assault Rifle"]');
        if (arButton) {
            arButton.classList.add('active');
        }
    }

    if (objective === 'axe') {
        const axeButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Axe"]');
        if (axeButton) {
            axeButton.classList.add('active');
        }
    }

    if (objective === 'bg') {
        const flashButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Flash"]');
        if (flashButton) {
            flashButton.classList.add('active');
        }
    }

    if (objective === 'bt') {
        const flashButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Flash"]');
        if (flashButton) {
            flashButton.classList.add('active');
        }
    }

    if (objective === 'dt') {
        const meleeButton = document.querySelector('.filter-button[data-filter="type"][data-value="Melee"]');
        if (meleeButton) {
            meleeButton.classList.add('active');
        }

        const toolButton = document.querySelector('.filter-button[data-filter="type"][data-value="Tool"]');
        if (toolButton) {
            toolButton.classList.add('active');
        }

        const lethalButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Lethal"]');
        if (lethalButton) {
            lethalButton.classList.add('active');
        }
    }

    if (objective === 'ek') {
        const toolButton = document.querySelector('.filter-button[data-filter="type"][data-value="Tool"]');
        if (toolButton) {
            toolButton.classList.add('active');
        }

        const empButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="EMP"]');
        if (empButton) {
            empButton.classList.add('active');
        }

        const taserButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Taser"]');
        if (taserButton) {
            taserButton.classList.add('active');
        }
    }

    if (objective === 'egar') {
        const arButton = document.querySelector('.filter-button[data-filter="type"][data-value="Assault Rifle"]');
        if (arButton) {
            arButton.classList.add('active');
        }
    }

    if (objective === 'egsh') {
        const shButton = document.querySelector('.filter-button[data-filter="type"][data-value="Shotgun"]');
        if (shButton) {
            shButton.classList.add('active');
        }
    }

    if (objective === 'egsn') {
        const snButton = document.querySelector('.filter-button[data-filter="type"][data-value="Sniper Rifle"]');
        if (snButton) {
            snButton.classList.add('active');
        }
    }

    if (objective === 'exk') {
        const grenadeButton = document.querySelector('.filter-button[data-filter="type"][data-value="Grenade"]');
        if (grenadeButton) {
            grenadeButton.classList.add('active');
        }

        const impactButton = document.querySelector('.filter-button[data-filter="type"][data-value="Impact"]');
        if (impactButton) {
            impactButton.classList.add('active');
        }

        const proxButton = document.querySelector('.filter-button[data-filter="type"][data-value="Proximity"]');
        if (proxButton) {
            proxButton.classList.add('active');
        }

        const remoteButton = document.querySelector('.filter-button[data-filter="type"][data-value="Remote"]');
        if (remoteButton) {
            remoteButton.classList.add('active');
        }

        const expButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Explosive"]');
        if (expButton) {
            expButton.classList.add('active');
        }

        const fragButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Fragmentation"]');
        if (fragButton) {
            fragButton.classList.add('active');
        }
    }

    if (objective === 'exfg') {
        const grenadeButton = document.querySelector('.filter-button[data-filter="type"][data-value="Grenade"]');
        if (grenadeButton) {
            grenadeButton.classList.add('active');
        }

        const fragButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Fragmentation"]');
        if (fragButton) {
            fragButton.classList.add('active');
        }
    }

    if (objective === 'exp') {
        const proxButton = document.querySelector('.filter-button[data-filter="type"][data-value="Proximity"]');
        if (proxButton) {
            proxButton.classList.add('active');
        }

        const expButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Explosive"]');
        if (expButton) {
            expButton.classList.add('active');
        }
    }

    if (objective === 'exr') {
        const remoteButton = document.querySelector('.filter-button[data-filter="type"][data-value="Remote"]');
        if (remoteButton) {
            remoteButton.classList.add('active');
        }

        const expButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Explosive"]');
        if (expButton) {
            expButton.classList.add('active');
        }
    }

    if (objective === 'fw') {
        const meleeButton = document.querySelector('.filter-button[data-filter="type"][data-value="Melee"]');
        if (meleeButton) {
            meleeButton.classList.add('active');
        }

        const fwButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Fiber Wire"]');
        if (fwButton) {
            fwButton.classList.add('active');
        }
    }

    if (objective === 'kk') {
        const meleeButton = document.querySelector('.filter-button[data-filter="type"][data-value="Melee"]');
        if (meleeButton) {
            meleeButton.classList.add('active');
        }

        const knifeButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Knife"]');
        if (knifeButton) {
            knifeButton.classList.add('active');
        }
    }

    if (objective === 'pgc') {
        const grenadeButton = document.querySelector('.filter-button[data-filter="type"][data-value="Grenade"]');
        if (grenadeButton) {
            grenadeButton.classList.add('active');
        }

        const impactButton = document.querySelector('.filter-button[data-filter="type"][data-value="Impact"]');
        if (impactButton) {
            impactButton.classList.add('active');
        }

        const proxButton = document.querySelector('.filter-button[data-filter="type"][data-value="Proximity"]');
        if (proxButton) {
            proxButton.classList.add('active');
        }

        const remoteButton = document.querySelector('.filter-button[data-filter="type"][data-value="Remote"]');
        if (remoteButton) {
            remoteButton.classList.add('active');
        }

        const connButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Concussion"]');
        if (connButton) {
            connButton.classList.add('active');
        }
    }

    if (objective === 'pgs') {
        const poisonButton = document.querySelector('.filter-button[data-filter="type"][data-value="Poison"]');
        if (poisonButton) {
            poisonButton.classList.add('active');
        }

        const syringeButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Syringe"]');
        if (syringeButton) {
            syringeButton.classList.add('active');
        }
    }

    if (objective === 'pk') {
        const poisonButton = document.querySelector('.filter-button[data-filter="type"][data-value="Poison"]');
        if (poisonButton) {
            poisonButton.classList.add('active');
        }

        const lethalButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Lethal"]');
        if (lethalButton) {
            lethalButton.classList.add('active');
        }
    }

    if (objective === 'ptdg') {
        const dartgunButton = document.querySelector('.filter-button[data-filter="type"][data-value="Dart Gun"]');
        if (dartgunButton) {
            dartgunButton.classList.add('active');
        }
    }

    if (objective === 'pte') {
        const poisonButton = document.querySelector('.filter-button[data-filter="type"][data-value="Poison"]');
        if (poisonButton) {
            poisonButton.classList.add('active');
        }

        const dartgunButton = document.querySelector('.filter-button[data-filter="type"][data-value="Dart Gun"]');
        if (dartgunButton) {
            dartgunButton.classList.add('active');
        }

        const emeticButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Emetic"]');
        if (emeticButton) {
            emeticButton.classList.add('active');
        }
    }

    if (objective === 'pts') {
        const poisonButton = document.querySelector('.filter-button[data-filter="type"][data-value="Poison"]');
        if (poisonButton) {
            poisonButton.classList.add('active');
        }

        const dartgunButton = document.querySelector('.filter-button[data-filter="type"][data-value="Dart Gun"]');
        if (dartgunButton) {
            dartgunButton.classList.add('active');
        }

        const sedativeButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Sedative"]');
        if (sedativeButton) {
            sedativeButton.classList.add('active');
        }
    }

    if (objective === 'sk') {
        const shButton = document.querySelector('.filter-button[data-filter="type"][data-value="Shotgun"]');
        if (shButton) {
            shButton.classList.add('active');
        }
    }

    if (objective === 'sifk') {
        const silenButton = document.querySelector('.filter-button[data-filter="silenced"][data-value="Silenced"]');
        if (silenButton) {
            silenButton.classList.add('active');
        }
    }

    if (objective === 'sipk') {
        const pistolButton = document.querySelector('.filter-button[data-filter="type"][data-value="Pistol"]');
        if (pistolButton) {
            pistolButton.classList.add('active');
        }

        const silenButton = document.querySelector('.filter-button[data-filter="silenced"][data-value="Silenced"]');
        if (silenButton) {
            silenButton.classList.add('active');
        }
    }

    if (objective === 'sisk') {
        const snButton = document.querySelector('.filter-button[data-filter="type"][data-value="Sniper Rifle"]');
        if (snButton) {
            snButton.classList.add('active');
        }

        const silenButton = document.querySelector('.filter-button[data-filter="silenced"][data-value="Silenced"]');
        if (silenButton) {
            silenButton.classList.add('active');
        }
    }

    if (objective === 'stt') {
        const meleeButton = document.querySelector('.filter-button[data-filter="type"][data-value="Melee"]');
        if (meleeButton) {
            meleeButton.classList.add('active');
        }

        const toolButton = document.querySelector('.filter-button[data-filter="type"][data-value="Tool"]');
        if (toolButton) {
            toolButton.classList.add('active');
        }

        const nlButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Non-Lethal"]');
        if (nlButton) {
            nlButton.classList.add('active');
        }

        const rareButton = document.querySelector('.filter-button[data-filter="rarity"][data-value="Rare"]');
        if (rareButton) {
            rareButton.classList.add('active');
        }

        const epicButton = document.querySelector('.filter-button[data-filter="rarity"][data-value="Epic"]');
        if (epicButton) {
            epicButton.classList.add('active');
        }

        const legButton = document.querySelector('.filter-button[data-filter="rarity"][data-value="Legendary"]');
        if (legButton) {
            legButton.classList.add('active');
        }
    }

    if (objective === 'snk') {
        const snButton = document.querySelector('.filter-button[data-filter="type"][data-value="Sniper Rifle"]');
        if (snButton) {
            snButton.classList.add('active');
        }
    }

    if (objective === 'smgk') {
        const smgButton = document.querySelector('.filter-button[data-filter="type"][data-value="SMG"]');
        if (smgButton) {
            smgButton.classList.add('active');
        }
    }

    if (objective === 'tk') {
        const trapButton = document.querySelector('.filter-button[data-filter="subtype"][data-value="Trap"]');
        if (trapButton) {
            trapButton.classList.add('active');
        }
    }

    filterTable();
}