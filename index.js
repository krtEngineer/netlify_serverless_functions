const GET = "GET";

const callApi = async (url, methodType) => {
  try {
    let response = await fetch(url, {
      method: methodType,
    });
    let data = await response.json();
    if (response.status === 200) {
      return { error: null, data: data };
    } else {
      throw Error("Error : " + data["message"]);
    }
  } catch (error) {
    console.log(error.message);
    return { error: error.message, data: null };
  }
};

const showWeatherData = (response) => {
  cityName.innerText = response["name"];
  cityTemp.innerText = `${response["main"]["temp"]}°C`;
};

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature");
const button = document.querySelector("#btn")

const getData = async (city) => {
  let netlifyFunctionURL = `/.netlify/functions-internal/getWeatherData?city=${city}`;
  try {
    const response = await fetch(netlifyFunctionURL, {
      method: GET,
    });
    const data = await response.json();
    showWeatherData(data);
  } catch (error) {
    alert(error);
  }
};

button.addEventListener("submit", async (event) => {
  event.preventDefault();
  getData("Pune");
});
