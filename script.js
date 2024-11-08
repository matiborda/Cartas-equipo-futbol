const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      number: 1,
      isCaptain: false,
      nickname: null,
      image: "images/sergio-almiron.jpeg"
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
      image: "images/sergio-batista.jpeg"
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
      image: "images/ricardo-bochini.jpeg"
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      number: 4,
      isCaptain: false,
      nickname: "Bichi",
      image: "images/claudio-borghi.jpeg"
    },
    {
      name: "José Luis Brown",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
      image: "images/jose-luis-brown.jpg"
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
      image: "images/daniel-passarella.jpeg"
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "Burru",
      image: "images/jorge-burruchaga.jpg"
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      number: 8,
      isCaptain: false,
      nickname: null,
      image: "images/nestor.jpg"
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      number: 9,
      isCaptain: false,
      nickname: "El Cuchu",
      image: "images/José-Luis-Cuciuffo.jpg"
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      number: 10,
      isCaptain: true,
      nickname: "El Pibe de Oro",
      image: "images/diego-maradona.jpg"
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "The Philosopher of Football",
      image: "images/jorge-valdano.jpg"
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: null,
      image: "images/hector-enrique.jpeg"
    },
    {
      name: "Oscar Garré",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
      image: "images/Oscar-Garré.jpg"
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
      image: "images/ricardo-giusti.jpg"
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      number: 15,
      isCaptain: false,
      nickname: "El loco",
      image: "images/luis-islas.jpg"
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
      image: "images/julio.jpeg"
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
      image: "images/pedro-pasculli.jpg"
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      number: 18,
      isCaptain: false,
      nickname: null,
      image: "images/nery-pumpido.jpg"
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "El Cabezón",
      image: "images/Oscar.jpeg"
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: null,
      image: "images/carlos-tapia.jpg"
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
      image: "images/marcelo.jpeg"
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
      image: "images/hector.jpeg"
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);

const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

// Set player cards when the page loads
const setPlayerCards = (arr = players) => {
  playerCards.innerHTML = arr
    .map(
      ({ name, position, number, isCaptain, nickname, image }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
          <img src="${image}" alt="${name}" class="player-image">
        </div>
      `;
      }
    )
    .join("");
};

// Initialize player cards on page load
setPlayerCards();

// Filter player cards based on the selection
playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(players.filter((player) => player.position === "midfielder"));
      break;
    case "defender":
      setPlayerCards(players.filter((player) => player.position === "defender"));
      break;
    case "goalkeeper":
      setPlayerCards(players.filter((player) => player.position === "goalkeeper"));
      break;
    default:
      setPlayerCards();
      break;
  }
});

// Add image hover effect
const playerImages = document.querySelectorAll(".player-image");
playerImages.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.classList.add("hovered");
  });

  img.addEventListener("mouseleave", () => {
    img.classList.remove("hovered");
  });
});

// Add fade-in animation for player cards
const fadeInCards = () => {
  const cards = document.querySelectorAll(".player-card");
  cards.forEach((card, index) => {
    card.style.animation = `fadeIn 1s ease ${index * 0.1}s forwards`;
  });
};
fadeInCards();

