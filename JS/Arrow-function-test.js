// Luodaan nuolifunktio. Se käyttää parametrina 'nimi'.

let tervehdys = ( nimi ) => {
  alert(`Moikka ${nimi}`);
}

// Tehdään funktio joka kysyy käyttäjältä nimensa.

function syotteenLukeminen(takaisinkutsu) {
    let nimi = prompt('Kerro nimesi');
    takaisinkutsu(nimi);
}

/ Tulostetaan sen nimi ja tervehdys.

syotteenLukeminen(tervehdys);
