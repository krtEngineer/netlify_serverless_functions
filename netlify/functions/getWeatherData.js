import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const handler = async (event) => {
  try {
    const { city } = event.queryStringParameters;
    const baseUrl = process.env.WEATHER_API_BASE_URL;
    const appKey = process.env.WEATHER_API_KEY;
    const units = process.env.WEATHER_DATA_UNIT;
    const url = `${baseUrl}?q=${city}&appid=${appKey}&units=${units}`;
    let response = await axios.get(url);
    console.log(response.data);
    return {
      statusCode: 200,
      body: JSON.stringify({
        error: null,
        data: response.data,
      }),
    };
  } catch (error) {
    console.log(error.message);
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: error.message,
        data: null,
      }),
    };
  }
};
