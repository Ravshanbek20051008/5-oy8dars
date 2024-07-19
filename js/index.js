function createUserCard(card) {
  return `
    <div id="card">
      <p>Country:${card.country}</p>
      <p>Code:${card.code}</p>
      <p>ID:${card.id}</p>
    </div>
  `;
}

const wrapper = document.querySelector("#wrapper");
const loader = document.querySelector("#loader");

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://cars-pagination.onrender.com/all-countries/")
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
