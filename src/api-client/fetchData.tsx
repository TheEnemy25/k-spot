import Axios from "axios";
import APIRoutes from "./api/APIRoutes";

async function fetchData() {
  try {
    const pingUrl = APIRoutes.PingUrl();
    const cinemaTheaterUrl = APIRoutes.CinemaTheaterUrl();
    const testPingUrl = APIRoutes.TestPingUrl();

    const pingResponse = await Axios.get(pingUrl);
    console.log("Ping Response:", pingResponse.data);

    const cinemaTheaterResponse = await Axios.get(cinemaTheaterUrl);
    console.log("CinemaTheater Response:", cinemaTheaterResponse.data);

    const testPingResponse = await Axios.get(testPingUrl);
    console.log("Test Ping Response:", testPingResponse.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default fetchData;