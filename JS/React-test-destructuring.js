// Luodaan funktio joka destrukturoi olion.

function getUserFirstName({ firstName }) {
  return firstName;
}

// Sitten luodaan olio, missä on henkilön tiedot.

const user = {
  firstName: "Tahvo",
  lastName: "Marjalainen",
  password: "957494",
};

// Tulostetaan haettu olion osa konsoliin. 

console.log(getUserFirstName(user));
// Output: 'John'