// import {
//     BASE_OPEN_WEATHER_URL,
//     OPEN_WEATHER_API_KEY,
//   } from '../../config/main.const';
  
  const restServiceApi = {
    getStates: async () => {
      try {
        const url: string = `http://pos.idtretailsolutions.com/countytest/states`;
        let response = await fetch(url);
        return await response.json();
      } catch (e) {
        console.error(e);
      }
    },
    getState: async(nameOfState: string) =>{
        try {
            const url: string = `http://pos.idtretailsolutions.com/countytest/states/${nameOfState}`;
            let response = await fetch(url);
            return await response.json();
          } catch (e) {
            console.error(e);
          }
    }
  };
  
  export default restServiceApi;