function createUserCard(card) {
  width:;
  return `
    <div id="card">
    <img src=${card.flags.png} alt=${card.name.common} >
    <p>Country:${card.name.common}</p>
      <p>capital:${card.capital}</p>
      
    </div>
  `;
}

const wrapper = document.querySelector("#wrapper");
const loader = document.querySelector("#loader");

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
    })

    .then((data) => {
      if (data.length) {
        data.forEach(function (user) {
          let card = createUserCard(user);
          wrapper.innerHTML += card;
          console.log(user.flag);
        });
      }
    })

    .catch((error) => {
      console.log(error);
    })

    .finally(function () {
      loader.remove();
    });
});
