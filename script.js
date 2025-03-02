document.getElementById("rollDice").addEventListener("click", async () => {
  const diceResult = document.getElementById("diceResult");
  diceResult.innerText = "Rolling... 🎲";

  try {
    let response = await fetch(
      "https://dice-roller-api1-d0f9hkhcfcabegek.uaenorth-01.azurewebsites.net/roll-dice"
    );
    let data = await response.json();
    diceResult.innerText = `🎲 You rolled: ${data.diceRoll}`;
  } catch (error) {
    diceResult.innerText = "❌ Error rolling dice!";
  }
});
