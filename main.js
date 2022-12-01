function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("<strike>20/11</strike>", "<strike>domingo</strike>", 
  createGame("qatar", "<strike>13:00</strike>", "ecuador")) +
  
  createCard(
    "<strike>21/11</strike>",
    "<strike>segunda</strike>",
    createGame("england", "<strike>10:00</strike>", "iran") +
      createGame("senegal", "<strike>13:00</strike>", "netherlands") +
      createGame("united states", "<strike>16:00</strike>", "wales")
  ) +
  
  createCard(
    "<strike>22/11</strike>",
    "<strike>terça</strike>",
    createGame("argentina", "<strike>07:00</strike>", "saudi arabia") +
      createGame("denmark", "<strike>10:00</strike>", "tunisia") +
      createGame("mexico", "<strike>13:00</strike>", "poland") +
      createGame("france", "<strike>16:00</strike>", "australia")
  ) +

  createCard(
    "<strike>23/11</strike>",
    "<strike>quarta</strike>",
    createGame("morocco", "<strike>07:00</strike>", "croatia") +
      createGame("germany", "<strike>10:00</strike>", "japan") +
      createGame("spain", "<strike>13:00</strike>", "costa rica") +
      createGame("belgium", "<strike>16:00</strike>", "canada")
  ) +

  createCard(
    "<strike>24/11</strike>",
    "<strike>quinta</strike>",
    createGame("switzerland", "<strike>07:00</strike>", "cameroon") +
      createGame("uruguay", "<strike>10:00</strike>", "south korea") +
      createGame("portugal", "<strike>13:00</strike>", "ghana") +
      createGame("brazil", "<strike>16:00</strike>", "serbia")
  ) +

  createCard(
    "<strike>25/11</strike>",
    "<strike>sexta</strike>",
    createGame("wales", "<strike>07:00</strike>", "iran") +
      createGame("qatar", "<strike>10:00</strike>", "senegal") +
      createGame("netherlands", "<strike>13:00</strike>", "ecuador") +
      createGame("england", "<strike>16:00</strike>", "united states")
  ) +

  createCard(
    "<strike>26/11</strike>",
    "<strike>sábado</strike>",
    createGame("tunisia", "<strike>07:00</strike>", "australia") +
      createGame("poland", "<strike>10:00</strike>", "saudi arabia") +
      createGame("france", "<strike>13:00</strike>", "denmark") +
      createGame("argentina", "<strike>16:00</strike>", "mexico")
  ) +

  createCard(
    "<strike>27/11</strike>",
    "<strike>domingo</strike>",
    createGame("japan", "<strike>07:00</strike>", "costa rica") +
      createGame("belgium", "<strike>10:00</strike>", "morocco") +
      createGame("croatia", "<strike>13:00</strike>", "canada") +
      createGame("spain", "<strike>16:00</strike>", "germany")
  ) +

  createCard(
    "<strike>28/11</strike>",
    "<strike>segunda</strike>",
    createGame("cameroon", "<strike>07:00</strike>", "serbia") +
      createGame("south korea", "<strike>10:00</strike>", "ghana") +
      createGame("brazil", "<strike>13:00</strike>", "switzerland") +
      createGame("portugal", "<strike>16:00</strike>", "uruguay")
  ) +

  createCard(
    "<strike>29/11</strike>",
    "<strike>terça</strike>",
    createGame("ecuador", "<strike>12:00</strike>", "senegal") +
      createGame("netherlands", "<strike>12:00</strike>", "qatar") +
      createGame("iran", "<strike>16:00</strike>", "united states") +
      createGame("wales", "<strike>16:00</strike>", "england")
  ) +

  createCard(
    "<strike>30/11</strike>",
    "<strike>quarta</strike>",
    createGame("tunisia", "<strike>12:00</strike>", "france") +
      createGame("australia", "<strike>12:00</strike>", "denmark") +
      createGame("poland", "<strike>16:00</strike>", "argentina") +
      createGame("saudi arabia", "<strike>16:00</strike>", "mexico")
  ) +

  createCard(
    "<strike>01/11</strike>",
    "<strike>quinta</strike>",
    createGame("croatia", "<strike>12:00</strike>", "belgium") +
      createGame("canada", "<strike>12:00</strike>", "morocco") +
      createGame("japan", "<strike>16:00</strike>", "spain") +
      createGame("costa rica", "<strike>16:00</strike>", "germany")
  ) +

  createCard(
    "02/11",
    "sexta",
    createGame("south korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  ) +

  createCard(
    "03/11",
    "sábado",
    createGame("netherlands", "12:00", "united states") +
      createGame("argentina", "16:00", "australia")
  ) +

  createCard(
    "04/11",
    "domingo",
    createGame("france", "12:00", "poland") +
      createGame("england", "16:00", "senegal")
  ) +

  createCard(
    "05/11",
    "segunda",
    createGame("japan", "12:00", "croatia") +
      createGame("brazil", "16:00", "ghana")
  ) +

  createCard(
    "06/11",
    "terça",
    createGame("morocco", "12:00", "spain") +
      createGame("portugal", "16:00", "switzerland")
  ) +

  createCard(
    "09/11",
    "sexta",
    createGame("brazil", "12:00", "brazil") +
      createGame("brazil", "16:00", "brazil")
  ) +

  createCard(
    "10/11",
    "sábado",
    createGame("brazil", "12:00", "brazil") +
      createGame("brazil", "16:00", "brazil")
  ) +

  createCard(
    "13/11",
    "terça",
      createGame("brazil", "16:00", "brazil")
  ) +

  createCard(
    "14/11",
    "quarta",
      createGame("brazil", "16:00", "brazil")
  ) +

  createCard(
    "17/11",
    "sábado",
      createGame("brazil", "12:00", "brazil")
  ) +

  createCard(
    "18/11",
    "domingo",
      createGame("brazil", "12:00", "brazil")
  )

  