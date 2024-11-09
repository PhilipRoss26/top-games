const games = [
  {
    name: "The Legend of Zelda: Link's Awakening HD",
    dev: "Nintendo",
    genre: "Adventure",
    whyFav: "Great story and captivating gameplay",
    img: "link.jpg"
  },
  {
    name: "Donkey Kong Country",
    dev: "Rare Ware",
    genre: "Platformer",
    whyFav: "Nostalgic and challenging levels",
    img: "kong.jpg"
  },
  {
    name: "Kirby Air Ride",
    dev: "HAL Laboratory",
    genre: "Racing",
    whyFav: "Unique mechanics and fun multiplayer",
    img: "kirb.jpg"
  },
  {
    name: "Mario Kart DS",
    dev: "Nintendo",
    genre: "Racing",
    whyFav: "Classic Mario Kart fun on the go",
    img: "kart.jpg"
  },
  {
    name: "Pokemon Emerald Version",
    dev: "Game Freak",
    genre: "Role-playing",
    whyFav: "One of the best storylines in the series",
    img: "emerald.jpg"
  }
];

const setUpGameCards = () => {
  const wrapper = $(".wrapper");
  games.forEach((game, index) => {
    const cardMarkup = `
      <div class="card" data-index="${index}">
        <img src="${game.img}" alt="${game.name}" />
        <p class="name">${game.name}</p>
        <p class="info">Developer: ${game.dev}</p>
      </div>`;
    wrapper.append(cardMarkup);
  });
};

const handleHover = (event) => {
  const index = $(event.currentTarget).data("index");
  $(event.currentTarget).find(".info").text(`Genre: ${games[index].genre}`);
};

const handleMouseOut = (event) => {
  const index = $(event.currentTarget).data("index");
  $(event.currentTarget).find(".info").text(`Developer: ${games[index].dev}`);
};

const handleClick = (event) => {
  const index = $(event.currentTarget).data("index");
  $(event.currentTarget).find(".info").text(`Why It's a Favorite: ${games[index].whyFav}`);
};

$(document).ready(() => {
  setUpGameCards();
  $(".wrapper").on("mouseover", ".card", handleHover)
               .on("mouseout", ".card", handleMouseOut)
               .on("click", ".card", handleClick);
});
