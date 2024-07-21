const button = document.querySelector("#btn");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature");

button.addEventListener("click", async () => {
  city = "Pune"
  const response = await fetch(`/.netlify/functions/getWeatherData?city=${city}`)
  const data = await response.json()
  cityElement.innerText = data["data"]["name"];
  tempElement.innerText = `${data["data"]["main"]["temp"]}°C`;
});
