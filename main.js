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
  createCard("20/11", "domingo", 
  createGame("qatar", "0 x 2", "ecuador")) +
  
  createCard(
    "21/11",
    "segunda",
    createGame("england", "6 x 2", "iran") +
      createGame("senegal", "0 x 2", "netherlands") +
      createGame("united states", "1 x 1", "wales")
  ) +
  
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "1 x 2", "saudi arabia") +
      createGame("denmark", "0 x 0", "tunisia") +
      createGame("mexico", "0 x 0", "poland") +
      createGame("france", "4 x 1", "australia")
  ) +

  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "0 x 0", "croatia") +
      createGame("germany", "1 x 2", "japan") +
      createGame("spain", "7 x 0", "costa rica") +
      createGame("belgium", "1 x 0", "canada")
  ) +

  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "1 x 0", "cameroon") +
      createGame("uruguay", "0 x 0", "south korea") +
      createGame("portugal", "3 x 2", "ghana") +
      createGame("brazil", "2 x 0", "serbia")
  ) +

  createCard(
    "25/11",
    "sexta",
    createGame("wales", "0 x 2", "iran") +
      createGame("qatar", "1 x 3", "senegal") +
      createGame("netherlands", "1 x 1", "ecuador") +
      createGame("england", "0 x 0", "united states")
  ) +

  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "0 x 1", "australia") +
      createGame("poland", "2 x 0", "saudi arabia") +
      createGame("france", "2 x 1", "denmark") +
      createGame("argentina", "2 x 0", "mexico")
  ) +

  createCard(
    "27/11",
    "domingo",
    createGame("japan", "0 x 1", "costa rica") +
      createGame("belgium", "0 x 2", "morocco") +
      createGame("croatia", "4 x 1", "canada") +
      createGame("spain", "1 x 1", "germany")
  ) +

  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "3 x 3", "serbia") +
      createGame("south korea", "2 x 3", "ghana") +
      createGame("brazil", "1 x 0", "switzerland") +
      createGame("portugal", "2 x 0", "uruguay")
  ) +

  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "1 x 2", "senegal") +
      createGame("netherlands", "2 x 0", "qatar") +
      createGame("iran", "0 x 1", "united states") +
      createGame("wales", "0 x 3", "england")
  ) +

  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "1 x 0", "france") +
      createGame("australia", "1 x 0", "denmark") +
      createGame("poland", "0 x 2", "argentina") +
      createGame("saudi arabia", "1 x 2", "mexico")
  ) +

  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "0 x 0", "belgium") +
      createGame("canada", "1 x 2", "morocco") +
      createGame("japan", "2 x 1", "spain") +
      createGame("costa rica", "2 x 4", "germany")
  ) +

  createCard(
    "02/12",
    "sexta",
    createGame("south korea", "2 x 1", "portugal") +
      createGame("ghana", "0 x 2", "uruguay") +
      createGame("serbia", "2 x 3", "switzerland") +
      createGame("cameroon", "1 x 0", "brazil")
  ) +

  createCard(
    "03/12",
    "sábado - (Oitavas)",
    createGame("netherlands", "3 x 1", "united states") +
      createGame("argentina", "2 x 1", "australia")
  ) +

  createCard(
    "04/12",
    "domingo - (Oitavas)",
    createGame("france", "3 x 1", "poland") +
      createGame("england", "3 x 0", "senegal")
  ) +

  createCard(
    "05/12",
    "segunda - (Oitavas)",
    createGame("japan", "(1)1x1(3)", "croatia") +
      createGame("brazil", "4 x 1", "south korea")
  ) +

  createCard(
    "06/12",
    "terça - (Oitavas)",
    createGame("morocco", "(3)0x0(0)", "spain") +
      createGame("portugal", "6 x 1", "switzerland")
  ) +

  createCard(
    "09/12",
    "sexta - (Quartas)",
    createGame("croatia", "(4)1x1(2)", "brazil") +
      createGame("netherlands", "(3)2x2(4)", "argentina")
  ) +

  createCard(
    "10/12",
    "sábado - (Quartas)",
    createGame("morocco", "1 x 0", "portugal") +
      createGame("england", "1 x 2", "france")
  ) +

  createCard(
    "13/12",
    "terça - (Semifinais)",
      createGame("argentina", "3 x 0", "croatia")
  ) +

  createCard(
    "14/12",
    "quarta - (Semifinais)",
      createGame("france", "2 x 0", "morocco")
  ) +

  createCard(
    "17/12",
    "sábado - (3º Lugar)",
      createGame("croatia", "2 x 1", "morocco")
  ) +

  createCard(
    "18/12",
    "domingo - (Final)",
      createGame("argentina", "3 x 2", "france")
  ) +

  createCard(
    ">",
    "Campeão da copa do mundo",
      createGame("fifa", "Argentina", "argentina")
  )

  