let tervehdys = ( nimi ) => {
  alert(`Moikka ${nimi}`);
}

/**function tervehdys(nimi) => {
  alert('Moikka ${nimi}');
} **/

function syotteenLukeminen(takaisinkutsu) {
    let nimi = prompt('Kerro nimesi');
    takaisinkutsu(nimi);
}

syotteenLukeminen(tervehdys);